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
      <main {...props}></main>
      <Footer />
    </>
  );
}
