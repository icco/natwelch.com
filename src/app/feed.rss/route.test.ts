// Add type imports for Jest
import type { jest } from "@jest/globals"

import { fetchFeed } from "@/lib/rss"

import { GET } from "./route"

// Mock the fetchFeed function
jest.mock("@/lib/rss", () => ({
  fetchFeed: jest.fn(),
}))

describe("RSS Feed Route", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should return a valid RSS feed", async () => {
    // Mock feed data
    const mockFeedItems = [
      {
        title: "Test Post 1",
        content: "Test content 1",
        link: "https://example.com/1",
        isoDate: "2024-03-19T00:00:00.000Z",
        creator: "Nat Welch",
      },
      {
        title: "Test Post 2",
        content: "Test content 2",
        link: "https://example.com/2",
        isoDate: "2024-03-18T00:00:00.000Z",
        creator: "Nat Welch",
      },
    ]

    // Mock the fetchFeed function to return our test data
    ;(fetchFeed as jest.Mock).mockResolvedValue(mockFeedItems)

    // Call the route handler
    const response = await GET()
    const xml = await response.text()

    // Check response headers
    expect(response.headers.get("Content-Type")).toBe(
      "application/xml; charset=utf-8"
    )

    // Check XML content
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain('<rss version="2.0"')
    expect(xml).toContain("Nat Welch's Combined Feed")
    expect(xml).toContain("Test Post 1")
    expect(xml).toContain("Test Post 2")
    expect(xml).toContain("https://example.com/1")
    expect(xml).toContain("https://example.com/2")
  })

  it("should handle empty feed data", async () => {
    // Mock empty feed data
    ;(fetchFeed as jest.Mock).mockResolvedValue([])

    // Call the route handler
    const response = await GET()
    const xml = await response.text()

    // Check response headers
    expect(response.headers.get("Content-Type")).toBe(
      "application/xml; charset=utf-8"
    )

    // Check XML content
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain('<rss version="2.0"')
    expect(xml).toContain("Nat Welch's Combined Feed")
  })
})
