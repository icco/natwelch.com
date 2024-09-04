import { isString, merge, uniqueId } from "lodash";
import Link from "next/link";

import { Page } from "contentlayer/generated";

export function buildTree(
  paths: string[],
  allPages: Page[],
  filter?: (value: string) => boolean
): Record<string, Page> | string {
  let tree = {};
  if (filter) {
    paths = paths.filter(filter);
  }

  paths.forEach((path) => {
    tree = merge(tree, buildTreeInt(allPages, path, path));
  });

  return tree;
}

export function getPaths(allPages: Page[]): string[] {
  const paths: string[] = allPages.map((page) => page.path);
  return paths.sort();
}

export function buildTreeInt(
  allPages: Page[],
  path: string,
  fullPath: string
): Record<string, Page> | string {
  if (!path.includes("/")) {
    const data = allPages.find((page) => page.path === fullPath);
    if (!data) {
      throw new Error(`Could not find page for ${path}`);
    }

    return { [path]: data };
  }

  const pieces = path.split("/");
  return {
    [pieces[0]]: buildTreeInt(allPages, pieces.slice(1).join("/"), fullPath),
  } as unknown as Record<string, Page> | string;
}

function Tree({ items }: { items: string | Record<string, Page> }) {
  return (
    <ul key={`ul-${uniqueId()}`} className="ms-4 list-none">
      {Object.keys(items).map((k) => {
        const value = items[k];
        if (isString(value)) {
          return <span key={uniqueId()}></span>;
        }

        if (!value.url) {
          return <span key={uniqueId()}></span>;
        }

        return (
          <span key={`${k}-root-${uniqueId()}`}>
            <li className="" style={{}} key={value.url}>
              <Link key={uniqueId()} href={value.url}>
                {value.title}
              </Link>
            </li>
            <Tree key={`${k}-tree-${uniqueId()}`} items={value}></Tree>
          </span>
        );
      })}
    </ul>
  );
}

export { Tree };
