// Todo el texto de la landing en los dos idiomas, con la misma forma.
// Los proyectos viven aquí también: son una sola lista para la UI y el JSON-LD.

const STATUS = {
  live: { color: "var(--color-cyan)", es: "En producción", en: "Live" },
  open: { color: "var(--color-violet)", es: "Código abierto", en: "Open source" },
  beta: { color: "var(--color-sun)", es: "Beta privada", en: "Private beta" },
  lab: { color: "var(--color-dim)", es: "Experimento", en: "Experiment" },
};

const LOGIN = {
  google: { es: "Google", en: "Google" },
  open: { es: "abierto", en: "open" },
  own: { es: "propio", en: "own" },
};

const projects = [
  {
    slug: "hf-studio",
    record: "hf-studio",
    type: "A",
    login: "open",
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
    login: "google",
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
    login: "own",
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
    login: "open",
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
    login: "open",
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
      "jato.run es la zona de Jaime Aza: un dominio para todos sus proyectos, cada uno en su subdominio y con un solo login de Google.",
    eyebrow: (n) => `Zona jato.run · ${n} registros`,
    h1: ["Mi", "zona."],
    sub: "Un dominio para todo lo que construyo. Cada proyecto es un registro: su subdominio, su estado y si pide entrar con Google.",
    ctaPrimary: "Ver la zona",
    ctaSecondary: "GitHub",
    listTitle: "Registros",
    listHint: "Un registro por proyecto. Entra y úsalo.",
    cols: ["registro", "tipo", "estado", "login"],
    next: "el siguiente registro",
    code: "Código",
    by: "Un taller de",
    other: { label: "EN", href: "/en/" },
  },
  en: {
    lang: "en",
    title: "jato · My zone",
    description:
      "jato.run is Jaime Aza's zone: one domain for all his projects, each on its own subdomain with a single Google sign-in.",
    eyebrow: (n) => `jato.run zone · ${n} records`,
    h1: ["My", "zone."],
    sub: "One domain for everything I build. Every project is a record: its subdomain, its status and whether it asks you to sign in with Google.",
    ctaPrimary: "See the zone",
    ctaSecondary: "GitHub",
    listTitle: "Records",
    listHint: "One record per project. Go in and use it.",
    cols: ["record", "type", "status", "sign-in"],
    next: "the next record",
    code: "Code",
    by: "A workshop by",
    other: { label: "ES", href: "/" },
  },
};

export const getCopy = (locale) => copy[locale];
export const getProjects = (locale) =>
  projects.map((p) => ({ ...p, line: p.line[locale], statusLabel: STATUS[p.status][locale], statusColor: STATUS[p.status].color, loginLabel: LOGIN[p.login][locale] }));
