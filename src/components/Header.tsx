import Logo from "@icco/react-common/Logo"
import Link from "next/link"

import { SmallHeader } from "./SmallHeader"
import { SRE } from "./SRE"

export function LargeHeader() {
  const links = [
    ["Wiki", "/wiki"],
    ["Resume", "https://resume.natwelch.com"],
    ["Blog", "https://writing.natwelch.com"],
  ]

  return (
    <header>
      <div className="flex flex-col items-center justify-center">
        <Logo
          size={200}
          className="logo m-0 flex flex-row items-center justify-center stroke-current p-0"
        />
        <h1 className="mt-6 flex-row text-4xl font-bold">Nat Welch</h1>
        <h2 className="mt-4 flex-row text-2xl font-bold">
          <SRE />
        </h2>
        <div className="mt-6 flex flex-row items-center justify-center text-xl">
          {links.map(([name, link]) => {
            return (
              <div key={name}>
                <Link className="px-4 text-xl" href={link}>
                  {name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export function Header({ size }: { size: Size }) {
  switch (size) {
    case Size.Large:
      return <LargeHeader />
    case Size.Small:
      return <SmallHeader />
    default:
      return <></>
  }
}
