"use client"

import { useReportWebVitals } from "next/web-vitals"

export function WebVitals() {
  useReportWebVitals((metric) => {
    const body = JSON.stringify(metric)
    const url = "https://reportd.natwelch.com/analytics/natwelch"

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body)
    } else {
      fetch(url, { body, method: "POST", keepalive: true })
    }
  })

  return <></>
}
