import { isString } from "lodash";
import Link from "next/link";
import React from "react";
import { Divider } from "theme-ui";

const UnorderedList = (params) => {
  return (
    <ul
      sx={{
        boxSizing: "border-box",
        my: "1rem",
        pl: "2rem",
        pr: 0,
      }}
      {...params}
    ></ul>
  );
};

const OrderedList = (params) => {
  return (
    <ol
      sx={{
        boxSizing: "border-box",
        my: "1rem",
        pl: "2rem",
        pr: 0,
      }}
      {...params}
    ></ol>
  );
};

const ListItem = (params) => {
  return (
    <li
      sx={{
        my: "0.5rem",
        "::marker": {
          color: "border",
        },
      }}
      {...params}
    ></li>
  );
};

const Tree = ({ items }) => {
  return (
    <UnorderedList key={`ul`}>
      {Object.keys(items).map((k) => {
        const value = items[k];
        if (isString(value)) {
          return <React.Fragment key={`${k}-empty`}></React.Fragment>;
        }

        let li = <></>;
        if ("title" in value && "path" in value) {
          li = (
            <ListItem key={value.path}>
              <Link href={`/wiki/${value.path}`}>
                <a>{value.title}</a>
              </Link>
            </ListItem>
          );
        }

        return (
          <React.Fragment key={`${k}-root`}>
            {li}
            <Tree key={`${k}-tree`} items={value}></Tree>
          </React.Fragment>
        );
      })}
    </UnorderedList>
  );
};

// Inspo: https://github.com/alphardex/aqua.css/blob/master/src/breadcrumb.scss
const Breadcrumbs = ({ path }) => {
  const pieces = path.split("/");
  return (
    <div sx={{}}>
      <UnorderedList
        sx={{
          display: "flex",
          margin: 0,
          padding: 0,
          listStyleType: "none",

          a: {
            position: "relative",
            textDecoration: "none",

            "&::before": {
              position: "absolute",
              content: "",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "unit(0.25)",
              background: "currentColor",
              transform: "scaleX(0)",
              transition: "0.3s",
            },

            "&:hover::before": {
              transform: "scaleX(1)",
            },
          },

          "&:not(:first-child)": {
            paddingLeft: "unit(2.25)",

            "&::before": {
              content: "/",
              paddingRight: "unit(2.25)",
              color: "text",
            },
          },

          "&:not(:last-child)": {
            a: {
              color: "secondary",
            },
          },

          "&:last-child": {
            a: {
              color: "primary",
            },
          },
        }}
      >
        {pieces.map((piece: string, index: number) => {
          return (
            <ListItem key={piece}>
              <Link href={`/wiki/${pieces.slice(0, index + 1).join("/")}`}>
                <a>{piece}</a>
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
      <Divider />
    </div>
  );
};

export { Breadcrumbs, ListItem, OrderedList, Tree, UnorderedList };
