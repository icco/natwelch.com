"use client"

import { formatTime } from "improved-relative-time"
import { isString } from "lodash"
import { MDXComponents } from "mdx/types"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer2/hooks"

import Age from "@/components/Age"
import Footer from "@/components/Footer"
import HeaderImage from "@/components/HeaderImage"
import { buildTree, getPaths, Tree } from "@/components/Lists"
import { Social } from "@/components/Social"

import { allPages, type Page } from "contentlayer/generated"

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

export function WikiPage({ page }: { page: Page }) {
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