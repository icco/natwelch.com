import Head from "next/head";

import Header from "../components/Header.js";
import TextHeader from "../components/TextHeader.js";

export default () => (
  <>
    <Head>
      <title>Nat Welch | Projects</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns">
      <TextHeader level="1">Projects</TextHeader>

      <article className="">
        <TextHeader level="2">GraphQL</TextHeader>
      </article>
    </section>
  </>
);
