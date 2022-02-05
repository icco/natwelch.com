import { createClient, gql } from "urql";

export const client = createClient({
  url: "https://graphql.natwelch.com/graphql",
});

const latestPostQuery = gql`
  query latestPostQuery {
    posts(input: { limit: 1 }) {
      uri
      title
    }
  }
`;

export const getLatestBlogPost = async () => {
  const {
    data: { posts },
  } = await client.query(latestPostQuery).toPromise();

  return posts[0];
};
