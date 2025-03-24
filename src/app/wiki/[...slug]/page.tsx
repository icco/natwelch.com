import { formatTime } from "improved-relative-time"
import { isString } from "lodash"
import { MDXComponents } from "mdx/types"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer2/hooks"

import Age from "@/components/Age"
import Footer from "@/components/Footer"
import HeaderImage from "@/components/HeaderImage"
import { buildTree, getPaths, Tree } from "@/components/Lists"
import { Social } from "@/components/Social"

import { allPages } from "contentlayer/generated"

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

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Age: () => <Age />,
  Social: () => <Social />,
  HeaderImage: ({ src, alt }) => <HeaderImage src={src} alt={alt} />,
}

function MDXContentWrapper({
  code,
  components,
}: {
  code: string
  components: MDXComponents
}) {
  try {
    const MDXContent = useMDXComponent(code)
    return <MDXContent components={components} />
  } catch (error) {
    console.error("Error rendering MDX content:", error)
    return (
      <div className="alert alert-error">
        <p>Error rendering page content. Please try refreshing the page.</p>
      </div>
    )
  }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slugPath = params.slug.join("/")
  const page = allPages.find((page) => page._raw.flattenedPath === slugPath)

  if (!page) notFound()

  const childrenTree = buildTree(getPaths(allPages), allPages, (value) =>
    value.startsWith(page.path)
  )
  const hasChildren = isString(childrenTree)

  const modifiedAt = formatTime(new Date(page.modifiedAt), "Computer", {
    level: "verbose",
  })

  return (
    <>
      <article className="prose lg:prose-xl">
        <h1>{page.title}</h1>
        <p>Last updated: {modifiedAt}</p>

        <MDXContentWrapper code={page.body.code} components={mdxComponents} />
        {hasChildren && (
          <>
            <div className="divider"></div>
            <h3>{page.title} Subpages</h3>
            <Tree items={childrenTree} />
          </>
        )}
      </article>
      <Footer edit={page.path + ".md"} />
    </>
  )
}
