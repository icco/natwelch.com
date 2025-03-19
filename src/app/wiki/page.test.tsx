import { render, screen } from "@testing-library/react"
import { allPages } from "contentlayer/generated"
import Home from "./page"

// Mock the contentlayer generated data
jest.mock("contentlayer/generated", () => ({
  allPages: [
    {
      _id: "1",
      _raw: { sourceFilePath: "wiki/test1.md", type: "Page" },
      type: "Page",
      title: "Test Page 1",
      path: "test1",
      url: "/wiki/test1",
      body: { raw: "Test content 1" },
    },
    {
      _id: "2",
      _raw: { sourceFilePath: "wiki/nested/test2.md", type: "Page" },
      type: "Page",
      title: "Test Page 2",
      path: "nested/test2",
      url: "/wiki/nested/test2",
      body: { raw: "Test content 2" },
    },
  ],
}))

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}))

describe("Wiki Page", () => {
  it("renders the wiki title", () => {
    render(<Home />)
    expect(screen.getByText("Wiki")).toBeInTheDocument()
  })

  it("renders all wiki pages in the tree", () => {
    render(<Home />)

    // Check for main page
    expect(screen.getByText("Test Page 1")).toBeInTheDocument()
    expect(screen.getByText("Test Page 2")).toBeInTheDocument()

    // Check for correct links
    const link1 = screen.getByText("Test Page 1").closest("a")
    expect(link1).toHaveAttribute("href", "/wiki/test1")

    const link2 = screen.getByText("Test Page 2").closest("a")
    expect(link2).toHaveAttribute("href", "/wiki/nested/test2")
  })

  it("renders nested pages in the correct structure", () => {
    render(<Home />)

    // The nested page should be rendered after the main page
    const links = screen.getAllByRole("link")
    expect(links[0]).toHaveTextContent("Test Page 1")
    expect(links[1]).toHaveTextContent("Test Page 2")
  })
}) 