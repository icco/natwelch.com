import assert from "node:assert/strict"
import { afterEach, mock, test } from "node:test"

import { fetchFeed } from "../src/lib/rss.ts"

afterEach(() => mock.restoreAll())

test("rejects HTTP error pages before parsing them as feeds", async () => {
  const response = new Response("<html>Not Found</html>", { status: 404 })
  const readBody = mock.method(response, "text")
  mock.method(globalThis, "fetch", async () => response)
  const warning = mock.method(console, "warn", () => {})
  const error = mock.method(console, "error", () => {})

  assert.deepEqual(await fetchFeed("https://example.com/feed"), [])
  assert.equal(readBody.mock.callCount(), 0)
  assert.equal(warning.mock.callCount(), 1)
  assert.match(String(warning.mock.calls[0].arguments[0]), /HTTP 404/)
  assert.equal(error.mock.callCount(), 0)
})

test("parses successful feeds and limits them to 25 items", async () => {
  const items = Array.from(
    { length: 26 },
    (_, i) => `<item><title>Post ${i}</title><guid>post-${i}</guid></item>`
  ).join("")
  mock.method(globalThis, "fetch", async () => {
    return new Response(
      `<rss version="2.0"><channel><title>Example</title>${items}</channel></rss>`
    )
  })

  const result = await fetchFeed("https://example.com/feed")
  assert.equal(result.length, 25)
  assert.equal(result[0].title, "Post 0")
  assert.equal(result[24].title, "Post 24")
})

test("reports an unavailable upstream without failing the caller", async () => {
  mock.method(globalThis, "fetch", async () => {
    throw new Error("upstream unavailable")
  })
  const warning = mock.method(console, "warn", () => {})
  const error = mock.method(console, "error", () => {})

  assert.deepEqual(await fetchFeed("https://example.com/feed"), [])
  assert.equal(warning.mock.callCount(), 1)
  assert.equal(error.mock.callCount(), 0)
})
