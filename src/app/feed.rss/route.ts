import { unstable_cache } from "next/cache"
import RSS from "rss"

import { fetchFeed } from "@/lib/rss"

const FEEDS = [
  "https://writing.natwelch.com/feed.rss",
  "https://merveilles.town/@icco.rss",
  "https://pixelfed.social/users/icco.atom",
  "https://letterboxd.com/icco/rss/",
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCh4CJdC3mXyimvshLxNuFDg",
]

// Cache the feed fetching for 1 hour
const getCachedFeeds = unstable_cache(
  async () => {
    const feedPromises = FEEDS.map((url) => fetchFeed(url))
    return (await Promise.all(feedPromises)).flat()
  },
  ["rss-feeds"],
  {
    revalidate: 3600,
    tags: ["rss-feeds"],
  }
)

export async function GET() {
  const feed = new RSS({
    title: "Nat Welch's Combined Feed",
    description:
      "A combined feed of Nat Welch's content from around the internet.",
    site_url: "https://natwelch.com",
    feed_url: "https://natwelch.com/feed.rss",
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()} Nat Welch`,
  })

  const allItems = await getCachedFeeds()

  // Sort items by date and add to feed
  allItems
    .sort((a, b) => {
      const dateA = a.isoDate ? new Date(a.isoDate) : new Date(0)
      const dateB = b.isoDate ? new Date(b.isoDate) : new Date(0)
      return dateB.getTime() - dateA.getTime()
    })
    .forEach((item) => {
      const title = item.title || ""
      const description = item.content || item.contentSnippet || ""
      const url = item.link || ""
      const guid = item.guid || url
      const categories = item.categories || []
      const creator = item.creator || "Nat Welch"
      let date = new Date()
      if (item.isoDate) {
        date = new Date(item.isoDate)
      }
      if (item.pubDate) {
        date = new Date(item.pubDate)
      }

      const feedItem: RSS.ItemOptions = {
        title,
        description,
        url,
        date,
        guid,
        categories,
        custom_elements: [{ "dc:creator": creator }],
      }
      feed.item(feedItem)
    })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
