import { merge, uniqueId } from "lodash"
import Link from "next/link"

import { Page } from "contentlayer/generated"

interface TreeBranch {
  [key: string]: Page | TreeBranch
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

function isPage(value: Page | TreeBranch): value is Page {
  return "url" in value && "title" in value
}

function Tree({ items }: { items: TreeBranch }) {
  return (
    <ul className="menu">
      {Object.entries(items).map(([k, value]) => {
        if (!isPage(value)) {
          return (
            <span key={`${k}-tree-${uniqueId()}`}>
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
          </span>
        )
      })}
    </ul>
  )
}

export { Tree }
