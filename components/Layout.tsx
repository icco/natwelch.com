import { ClassAttributes, HTMLAttributes } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement>
) {
  return (
    <>
      <Header noLogo />
      <main {...props}></main>;
      <Footer />
    </>
  );
}
