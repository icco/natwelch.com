import { Metadata } from "next"
import { unstable_cache } from "next/cache"

import { BlogPost } from "@/components/BlogPost"
import Footer from "@/components/Footer"
import { Header, Size } from "@/components/Header"
import { getLatestBlogPost } from "@/lib/rss"

export const metadata: Metadata = {
  title: "Nat Welch",
}

const getLatest = unstable_cache(
  async () => {
    return await getLatestBlogPost()
  },
  ["blog"],
  { revalidate: 3600, tags: ["blog"] }
)

export default async function Page() {
  const post = await getLatest()

  return (
    <>
      <div className="my-[14vh] flex flex-col items-center justify-center">
        <Header size={Size.Large} />

        <div className="mt-8">
          <BlogPost post={post} />
        </div>
      </div>

      <Footer />
    </>
  )
}
