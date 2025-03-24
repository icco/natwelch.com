import { isString, merge, uniqueId } from "lodash"
import Link from "next/link"

import { Page } from "contentlayer/generated"

interface TreeBranch {
  [key: string]: Page | TreeBranch | string
}

export function buildTree(
  paths: string[],
  allPages: Page[],
  filter?: (value: string) => boolean
): TreeBranch {
  let tree = {}
  if (filter) {
    paths = paths.filter(filter)
  }

  paths.forEach((path) => {
    tree = merge(tree, buildTreeInt(allPages, path, path))
  })

  return tree
}

export function getPaths(allPages: Page[]): string[] {
  const paths: string[] = allPages.map((page) => page.path)
  return paths.sort()
}

function buildTreeInt(
  allPages: Page[],
  path: string,
  fullPath: string
): TreeBranch {
  if (!path.includes("/")) {
    const data = allPages.find((page) => page.path === fullPath)
    if (!data) {
      throw new Error(`Could not find page for ${path}`)
    }

    return { [path]: data }
  }

  const pieces = path.split("/")
  const subTree = buildTreeInt(allPages, pieces.slice(1).join("/"), fullPath)
  return { [pieces[0]]: subTree }
}

function isPage(value: Page | TreeBranch | string): value is Page {
  return (
    typeof value === "object" &&
    value !== null &&
    "url" in value &&
    "title" in value
  )
}

function Tree({ items }: { items: TreeBranch }) {
  return (
    <ul key={`ul-${uniqueId()}`} className="ms-4 list-none">
      {Object.entries(items).map(([k, value]) => {
        if (isString(value)) {
          return <span key={uniqueId()}></span>
        }

        if (!isPage(value)) {
          return (
            <span key={uniqueId()}>
              <Tree items={value} />
            </span>
          )
        }

        return (
          <span key={`${k}-root-${uniqueId()}`}>
            <li className="" style={{}} key={value.url}>
              <Link key={uniqueId()} href={value.url}>
                {value.title}
              </Link>
            </li>
            <Tree key={`${k}-tree-${uniqueId()}`} items={value} />
          </span>
        )
      })}
    </ul>
  )
}

export { Tree }
