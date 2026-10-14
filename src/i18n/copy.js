// Todo el texto de la landing en los dos idiomas, con la misma forma.
// Los proyectos viven aquí también: son una sola lista para la UI y el JSON-LD.

const STATUS = {
  live: { color: "var(--color-cyan)", es: "En producción", en: "Live" },
  open: { color: "var(--color-violet)", es: "Código abierto", en: "Open source" },
  beta: { color: "var(--color-sun)", es: "Beta privada", en: "Private beta" },
  lab: { color: "var(--color-dim)", es: "Experimento", en: "Experiment" },
};

const projects = [
  {
    slug: "hf-studio",
    record: "hf-studio",
    type: "A",
    name: "HF Studio",
    status: "open",
    route: "hf-studio.jato.run",
    href: "https://hf-studio-gold.vercel.app",
    repo: "https://github.com/Jjat00/hf-studio",
    tags: "MCP · API · Next.js",
    line: {
      es: "Estudio de video, imagen y audio con IA, hecho primero para agentes.",
      en: "An AI video, image and audio studio, built for agents first.",
    },
  },
  {
    slug: "parkboard",
    record: "parkboard",
    type: "A",
    name: "Parkboard",
    status: "beta",
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
    slug: "frostbyte",
    record: "frostbyte",
    type: "CNAME",
    name: "Frostbyte",
    status: "live",
    route: "frostbyte.com.co",
    href: "https://frostbyte.com.co/landing",
    tags: "LangChain · Django · WhatsApp",
    line: {
      es: "El sistema operativo de un bar, con un agente que vende por WhatsApp.",
      en: "A bar's operating system, with an agent that sells on WhatsApp.",
    },
  },
  {
    slug: "keyduelo",
    record: "keyduelo",
    type: "A",
    name: "Keyduelo",
    status: "lab",
    route: "keyduelo.jato.run",
    href: "https://keyduelo.vercel.app/",
    repo: "https://github.com/Jjat00/keyduelo",
    tags: "Durable Objects · WebSockets",
    line: {
      es: "Carreras de tipeo multijugador, en tiempo real y en el edge.",
      en: "Real-time multiplayer typing races on the edge.",
    },
  },
  {
    slug: "skills",
    record: "skills",
    type: "CNAME",
    name: "Skills",
    status: "open",
    route: "github.com/Jjat00/jjat-skills",
    href: "https://github.com/Jjat00/jjat-skills",
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
      "jato.run: los proyectos de Jaime Aza. HF Studio, Parkboard, Frostbyte, Keyduelo y sus skills para agentes.",
    eyebrow: (n) => `Zona jato.run · ${n} registros`,
    h1: ["Mi", "zona."],
    sub: "",
    ctaPrimary: "Ver la zona",
    ctaSecondary: "GitHub",
    listTitle: "Registros",
    listHint: "",
    cols: ["registro", "tipo", "estado"],
    code: "Código",
    by: "Un taller de",
    other: { label: "EN", href: "/en/" },
  },
  en: {
    lang: "en",
    title: "jato · My zone",
    description:
      "jato.run: Jaime Aza's projects. HF Studio, Parkboard, Frostbyte, Keyduelo and his agent skills.",
    eyebrow: (n) => `jato.run zone · ${n} records`,
    h1: ["My", "zone."],
    sub: "",
    ctaPrimary: "See the zone",
    ctaSecondary: "GitHub",
    listTitle: "Records",
    listHint: "",
    cols: ["record", "type", "status"],
    code: "Code",
    by: "A workshop by",
    other: { label: "ES", href: "/" },
  },
};

export const getCopy = (locale) => copy[locale];
export const getProjects = (locale) =>
  projects.map((p) => ({ ...p, line: p.line[locale], statusLabel: STATUS[p.status][locale], statusColor: STATUS[p.status].color }));
