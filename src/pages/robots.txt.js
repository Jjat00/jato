// Todo el sitio es público. Los buscadores y los agentes de IA se nombran a propósito para que quede explícito.
const BOTS = ["Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot", "Applebot-Extended", "DuckDuckBot", "Meta-ExternalAgent", "Amazonbot", "CCBot", "cohere-ai", "MistralAI-User"];

export const GET = () =>
  new Response(
    [
      ...BOTS.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
      "User-agent: *",
      "Allow: /",
      "",
      "# For language models: https://jjato.com/llms.txt and https://jjato.com/llms-full.txt",
      "Sitemap: https://jjato.com/sitemap-index.xml",
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
