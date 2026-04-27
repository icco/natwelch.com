import Link from "next/link"

import { allPages } from "contentlayer/generated"

interface ChildrenListProps {
  /**
   * The parent path to list children for, relative to the wiki root
   * (e.g. `"projects"` or `"books"`). When omitted, this falls back to
   * any path provided via the closure in the MDX components map.
   */
  path?: string
}

function normalizePath(path: string): string {
  return path.replace(/^\/+|\/+$/g, "").replace(/^wiki\//, "")
}

export default function ChildrenList({ path }: ChildrenListProps) {
  if (!path) return null

  const prefix = normalizePath(path)
  if (!prefix) return null

  const children = allPages
    .filter((page) => {
      if (!page.path.startsWith(prefix + "/")) return false
      const remainder = page.path.slice(prefix.length + 1)
      return remainder.length > 0 && !remainder.includes("/")
    })
    .sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))

  if (children.length === 0) return null

  return (
    <ul>
      {children.map((page) => (
        <li key={page.url}>
          <Link href={page.url}>{page.title}</Link>
        </li>
      ))}
    </ul>
  )
}
