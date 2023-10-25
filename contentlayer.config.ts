import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from "rehype-slug"
import remarkDefinitionList from 'remark-definition-list'

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => {
        return '/wiki/' + doc._raw.flattenedPath
      },
    },
    pathSegments: {
      type: 'json',
      resolve: (doc) => ('/wiki/' + doc._raw.flattenedPath).split('/')
    },
  },
}))

export default makeSource({
  contentDirPath: 'wiki',
  documentTypes: [Page],
  mdx: {
    remarkPlugins: [remarkGfm, remarkDefinitionList],
    rehypePlugins: [rehypeSlug],
  },
})
