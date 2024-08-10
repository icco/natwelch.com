import Link from "next/link";
import React from "react";

import { Breadcrumbs } from "./Breadcrumbs";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export function SmallHeader() {
  return (
    <header>
      <nav className="flex py-8">
        <div className="flex-none">
          <Link href="/" className="">
            <Logo
              size={50}
              className="px-8 logo stroke-current"
              style={{ stroke: "#333" }}
            />
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="mr-8 content-center">
          <ThemeToggle />
          <Breadcrumbs />
        </div>
      </nav>
    </header>
  );
}

export function LargeHeader() {
  const links = [
    ["Wiki", "/wiki"],
    ["Resume", "https://resume.natwelch.com"],
    ["Blog", "https://writing.natwelch.com"],
  ];

  return (
    <header className="mt-[12vh]">
      <Logo
        size={200}
        className="m-0 p-0 logo flex flex-row itens-center justify-center"
        style={{ stroke: "#333" }}
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="flex-row text-4xl font-bold mt-6">Nat Welch</h1>
        <h2 className="flex-row text-2xl font-bold mt-4">
          Software Reconnaissance Engineer
        </h2>
        <div className="flex flex-row justify-center items-center mt-6 text-xl">
          {links.map(([name, link]) => {
            return (
              <h2 key={name}>
                <Link className="px-4 hover:text-link" href={link}>
                  {name}
                </Link>
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

export function Header({ size }: { size: Size }) {
  switch (size) {
    case Size.Large:
      return <LargeHeader />;
    case Size.Small:
      return <SmallHeader />;
    default:
      return <></>;
  }
}
