"use client"

import { SiteHeader } from "@icco/react-common/SiteHeader"
import { usePathname } from "next/navigation"

export function SmallHeader() {
  const path = usePathname()
  const pieces = path.split("/").filter(Boolean)
  const links = pieces.map((piece, index) => ({
    name: piece,
    href: `/${pieces.slice(0, index + 1).join("/")}`,
  }))
  return <SiteHeader links={links} />
}
