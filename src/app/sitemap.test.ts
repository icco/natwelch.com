import { allPages } from "contentlayer/generated"
import type { Page } from "contentlayer/generated"

import sitemap from "./sitemap"

// Mock the contentlayer generated data
jest.mock("contentlayer/generated", () => ({
  allPages: [
    {
      _raw: {
        flattenedPath: "test-page-1",
      },
      title: "Test Page 1",
    },
    {
      _raw: {
        flattenedPath: "test-page-2",
      },
      title: "Test Page 2",
    },
  ] as Page[],
}))

describe("Sitemap Generation", () => {
  it("should generate a valid sitemap with all routes", () => {
    const sitemapData = sitemap()

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
        url: "https://natwelch.com/wiki/test-page-1",
        priority: 0.7,
        changeFrequency: "weekly",
      })
    )
    expect(sitemapData).toContainEqual(
      expect.objectContaining({
        url: "https://natwelch.com/wiki/test-page-2",
        priority: 0.7,
        changeFrequency: "weekly",
      })
    )
  })

  it("should handle empty wiki pages", () => {
    // Mock empty wiki pages
    ; (allPages as Page[]).length = 0

    const sitemapData = sitemap()

    // Check that static routes are still present
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

    // Check that no wiki routes are present
    expect(
      sitemapData.filter((item) => item.url.includes("/wiki/"))
    ).toHaveLength(0)
  })
})
