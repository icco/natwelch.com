---
title: Colophon
---

A [Colophon](https://en.wikipedia.org/wiki/Colophon_(publishing)) is a page that tells you how a thing is made.

## Stack

This site is built with [Next.js](https://nextjs.org/) and [React](https://react.dev/), written in [TypeScript](https://www.typescriptlang.org/). Pages are statically generated where possible, with a few routes that revalidate on a short interval to pull in fresh content.

Wiki content (like this page) is written in Markdown and processed by [Contentlayer2](https://github.com/timlrx/contentlayer2), which compiles each `.md` file into typed data at build time. Markdown is extended with [GitHub-flavored Markdown](https://github.github.com/gfm/) and definition list support.

Styling is done with [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for component theming, plus the Tailwind Typography plugin for prose. The site supports light and dark mode via [next-themes](https://github.com/pacocoursey/next-themes).

I build a bunch of personal sites for entertainment and/or utility. Most either use something like the above stack or use Go and Chi as their setup.

### Hosting & Deployment

The site runs in a [Docker](https://www.docker.com/) container using Next.js standalone output. Images are built and published to the GitHub Container Registry via [GitHub Actions](https://github.com/features/actions) on every push to `main`.

Almost every site I maintain now runs on premise on my Home Lab.

### Content

The blog feed on the homepage is pulled from [writing](/wiki/projects/writing) via RSS. Photos are served through [imgix](https://imgix.com/) for optimization and resizing. They are uploaded by [Photos](/wiki/projects/photos). The site also supports [Webmentions](https://webmention.io/).

## Personal

TODO add info about development setup.
