import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import tsParser from "@typescript-eslint/parser"
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const config = [
  {
    ignores: [".contentlayer/**", ".next/**", "node_modules/**"],
  },
  ...compat.extends("eslint:recommended"),
  ...nextCoreWebVitals,
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:markdown/recommended-legacy"),
  ...compat.extends("plugin:prettier/recommended"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "simple-import-sort/exports": "error",

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^\\u0000"],
            [
              "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
            ],
            ["^@?\\w"],
            ["^"],
            ["^components(/.*|$)", "^lib(/.*|$)"],
            ["contentlayer/generated"],
            ["^\\."],
          ],
        },
      ],
    },
  },
]

export default config
