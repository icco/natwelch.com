import { DateTime } from "luxon";

export default function Footer() {
  return (
    <footer
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        p: 2,
        variant: "styles.footer",
      }}
    >
      <div sx={{ mx: "auto" }} />
      <div sx={{ p: 2 }}>&copy; Nat Welch {DateTime.now().year}</div>
    </footer>
  );
}
