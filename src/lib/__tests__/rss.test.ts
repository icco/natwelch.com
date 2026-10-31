import type { FeedItem } from "@rowanmanning/feed-parser/lib/feed/item/base"
import { describe, expect, it } from "vitest"

import { itemBody, itemSummary, itemTitle } from "../rss"

describe("RSS feed item helpers", () => {
  it("handles item with standard content", () => {
    const item = {
      title: "Hello World",
      description: "A short description",
      content: "<p>Hello world content</p>",
      url: "https://example.com/post",
      authors: [],
      categories: [],
    } as unknown as FeedItem

    expect(itemTitle(item)).toBe("Hello World")
    expect(itemSummary(item)).toBe("A short description")
    expect(itemBody(item)).toBe("<p>Hello world content</p>")
  })

  it("handles item with missing content, falling back to description and media", () => {
    const item = {
      title: "",
      description: "<p>For those who didn't know, I live in Cambridge now.</p>",
      content: null,
      url: "https://merveilles.town/@icco/123",
      image: { url: "https://pxscdn.com/image.webp" },
      media: [],
      authors: [],
      categories: [],
    } as unknown as FeedItem

    expect(itemTitle(item)).toBe(
      "For those who didn't know, I live in Cambridge now."
    )
    expect(itemSummary(item)).toBe(
      "For those who didn't know, I live in Cambridge now."
    )
    expect(itemBody(item)).toContain('<img src="https://pxscdn.com/image.webp"')
    expect(itemBody(item)).toContain(
      "<p>For those who didn't know, I live in Cambridge now.</p>"
    )
  })

  it("handles item with media and missing description/content (e.g. YouTube)", () => {
    const item = {
      title: "2025 09 13 video",
      description: null,
      content: null,
      url: "https://www.youtube.com/watch?v=yV7ITqJPL7U",
      image: { url: "https://i2.ytimg.com/vi/yV7ITqJPL7U/hqdefault.jpg" },
      media: [
        {
          url: "https://www.youtube.com/v/yV7ITqJPL7U?version=3",
          image: "https://i2.ytimg.com/vi/yV7ITqJPL7U/hqdefault.jpg",
          type: "application",
        },
      ],
      authors: [],
      categories: [],
    } as unknown as FeedItem

    expect(itemTitle(item)).toBe("2025 09 13 video")
    expect(itemSummary(item)).toBe("")
    expect(itemBody(item)).toContain(
      "https://i2.ytimg.com/vi/yV7ITqJPL7U/hqdefault.jpg"
    )
  })

  it("prevents double escaping in HTML attributes", () => {
    const item = {
      title: "Test &amp; check",
      description: "Description with &amp; entity & <tag>",
      content: null,
      url: "https://example.com?foo=bar&baz=qux",
      image: { url: "https://example.com/img.jpg?a=1&b=2" },
      media: [],
      authors: [],
      categories: [],
    } as unknown as FeedItem

    const body = itemBody(item)
    expect(body).toContain("https://example.com/img.jpg?a=1&amp;b=2")
    expect(body).not.toContain("&amp;amp;")
  })
})
