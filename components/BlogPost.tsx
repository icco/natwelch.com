import Link from "next/link";
import Parser from "rss-parser";

const BlogPost = (params: { post: Parser.Item | null }) => {
  const { post } = params;
  if (!post) {
    return <></>;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-lg p-3 bg-accent">
        <div className="flex-row">
          <p className="pb-3">Latest blog post</p>
        </div>
        <div className="flex-row">
          <Link className="hover:text-link p-3" href={post.link || "#"}>
            {post.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export { BlogPost };
