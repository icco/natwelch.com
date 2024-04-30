import { cacheExchange, createClient, fetchExchange, gql } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: "https://graphql.natwelch.com/graphql",
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

const latestPostQuery = gql`
  query latestPostQuery {
    posts(input: { limit: 1 }) {
      uri
      title
    }
  }
`;

export const getLatestBlogPost = async () => {
  const client = getClient();
  const {
    data: { posts },
  } = await client.query(latestPostQuery, {}).toPromise();

  return posts[0];
};
