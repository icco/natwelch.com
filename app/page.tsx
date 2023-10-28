import { Metadata } from "next";

import { BlogPost } from "components/BlogPost";
import { Header, Size } from "components/Header";
import Social from "components/Social";
import { getLatestBlogPost } from "lib/graphql";

export const metadata: Metadata = {
  title: "Nat Welch",
};

export default async function Page() {
  const post = await getLatestBlogPost();

  return (
    <>
      <Header size={Size.Large} />

      <div>
        <Social />
      </div>

      <BlogPost post={post} />
    </>
  );
}
