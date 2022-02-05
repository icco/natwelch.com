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
      <div sx={{ mx: "auto" }}></div>
      <div>
        <Link passHref href={post.uri}>
          <a>{post.title}</a>
        </Link>
      </div>
      <div sx={{ mx: "auto" }}></div>
    </div>
  );
};

export { BlogPost };
