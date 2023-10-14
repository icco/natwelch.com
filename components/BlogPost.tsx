import Link from "next/link";

const BlogPost = (params) => {
  const { post } = params;
  return (
    <div>
      <div>
        <p>Latest blog post</p>
        <p>
          <Link passHref href={post.uri} legacyBehavior>
            {post.title}
          </Link>
        </p>
      </div>
    </div>
  );
};

export { BlogPost };
