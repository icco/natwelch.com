import { render, screen } from "@testing-library/react"
import { act } from "react"
import { beforeEach, expect, test, vi } from "vitest"

import {
  mockFetch,
  mockUsePathname,
  mockUseTheme,
  resetMocks,
} from "../test/mocks/clientComponents"
import Page from "./page"

// Mock the visual components
vi.mock("@/components/Header", () => ({
  Header: () => <div data-testid="header">Header</div>,
  Size: {
    Large: "large",
    Small: "small",
  },
}))

vi.mock("@/components/BlogPost", () => ({
  BlogPost: () => <div data-testid="blog-post">Blog Post</div>,
}))

vi.mock("@/components/Footer", () => ({
  default: () => <div data-testid="footer">Footer</div>,
}))

vi.mock("next/cache", () => ({
  unstable_cache: (fn: () => Promise<unknown>) => fn,
}))

vi.mock("@/lib/rss", () => ({
  getLatestBlogPost: vi.fn().mockResolvedValue({
    title: "Test Post",
    link: "https://test.com",
    pubDate: new Date().toISOString(),
    content: "Test content",
  }),
}))

beforeEach(() => {
  resetMocks()
  mockUsePathname.mockReturnValue("/")
  mockUseTheme.mockReturnValue({
    theme: "light",
    setTheme: vi.fn(),
    resolvedTheme: "light",
  })
  mockFetch.mockResolvedValue({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          website_uuid: "test-uuid",
          url: "https://test.com",
        },
      ]),
  } as Response)
})

test("Page", async () => {
  let container
  await act(async () => {
    const rendered = render(await Page())
    container = rendered.container
  })

  expect(container).toBeDefined()

  // Check if all components are rendered
  expect(screen.getByTestId("header")).toBeDefined()
  expect(screen.getByTestId("blog-post")).toBeDefined()
  expect(screen.getByTestId("footer")).toBeDefined()
})
