import { jest } from "@jest/globals"
import { MetadataRoute } from "next"

import { allPages } from "contentlayer/generated"

import sitemap from "./sitemap"

// Mock the contentlayer data
jest.mock("contentlayer/generated", () => ({
  allPages: [
    {
      title: "Test Page 1",
      flattenedPath: "test1",
    },
    {
      title: "Test Page 2",
      flattenedPath: "test2",
    },
  ],
}))

describe("Sitemap Generation", () => {
  it("should generate a valid sitemap with all routes", async () => {
    const sitemapData = await sitemap()

    // Check static routes
    expect(sitemapData).toContainEqual(
      expect.objectContaining({
        url: "https://natwelch.com",
        priority: 1,
        changeFrequency: "daily",
      })
    )
    expect(sitemapData).toContainEqual(
      expect.objectContaining({
        url: "https://natwelch.com/feed.rss",
        priority: 0.8,
        changeFrequency: "daily",
      })
    )
    expect(sitemapData).toContainEqual(
      expect.objectContaining({
        url: "https://natwelch.com/wiki",
        priority: 0.8,
        changeFrequency: "daily",
      })
    )

    // Check dynamic wiki routes
    expect(sitemapData).toContainEqual(
      expect.objectContaining({
        url: "https://natwelch.com/wiki/test1",
        priority: 0.7,
        changeFrequency: "weekly",
      })
    )
    expect(sitemapData).toContainEqual(
      expect.objectContaining({
        url: "https://natwelch.com/wiki/test2",
        priority: 0.7,
        changeFrequency: "weekly",
      })
    )
  })

  it("should handle empty wiki pages", async () => {
    // Mock empty pages
    ;(allPages as any) = []

    const sitemapData = await sitemap()

    // Check static routes are still present
    expect(sitemapData).toContainEqual(
      expect.objectContaining({
        url: "https://natwelch.com",
        priority: 1,
        changeFrequency: "daily",
      })
    )
    expect(sitemapData).toContainEqual(
      expect.objectContaining({
        url: "https://natwelch.com/feed.rss",
        priority: 0.8,
        changeFrequency: "daily",
      })
    )
    expect(sitemapData).toContainEqual(
      expect.objectContaining({
        url: "https://natwelch.com/wiki",
        priority: 0.8,
        changeFrequency: "daily",
      })
    )

    // Check no dynamic wiki routes
    expect(sitemapData).not.toContainEqual(
      expect.objectContaining({
        url: expect.stringContaining("https://natwelch.com/wiki/"),
      })
    )
  })
})
