import { beforeEach, describe, expect, it, vi } from "vitest"

import type * as RSSModule from "@/lib/rss"
import { newParser } from "@/lib/rss"

import { GET } from "./route"

// Mock the next/cache module to handle errors
vi.mock("next/cache", () => ({
  unstable_cache:
    (fn: (...args: unknown[]) => Promise<unknown>) =>
    async (...args: unknown[]) => {
      try {
        return await fn(...args)
      } catch (error) {
        console.error("Cache error:", error)
        return []
      }
    },
}))

// Mock the RSS fetching module
vi.mock("@/lib/rss", async (importOriginal) => {
  const actual = (await importOriginal()) as typeof RSSModule
  return {
    ...actual,
    fetchFeed: vi.fn().mockImplementation(async () => []),
  }
})

describe("RSS Feed Route", () => {
  const parser = newParser()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should generate a valid RSS feed with mock data", async () => {
    // Mock feed data
    const mockFeedItems = [
      {
        title: "Test Post 1",
        content: "Test content 1",
        link: "https://example.com/post1",
        guid: "post1",
        categories: ["test"],
        creator: "Nat Welch",
        isoDate: "2024-03-20T10:00:00Z",
      },
      {
        title: "Test Post 2",
        content: "Test content 2",
        link: "https://example.com/post2",
        guid: "post2",
        categories: ["test"],
        creator: "Nat Welch",
        isoDate: "2024-03-19T10:00:00Z",
      },
    ]

    // Mock the fetchFeed function to return our test data
    const { fetchFeed } = await import("@/lib/rss")
    vi.mocked(fetchFeed).mockResolvedValueOnce(mockFeedItems)

    // Get the feed response
    const response = await GET()
    const xml = await response.text()

    // Verify response headers
    expect(response.headers.get("Content-Type")).toBe(
      "application/xml; charset=utf-8"
    )

    // Parse and verify the feed structure
    const feed = await parser.parseString(xml)

    // Verify feed metadata
    expect(feed.title).toBe("Nat Welch's Combined Feed")
    expect(feed.description).toBe(
      "A combined feed of Nat Welch's content from around the internet."
    )
    expect(feed.link).toBe("https://natwelch.com")
    expect(feed.language).toBe("en")
    expect(feed.copyright).toContain("All rights reserved")
    expect(feed.copyright).toContain("Nat Welch")

    // Verify feed items
    expect(feed.items).toHaveLength(2)

    const firstItem = feed.items[0]
    expect(firstItem.title).toBe("Test Post 1")
    expect(firstItem.content).toBe("Test content 1")
    expect(firstItem.link).toBe("https://example.com/post1")
    expect(firstItem.guid).toBe("post1")
    expect(firstItem.categories).toEqual(["test"])
    expect(firstItem.creator).toBe("Nat Welch")
    expect(new Date(firstItem.isoDate!).toISOString()).toBe(
      "2024-03-20T10:00:00.000Z"
    )

    const secondItem = feed.items[1]
    expect(secondItem.title).toBe("Test Post 2")
    expect(secondItem.content).toBe("Test content 2")
    expect(secondItem.link).toBe("https://example.com/post2")
    expect(secondItem.guid).toBe("post2")
    expect(secondItem.categories).toEqual(["test"])
    expect(secondItem.creator).toBe("Nat Welch")
    expect(new Date(secondItem.isoDate!).toISOString()).toBe(
      "2024-03-19T10:00:00.000Z"
    )
  })

  it("should handle empty feed data gracefully", async () => {
    // Get the feed response
    const response = await GET()
    const xml = await response.text()

    // Verify response headers
    expect(response.headers.get("Content-Type")).toBe(
      "application/xml; charset=utf-8"
    )

    // Parse and verify the feed structure
    const feed = await parser.parseString(xml)

    // Verify feed metadata is present but no items
    expect(feed.title).toBe("Nat Welch's Combined Feed")
    expect(feed.description).toBe(
      "A combined feed of Nat Welch's content from around the internet."
    )
    expect(feed.link).toBe("https://natwelch.com")
    expect(feed.items).toHaveLength(0)
  })

  it("should handle feed fetching errors gracefully", async () => {
    // Mock feed fetching error for one feed, others return empty arrays
    const { fetchFeed } = await import("@/lib/rss")
    const mockFn = vi.mocked(fetchFeed)

    // First feed will fail
    mockFn.mockRejectedValueOnce(new Error("Feed fetch failed"))
    // Other feeds will return empty arrays (default mock behavior)

    // Get the feed response
    const response = await GET()
    const xml = await response.text()

    // Verify response headers
    expect(response.headers.get("Content-Type")).toBe(
      "application/xml; charset=utf-8"
    )

    // Parse and verify the feed structure
    const feed = await parser.parseString(xml)

    // Verify feed metadata is present but no items
    expect(feed.title).toBe("Nat Welch's Combined Feed")
    expect(feed.description).toBe(
      "A combined feed of Nat Welch's content from around the internet."
    )
    expect(feed.link).toBe("https://natwelch.com")
    expect(feed.items).toHaveLength(0)
  })
})
