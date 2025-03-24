import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { allPages } from "contentlayer/generated"

export const generateStaticParams = async () =>
  allPages.map((page) => ({ slug: page._raw.flattenedPath.split("/") }))

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> => {
  const page = allPages.find(
    (page) => page._raw.flattenedPath === params.slug.join("/")
  )

  if (!page) notFound()

  return { title: `Nat Welch | ${page.title}` }
} 