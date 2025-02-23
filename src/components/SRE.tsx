"use client"

export function SRE(): string {
  const s = ["Software", "Site"]
  const r = ["Reconnaissance", "Research", "Reporting", "Reliability"]
  const e = ["Engineer", "Expert", "Explorer", "Evangelist"]

  return [
    s[Math.floor(Math.random() * s.length)],
    r[Math.floor(Math.random() * r.length)],
    e[Math.floor(Math.random() * e.length)],
  ].join(" ")
}