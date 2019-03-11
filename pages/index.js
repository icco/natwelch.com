import Link from "next/link";

import Age from "../components/Age.js";

const h2_class = "lh-title f2-l f3 fw1 tracked pa3 ma0 near-black bg-moon-gray";
const p_class = "f4 f3-l measure w8-l mt3 mr0 ph3 near-black";
const link_class = "black link";

export default () => (
  <section className="cf lh-copy">
    <div className="fl-l wi-50-l ph3 pv4 pa3-m pa5-l">
      <h2 className={h2_class}>
        <Link href="/about">
          <a className={link_class}>About »</a>
        </Link>
      </h2>
      <p className={p_class}>
        Nat was born in the San Francisco Bay Area <Age /> ago. He currently is
        living in Brooklyn and working as a Site Reliability Engineer for
        Google's Customer Reliability Engineering team.
      </p>

      <h2 className={h2_class}>
        <Link href="/talks">
          <a className={link_class}>Talks »</a>
        </Link>
      </h2>
      <p className={p_class}>
        Promoting communication, creativity and sharing on the Internet.
      </p>

      <h2 className={h2_class}>
        <Link href="/projects">
          <a className={link_class}>Building »</a>
        </Link>
      </h2>
      <p className={p_class}>
        Automating things and building software tools to make maintaining the
        internet easier.
      </p>

      <h2 className={h2_class}>
        <Link href="/writing">
          <a className={link_class}>Writing »</a>
        </Link>
      </h2>
      <p className={p_class}>
        Advocating for transparency, remix culture and open source software.
      </p>
    </div>
  </section>
);
