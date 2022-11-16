import Link from "next/link";
import { Paragraph } from "theme-ui";

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
      <div
        sx={{
          borderRadius: "1em",
          textAlign: "center",
          backgroundColor: "muted",
          py: "1em",
          px: "3em",
        }}
      >
        <Paragraph>Latest blog post</Paragraph>
        <Paragraph>
          <Link passHref href={post.uri}>
            {post.title}
          </Link>
        </Paragraph>
      </div>
      <div sx={{ mx: "auto" }}></div>
    </div>
  );
};

export { BlogPost };
