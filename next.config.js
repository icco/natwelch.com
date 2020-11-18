// https://github.com/zeit/next-plugins/tree/master/packages/next-css
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
};
