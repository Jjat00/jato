// Todo el contenido de jjato.com en Markdown, para que un agente lo lea de una vez (https://llmstxt.org).
import { allProjects, getCopy } from "../i18n/copy.js";
import { services } from "../i18n/servicios.js";

const SITE = "https://jjato.com";

const page = (t) => [
  `## ${t.title}`,
  "",
  t.description,
  "",
  `### ${t.h1}`,
  "",
  t.sub,
  "",
  `### ${t.services.title}`,
  "",
  t.services.lead,
  "",
  ...t.services.items.map((s) => `- **${s.name}:** ${s.line}`),
  "",
  `### ${t.cases.title}`,
  "",
  t.cases.lead,
  "",
  ...t.cases.items.flatMap((c) => [
    `#### ${c.name}: ${c.kind}`,
    "",
    c.body,
    "",
    `Link: ${c.href}`,
    ...(c.examples ? ["", ...c.examples.map((e) => `- [${e.title}](${e.href}): ${e.detail}`)] : []),
    "",
  ]),
  `### ${t.listTitle}`,
  "",
  t.listLead,
  "",
  ...allProjects.map((p) => `- **${p.name}** (${p.href}): ${p.line[t.lang]}${p.repo ? ` Code: ${p.repo}` : ""}`),
  "",
  `### ${t.process.title}`,
  "",
  ...t.process.steps.map((s, i) => `${i + 1}. **${s.title}.** ${s.body}`),
  "",
  `### ${t.faq.title}`,
  "",
  ...t.faq.items.flatMap((f) => [`**${f.q}**`, "", f.a, ""]),
  `### ${t.contact.title}`,
  "",
  `${t.contact.body} WhatsApp: +57 316 427 7879 · Email: contacto@jjato.com`,
  "",
];

export const GET = () => {
  const body = [
    "# Jjato",
    "",
    "> Full text of jjato.com, the site of Jjato (double J), a product and AI studio from Colombia founded in 2026 by Jaime Aza. Index: https://jjato.com/llms.txt",
    "",
    "# English version (https://jjato.com/en/)",
    "",
    ...page(getCopy("en")),
    "# Versión en español (https://jjato.com/)",
    "",
    ...page(getCopy("es")),
    "# Servicios en detalle (https://jjato.com/servicios/)",
    "",
    ...services.flatMap((s) => [
      `## ${s.kicker}: ${s.title}`,
      "",
      s.body,
      "",
      `**Para quién:** ${s.forWho}`,
      "",
      "**Incluye:**",
      ...s.includes.map((i) => `- ${i}`),
      "",
      ...(s.examples?.length ? ["**Ejemplos:**", ...s.examples.map((e) => `- [${e.name}](${e.href}): ${e.what}`), ""] : []),
      `Cotizar: ${SITE}/servicios/#${s.id}`,
      "",
    ]),
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
