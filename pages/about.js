import Header from "../components/Header.js";
import Head from "next/head";

export default () => (
  <>
    <Head>
      <title>Nat Welch | About</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy">
      <article class="pa3 pa5-ns">
        <h1 class="f3 f2-m f1-l">Speaker Bio</h1>
        <p class="measure lh-copy">
          Nat Welch is an Site Reliability Engineer based in Brooklyn, NY, and
          the author of "Real World SRE" from Packt Publishing. He has been
          professionally building and running software on the internet since
          2005, and loves making tools and promoting conversation online. He
          currently works for Google on the Customer Reliability Engineering
          team. In the past, he has worked for First Look Media, Hillary for
          America, iFixit, and others.
        </p>
      </article>

      <article class="ph3 ph5-ns">
        <h1 class="f3 f2-m f1-l">Nat around the world</h1>
        <p class="measure lh-copy">
          I have lived in San Francisco, London, New York and a few other
          places. When I move, I try to create a blog post of my favorite places
          in a city right before I leave. I then don't update them. As such,
          they are very out of date. That being said, I enjoy looking at them
          and sharing with friends traveling.
        </p>

        <ul>
          <li>
            <a
              className="link blue"
              href="https://writing.natwelch.com/post/526"
            >
              London
            </a>
          </li>
          <li>
            <a
              className="link blue"
              href="https://writing.natwelch.com/post/522"
            >
              SF
            </a>
          </li>
          <li>
            <a
              className="link blue"
              href="https://foursquare.com/icco/list/places-i-love-in-seattle"
            >
              Seattle
            </a>
          </li>
          <li>
            <a
              className="link blue"
              href="https://foursquare.com/icco/list/my-favorite-foods-in-slo"
            >
              San Luis Obispo
            </a>
          </li>
        </ul>
      </article>
    </section>
  </>
);
