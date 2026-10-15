export const GET = () =>
  new Response("User-agent: *\nAllow: /\n\nSitemap: https://jato.run/sitemap-index.xml\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
