import { DateTime } from "luxon";

export default function Age() {
  const birth = DateTime.fromObject(
    { year: 1988, month: 2, day: 22, hour: 17 },
    { zone: "America/Los_Angeles" }
  );
  const now = DateTime.now();
  const diff = now.diff(birth, "years", { conversionAccuracy: "longterm" });
  if (birth && now && diff) {
    const birthString = birth.toISO() ?? "";
    return <time dateTime={birthString}>{diff.toHuman()} ago</time>;
  }

  return <></>;
}
