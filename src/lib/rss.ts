import { parseFeed } from "@rowanmanning/feed-parser"
import type { FeedItem } from "@rowanmanning/feed-parser/lib/feed/item/base"

export async function fetchFeed(url: string): Promise<FeedItem[]> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.warn(`Feed unavailable ${url}: HTTP ${response.status}`)
      return []
    }
    const feedText = await response.text()
    const feed = await parseFeed(feedText)
    const items = feed.items || []
    return items.slice(0, 25)
  } catch (error) {
    console.warn(`Feed unavailable ${url}:`, error)
    return []
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&(?!(amp|lt|gt|quot|#39);)/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function stripHtml(s: string): string {
  return s
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim()
}

// Many feeds (Mastodon, Bluesky, Letterboxd) only populate description, and
// some (YouTube) only provide an image. Build the richest body available.
export function itemBody(item: FeedItem): string {
  let body = item.content || item.description || ""

  const images = new Set<string>()
  if (item.image?.url) images.add(item.image.url)
  for (const m of item.media || []) {
    if (m.image) images.add(m.image)
    if (m.type === "image" && m.url) images.add(m.url)
  }

  // Extract all src attribute values from existing <img> tags in body
  const existingSrcs = new Set<string>()
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi
  let match
  while ((match = imgRegex.exec(body)) !== null) {
    existingSrcs.add(stripHtml(match[1]))
  }

  const missing = [...images].filter((src) => !existingSrcs.has(src))
  if (missing.length > 0) {
    const imgs = missing
      .map((src) => {
        const img = `<img src="${escapeHtml(src)}" alt="${escapeHtml(item.title || "")}" />`
        return item.url
          ? `<p><a href="${escapeHtml(item.url)}">${img}</a></p>`
          : `<p>${img}</p>`
      })
      .join("\n")
    body = body ? `${imgs}\n${body}` : imgs
  }

  if (!body && item.url) {
    body = `<p><a href="${escapeHtml(item.url)}">${escapeHtml(item.url)}</a></p>`
  }
  return body
}

export function itemSummary(item: FeedItem): string {
  return stripHtml(item.description || item.content || "")
}

export function itemTitle(item: FeedItem): string {
  if (item.title) return item.title
  const text = stripHtml(item.description || item.content || "")
  if (!text) return ""
  return text.length > 80 ? `${text.slice(0, 79).trimEnd()}…` : text
}

export async function getLatestBlogPost(): Promise<FeedItem | null> {
  const items = await fetchFeed("https://writing.natwelch.com/feed.rss")

  if (items.length === 0) {
    return null
  }

  const latest = items.sort((a, b) => {
    const aDate = a.published ?? a.updated ?? null
    const bDate = b.published ?? b.updated ?? null

    if (!aDate || !bDate) {
      return 0
    }

    return aDate > bDate ? -1 : 1
  })[0]

  return latest || null
}
