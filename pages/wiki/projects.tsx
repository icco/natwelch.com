import App from "components/App";
import Header from "components/Header";
import TextHeader from "components/TextHeader";
import Head from "next/head";

const article_class = "cf pv1 ph3 pv2-ns mv3";
const p_class = "measure-wide f5 f4-ns";

const Projects = () => (
  <App>
    <Head>
      <title>Nat Welch | Projects</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns">
      <TextHeader level="1">Projects</TextHeader>

      <article className={article_class}>
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
          GraphQL is my server for storing data for use in my projects. It is
          hosted at{" "}
          <a href="https://graphql.natwelch.com">graphql.natwelch.com</a> and
          the code is at{" "}
          <a href="https://github.com/icco/graphql">github.com/icco/graphql</a>.
        </p>
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          ReportD
        </TextHeader>

        <p className={p_class}>
          ReportD is a service to send{" "}
          <a href="https://developers.google.com/web/updates/2018/09/reportingapi">
            report-to
          </a>{" "}
          reports to. If you use{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">
            CSP
          </a>
          , <a href="https://www.w3.org/TR/network-error-logging/">NEL</a>,{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins">
            HPKP
          </a>
          ,{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT">
            Expect-CT
          </a>{" "}
          or other tools that support the{" "}
          <a href="https://www.w3.org/TR/reporting/">Web Reporting API</a>, you
          can use this as a target.
        </p>
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
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Fog
        </TextHeader>
        <p className={p_class}>
          I am a core contributor to <a href="http://fog.io">Fog</a>, a ruby
          library for talking to various cloud libraries in a consistent manor.
        </p>
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
          <a href="https://web.archive.org/web/20190508064910/https://www.reddit.com/r/Tak/wiki/portable_tak_notation">
            PTN
          </a>
          .
        </p>
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Tab Archive
        </TextHeader>
        <p className={p_class}>
          <a href="https://tab-archive.app">Tab Archive</a> is a browser
          extension for closing and archiving your tabs.
        </p>
      </article>
    </section>
  </App>
);

export default Projects;
