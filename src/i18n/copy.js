// Todo el texto de la landing en los dos idiomas, con la misma forma.
// Los proyectos viven aquí también: son una sola lista para la UI y el JSON-LD.

const projects = [
  {
    slug: "hf-studio",
    name: "HF Studio",
    route: "hf-studio.jato.run",
    href: "https://hf-studio.jato.run",
    repo: "https://github.com/Jjat00/hf-studio",
    tags: "MCP · API · Next.js",
    line: {
      es: "Estudio de video, imagen y audio con IA, hecho primero para agentes.",
      en: "An AI video, image and audio studio, built for agents first.",
    },
  },
  {
    slug: "parkboard",
    name: "Parkboard",
    route: "parkboard.jato.run",
    href: "https://parkboard.jato.run",
    repo: "https://github.com/Jjat00/parkboard",
    tags: "CLI · Next.js · Postgres",
    line: {
      es: "El lienzo donde los agentes parquean lo que queda para después.",
      en: "The canvas where agents park what's left for later.",
    },
  },
  {
    slug: "keyduelo",
    name: "Keyduelo",
    route: "keyduelo.jato.run",
    href: "https://keyduelo.jato.run",
    repo: "https://github.com/Jjat00/keyduelo",
    tags: "Durable Objects · WebSockets",
    line: {
      es: "Carreras de tipeo multijugador, en tiempo real y en el edge.",
      en: "Real-time multiplayer typing races on the edge.",
    },
  },
  {
    slug: "skills",
    name: "Skills",
    route: "skills.jato.run",
    href: "https://skills.jato.run",
    tags: "Claude Code · Codex",
    line: {
      es: "Habilidades para agentes: video, contenido y flujos de trabajo.",
      en: "Skills for agents: video, content and workflows.",
    },
  },
];

const copy = {
  es: {
    lang: "es",
    title: "jato · Mi zona",
    description:
      "jato.run: los proyectos de Jaime Aza. HF Studio, Parkboard, Keyduelo y sus skills para agentes.",
    h1: ["Mi", "zona."],
    sub: "",
    ctaPrimary: "Ver la zona",
    ctaSecondary: "GitHub",
    listTitle: "Proyectos",
    listHint: "",
    cols: ["proyecto", "descripción"],
    code: "Código",
    by: "Un taller de",
    legal: [{ label: "Privacidad", href: "/privacidad/" }, { label: "Términos", href: "/terminos/" }],
    other: { label: "EN", href: "/en/" },
  },
  en: {
    lang: "en",
    title: "jato · My zone",
    description:
      "jato.run: Jaime Aza's projects. HF Studio, Parkboard, Keyduelo and his agent skills.",
    h1: ["My", "zone."],
    sub: "",
    ctaPrimary: "See the zone",
    ctaSecondary: "GitHub",
    listTitle: "Projects",
    listHint: "",
    cols: ["project", "description"],
    code: "Code",
    by: "A workshop by",
    legal: [{ label: "Privacy", href: "/en/privacy/" }, { label: "Terms", href: "/en/terms/" }],
    other: { label: "ES", href: "/" },
  },
};

export const getCopy = (locale) => copy[locale];
export const getProjects = (locale) =>
  projects.map((p) => ({ ...p, line: p.line[locale] }));
