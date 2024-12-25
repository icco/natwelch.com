import { Metadata } from "next";
import { unstable_cache } from "next/cache";

import { BlogPost } from "@/components/BlogPost";
import { Header, Size } from "@/components/Header";
import Social from "@/components/Social";
import { getLatestBlogPost } from "@/lib/rss";

export const metadata: Metadata = {
  title: "Nat Welch",
};

const getLatest = unstable_cache(
  async () => {
    return await getLatestBlogPost();
  },
  ["blog"],
  { revalidate: 3600, tags: ["blog"] }
);

export default async function Page() {
  const post = await getLatest();

  return (
    <div className="flex flex-col items-center justify-center my-[14vh]">
      <Header size={Size.Large} />

      <div className="mt-8">
        <Social />
      </div>

      <div className="mt-8">
        <BlogPost post={post} />
      </div>
    </div>
  );
}
