import type { MetadataRoute } from "next"
import { expect, test } from "vitest"

import sitemap from "./sitemap"

test("sitemap", () => {
  const result = sitemap() as MetadataRoute.Sitemap

  // Test static routes
  expect(result).toContainEqual({
    url: "https://natwelch.com",
    lastModified: expect.any(Date),
    changeFrequency: "daily",
    priority: 1,
  })

  expect(result).toContainEqual({
    url: "https://natwelch.com/feed.rss",
    lastModified: expect.any(Date),
    changeFrequency: "daily",
    priority: 0.8,
  })

  expect(result).toContainEqual({
    url: "https://natwelch.com/wiki",
    lastModified: expect.any(Date),
    changeFrequency: "daily",
    priority: 0.8,
  })

  // Test wiki routes
  expect(result).toContainEqual({
    url: "https://natwelch.com/wiki/test-page",
    lastModified: expect.any(Date),
    changeFrequency: "weekly",
    priority: 0.7,
  })

  expect(result).toContainEqual({
    url: "https://natwelch.com/wiki/another-page",
    lastModified: expect.any(Date),
    changeFrequency: "weekly",
    priority: 0.7,
  })

  // Test total number of routes
  expect(result).toHaveLength(5) // 3 static routes + 2 wiki pages
})
