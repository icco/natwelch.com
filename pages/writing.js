import Head from "next/head";

import Header from "../components/Header.js";
import TextHeader from "../components/TextHeader.js";

export default () => (
  <>
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
        <li className="ml4 mv4">
          <a href="https://www.packtpub.com/web-development/real-world-sre">
            Real World SRE
          </a>{" "}
          from Packt Publishing.
        </li>
        <li className="ml4 mv4">
          Git Out The Vote:{" "}
          <a href="https://medium.com/git-out-the-vote/chatops-198f0b62c601">
            #chatops
          </a>
        </li>

        <li className="ml4 mv4">
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
    </section>
  </>
);
