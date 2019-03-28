import Link from "next/link";
import { withRouter } from "next/router";
import React from "react";

import Logo from "./Logo";

class Header extends React.Component {
  render() {
    let prefix = <></>;
    let nav = <></>;
    let head = (
      <>
        <header className="pv0 ph3 ph4-m ph5-l oh pos-rel mt5">
          <div className="dt wi-100">
            <div className="dtc wi-50 v-mid">
              <Logo className="v-mid mh0-ns dib-ns center ph0 logo" />
              <div className="dib v-mid pa0 pa3-ns">
                <h1 className="mb2 tracked tl-ns tc w-100">Nat Welch</h1>
                <h2 className="fw2 mt0 tracked tl-ns tc w-100">
                  Software Reconnaissance Engineer
                </h2>
              </div>
            </div>
          </div>
        </header>
      </>
    );

    if (this.props.noLogo) {
      head = <></>;
      nav = (
        <>
          <Link href="/about">
            <a className="f6 dib mr3 mr4-ns">About</a>
          </Link>

          <Link href="/projects">
            <a className="f6 dib mr3 mr4-ns">Projects</a>
          </Link>

          <Link href="/writing">
            <a className="f6 dib mr3 mr4-ns">Writing</a>
          </Link>

          <Link href="/talks">
            <a className="f6 dib mr3 mr4-ns">Talks</a>
          </Link>
        </>
      );
      prefix = (
        <Link href="/">
          <a className="link dark-gray dim">
            <Logo size={50} className="v-mid mh0-ns dib-ns center ph0 logo" />
          </a>
        </Link>
      );
    }

    return (
      <div>
        <nav className="flex justify-between ttc">
          <div className="flex items-center pa3">{prefix}</div>
          <div className="flex-grow pa3 flex items-center">{nav}</div>
        </nav>
        {head}
      </div>
    );
  }
}

export default withRouter(Header);
