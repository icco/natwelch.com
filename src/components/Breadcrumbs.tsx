"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Inspo: https://github.com/alphardex/aqua.css/blob/master/src/breadcrumb.scss
export const Breadcrumbs = () => {
  const path = usePathname()

  const pieces = path.split("/").filter((piece) => {
    return !!piece
  })
  return (
    <ol className="m-0 flex flex-wrap content-center justify-end px-1">
      {pieces.map((piece: string, index: number) => {
        return (
          <li
            key={piece}
            className="text-muted last:text-link pr-2 before:content-['/']"
          >
            <Link
              className="text-inherit"
              href={`/${pieces.slice(0, index + 1).join("/")}`}
            >
              {piece}
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
