"use client"

import { useState } from "react"

export function SRE(): string {
  const [sre] = useState<string>(() => {
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
  })

  return sre
}
