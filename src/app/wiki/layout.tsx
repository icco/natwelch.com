export default function WikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="px-4 mx-auto max-w-2xl py-4">{children}</main>;
}
