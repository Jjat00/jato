// Índice de jato.run para modelos de lenguaje (https://llmstxt.org): cada proyecto con su propio llms.txt.
import { allProjects } from "../i18n/copy.js";

const SITE = "https://jato.run";

export const GET = () => {
  const projects = allProjects.map(
    (p) => `- [${p.name}](${p.href}/llms.txt): ${p.line.en} (${p.tags}). Site: ${p.href}${p.repo ? `. Code: ${p.repo}` : ""}`,
  );
  const body = [
    "# jato.run",
    "",
    "> jato.run is Jaime Aza's workshop: tools for working with AI agents (Claude Code, Codex and others) and a few experiments. Each project lives on its own subdomain and has its own llms.txt with the details.",
    "",
    "Author: Jaime Aza, AI Engineer (https://jaimeaza.tech, https://github.com/Jjat00). The site is in Spanish (/) and English (/en/).",
    "",
    "## Projects",
    "",
    ...projects,
    "",
    "## Workflow",
    "",
    `- [Mi flujo de trabajo con agentes](${SITE}/workflow/): step by step (in Spanish) of the tools Jaime uses every day as a developer: Herdr, Claude Code and Codex, skills and subagents, MCP, Composio and CLIs, HF Studio, grabador, Parkboard and the infrastructure, with links to the open-source repos.`,
    "",
    "## Legal",
    "",
    `- [Privacy](${SITE}/en/privacy/): covers jato.run and every *.jato.run app.`,
    `- [Terms](${SITE}/en/terms/)`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
