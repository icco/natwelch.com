import Head from "next/head";

import App from "components/App";
import Header from "components/Header.js";
import TextHeader from "components/TextHeader.js";

const Support = () => (
  <App>
    <Head>
      <title>Nat Welch | Support</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns">
      <TextHeader level="1">Support</TextHeader>

      <p className="f5 f4-ns measure-wise mt3">
  If you would like to support my open source work, there are a few ways you can help me out.
      </p>

      <ul className="list f5 f4-ns wide mt3 pl0">
        <li className="mv3 pl3 bl bw2 b--beige">
          Buy my book <a href="https://realworldsre.com/">Real-World SRE</a>.
        </li>
          Buy my book <a href="https://www.newline.co/courses/reliable-webservers-with-go/">Reliable Webservers with Go</a>.
        <li className="mv3 pl3 bl bw2 b--beige">
  Support me montly on <a href="https://github.com/sponsors/icco">Github</a>.
        </li>
      </ul>
    </section>
  </App>
);

export default Support;
