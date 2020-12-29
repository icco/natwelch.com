import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ApolloProvider } from "react-apollo";
const fetch = require("isomorphic-unfetch");
const { ApolloClient } = require("apollo-client");
const { InMemoryCache } = require("apollo-cache-inmemory");
const { createHttpLink } = require("apollo-link-http");
const { setContext } = require("apollo-link-context");
import getConfig from "next/config";

import Datetime from "components/Datetime";

const { publicRuntimeConfig } = getConfig();
const { GITHUB_TOKEN } = publicRuntimeConfig;
const ProjectQuery = gql`
  query repo($Owner: String!, $Repo: String!) {
    repository(owner: $Owner, name: $Repo) {
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
      forkCount
      updatedAt
    }
  }
`;

const ProjectData = (params) => {
  if (params.owner == "" || params.repo == "") {
    return <div className={params.className}>&nbsp;</div>;
  }

  const link = createHttpLink({ uri: "https://api.github.com/graphql" });
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : "",
      },
    };
  });

  const client = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(link),
    cache: new InMemoryCache().restore({}),
  });

  return (
    <ApolloProvider client={client}>
      <Query
        query={ProjectQuery}
        variables={{
          Owner: params.owner,
          Repo: params.repo,
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div className={params.className}>
              <div className="cf">
                <dl className="fl fn-ns w-50 dib-ns w-auto-ns lh-title mr5-ns">
                  <dd className="f6 fw4 ml0">Last Commit</dd>
                  <dd className="f3 fw6 ml0">
                    <Datetime>{data.repository.updatedAt}</Datetime>
                  </dd>
                </dl>
                <dl className="fl fn-ns w-50 dib-ns w-auto-ns lh-title mr5-ns">
                  <dd className="f6 fw4 ml0">Watchers</dd>
                  <dd className="f3 fw6 ml0">
                    {data.repository.watchers.totalCount}
                  </dd>
                </dl>
                <dl className="fl fn-ns w-50 dib-ns w-auto-ns lh-title mr5-ns">
                  <dd className="f6 fw4 ml0">Stars</dd>
                  <dd className="f3 fw6 ml0">
                    {data.repository.stargazers.totalCount}
                  </dd>
                </dl>
                <dl className="fl fn-ns w-50 dib-ns w-auto-ns lh-title mr5-ns">
                  <dd className="f6 fw4 ml0">Forks</dd>
                  <dd className="f3 fw6 ml0">{data.repository.forkCount}</dd>
                </dl>
              </div>
            </div>
          );
        }}
      </Query>
    </ApolloProvider>
  );
};

export default ProjectData;
