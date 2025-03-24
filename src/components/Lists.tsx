import { isString, merge, uniqueId } from "lodash"
import Link from "next/link"

import { Page } from "contentlayer/generated"

type TreeNode = string | { [key: string]: TreeNode | Page }

export function buildTree(
  paths: string[],
  allPages: Page[],
  filter?: (value: string) => boolean
): TreeNode {
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

export function buildTreeInt(
  allPages: Page[],
  path: string,
  fullPath: string
): TreeNode {
  if (!path.includes("/")) {
    const data = allPages.find((page) => page.path === fullPath)
    if (!data) {
      console.warn(`Could not find page for ${path}`)
      return path
    }

    return { [path]: data }
  }

  const pieces = path.split("/")
  try {
    return {
      [pieces[0]]: buildTreeInt(allPages, pieces.slice(1).join("/"), fullPath),
    }
  } catch (error) {
    console.warn(`Error building tree for ${path}:`, error)
    return path
  }
}

function Tree({ items }: { items: TreeNode }) {
  if (isString(items)) {
    return items
  }

  return (
    <ul key={`ul-${uniqueId()}`} className="ms-4 list-none">
      {Object.entries(items).map(([k, value]) => {
        if (isString(value)) {
          return <span key={uniqueId()}></span>
        }

        if ("url" in value) {
          return (
            <span key={`${k}-root-${uniqueId()}`}>
              <li className="" style={{}} key={value.url}>
                <Link key={uniqueId()} href={value.url}>
                  {value.title}
                </Link>
              </li>
              <Tree
                key={`${k}-tree-${uniqueId()}`}
                items={value as TreeNode}
              ></Tree>
            </span>
          )
        }

        return <Tree key={uniqueId()} items={value} />
      })}
    </ul>
  )
}

export { Tree }
