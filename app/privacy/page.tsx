import Footer from "components/Footer";
import { Header, Size } from "components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nat Welch | Privacy Policy",
};

export default async function Page() {
  return (
    <main>
      <Header size={Size.Small} />

      <article className="prose lg:prose-xl">
        <h1>Privacy Policy</h1>
        <p>
        </p>

        <p>
        </p>
      </article>

      <Footer />
    </main>
  );
}
