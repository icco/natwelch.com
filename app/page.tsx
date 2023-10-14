import { BlogPost } from "components/BlogPost";
import Header, { Size } from "components/Header";
import Social from "components/Social";
import { getLatestBlogPost } from "lib/graphql";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nat Welch",
}

export default async function Page() {
  const post = await getLatestBlogPost()

  return (
    <main>
      <div>
        <Header size={Size.Large} />

        <div>
          <Social />
        </div>
      </div>

      <BlogPost post={post} />
    </main>
  )
}