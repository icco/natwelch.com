import Link from "next/link";

import Age from "../components/Age.js";

export default () => (
  <section className="cf lh-copy">
    <div className="fl-l wi-50-l ph3 pv4 pa3-m pa5-l">
      <h2>
        <Link href="/about">
          <a>About</a>
        </Link>
      </h2>
      <p className="f3 f2-l measure w8-l mt3">
        Nat is <Age /> year old from the San Francisco Bay Area, currently
        living in Brooklyn and working as a Site Reliability Engineer for
        Google's Customer Reliability Engineering team.
      </p>

      <h2>
        <Link href="/talks">
          <a>Talks</a>
        </Link>
      </h2>
      <p className="f3 f2-l measure w8-l mt3">
        Promoting communication, creativity and sharing on the Internet.
      </p>

      <h2>
        <Link href="/projects">
          <a>Building</a>
        </Link>
      </h2>
      <p className="f3 f2-l measure w8-l mt3">
        Automating things and building software tools to make maintaining the
        internet easier.
      </p>

      <h2>
        <Link href="/writing">
          <a>Writing</a>
        </Link>
      </h2>
      <p className="f3 f2-l measure w8-l mt3">
        Advocating for transparency, remix culture and open source software.
      </p>
    </div>
  </section>
);
