import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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
})