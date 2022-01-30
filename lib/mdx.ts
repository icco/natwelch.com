import { walk } from "@root/walk";
import fs from "fs";
import matter from "gray-matter";
import { merge } from "lodash";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "wiki/");

export async function getPaths() {
  const paths: string[] = [];
  await walk(
    POSTS_PATH,
    async (
      err,
      pathname: string,
      dirent: { isDirectory: () => boolean; name: string }
    ): Promise<boolean> => {
      if (err) {
        throw err;
      }

      if (dirent.isDirectory() && dirent.name.startsWith(".")) {
        return false;
      }

      if (/\.mdx?$/.test(pathname)) {
        const filename = pathname
          .replace(/\.mdx?$/, "")
          .replace(POSTS_PATH, "");
        paths.push(filename);
      }
    }
  );

  return paths.sort();
}

export function slugToFilePath(slug: string): string {
  return `${path.join(POSTS_PATH, slug)}.mdx`;
}

export async function buildTree() {
  let tree = {};
  const paths = await getPaths();
  paths.forEach((path) => {
    tree = merge(tree, buildTreeInt(path, path));
  });

  return tree;
}

function buildTreeInt(path: string, fullPath: string) {
  if (!path.includes("/")) {
    const postFilePath = slugToFilePath(fullPath);
    const source = fs.readFileSync(postFilePath);
    const { data } = matter(source);
    data.title = data.title ?? path;
    data.path = fullPath;
    return { [path]: data };
  }

  const pieces = path.split("/");
  return { [pieces[0]]: buildTreeInt(pieces.slice(1).join("/"), fullPath) };
}
