import App, { Container } from "next/app";

import "../style.css";

export default class Home extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
