import Parser from "rss-parser"

export async function getLatestBlogPost(): Promise<Parser.Item | null> {
  const parser = new Parser()
  const feed = await parser.parseURL("https://writing.natwelch.com/feed.rss")

  if (!feed.items || feed.items.length === 0) {
    return null
  }

  const latest = feed.items.sort((a, b) => {
    if (!a.isoDate || !b.isoDate) {
      return 0
    }

    return a.isoDate > b.isoDate ? -1 : 1
  })[0]

  if (!latest) {
    return null
  }

  return latest
}
