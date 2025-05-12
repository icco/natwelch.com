import { parseFeed } from "@rowanmanning/feed-parser"
import { FeedItem } from "@rowanmanning/feed-parser/lib/feed/item/base"

export async function fetchFeed(url: string): Promise<FeedItem[]> {
  try {
    const response = await fetch(url)
    const feedText = await response.text()
    const feed = await parseFeed(feedText)
    const items = feed.items || []
    return items.slice(0, 25)
  } catch (error) {
    console.error(`Error fetching feed ${url}:`, error)
    return []
  }
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
