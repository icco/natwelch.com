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
        className="flex flex-wrap justify-end list-none m-0 p-0"
      >
        {pieces.map((piece: string, index: number) => {
          return (
            <li
              key={piece}
              className="m-0 pl-1"
              style={{
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
