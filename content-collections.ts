import { defineCollection, defineConfig } from "@content-collections/core"
import { createProcessor } from "@mdx-js/mdx"
import fs from "node:fs"
import rehypeSlug from "rehype-slug"
import remarkDefinitionList from "remark-definition-list"
import remarkGfm from "remark-gfm"
import { z } from "zod"

const mdx = createProcessor({
  outputFormat: "function-body",
  remarkPlugins: [remarkGfm, remarkDefinitionList],
  rehypePlugins: [rehypeSlug],
})

const pages = defineCollection({
  name: "pages",
  directory: "wiki",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    content: z.string(),
  }),
  transform: async ({ content, _meta, ...page }, { cache }) => ({
    ...page,
    _id: _meta.filePath,
    _raw: {
      sourceFilePath: _meta.filePath,
      sourceFileName: _meta.fileName,
      sourceFileDir: _meta.directory,
      flattenedPath: _meta.path,
    },
    type: "Page" as const,
    body: {
      raw: content,
      code: await cache(content, async (source) =>
        String(await mdx.process(source))
      ),
    },
    url: `/wiki/${_meta.path}`,
    path: _meta.path,
    modifiedAt: fs.statSync(`wiki/${_meta.filePath}`).mtime.toISOString(),
  }),
})

export default defineConfig({ content: [pages] })
