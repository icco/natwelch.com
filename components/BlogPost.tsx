import Link from "next/link";

const BlogPost = (params) => {
  const { post } = params;
  return (
    <div sx={{}}>
      <Link passHref href={post.uri}>
        <a>{post.title}</a>
      </Link>
    </div>
  );
};

export { BlogPost };
