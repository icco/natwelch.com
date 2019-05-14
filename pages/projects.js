import Head from "next/head";

import App from "../components/App";
import Header from "../components/Header.js";
import ProjectData from "../components/ProjectData.js";
import ProjectLogo from "../components/ProjectLogo.js";
import TextHeader from "../components/TextHeader.js";

let article_class = "cf pv1 ph3 pv2-ns mv3";
let p_class = "measure-wide f5 f4-ns";

export default () => (
  <App>
    <Head>
      <title>Nat Welch | Projects</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns mw7">
      <article className={article_class}>
        <TextHeader level="1">Projects</TextHeader>

        <p className={p_class}>
          I post photos with varying consistency on{" "}
          <a href="https://www.flickr.com/photos/icco/">Flickr</a> &amp;{" "}
          <a href="https://www.instagram.com/probablynatwelch/">Instagram</a>. I
          try to be randomly clever on{" "}
          <a href="https://twitter.com/icco">Twitter</a>. I publish code on{" "}
          <a href="https://github.com/icco">Github</a>. Below are some of my
          favorite projects that I have or am working on. This list does not
          include any projects which are not open source. Please see my{" "}
          <a href="https://resume.natwelch.com/">resume</a> for work projects I
          have been a part of.
        </p>
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          GraphQL
        </TextHeader>

        <p className={p_class}>
          GraphQL is my my server for storing data for use in my projects. It's
          hosted at{" "}
          <a href="https://graphql.natwelch.com">graphql.natwelch.com</a> and
          the code is at{" "}
          <a href="https://github.com/icco/graphql">github.com/icco/graphql</a>.
        </p>

        <ProjectData owner="icco" repo="graphql" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          sadnat.com
        </TextHeader>

        <p className={p_class}>
          sadnat.com is a project I started years ago and was updated
          semi-regularly for years. It chronicled events that made me sad as
          observed by other people.
        </p>

        <ProjectData owner="icco" repo="sadnat.com" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Giftionary
        </TextHeader>
        <p className={p_class}>
          Giftionary was a website for hosting and sharing Gifs. It started as a
          tool to find the best gifs on Tumblr, and then transformed into a
          personal Gif Dictionary.
        </p>

        <ProjectData owner="icco" repo="giftionary" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Inspiration
        </TextHeader>
        <p className={p_class}>
          <a href="https://mood.natwelch.com">Inspiration</a> is a somewhat
          defunct project to generate a dynamic mood board based off of my
          personal interests. It still works but most of the datasources are no
          longer generating fresh content.
        </p>

        <ProjectData owner="icco" repo="inspiration" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Fog
        </TextHeader>
        <p className={p_class}>
          I am a core contributor to Fog, a ruby library for talking to various
          cloud libraries in a consistent manor.
        </p>

        <ProjectData owner="fog" repo="fog" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          GoTak
        </TextHeader>
        <p className={p_class}>
          <a href="https://gotak.app">GoTak</a> is an application written in Go
          for playing{" "}
          <a href="https://boardgamegeek.com/boardgame/197405/tak">Tak</a>{" "}
          online. It provides an api for games, moves, and a library for parsing{" "}
          <a href="https://www.reddit.com/r/Tak/wiki/portable%20tak%20notation">
            PTN
          </a>
          .
        </p>

        <ProjectData owner="icco" repo="gotak" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Time
        </TextHeader>
        <p className={p_class}>
          Time is an attempt to implement the NTP spec in Go.
        </p>

        <ProjectData owner="icco" repo="time" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Etu
        </TextHeader>
        <p className={p_class}>
          Etu is an attempt to implement a time tracker.
        </p>

        <ProjectData owner="icco" repo="etu" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          three-things
        </TextHeader>
        <p className={p_class}>
          A very simple library that implements RED metrics and forwards them to
          Datadog or Statsd.
        </p>

        <ProjectData owner="icco" repo="three-things" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          instagram-continued
        </TextHeader>
        <p className={p_class}>
          This gem is an attempt to keep a ruby library working against the
          Instagram API, despite Facebook's constant shutting down of APIs and
          requiring business backing to access existing ones.
        </p>

        <ProjectData owner="icco" repo="instagram-continued" />
      </article>
    </section>
  </App>
);
