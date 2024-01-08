import { formatDistance, formatISO9075 } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

export default function Age() {
  const birth = zonedTimeToUtc("1988-02-22 17:30:00.000", "America/Los_Angeles");
  const now = new Date();

  const diff = formatDistance(birth, now, { addSuffix: true });
  if (birth && now && diff) {
    const birthString = formatISO9075(birth)
    return <time dateTime={birthString}>{diff}</time>;
  }

  return <></>;
}
