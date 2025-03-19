import { render, screen } from "@testing-library/react"

import { allPages } from "contentlayer/generated"

import Home from "./page"

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
