import Head from "next/head";

import Header from "../components/Header.js";
import ProjectData from "../components/ProjectData.js";
import ProjectLogo from "../components/ProjectLogo.js";
import TextHeader from "../components/TextHeader.js";

let article_class = "cf mw7 bg-white br3 pv1 ph3 pv2-ns mv3 ba b--black-10";

export default () => (
  <>
    <Head>
      <title>Nat Welch | Projects</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns">
      <TextHeader level="1">Projects</TextHeader>

      <p className="measure">
        I post photos with varying consistency on{" "}
        <a href="https://www.flickr.com/photos/icco/">Flickr</a> &amp;{" "}
        <a href="https://www.instagram.com/probablynatwelch/">Instagram</a>. I
        try to be randomly clever on{" "}
        <a href="https://twitter.com/icco">Twitter</a>. I publish code on{" "}
        <a href="https://github.com/icco">Github</a>. Below are some of my
        favorite projects that I have or am working on.
      </p>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          GraphQL
        </TextHeader>
        <ProjectLogo name="graphql" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70">
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
        <ProjectLogo name="" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          sadnat.com
        </TextHeader>
        <ProjectLogo name="sadnat" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="sadnat.com" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Giftionary
        </TextHeader>
        <ProjectLogo name="giftionary" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="giftionary" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Inspiration
        </TextHeader>
        <ProjectLogo name="inspiration" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="inspiration" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Fog
        </TextHeader>
        <ProjectLogo name="fog" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="fog" repo="fog" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          GoTak
        </TextHeader>
        <ProjectLogo name="gotak" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="gotak" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Time
        </TextHeader>
        <ProjectLogo name="time" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="time" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Onesie
        </TextHeader>
        <ProjectLogo name="onesie" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="onesie-be" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          new_job
        </TextHeader>
        <ProjectLogo name="newjob" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="new_job" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          bloomFilter
        </TextHeader>
        <ProjectLogo name="bloomfilter" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="bloomfilter" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          Coffee Shop
        </TextHeader>
        <ProjectLogo name="" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="coffee_shop" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          three-things
        </TextHeader>
        <ProjectLogo name="" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="three-things" />
      </article>

      <article className={article_class}>
        <TextHeader level="2" className="dib mt1 mb2">
          instagram-continued
        </TextHeader>
        <ProjectLogo name="" className="db fr-ns" />
        <p className="lh-copy measure f6 black-70" />

        <ProjectData owner="icco" repo="instagram-continued" />
      </article>
    </section>
  </>
);
