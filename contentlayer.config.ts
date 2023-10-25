import { DocumentGen } from 'contentlayer/core'
import { LocalDocument, defineDocumentType, makeSource } from 'contentlayer/source-files'

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
        if (doc._id.startsWith('wiki/index.md')) return '/docs'
        return urlFromFilePath(doc)
      },
    },
    pathSegments: {
      type: 'json',
      resolve: (doc) =>
        urlFromFilePath(doc)
          .split('/')
          // skip `/docs` prefix
          .slice(2)
          .map((dirName) => {
            const re = /^((\d+)-)?(.*)$/
            const [, , orderStr, pathName] = dirName.match(re) ?? []
            const order = orderStr ? parseInt(orderStr) : 0
            return { order, pathName }
          }),
    },
  },
}))

export const urlFromFilePath = (doc: DocumentGen): string => {
  let urlPath = doc._raw.flattenedPath.replace(/^pages\/?/, '/')
  if (!urlPath.startsWith('/')) urlPath = `/${urlPath}`
  if ('global_id' in doc) urlPath += `-${doc.global_id}`
  // Remove preceding indexes from path segments
  urlPath = urlPath
    .split('/')
    .map((segment) => segment.replace(/^\d\d\d\-/, ''))
    .join('/')
  return urlPath
}

export default makeSource({
  contentDirPath: 'wiki',
  documentTypes: [Page],
})
