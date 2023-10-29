"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Inspo: https://github.com/alphardex/aqua.css/blob/master/src/breadcrumb.scss
export const Breadcrumbs = () => {
  const path = usePathname();

  const pieces = path.split("/").filter((piece) => {
    return !!piece;
  });
  return (
    <nav>
      <ol
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
            <li
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
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
