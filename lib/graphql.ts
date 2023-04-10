import { persistedExchange } from "@urql/exchange-persisted";
import { cacheExchange, createClient, fetchExchange, gql } from "urql";

export const client = createClient({
  url: "https://graphql.natwelch.com/graphql",
  exchanges: [
    cacheExchange,
    persistedExchange({
      preferGetForPersistedQueries: true,
    }),
    fetchExchange,
  ],
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
  } = await client.query(latestPostQuery, {}).toPromise();

  return posts[0];
};
