import Head from "next/head";
import { DateTime } from "luxon";

import App from "components/App";
import Header from "components/Header.js";

const Dashboard = () => (
  <App>
    <Head>
      <title>Nat Welch | Dashboard</title>
    </Head>
    <Header noLogo navtext={DateTime.local().toISODate()} />
    <section className="cf lh-copy pa3 pa5-ns"></section>
  </App>
);

export default Dashboard;
