import { Logo } from "@icco/react-common";
import { TextHeaderOne, TextHeaderTwo } from "components/TextHeader";
import Link from "next/link";
import React from "react";

import { Breadcrumbs } from "./Lists";

export function SmallHeader() {
  return (
    <header
      sx={{
        p: [3, 4],
        variant: "styles.header",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          a: {
            color: "text",
            cursor: "pointer",
            textDecoration: "none",
            ":link,:any-link,:visited": { color: "text" },
            ":focus,:active,:hover": {
              color: "link",
            },
          },
        }}
      >
        <Link href="/">
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
        <div sx={{ mx: "auto" }} />
        <Breadcrumbs />
      </div>
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
        p: 2,
      }}
    >
      <Link href="/">
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
      <div sx={{ mx: "auto" }} />
      <TextHeaderOne sx={{ mr: 4 }}>{navtext}</TextHeaderOne>
    </header>
  );
}

export function LargeHeader() {
  const links = [
    ["Wiki", "/wiki"],
    ["Resume", "https://resume.natwelch.com"],
  ];

  return (
    <header
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        py: 0,
        px: [3, 4, 5],
        mt: 5,
        textAlign: "center",
      }}
    >
      <div
        sx={{
          width: "200px",
          verticalAlign: "middle",
        }}
      >
        <Logo
          size={200}
          sx={{
            py: 0,
            my: [null, 1],
            stroke: "text",
          }}
        />
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          flexGrow: 1,
          m: "1.5em",
        }}
      >
        <TextHeaderOne sx={{ mt: 0, mb: "0.75em" }}>Nat Welch</TextHeaderOne>
        <TextHeaderTwo sx={{ my: "0.75em" }}>
          Software Reconnaissance Engineer
        </TextHeaderTwo>
        <div sx={{ mt: "0.75em", mb: 0 }}>
          {links.map(([name, link]) => {
            return (
              <Link key={name} href={link} passHref legacyBehavior>
                <TextHeaderTwo sx={{ display: "inline-block", my: 0 }}>
                  <a
                    sx={{
                      variant: "styles.navlink",
                      px: 2,
                      my: 0,
                    }}
                  >
                    {name}
                  </a>
                </TextHeaderTwo>
              </Link>
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
