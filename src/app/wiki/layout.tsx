import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="px-4 mx-auto max-w-2xl py-4">{children}</main>
      <Footer />
    </>
  );
}
