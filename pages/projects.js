import Head from "next/head";

import Header from "../components/Header.js";
import ProjectData from "../components/ProjectData.js";
import ProjectLogo from "../components/ProjectLogo.js";
import TextHeader from "../components/TextHeader.js";

let article_class = "cf pv1 ph3 pv2-ns mv3";
let p_class = "margin-wide f6";

export default () => (
  <>
    <Head>
      <title>Nat Welch | Projects</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns mw7">
      <article className={article_class}>
        <TextHeader level="1">Projects</TextHeader>

        <p className="measure-wide">
          I post photos with varying consistency on{" "}
          <a href="https://www.flickr.com/photos/icco/">Flickr</a> &amp;{" "}
          <a href="https://www.instagram.com/probablynatwelch/">Instagram</a>. I
          try to be randomly clever on{" "}
          <a href="https://twitter.com/icco">Twitter</a>. I publish code on{" "}
          <a href="https://github.com/icco">Github</a>. Below are some of my
          favorite projects that I have or am working on.
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
          Google Cloud Status
        </TextHeader>

        <p className={p_class}>
          I wrote the original version status.cloud.google.com. It serves as the
          public communication channel for Google Cloud Platform to users.
        </p>

        <ProjectData owner="" repo="" />
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
        <p className={p_class} />

        <ProjectData owner="icco" repo="giftionary" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Inspiration
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="icco" repo="inspiration" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Fog
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="fog" repo="fog" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          GoTak
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="icco" repo="gotak" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Time
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="icco" repo="time" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Onesie
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="icco" repo="onesie" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          new_job
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="icco" repo="new_job" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          bloomFilter
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="icco" repo="bloomfilter" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Coffee Shop
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="icco" repo="coffee_shop" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          three-things
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="icco" repo="three-things" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          instagram-continued
        </TextHeader>
        <p className={p_class} />

        <ProjectData owner="icco" repo="instagram-continued" />
      </article>
    </section>
  </>
);
