"use client"

import { useEffect, useState } from "react"

function randomExpansion(): string {
  const s = ["Software", "Site", "Security", "Server", "Service"]
  const r = [
    "Reconnaissance",
    "Research",
    "Report",
    "Reliability",
    "Response",
    "Reboot",
  ]
  const e = ["Engineer", "Expert", "Explorer", "Evangelist"]

  return [
    s[Math.floor(Math.random() * s.length)],
    r[Math.floor(Math.random() * r.length)],
    e[Math.floor(Math.random() * e.length)],
  ].join(" ")
}

/** Stable first paint so SSR and hydration match; randomizes after mount. */
const INITIAL = "Site Reliability Engineer"

export function SRE() {
  const [sre, setSre] = useState(INITIAL)

  useEffect(() => {
    let cancelled = false
    queueMicrotask(() => {
      if (!cancelled) setSre(randomExpansion())
    })
    return () => {
      cancelled = true
    }
  }, [])

  return sre
}
