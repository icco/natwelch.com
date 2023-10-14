import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/wiki/${page._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'wiki', documentTypes: [Page] })
