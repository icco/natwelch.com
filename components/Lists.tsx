import { isString } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

// Inspo: https://github.com/alphardex/aqua.css/blob/master/src/breadcrumb.scss
const Breadcrumbs = () => {
  const path = usePathname();

  const pieces = path.split("/").filter((piece) => {
    return !!piece;
  });
  return (
    <nav>
      <OrderedList
        sx={{
          display: "flex",
          margin: 0,
          padding: 0,
          listStyleType: "none",
          alignItems: "center",
          justifyContent: "right",
          flexWrap: "wrap",
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
                {piece}
              </Link>
            </ListItem>
          );
        })}
      </OrderedList>
    </nav>
  );
};

export { Breadcrumbs, ListItem, OrderedList, Tree, UnorderedList };
