export function proxy(request: Request): Response | undefined {
  if (!["GET", "HEAD", "OPTIONS"].includes(request.method)) {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "GET, HEAD, OPTIONS" },
    })
  }
}
