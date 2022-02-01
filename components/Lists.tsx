import { isString } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
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

// Inspo: https://github.com/alphardex/aqua.css/blob/master/src/breadcrumb.scss
const Breadcrumbs = () => {
  const router = useRouter();
  const path = router.asPath;

  const pieces = path.split("/").filter((piece) => {
    return !!piece;
  });
  return (
    <nav sx={{}}>
      <OrderedList
        sx={{
          display: "flex",
          margin: 0,
          padding: 0,
          listStyleType: "none",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        {pieces.map((piece: string, index: number) => {
          return (
            <ListItem
              key={piece}
              sx={{
                paddingLeft: ".5rem",
                margin: 0,

                "&::before": {
                  content: '"/"',
                  paddingRight: ".5rem",
                  color: "text",
                },

                "&:not(:last-child)": {
                  a: {
                    color: "link",
                  },
                },

                "&:last-child": {
                  a: {
                    color: "secondary",
                  },
                },
              }}
            >
              <Link href={`/${pieces.slice(0, index + 1).join("/")}`}>
                <a
                  sx={{
                    position: "relative",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {piece}
                </a>
              </Link>
            </ListItem>
          );
        })}
      </OrderedList>
    </nav>
  );
};

export { Breadcrumbs, ListItem, OrderedList, Tree, UnorderedList };
