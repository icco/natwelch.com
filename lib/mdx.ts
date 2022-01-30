import { walk } from "@root/walk";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "wiki/");

export async function getPaths() {
  const paths: string[] = [];
  await walk(
    POSTS_PATH,
    async (
      err: any,
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
