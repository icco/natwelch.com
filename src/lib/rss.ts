import Parser from "rss-parser"

export function newParser(): Parser {
  return new Parser({
    customFields: {
      feed: ["language", "copyright"],
    },
  })
}

const parser = newParser()

export async function fetchFeed(url: string): Promise<Parser.Item[]> {
  try {
    const feed = await parser.parseURL(url)
    const items = feed.items || []
    return items.slice(0, 25)
  } catch (error) {
    console.error(`Error fetching feed ${url}:`, error)
    return []
  }
}

export async function getLatestBlogPost(): Promise<Parser.Item | null> {
  const items = await fetchFeed("https://writing.natwelch.com/feed.rss")

  if (items.length === 0) {
    return null
  }

  const latest = items.sort((a, b) => {
    if (!a.isoDate || !b.isoDate) {
      return 0
    }

    return a.isoDate > b.isoDate ? -1 : 1
  })[0]

  return latest || null
}
