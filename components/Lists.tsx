import { isString } from "lodash";
import Link from "next/link";
import React from "react";

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

export { ListItem, OrderedList, Tree, UnorderedList };
