import { TZDate } from "@date-fns/tz"
import {
  CodeBracketIcon,
  DocumentCheckIcon,
  PencilIcon,
} from "@heroicons/react/24/outline"
import { format } from "date-fns"
import Link from "next/link"

import { RecurseLogo } from "./RecurseLogo"
import { RecurseRing } from "./RecurseRing"
import { Social } from "./Social"
import { XXIIVVRing } from "./XXIIVVRing"
import { XXIIVVLogo } from "./XXIIVVLogo"

const Footer = ({ edit }: { edit?: string; marginTop?: number }) => {
  return (
    <footer className="mx-auto max-w-2xl pt-[14vh]">
      <div className="divider" />
      <div className="footer sm:footer-horizontal items-center p-4">
        <aside className="grid-flow-col items-center">
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
              <PencilIcon className="inline-block h-4 w-4" />
            </Link>
          )}
          <Link
            href="https://www.recurse.com/scout/click?t=1a20cf01214e4c5923ab6ebd6c0f8f18"
            title="Want to become a better programmer? Join the Recurse Center!"
          >
            <RecurseLogo className="inline-block h-4 w-4" />
          </Link>
          <Link
            className="blue ms-2"
            href="https://github.com/icco/natwelch.com"
            title="Source Code"
          >
            <CodeBracketIcon className="inline-block h-4 w-4" />
          </Link>
          <Link
            className="blue ms-2"
            href="https://natwelch.com/privacy"
            title="Privacy Policy"
          >
            <DocumentCheckIcon className="inline-block h-4 w-4" />
          </Link>
        </nav>
      </div>

      <div className="footer sm:footer-horizontal text-base-content p-4">
        <nav>
          <h6 className="footer-title">RC Webring</h6>
          <RecurseRing />
        </nav>
        <nav>
          <h6 className="footer-title">
            <XXIIVVLogo className="inline-block h-4 w-4 vertical-align-middle" size={12} /> Webring
          </h6>
          <XXIIVVRing />
        </nav>
        <nav className="gap-4 md:justify-self-end">
          <h6 className="footer-title">Social</h6>
          <Social includeWebring={false} size={24} />
        </nav>
      </div>
    </footer>
  )
}

export default Footer
