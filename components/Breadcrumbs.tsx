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
    <nav className="flex mr-8">
      <ol className="flex flex-wrap justify-end m-0 p-0">
        {pieces.map((piece: string, index: number) => {
          return (
            <li key={piece} className="before:content-['/'] pr-2 text-muted last:text-link ">
              <Link className="text-inherit" href={`/${pieces.slice(0, index + 1).join("/")}`}>
                {piece}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
