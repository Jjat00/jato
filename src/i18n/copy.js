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
    name: "Keyduelo",
    status: "lab",
    route: "keyduelo.jato.run",
    href: "https://keyduelo.vercel.app/",
    repo: "https://github.com/Jjat00/keyduelo",
    tags: "Durable Objects · WebSockets",
    line: {
      es: "Carreras de tipeo multijugador que corren en el edge.",
      en: "Real-time multiplayer typing races running on the edge.",
    },
  },
  {
    slug: "skills",
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
    title: "jato · Construir. Lanzar. Correr.",
    description:
      "jato es un taller de producto: herramientas para agentes de IA, video con IA y software que ya corre en producción. Cada proyecto vive en su propio subdominio.",
    eyebrow: (n) => `En marcha · ${n} proyectos`,
    h1: ["Construir.", "Lanzar.", "Correr."],
    sub: "Un taller de producto. Lo que sale de aquí no se queda en una nota: corre en su propio subdominio.",
    ctaPrimary: "Ver lo que corre",
    ctaSecondary: "GitHub",
    listTitle: "Lo que corre",
    listHint: "Una línea por proyecto. Entra y úsalo.",
    code: "Código",
    by: "Un taller de",
    other: { label: "EN", href: "/en/" },
  },
  en: {
    lang: "en",
    title: "jato · Build. Ship. Run.",
    description:
      "jato is a product workshop: tools for AI agents, AI video and software already running in production. Every project lives on its own subdomain.",
    eyebrow: (n) => `Running · ${n} projects`,
    h1: ["Build.", "Ship.", "Run."],
    sub: "A product workshop. What leaves here doesn't stay a note: it runs on its own subdomain.",
    ctaPrimary: "See what's running",
    ctaSecondary: "GitHub",
    listTitle: "What's running",
    listHint: "One line per project. Go in and use it.",
    code: "Code",
    by: "A workshop by",
    other: { label: "ES", href: "/" },
  },
};

export const getCopy = (locale) => copy[locale];
export const getProjects = (locale) =>
  projects.map((p) => ({ ...p, line: p.line[locale], statusLabel: STATUS[p.status][locale], statusColor: STATUS[p.status].color }));
