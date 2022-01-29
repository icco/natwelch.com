import { ClassAttributes, HTMLAttributes } from "react";

import Footer from "./Footer";
import Header, { Size } from "./Header";

export default function Layout(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement>
) {
  return (
    <>
      <Header size={Size.Small} />
      <main
        sx={{
          maxWidth: 768,
          mx: [0, "auto"],
          width: "100%",
          flex: "1 1 auto",

          a: {
            color: "link",
            textDecoration: "none",
            ":link,:any-link,:visited": { color: "link" },
            ":focus,:active,:hover": {
              color: "secondary",
              textDecoration: "underline",
            },
          },

          li: {},
        }}
        {...props}
      ></main>
      <Footer />
    </>
  );
}
