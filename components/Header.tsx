import Link from "next/link";
import React from "react";

import { Breadcrumbs } from "./Lists";

export function SmallHeader() {
  return (
    <header>
      <div>
        <Link href="/">TBD</Link>
        <div />
        <Breadcrumbs />
      </div>
    </header>
  );
}

export function SmallHeaderWithText({ navtext }) {
  return (
    <header>
      <Link href="/">TBD</Link>
      <div />
      <h1>{navtext}</h1>
    </header>
  );
}

export function LargeHeader() {
  const links = [
    ["Wiki", "/wiki"],
    ["Resume", "https://resume.natwelch.com"],
  ];

  return (
    <header>
      <div>TBD</div>
      <div>
        <h1>Nat Welch</h1>
        <h2>Software Reconnaissance Engineer</h2>
        <div>
          {links.map(([name, link]) => {
            return (
              <h2 key={name}>
                <Link href={link}>{name}</Link>
              </h2>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export function Header({ size }: { size: Size; }) {
  switch (size) {
    case Size.Large:
      return <LargeHeader />;
    case Size.Medium:
      return <SmallHeaderWithText navtext={this.props.navtext} />;
    case Size.Small:
      return <SmallHeader />;
  }
}

export default Header;
