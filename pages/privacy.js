import Head from "next/head";

import Age from "components/Age.js";
import App from "components/App";
import Header from "components/Header.js";
import TextHeader from "components/TextHeader.js";

const Privacy = () => (
  <App>
    <Head>
      <title>Nat Welch | Privacy Policy</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns">
      <TextHeader level="1">Privacy Policy</TextHeader>
      <article className="lh-copy f4-ns f5 measure-wide">
        <p>
          If you visit any subdomain of natwelch.com, I will store your IP
          address, visit time, and pages visited. If you login or create an
          account with natwelch.com or its subdomains, we will store your email
          address. We reserve the right to keep this data indefinitely. Please
          email nat@natwelch.com if you would like your information removed.
        </p>

        <p>
          Data is stored on a database hosted in the US on Google Cloud
          Platform. We also utilize Google Analytics on some sites and Auth0 on
          others.
        </p>
      </article>

      <TextHeader level="2">Tab Archive</TextHeader>
      <article className="lh-copy f4-ns f5 measure-wide">
        <p>
          For Tab Archive's privacy policy, please see{" "}
          <a href="https://tab-archive.app">tab-archive.app</a>.
        </p>
      </article>
    </section>
  </App>
);

export default Privacy;
