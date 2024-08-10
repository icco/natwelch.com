import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="px-4 mx-auto max-w-xl py-8">{children}</main>
      <Footer />
    </>
  );
}
