import Head from "next/head";

import Age from "../components/Age.js";
import App from "../components/App";
import Header from "../components/Header.js";
import Social from "../components/Social.js";
import TextHeader from "../components/TextHeader.js";

const Mentoring = () => <App>
  <Head>
    <title>Nat Welch | Mentoring</title>
  </Head>
  <Header noLogo />
  <section className="cf lh-copy pa3 pa5-ns">
    <TextHeader level="1">Mentoring</TextHeader>
    <TextHeader level="2">What</TextHeader>
    <article className="lh-copy f4-ns f5 measure-wide">
      <p className="">
        I would like to be your colleague, friend and/or acquaintance. Why?
        Because, my career has been particularly weird, and talking to others
        has helped me be somewhat successful in surviving some transitions.
        I've jumped to and from startups, big business, politics, writing, and
        many other situations. I failed out of college briefly, and have lived
        in ~five cities. If you think this experience would be useful to you,
        I would love to chat.
      </p>
    </article>
    <TextHeader level="2">How To</TextHeader>
    <article className="lh-copy f4-ns f5 measure-wide">
      <p className="">There are a few options to get in touch!</p>
      <ul>
        <li>
          You can book time to chat on{" "}
          <a href="https://calendly.com/icco/chat-with-nat">Calendly</a>.
        </li>
        <li>You can email me nat@natwelch.com.</li>
      </ul>
    </article>
  </section>
</App>;

export default Mentoring;
