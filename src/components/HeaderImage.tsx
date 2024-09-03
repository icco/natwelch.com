export default function HeaderImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="flex justify-center">
      <img
        src="/images/nat.jpg"
        alt="Nat Welch"
        className="h-24 w-24 rounded-full"
      />
    </div>
  );
}
