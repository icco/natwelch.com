import Link from "next/link"
import Parser from "rss-parser"

const BlogPost = (params: { post: Parser.Item | null }) => {
  const { post } = params
  if (!post) {
    return <></>
  }

  return (
    <div>
      <div className="bg-accent not-prose flex flex-col items-center justify-center rounded-lg p-3">
        <div className="flex-row">
          <h4 className="m-0 font-bold">Latest blog post</h4>
        </div>
        <div className="flex-row">
          <Link className="" href={post.link || "#"}>
            {post.title}
          </Link>
        </div>
      </div>
    </div>
  )
}

export { BlogPost }
