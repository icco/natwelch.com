"use client"

import { useEffect, useState } from "react"

export function SRE(): string {
  const [sre, setSRE] = useState<string>("")

  useEffect(() => {
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

    setSRE(
      [
        s[Math.floor(Math.random() * s.length)],
        r[Math.floor(Math.random() * r.length)],
        e[Math.floor(Math.random() * e.length)],
      ].join(" ")
    )
  }, [])

  return sre
}
