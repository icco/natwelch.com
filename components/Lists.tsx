import { isString } from "lodash";
import Link from "next/link";

const UnorderedList = (params) => {
  return <ul {...params}></ul>;
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
          return <span key={`${k}-empty`}></span>;
        }

        let li = <></>;
        if ("title" in value && "path" in value) {
          li = (
            <ListItem key={value.path}>
              <Link href={`/wiki/${value.path}`}> {value.title} </Link>
            </ListItem>
          );
        }

        return (
          <span key={`${k}-root`}>
            {li}
            <Tree key={`${k}-tree`} items={value}></Tree>
          </span>
        );
      })}
    </UnorderedList>
  );
};

export { ListItem, OrderedList, Tree, UnorderedList };
