import { Logo } from "@icco/react-common";
import { TextHeaderOne, TextHeaderTwo } from "components/TextHeader";
import Link from "next/link";
import React from "react";

const links = [
  ["About", "/wiki/about"],
  ["Wiki", "/wiki"],
  ["Resume", "https://resume.natwelch.com"],
];

export function SmallHeader() {
  return (
    <header
      sx={{
        display: "flex",
        alignItems: "center",
        variant: "styles.header",
      }}
    >
      <Link href="/">
        <a>
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
        </a>
      </Link>
      <div sx={{ mx: "auto" }} />

      {links.map(([name, link]) => {
        return (
          <Link key={name} href={link}>
            <a
              sx={{
                variant: "styles.navlink",
                p: 2,
              }}
            >
              {name}
            </a>
          </Link>
        );
      })}
    </header>
  );
}

export function SmallHeaderWithText({ navtext }) {
  return (
    <header
      sx={{
        display: "flex",
        alignItems: "center",
        variant: "styles.header",
      }}
    >
      <Link href="/">
        <a>
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
        </a>
      </Link>
      <div sx={{ mx: "auto" }} />
      <TextHeaderOne sx={{ mr: 4 }}>{navtext}</TextHeaderOne>
    </header>
  );
}

export function LargeHeader() {
  return (
    <header sx={{ py: 0, px: [3, 4, 5], mt: 5 }}>
      <div sx={{ display: "table", w: "100%" }}>
        <div
          sx={{
            display: "table-cell",
            width: "50%",
            verticalAlign: "middle",
          }}
        >
          <Logo
            size={200}
            sx={{
              verticalAlign: "middle",
              py: 0,
              my: [null, 1],
              display: "inline-block",
              textAlign: "center",
              stroke: "primary",
            }}
          />
          <div
            sx={{
              display: "inline-block",
              verticalAlign: "middle",
              p: [0, 3],
            }}
          >
            <TextHeaderOne>Nat Welch</TextHeaderOne>
            <TextHeaderTwo>Software Reconnaissance Engineer</TextHeaderTwo>
          </div>
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
