import { render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"

import Page from "./page"

// Mock next/cache
vi.mock("next/cache", () => ({
  unstable_cache: (fn: () => Promise<any>) => fn
}))

// Mock the components
vi.mock("@/components/BlogPost", () => ({
  BlogPost: () => <div data-testid="blog-post">Blog Post</div>
}))

vi.mock("@/components/Footer", () => ({
  default: () => <footer data-testid="footer">Footer</footer>
}))

vi.mock("@/components/Header", () => ({
  Header: () => <header data-testid="header">Header</header>,
  Size: {
    Large: "large"
  }
}))

// Mock the getLatestBlogPost function
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
