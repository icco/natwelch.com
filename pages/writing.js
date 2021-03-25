import Head from "next/head";

import App from "components/App";
import Header from "components/Header.js";
import TextHeader from "components/TextHeader.js";

const Writing = () => (
  <App>
    <Head>
      <title>Nat Welch | Writing</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns">
      <TextHeader level="1">Writing</TextHeader>

      <p className="f5 f4-ns measure-wise mt3">
        I write once or twice a month at{" "}
        <a href="https://writing.natwelch.com">writing.natwelch.com</a>.
      </p>

      <p className="f5 f4-ns measure-wide mt3">
        I have also written for other places:
      </p>

      <ul className="list f5 f4-ns wide mt3 pl0">
        <li className="mv3 pl3 bl bw2 b--beige">
          <a href="https://www.newline.co/courses/reliable-webservers-with-go/">
            Reliable Webservers with Go
          </a>{" "}
          from Newline.
        </li>
        <li className="mv3 pl3 bl bw2 b--beige">
          <a href="https://realworldsre.com/">Real-World SRE</a> from Packt
          Publishing.
        </li>
        <li className="mv3 pl3 bl bw2 b--beige">
          Git Out The Vote:{" "}
          <a href="https://medium.com/git-out-the-vote/chatops-198f0b62c601">
            #chatops
          </a>
        </li>

        <li className="mv3 pl3 bl bw2 b--beige">
          Code Words:{" "}
          <a href="https://codewords.recurse.com/issues/six/promoting-reliability-in-web-software-companies">
            Promoting reliability in web software companies
          </a>{" "}
          &amp;{" "}
          <a href="https://codewords.recurse.com/issues/three/ddos-and-you">
            DDoS and You
          </a>
          .
        </li>
      </ul>

      <p className="f5 f4-ns measure-wide mt3">
        I love writing and talking about writing. If you have a topic you would
        like me to write about, or would like to discuss writing, shoot{" "}
        <a href="mailto:nat@natwelch.com">me an email</a>.
      </p>
    </section>
  </App>
);

export default Writing;
