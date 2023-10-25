import { allPages } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => allPages.map((page) => ({ slug: page.url }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const page = allPages.find((page) => page._raw.flattenedPath === params.slug)
  if (!page) throw new Error(`page not found for slug: ${params.slug}`)
  return { title: `Nat Welch | ${page.title}` }
}

const PageLayout = ({ params }: { params: { slug: string } }) => {
  const page = allPages.find((page) => page._raw.flattenedPath === params.slug)
  if (!page) notFound()

  const MDXContent = useMDXComponent(page.body.code)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" >
        <MDXContent />
      </div>
    </article>
  )
}

export default PageLayout