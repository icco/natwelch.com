import { Metadata } from "next"
import { notFound } from "next/navigation"

import { allPages } from "contentlayer/generated"

import { WikiPage } from "./WikiPage"

export const generateStaticParams = async () =>
  allPages.map((page) => ({ slug: page._raw.flattenedPath.split("/") }))

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> => {
  const slugPath = params.slug.join("/")
  const page = allPages.find((page) => page._raw.flattenedPath === slugPath)

  if (!page) notFound()

  return { title: `Nat Welch | ${page.title}` }
}

export default function Page({
  params,
}: {
  params: { slug: string[] }
}) {
  const slugPath = params.slug.join("/")
  const page = allPages.find((page) => page._raw.flattenedPath === slugPath)

  if (!page) notFound()

  return <WikiPage page={page} />
}
