import Image from "next/image";

export default function HeaderImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="rounded-full"
      />
    </div>
  );
}
