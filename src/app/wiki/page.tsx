import { merge } from "lodash";
import { Metadata } from "next";

import { Tree } from "@/components/Lists";

import { allPages, Page } from "contentlayer/generated";

function getPaths(): string[] {
  const paths: string[] = allPages.map((page) => page.path);
  return paths.sort();
}

function buildTree(
  filter?: (value: string) => boolean
): Record<string, Page> | string {
  let tree = {};
  let paths = getPaths();
  if (filter) {
    paths = paths.filter(filter);
  }

  paths.forEach((path) => {
    tree = merge(tree, buildTreeInt(path, path));
  });

  return tree;
}

function buildTreeInt(
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
    [pieces[0]]: buildTreeInt(pieces.slice(1).join("/"), fullPath),
  } as unknown as Record<string, Page> | string;
}

export const metadata: Metadata = {
  title: "Nat Welch | Wiki",
};

export default function Home() {
  const tree = buildTree();

  return (
    <section className="prose lg:prose-xl">
      <h1 className="">Wiki</h1>
      <div className="mx-auto max-w-xl py-8">
        <Tree items={tree} />
      </div>
    </section>
  );
}
