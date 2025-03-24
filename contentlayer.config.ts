import fs from "fs"

import { defineDocumentType, makeSource } from "contentlayer2/source-files"
import rehypeSlug from "rehype-slug"
import remarkDefinitionList from "remark-definition-list"
import remarkGfm from "remark-gfm"

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => {
        return "/wiki/" + doc._raw.flattenedPath
      },
    },
    pathSegments: {
      type: "json",
      resolve: (doc) => ("/wiki/" + doc._raw.flattenedPath).split("/"),
    },
    path: {
      type: "string",
      resolve: (doc) => {
        return doc._raw.flattenedPath
      },
    },
    modifiedAt: {
      type: "date",
      resolve: (doc) => {
        return new Date(fs.statSync("wiki/" + doc._raw.sourceFilePath).mtime)
      },
    },
    createdAt: {
      type: "date",
      resolve: (doc) => {
        return new Date(fs.statSync("wiki/" + doc._raw.sourceFilePath).ctime)
      },
    },
  },
}))

export default makeSource({
  contentDirPath: "wiki",
  documentTypes: [Page],
  mdx: {
    remarkPlugins: [remarkGfm, remarkDefinitionList],
    rehypePlugins: [rehypeSlug],
  },
})
