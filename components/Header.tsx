import { Logo } from "@icco/react-common";
import Link from "next/link";
import React from "react";

import { Breadcrumbs } from "./Lists";

export function SmallHeader() {
  return (
    <header>
      <div>
        <Link href="/" legacyBehavior>
          <Logo
            size={50}
            sx={{
              verticalAlign: "middle",
              py: 0,
              my: [null, 1],
              display: "inline-block",
              textAlign: "center",
              stroke: "text",
            }}
            className="logo"
          />
        </Link>
        <div />
        <Breadcrumbs />
      </div>
    </header>
  );
}

export function SmallHeaderWithText({ navtext }) {
  return (
    <header>
      <Link href="/" legacyBehavior>
        <Logo
          size={50}
          sx={{
            verticalAlign: "middle",
            py: 0,
            my: [null, 1],
            display: "inline-block",
            textAlign: "center",
            stroke: "text",
          }}
          className="logo"
        />
      </Link>
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
      <div>
        <Logo
          size={200}
          sx={{
            py: 0,
            my: [null, 1],
            stroke: "text",
          }}
        />
      </div>
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

class Header extends React.Component<{ size: Size; navtext?: string }> {
  render() {
    switch (this.props.size) {
      case Size.Large:
        return <LargeHeader />;
      case Size.Medium:
        return <SmallHeaderWithText navtext={this.props.navtext} />;
      case Size.Small:
        return <SmallHeader />;
    }
  }
}

export default Header;
