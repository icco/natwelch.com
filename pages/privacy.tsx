import Layout from "components/Layout";
import TextHeader from "components/TextHeader";
import Head from "next/head";

const Privacy = () => (
  <Layout>
    <Head>
      <title>Nat Welch | Privacy Policy</title>
    </Head>

    <TextHeader level="1">Privacy Policy</TextHeader>
    <p>
      If you visit any subdomain of natwelch.com, I will store your IP address,
      visit time, and pages visited. If you login or create an account with
      natwelch.com or its subdomains, we will store your email address. We
      reserve the right to keep this data indefinitely. Please email
      nat@natwelch.com if you would like your information removed.
    </p>

    <p>
      Data is stored on a database hosted in the US on Google Cloud Platform. We
      also utilize Google Analytics on some sites and Auth0 on others.
    </p>

    <TextHeader level="2">Tab Archive</TextHeader>
    <p>
      For Tab Archive&apos;s privacy policy, please see{" "}
      <a href="https://tab-archive.app">tab-archive.app</a>.
    </p>
  </Layout>
);

export default Privacy;
