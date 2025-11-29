"use client"

import { TZDate } from "@date-fns/tz"
import { formatDistance, formatISO } from "date-fns"
import { useState } from "react"

export default function Age() {
  const birth = new TZDate(1988, 2, 22, 17, "America/Los_Angeles")

  const [now] = useState(() => Date.now())
  if (birth && now) {
    const birthString = formatISO(birth)
    const diffString = formatDistance(birth, now, { addSuffix: true })

    return <time dateTime={birthString}>{diffString}</time>
  }

  return <></>
}
