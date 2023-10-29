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
      <ol className="flex items-center space-x-1 md:space-x-3">
        {pieces.map((piece: string, index: number) => {
          return (
            <li key={piece} className="breadcrumbs">
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
