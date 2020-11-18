import Head from "next/head";

import Age from "../components/Age.js";
import App from "../components/App";
import Header from "../components/Header.js";
import Social from "../components/Social.js";
import TextHeader from "../components/TextHeader.js";

const About = () => <App>
  <Head>
    <title>Nat Welch | About</title>
  </Head>
  <Header noLogo />
  <section className="cf lh-copy pa3 pa5-ns">
    <TextHeader level="1">About</TextHeader>
    <TextHeader level="2">Nat Welch</TextHeader>
    <article className="lh-copy f4-ns f5 measure-wide">
      <p className="">
        Hi there! I'm Nat. I was born in the San Francisco Bay Area, <Age />{" "}
        ago. I currently live in Brooklyn with my wife Melissa and our cat
        Beasley. During the day I work as a Site Reliability Engineer for
        Google's Customer Reliability Engineering team.
      </p>

      <p className="">
        You can see <a href="https://resume.natwelch.com">my resume</a> for
        indepth work history.
      </p>

      <p className="">
        I have some core beliefs that are the basis for most things that I do.
      </p>

      <ul className="list pa0">
        <li className="mv3 pl3 bl bw2 b--beige">
          Sharing information is the most important action in human society.
        </li>

        <li className="mv3 pl3 bl bw2 b--beige">
          I love automating things and building software tools to make
          maintaining the internet easier.
        </li>

        <li className="mv3 pl3 bl bw2 b--beige">
          Nature is beautiful and must be preserved.
        </li>

        <li className="mv3 pl3 bl bw2 b--beige">
          Humans are inherently good and hilarious, and communicating with
          them well is important.
        </li>
      </ul>

      <p>
        I expand on these in depth on my blog:{" "}
        <a href="https://writing.natwelch.com/post/703">
          Nat Welch Manifesto
        </a>
      </p>
    </article>

    <TextHeader level="2">Social</TextHeader>
    <article className="lh-copy f4-ns f5 measure-wide">
      <Social className="" linkClassName="mv3 mr3 gray" />
    </article>

    <TextHeader level="2">Nat around the world</TextHeader>
    <article className="lh-copy f4-ns f5 measure-wide">
      <p className="">
        I have lived in San Francisco, London, New York and a few other
        places. When I move, I try to create a blog post of my favorite places
        in a city right before I leave. I then don't update them. As such,
        they are very out of date. That being said, I enjoy looking at them
        and sharing with friends traveling.
      </p>

      <ul>
        <li>
          <a href="https://writing.natwelch.com/post/526">London</a>
        </li>
        <li>
          <a href="https://writing.natwelch.com/post/522">SF</a>
        </li>
        <li>
          <a href="https://foursquare.com/icco/list/places-i-love-in-seattle">
            Seattle
          </a>
        </li>
        <li>
          <a href="https://foursquare.com/icco/list/my-favorite-foods-in-slo">
            San Luis Obispo
          </a>
        </li>
      </ul>
    </article>

    <TextHeader level="2">Speaker Bio</TextHeader>
    <article className="lh-copy f4-ns f5 measure-wide">
      <p className="">
        Nat Welch is an Site Reliability Engineer based in Brooklyn, NY, and
        the author of "Real World SRE" from Packt Publishing. He has been
        professionally building and running software on the internet since
        2005, and loves making tools and promoting conversation online. He
        currently works for Google on the Customer Reliability Engineering
        team. In the past, he has worked for First Look Media, Hillary for
        America, iFixit, and others.
      </p>
    </article>
  </section>
</App>;

export default About;
