import { DateTime } from "luxon";
import Link from "next/link";
import { Paragraph } from "theme-ui";

export default function Footer() {
  return (
    <footer
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        p: 3,
        mt: 5,
        mb: 1,
        variant: "styles.footer",

        a: {
          color: "link",
          textDecoration: "none",
          ":link,:any-link,:visited": { color: "link" },
          ":focus,:active,:hover": {
            color: "secondary",
            textDecoration: "underline",
          },
        },
      }}
    >
      <Paragraph as="small" sx={{ p: 0 }}>
        <Link href={"/privacy"}>Privacy</Link>
      </Paragraph>
      <div sx={{ mx: "auto" }} />
      <Paragraph as="small" sx={{ p: 0 }}>
        &copy; Nat Welch {DateTime.now().year}
      </Paragraph>
    </footer>
  );
}
