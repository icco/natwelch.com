import path from "path";
import { walk } from "@root/walk";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "wiki/");

export async function getPaths() {
  const paths: string[] = [];
  await walk(POSTS_PATH, async (err, pathname, dirent): Promise<boolean> => {
    if (err) {
      throw err;
    }

    if (dirent.isDirectory() && dirent.name.startsWith(".")) {
      return false;
    }

    if (/\.mdx?$/.test(pathname)) {
      const filename = pathname.replace(/\.mdx?$/, "").replace(POSTS_PATH, "");
      paths.push(filename);
    }
  });

  return paths
}
