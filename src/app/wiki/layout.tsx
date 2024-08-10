import Footer from "@/components/Footer";
import { Header, Size } from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header size={Size.Small} />
      <main className="px-4 mx-auto max-w-xl py-8">{children}</main>
      <Footer />
    </>
  );
}
