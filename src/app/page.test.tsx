import { render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"

import Page from "./page"

vi.mock("next/cache", () => ({
  unstable_cache: (fn: () => Promise<any>) => fn
}))

// Mock the Logo component
vi.mock("@/components/Logo", () => ({
  default: () => <div data-testid="logo">Logo</div>
}))

vi.mock("@/lib/rss", () => ({
  getLatestBlogPost: vi.fn().mockResolvedValue({
    title: "Test Post",
    link: "https://test.com",
    pubDate: new Date().toISOString(),
    content: "Test content"
  })
}))

test("Page", async () => {
  const { container } = render(await Page())
  expect(container).toBeDefined()

  // Check if all components are rendered
  expect(screen.getByTestId("header")).toBeDefined()
  expect(screen.getByTestId("blog-post")).toBeDefined()
  expect(screen.getByTestId("footer")).toBeDefined()
})
