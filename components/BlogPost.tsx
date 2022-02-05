import Link from "next/link";

const BlogPost = (params) => {
  const { post } = params;
  return (
    <div
      sx={{
        m: "2em",
        display: "flex",
        alignContent: "center",
      }}
    >
      <Link passHref href={post.uri}>
        <a>{post.title}</a>
      </Link>
    </div>
  );
};

export { BlogPost };
