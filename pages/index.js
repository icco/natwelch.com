import Head from "next/head";
import Link from "next/link";

import App from "components/App";
import Header from "components/Header.js";
import Social from "components/Social.js";

const h2_class = "link dim gray fw2 f2 f3-ns dib ma3";
const link_class = "link";

const Index = () => (
  <App>
    <Head>
      <title>Nat Welch</title>
    </Head>

    <div className="pb3 mw8 center mt5 mt0-ns">
      <Header />
      <nav className="flex flex-wrap items-center justify-center ttc">
        <Link href="/about">
          <h2 className={h2_class}>
            <a className={link_class}>About</a>
          </h2>
        </Link>
        <Link href="/mentoring">
          <h2 className={h2_class}>
            <a className={link_class}>Mentoring</a>
          </h2>
        </Link>
        <Link href="/projects">
          <h2 className={h2_class}>
            <a className={link_class}>Projects</a>
          </h2>
        </Link>
        <Link href="/support">
          <h2 className={h2_class}>
            <a className={link_class}>Support</a>
          </h2>
        </Link>
        <Link href="/writing">
          <h2 className={h2_class}>
            <a className={link_class}>Writing</a>
          </h2>
        </Link>
        <Link href="/talks">
          <h2 className={h2_class}>
            <a className={link_class}>Talks</a>
          </h2>
        </Link>
        <h2 className={h2_class}>
          <a className={link_class} href="https://resume.natwelch.com">
            Resume
          </a>
        </h2>
      </nav>

      <Social
        className="items-center justify-center mt5 w4 w-100-ns center"
        linkClassName="ma3 gray"
      />
    </div>
  </App>
);

export default Index;
