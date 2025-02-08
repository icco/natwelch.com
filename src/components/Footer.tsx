import { TZDate } from "@date-fns/tz";
import {
  CodeBracketIcon,
  DocumentCheckIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";
import Link from "next/link";

import { RecurseLogo } from "./RecurseLogo";

const Footer = ({ edit }: { edit?: string }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="divider" />
      <footer className="footer sm:footer-horizontal items-center p-4">
        <aside className="items-center grid-flow-col">
          <p>
            &copy; 2011 - {format(TZDate.tz("America/New_York"), "yyyy")} Nat
            Welch. All rights reserved.
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          {edit && (
            <Link
              href={`https://github.com/icco/natwelch.com/edit/main/wiki/${edit}`}
              title="Edit this page"
            >
              <PencilIcon className="inline-block w-4 h-4" />
            </Link>
          )}
          <Link
            href="https://www.recurse.com/scout/click?t=1a20cf01214e4c5923ab6ebd6c0f8f18"
            title="Want to become a better programmer? Join the Recurse Center!"
          >
            <RecurseLogo className="inline-block w-4 h-4" />
          </Link>
          <Link
            className="blue ms-2"
            href="https://github.com/icco/natwelch.com"
            title="Source Code"
          >
            <CodeBracketIcon className="inline-block w-4 h-4" />
          </Link>
          <Link
            className="blue ms-2"
            href="https://natwelch.com/privacy"
            title="Privacy Policy"
          >
            <DocumentCheckIcon className="inline-block w-4 h-4" />
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
