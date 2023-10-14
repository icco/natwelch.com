import { format, parseISO } from 'date-fns'
import { allPages} from 'contentlayer/generated'

export const generateStaticParams = async () => allpages.map((page) => ({ slug: page._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const page = allPages.find((page) => page._raw.flattenedPath === params.slug)
  if (!page) throw new Error(`page not found for slug: ${params.slug}`)
  return { title: page.title }
}

const pageLayout = ({ params }: { params: { slug: string } }) => {
  const page = allpages.find((page) => page._raw.flattenedPath === params.slug)
  if (!page) throw new Error(`page not found for slug: ${params.slug}`)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={page.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(page.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{page.title}</h1>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: page.body.html }} />
    </article>
  )
}
