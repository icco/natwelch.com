import assert from "node:assert/strict"
import { test } from "node:test"

import { proxy } from "../src/proxy.ts"

for (const path of ["/", "/wiki/about", "/feed.rss"]) {
  test(`rejects unsupported Server Action POSTs to ${path}`, () => {
    const response = proxy(
      new Request(`https://example.com${path}`, {
        method: "POST",
        headers: { "Next-Action": "r2s" },
        body: "[]",
      })
    )
    assert.equal(response?.status, 405)
    assert.equal(response?.headers.get("Allow"), "GET, HEAD, OPTIONS")
  })
}

for (const method of ["GET", "HEAD", "OPTIONS"]) {
  test(`allows ${method} requests`, () => {
    assert.equal(
      proxy(new Request("https://example.com/feed.rss", { method })),
      undefined
    )
  })
}

for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
  test(`rejects unsupported ${method} requests without an action header`, () => {
    assert.equal(
      proxy(new Request("https://example.com/", { method }))?.status,
      405
    )
  })
}
