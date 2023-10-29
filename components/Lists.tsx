import { isString } from "lodash";
import Link from "next/link";

import { Page } from "contentlayer/generated";

function Tree({ items }: { items: string | Record<string, Page> }) {
  return (
    <ul key={`ul`}>
      {Object.keys(items).map((k) => {
        const value = items[k];
        if (isString(value)) {
          return <span key={`${k}-empty`}></span>;
        }

        if (!value.url) {
          return <span key={`${k}-no-url`}></span>;
        }

        return (
          <span key={`${k}-root`}>
            <li key={value.url}>
              <Link href={value.url}>{value.title}</Link>
            </li>
            <Tree key={`${k}-tree`} items={value}></Tree>
          </span>
        );
      })}
    </ul>
  );
}

export { Tree };
