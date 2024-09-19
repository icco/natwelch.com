import { TZDate } from "@date-fns/tz";
import { differenceInCalendarYears, formatISO } from "date-fns";

export default function Age() {
  const birth = new TZDate(1988, 2, 22, 17, "America/Los_Angeles");

  const now = Date.now();
  const diff = differenceInCalendarYears(now, birth);
  if (birth && now && diff) {
    const birthString = formatISO(birth);
    return <time dateTime={birthString}>{diff} ago</time>;
  }

  return <></>;
}
