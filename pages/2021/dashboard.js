import React, { useEffect, useState } from "react";
import Head from "next/head";
import { DateTime } from "luxon";

import App from "components/App";
import Header from "components/Header.js";


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [day, setDay] = useState("Today")
  useEffect(async () => {
function getData() {
    fetch("https://graphql.natwelch.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        query: "query {\nstats(count: 25) {\nkey\nvalue\n}\n}",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          console.error(data.errors);
        } else {
          setData(data.data.stats);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  setDay(DateTime.local().toISODate())
}

getData()
    const interval=setInterval(()=>{
      getData()
     },10000)


     return()=>clearInterval(interval)
  });

  return (
    <App>
      <Head>
        <title>Nat Welch | Dashboard</title>
      </Head>
      <Header noLogo navtext={day} />

      <article class="pa3" data-name="slab-stat-large">
        <div class="cf">
          {data.map(({ key, value }) => (
            <Stat keyString={key} value={value} />
          ))}
        </div>
      </article>
    </App>
  );
};

const Stat = ({ keyString, value }) => (
  <dl className="db dib-l w-auto-l lh-title">
    <dd className="f6 fw4 ml0">{keyString}</dd>
    <dd className="f2 f-subheadline-l fw6 ml0">{value}</dd>
  </dl>
);

export default Dashboard;
