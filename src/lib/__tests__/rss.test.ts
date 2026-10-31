import type { FeedItem } from "@rowanmanning/feed-parser/lib/feed/item/base"
import { describe, expect, it } from "vitest"

import { itemBody, itemSummary, itemTitle } from "../rss"

describe("RSS feed item helpers", () => {
  it("handles item with standard content (writing.natwelch.com)", () => {
    const item = {
      id: "https://writing.natwelch.com/post/778",
      title: "Big Changes",
      description:
        "Nat is moving back to the UK. Mel is starting her PhD at Cambridge...",
      url: "https://writing.natwelch.com/post/778",
      published: "2026-10-30T10:42:34.000Z",
      content: "<p>So, we’ve moved back.</p>",
      image: null,
      media: [],
      authors: [],
      categories: [],
    } as unknown as FeedItem

    expect(itemTitle(item)).toBe("Big Changes")
    expect(itemSummary(item)).toBe(
      "Nat is moving back to the UK. Mel is starting her PhD at Cambridge..."
    )
    expect(itemBody(item)).toBe("<p>So, we’ve moved back.</p>")
  })

  it("handles Mastodon RSS items (missing title and content, description-only)", () => {
    const item = {
      id: "https://merveilles.town/@icco/117532354694108057",
      title: null,
      description:
        '<p>For those who didn\'t know, I live in Cambridge now.</p><p><a href="https://writing.natwelch.com/post/778">writing.natwelch.com/post/778</a></p>',
      url: "https://merveilles.town/@icco/117532354694108057",
      published: "2026-10-30T23:03:28.000Z",
      content: null,
      image: null,
      media: [],
      authors: [],
      categories: [],
    } as unknown as FeedItem

    expect(itemTitle(item)).toBe(
      "For those who didn't know, I live in Cambridge now. writing.natwelch.com/post/7…"
    )
    expect(itemSummary(item)).toBe(
      "For those who didn't know, I live in Cambridge now. writing.natwelch.com/post/778"
    )
    expect(itemBody(item)).toBe(item.description)
  })

  it("handles Pixelfed ATOM items (description + media gallery)", () => {
    const item = {
      id: "https://pixelfed.social/p/icco/830248027908978463",
      title: "Bench my mom saw while hiking. #nature",
      description:
        'Bench my mom saw while hiking. <a href="https://pixelfed.social/discover/tags/nature?src=hash">#nature</a>',
      url: "https://pixelfed.social/p/icco/830248027908978463",
      published: null,
      updated: "2025-05-20T01:09:15.000Z",
      content:
        '<div class="media-gallery">\n                                                    <img class="media-item" src="https://pxscdn.com/public/m/_v2/785352327677356228/208209554-471e9e/TB3cHe9LrfKN/Me3knPMXYVwrfrzcJeHBMulQ0uRi1T4AyM1X2Otk.webp" alt="">\n                                            </div>',
      image: {
        url: "https://pxscdn.com/public/m/_v2/785352327677356228/208209554-471e9e/TB3cHe9LrfKN/Me3knPMXYVwrfrzcJeHBMulQ0uRi1T4AyM1X2Otk.webp",
        title: null,
      },
      media: [
        {
          url: "https://pxscdn.com/public/m/_v2/785352327677356228/208209554-471e9e/TB3cHe9LrfKN/Me3knPMXYVwrfrzcJeHBMulQ0uRi1T4AyM1X2Otk.webp",
          image:
            "https://pxscdn.com/public/m/_v2/785352327677356228/208209554-471e9e/TB3cHe9LrfKN/Me3knPMXYVwrfrzcJeHBMulQ0uRi1T4AyM1X2Otk.webp",
          title: null,
          length: null,
          type: "image",
          mimeType: "image/webp",
        },
      ],
      authors: [],
      categories: [],
    } as unknown as FeedItem

    expect(itemTitle(item)).toBe("Bench my mom saw while hiking. #nature")
    expect(itemSummary(item)).toContain(
      "Bench my mom saw while hiking. #nature"
    )
    expect(itemBody(item)).not.toContain(
      "<p><a href=.*><img src=.*></a></p>\n<div"
    )
  })

  it("handles Letterboxd RSS items (description with poster image)", () => {
    const item = {
      id: "letterboxd-review-1533896732",
      title: "Spider-Man: Brand New Day, 2026 - ★★★★★",
      description:
        '<p><img src="https://a.ltrbxd.com/resized/film-poster/8/7/2/8/7/1/872871-spider-man-brand-new-day-0-600-0-900-crop.jpg?v=ebe6beb4fc"/></p> <p>This was wildly good.</p>',
      url: "https://letterboxd.com/icco/film/spider-man-brand-new-day/",
      published: "2026-10-11T21:50:34.000Z",
      updated: "2026-10-11T21:50:34.000Z",
      content: null,
      image: null,
      media: [],
      authors: [],
      categories: [],
    } as unknown as FeedItem

    expect(itemTitle(item)).toBe("Spider-Man: Brand New Day, 2026 - ★★★★★")
    expect(itemSummary(item)).toContain("This was wildly good.")
    expect(itemBody(item)).toContain("872871-spider-man-brand-new-day")
  })

  it("handles YouTube RSS items (missing text, image/media provided)", () => {
    const item = {
      id: "yt:video:yV7ITqJPL7U",
      title: "2025 09 13 20 22 07",
      description: null,
      content: null,
      url: "https://www.youtube.com/watch?v=yV7ITqJPL7U",
      image: {
        url: "https://i2.ytimg.com/vi/yV7ITqJPL7U/hqdefault.jpg",
        title: "2025 09 13 20 22 07",
      },
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

    expect(itemTitle(item)).toBe("2025 09 13 20 22 07")
    expect(itemSummary(item)).toBe("")
    expect(itemBody(item)).toContain(
      "https://i2.ytimg.com/vi/yV7ITqJPL7U/hqdefault.jpg"
    )
  })

  it("handles Bluesky RSS items (description-only post with links)", () => {
    const item = {
      id: "at://did:plc:ehpputef3zvp2z5wrgwyl37u/app.bsky.feed.post/3lrb62blvsc26",
      title: null,
      description:
        "I started at this company 1,674 days ago. It's been a wild ride...\n\nhttps://fortune.com/\n\nlaurel.ai/careers",
      url: "https://bsky.app/profile/icco.bsky.social/post/3lrb62blvsc26",
      published: "2025-06-10T15:03:00.000Z",
      content: null,
      image: null,
      media: [],
      authors: [],
      categories: [],
    } as unknown as FeedItem

    expect(itemTitle(item)).toContain("I started at this company")
    expect(itemSummary(item)).toContain("I started at this company")
    expect(itemBody(item)).toBe(item.description)
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
