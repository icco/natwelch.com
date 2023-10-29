import { isString, uniqueId } from "lodash";
import Link from "next/link";

import { Page } from "contentlayer/generated";

function Tree({ items }: { items: string | Record<string, Page> }) {
  return (
    <ul key={`ul-${uniqueId()}`} className="ms-8 list-none">
      {Object.keys(items).map((k) => {
        const value = items[k];
        if (isString(value)) {
          return <></>;
        }

        if (!value.url) {
          return <></>;
        }

        return (
          <span key={`${k}-root`}>
            <li className="" style={{}} key={value.url}>
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
