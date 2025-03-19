import { unstable_cache } from "next/cache"
import RSS from "rss"
import Parser from "rss-parser"

// Cache the feed fetching for 1 hour
const getCachedFeeds = unstable_cache(
  async () => {
    const parser = new Parser()

    const FEEDS = [
      "https://writing.natwelch.com/feed.rss",
      "https://merveilles.town/@icco.rss",
      "https://pixelfed.social/users/icco.atom",
      "https://letterboxd.com/icco/rss/",
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCh4CJdC3mXyimvshLxNuFDg",
    ]
    const feedPromises = FEEDS.map(async (url) => {
      try {
        const feed = await parser.parseURL(url)
        return feed.items || []
      } catch (error) {
        console.error(`Error fetching feed ${url}:`, error)
        return []
      }
    })

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
      feed.item({
        title: item.title || "",
        description: item.content || item.contentSnippet || "",
        url: item.link || "",
        date: item.isoDate ? new Date(item.isoDate) : new Date(),
        guid: item.guid || item.link || "",
        categories: item.categories || [],
        custom_elements: [
          { "content:encoded": item.content || "" },
          { "dc:creator": item.creator || "Nat Welch" },
          { "dc:date": item.isoDate || new Date().toISOString() },
        ],
      })
    })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
