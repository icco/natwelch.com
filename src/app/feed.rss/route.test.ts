// Add type imports for Jest
import { jest } from "@jest/globals"

import { GET } from "./route"
import { fetchFeed } from "@/lib/rss"

interface FeedItem {
  title: string
  content: string
  link: string
  isoDate: string
  guid: string
  creator: string
}

// Mock the rss module
jest.mock("@/lib/rss", () => ({
  fetchFeed: jest.fn(),
}))

describe("RSS Feed Route", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks()
  })

  it("should return a valid RSS feed", async () => {
    // Mock the fetchFeed function to return test data
    const mockFeedData: FeedItem[] = [
      {
        title: "Test Post 1",
        content: "Test content 1",
        link: "https://example.com/1",
        isoDate: "2024-03-19T00:00:00.000Z",
        guid: "https://example.com/1",
        creator: "Nat Welch",
      },
      {
        title: "Test Post 2",
        content: "Test content 2",
        link: "https://example.com/2",
        isoDate: "2024-03-18T00:00:00.000Z",
        guid: "https://example.com/2",
        creator: "Nat Welch",
      },
    ]

      // Set up mock return value
      (fetchFeed as jest.Mock).mockResolvedValue(mockFeedData)

    // Call the route handler
    const response = await GET()
    const xml = await response.text()

    // Check response headers
    expect(response.headers.get("Content-Type")).toBe(
      "application/xml; charset=utf-8"
    )

    // Check XML content
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain('xmlns:dc="http://purl.org/dc/elements/1.1/"')
    expect(xml).toContain("Nat Welch's Combined Feed")
    expect(xml).toContain("Test Post 1")
    expect(xml).toContain("Test Post 2")
    expect(xml).toContain("Test content 1")
    expect(xml).toContain("Test content 2")
  })

  it("should handle empty feed data", async () => {
    // Mock the fetchFeed function to return empty data
    (fetchFeed as jest.Mock).mockResolvedValue([])

    // Call the route handler
    const response = await GET()
    const xml = await response.text()

    // Check response headers
    expect(response.headers.get("Content-Type")).toBe(
      "application/xml; charset=utf-8"
    )

    // Check XML content
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(xml).toContain('xmlns:dc="http://purl.org/dc/elements/1.1/"')
    expect(xml).toContain("Nat Welch's Combined Feed")
  })
})
