import Head from "next/head";

import Header from "../components/Header.js";
import ProjectData from "../components/ProjectData.js";
import ProjectLogo from "../components/ProjectLogo.js";
import TextHeader from "../components/TextHeader.js";

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

      <article className="">
        <TextHeader level="2">GraphQL</TextHeader>
        <ProjectLogo name="graphql" />

        <p className="measure">
  GraphQL is my my server for storing data for use in my projects. It's hosted at <a href="https://graphql.natwelch.com">graphql.natwelch.com</a> and the code is at <a href="https://github.com/icco/graphql">.</p>

      <ProjectData owner="icco" repo="graphql" />
      </article>

      <article className="">
        <TextHeader level="2">Google Cloud Status</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">sadnat.com</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">Giftionary</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">Inspiration</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">Fog</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">GoTak</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">Time</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">Onesie</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">new_job</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">bloomFilter</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">Coffee Shop</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">three-things</TextHeader>
      </article>

      <article className="">
        <TextHeader level="2">instagram-continued</TextHeader>
      </article>
    </section>
  </>
);
