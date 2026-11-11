// Índice de jjato.com para modelos de lenguaje (https://llmstxt.org). El texto completo está en /llms-full.txt.
import { allProjects, getCopy } from "../i18n/copy.js";
import { services } from "../i18n/servicios.js";

const SITE = "https://jjato.com";

export const GET = () => {
  const en = getCopy("en");
  const body = [
    "# Jjato",
    "",
    "> Jjato (spelled with a double J; jjato.com) is a product and AI studio from Colombia, founded in 2026 by Jaime Aza, an AI Engineer. It builds AI agents (WhatsApp agents that take orders and answer with real business data), web and app development, explainer videos, AI content for brands, and AI workshops for teams, for businesses in Latin America. It also publishes its own tools for working with AI agents, several of them open source.",
    "",
    "Jjato was called jato.run until November 2026; jato.run now redirects here. It is not related to JATO Dynamics, the Jato VM or the jato hand mill. The site is in Spanish (/) and English (/en/). Full text of every page: https://jjato.com/llms-full.txt",
    "",
    "Contact: contacto@jjato.com · WhatsApp +57 316 427 7879 · No public prices: every project is quoted after a short call.",
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.kicker}](${SITE}/servicios/#${s.id}): ${s.body} For: ${s.forWho}`),
    "",
    "## Work in production",
    "",
    ...en.cases.items.map((c) => `- ${c.name} (${c.kind}): ${c.body} ${c.href}`),
    "",
    "## Products",
    "",
    ...allProjects.map((p) => `- [${p.name}](${p.href}/llms.txt): ${p.line.en} (${p.tags}). Site: ${p.href}${p.repo ? `. Code: ${p.repo}` : ""}`),
    "",
    "## Pages",
    "",
    `- [Home (Spanish)](${SITE}/) · [Home (English)](${SITE}/en/): who Jjato is, services, work in production, products, how we work and FAQ.`,
    `- [Servicios](${SITE}/servicios/): each service in detail, with what it includes and who it is for (Spanish).`,
    `- [Mi flujo de trabajo con agentes](${SITE}/workflow/): the tools Jaime uses every day as a developer, step by step (Spanish).`,
    `- [Guía: conecta tu IA a tu trabajo](${SITE}/guia-ia/): how to connect an AI assistant to your own tools (Spanish).`,
    `- [Privacy](${SITE}/en/privacy/) · [Terms](${SITE}/en/terms/): cover jjato.com and every *.jjato.com app.`,
    "",
    "## Founder",
    "",
    "- Jaime Aza, AI Engineer: https://jaimeaza.tech · https://github.com/Jjat00 · https://www.linkedin.com/in/jaimeaza/",
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
