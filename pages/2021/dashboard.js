import App from "components/App";
import Header from "components/Header.js";
import { DateTime } from "luxon";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [day, setDay] = useState("Today");
  useEffect(() => {
    async function fetchData() {
      let isMounted = true;
      const getData = () => {
        fetch("https://graphql.natwelch.com/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            query: "query {\nstats(count: 50) {\nkey\nvalue\n}\n}",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (isMounted) {
              if (data.errors) {
                console.error(data.errors);
              } else {
                setData(data.data.stats);
                setDay(DateTime.local().toISODate());
              }
            }
          })
          .catch((error) => {
            if (isMounted) {
              console.error("Error:", error);
            }
          });
      };

      getData();
      const interval = setInterval(() => {
        getData();
      }, 10000);

      return () => {
        clearInterval(interval);
        isMounted = false;
      };
    }
    fetchData();
  }, []);

  return (
    <App>
      <Head>
        <title>Nat Welch | Dashboard</title>
      </Head>
      <Header noLogo navtext={day} />

      <article className="ma3" data-name="slab-stat-large">
        <div className="cf flex flex-wrap">
          {data.map(({ key, value }) => (
            <Stat key={key} keyString={key} value={value} />
          ))}
        </div>
      </article>
    </App>
  );
};

const Stat = ({ keyString, value }) => (
  <dl className="dib mr5">
    <dd className="f6 f5-ns b ml0">{keyString}</dd>
    <dd className="f3 f2-ns b ml0">{value.toLocaleString()}</dd>
  </dl>
);

export default Dashboard;
