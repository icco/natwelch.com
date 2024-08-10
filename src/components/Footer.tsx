import "./rc.css";

import { format } from "date-fns";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-muted px-6 lg:px-8 py-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mt-8 lg:mt-12 border-t-2 border-border pt-8">
        <nav className="flex flex-wrap justify-center space-x-6">
          <div className="my-2 rc-scout" data-scout-rendered="true">
            <p className="text-muted text-sm rc-scout__text">
              <i className="rc-scout__logo" /> Want to become a better
              programmer?{" "}
              <Link
                className="rc-scout__link"
                href="https://www.recurse.com/scout/click?t=1a20cf01214e4c5923ab6ebd6c0f8f18"
              >
                Join the Recurse Center!
              </Link>
            </p>
          </div>
        </nav>
        <p className="text-sm text-center md:text-right m-0">
          &copy; 2011 - {format(new Date(), "yyyy")} Nat Welch. All rights
          reserved.{" "}
          <Link className="blue" href="https://github.com/icco/writing">
            Source code
          </Link>
          .{" "}
          <Link className="blue" href="https://natwelch.com/privacy">
            Privacy
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
