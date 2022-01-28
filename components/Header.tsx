import { Logo } from "@icco/react-common";
import { TextHeaderOne, TextHeaderTwo } from "components/TextHeader";
import Link from "next/link";
import React from "react";
import { Flex } from "theme-ui";

class Header extends React.Component<{ noLogo?: boolean; navtext?: string }> {
  render() {
    let prefix = <></>;
    let nav = <></>;
    let head = (
      <>
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
      </>
    );

    if (this.props.noLogo) {
      head = <></>;
      nav = (
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            variant: "styles.header",
          }}
        >
          <div sx={{ mx: "auto" }} />

          <Link href="/wiki/about">
            <a
              sx={{
                variant: "styles.navlink",
                p: 2,
              }}
            >
              About
            </a>
          </Link>

          <Link href="/wiki">
            <a
              sx={{
                variant: "styles.navlink",
                p: 2,
              }}
            >
              Wiki
            </a>
          </Link>

          <Link href="https://resume.natwelch.com">
            <a
              sx={{
                variant: "styles.navlink",
                p: 2,
              }}
            >
              Resume
            </a>
          </Link>
        </div>
      );
      prefix = (
        <Link href="/">
          <a className="link dark-gray dim">
            <Logo size={50} className="v-mid mh0-ns dib-ns center ph0 logo" />
          </a>
        </Link>
      );
    }

    if (this.props.navtext) {
      nav = (
        <>
          <TextHeaderOne sx={{ mr: 4 }}>{this.props.navtext}</TextHeaderOne>
        </>
      );
    }

    return (
      <div>
        <Flex as="nav">
          <Flex>{prefix}</Flex>
          {nav}
        </Flex>
        {head}
      </div>
    );
  }
}

export default Header;
