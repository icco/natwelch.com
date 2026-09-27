/** Send responsive image requests directly to the shared Imagor gateway. */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  let url: URL
  try {
    url = new URL(src)
  } catch {
    return src
  }
  if (url.hostname === "icco.imgix.net") url.hostname = "images.natwelch.com"
  if (url.hostname !== "images.natwelch.com") return src
  url.searchParams.set("w", String(width))
  if (quality) url.searchParams.set("q", String(quality))
  return url.toString()
}
