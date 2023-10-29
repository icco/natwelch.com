import { DateTime } from "luxon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        <Link href={"/wiki/privacy-policy"}>Privacy</Link>
      </p>
      <div />
      <p>&copy; Nat Welch {DateTime.now().year}</p>
    </footer>
  );
}
