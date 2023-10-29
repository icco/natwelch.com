import Link from "next/link";
import Parser from "rss-parser";

const BlogPost = (params: { post: Parser.Item | null }) => {
  const { post } = params;
  if (!post) {
    return <></>;
  }

  return (
    <div>
      <div>
        <p>Latest blog post</p>
        <p>
          <Link href={post.link || "#"}>{post.title}</Link>
        </p>
      </div>
    </div>
  );
};

export { BlogPost };
