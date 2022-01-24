import { DateTime } from "luxon";

export default function Footer() {
  return <footer>&copy; Nat Welch {DateTime.now().year}</footer>;
}
