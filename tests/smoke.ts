import assert from "node:assert/strict"
import { spawn } from "node:child_process"
import { once } from "node:events"
import { setTimeout } from "node:timers/promises"

const origin = "http://127.0.0.1:3187"
const server = spawn(process.execPath, [".next/standalone/server.js"], {
  env: { ...process.env, HOSTNAME: "127.0.0.1", PORT: "3187" },
  stdio: ["ignore", "pipe", "pipe"],
})
const exited = once(server, "exit")
let output = ""
server.stdout.on("data", (chunk) => (output += chunk))
server.stderr.on("data", (chunk) => (output += chunk))

try {
  const deadline = Date.now() + 30_000
  while (true) {
    try {
      const response = await fetch(`${origin}/wiki`, {
        signal: AbortSignal.timeout(1000),
      })
      assert.equal(response.status, 200)
      await response.arrayBuffer()
      break
    } catch (error) {
      if (Date.now() >= deadline || server.exitCode !== null) {
        throw new Error(`Server did not become ready: ${output}`, {
          cause: error,
        })
      }
      await setTimeout(100)
    }
  }

  for (const path of ["/", "/wiki/about", "/feed.rss"]) {
    const response = await fetch(`${origin}${path}`, {
      method: "POST",
      headers: { "Next-Action": "r2s", "Content-Type": "text/plain" },
      body: "[]",
      signal: AbortSignal.timeout(5000),
    })
    assert.equal(response.status, 405, path)
    assert.equal(response.headers.get("Allow"), "GET, HEAD, OPTIONS")
    await response.arrayBuffer()
  }
  assert.doesNotMatch(
    output,
    /Server Reference ID|Failed to find Server Action/
  )
} finally {
  server.kill("SIGTERM")
  await exited
}
