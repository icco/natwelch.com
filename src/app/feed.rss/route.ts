import { unstable_cache } from "next/cache"
import { Feed } from "feed"

import { fetchFeed } from "@/lib/rss"

export const revalidate = 60

const FEEDS = [
  "https://writing.natwelch.com/feed.rss",
  "https://merveilles.town/@icco.rss",
  "https://pixelfed.social/users/icco.atom",
  "https://letterboxd.com/icco/rss/",
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCh4CJdC3mXyimvshLxNuFDg",
  "https://bsky.app/profile/did:plc:ehpputef3zvp2z5wrgwyl37u/rss",
  "https://rss.app/feeds/QjpTuzy5bMYp7eEt.xml", // Instagram
  "https://www.goodreads.com/user/updates_rss/12680?v=as",
]

// Cache each feed individually for 1 hour
const getCachedFeed = (url: string) =>
  unstable_cache(
    async () => {
      return fetchFeed(url)
    },
    [`rss-feed-${url}`],
    {
      revalidate: 3600,
      tags: [`rss-feed-${url}`],
    }
  )

// Get all cached feeds
const getAllCachedFeeds = async () => {
  const feedPromises = FEEDS.map((url) => getCachedFeed(url)())
  return (await Promise.all(feedPromises)).flat()
}

export async function GET() {
  const feed = new Feed({
    title: "Nat Welch's Combined Feed",
    description:
      "A combined feed of Nat Welch's content from around the internet.",
    id: "https://natwelch.com",
    link: "https://natwelch.com",
    favicon: "https://writing.natwelch.com/favicon.ico",
    language: "en",
    author: {
      name: "Nat Welch",
      email: "nat@natwelch.com",
      link: "https://natwelch.com",
    },
    copyright: `All rights reserved ${new Date().getFullYear()} Nat Welch`,
  })

  const allItems = await getAllCachedFeeds()

  // Sort items by date and add to feed
  allItems
    .sort((a, b) => {
      const aDate = a.published ?? a.updated ?? null
      const bDate = b.published ?? b.updated ?? null

      if (!aDate || !bDate) {
        return 0
      }

      return aDate > bDate ? -1 : 1
    })
    .forEach((item) => {
      const title = item.title || ""
      const description = item.content || item.description || ""
      const url = item.url || ""
      const guid = item.id || url
      const categories = item.categories.map((c) => c.label || "").filter((c) => !!c) || []
      const creator = item.authors.map((a) => a.name).filter((c) => !!c).join(", ") || "Nat Welch"
      let date = new Date()
      if (item.published) {
        date = new Date(item.published)
      }
      if (item.updated) {
        date = new Date(item.updated)
      }

      feed.addItem({
        id: guid,
        title,
        link: url,
        date,
        category: categories.map((c) => ({ name: c, term: c })),
        author: [
          {
            name: creator,
            email: "nat@natwelch.com",
            link: "https://natwelch.com",
          },
        ],
        description,
        content: description,
      })

    })

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
    status: 200,
  })
}
