// Todo el texto de la landing en los dos idiomas, con la misma forma.
// Los proyectos viven aquí también: son una sola lista para la UI y el JSON-LD.

const projects = [
  {
    slug: "hf-studio",
    name: "HF Studio",
    route: "hf-studio.jjato.com",
    href: "https://hf-studio.jjato.com",
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
    route: "parkboard.jjato.com",
    href: "https://parkboard.jjato.com",
    repo: "https://github.com/Jjat00/parkboard",
    tags: "CLI · Next.js · Postgres",
    line: {
      es: "El lienzo donde los agentes parquean lo que queda para después.",
      en: "The canvas where agents park what's left for later.",
    },
  },
  {
    slug: "boost",
    name: "boost",
    route: "boost.jjato.com",
    href: "https://boost.jjato.com",
    tags: "CLI · Instagram · TikTok",
    line: {
      es: "Programa y mide tus posts de Instagram y TikTok, solo o en equipo.",
      en: "Schedule and measure your Instagram and TikTok posts, alone or as a team.",
    },
  },
  {
    slug: "skills",
    name: "Skills",
    route: "skills.jjato.com",
    href: "https://skills.jjato.com",
    repo: "https://github.com/Jjat00/jjat-skills",
    tags: "Claude Code · Codex",
    line: {
      es: "Habilidades para agentes: video, contenido y flujos de trabajo.",
      en: "Skills for agents: video, content and workflows.",
    },
  },
];

const WA = "573164277879";
const MAIL = "contacto@jjato.com";
const IG = "https://www.instagram.com/jaimejjat/";
const wa = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const snake = {
  es: { play: "jugar", score: "puntos", hint: "flechas, WASD o desliza · Esc para salir", hintTouch: "usa las flechas o desliza el dedo", over: "fin · Enter o toca para jugar otra vez", quit: "salir", dirs: ["arriba", "izquierda", "abajo", "derecha"] },
  en: { play: "play", score: "score", hint: "arrows, WASD or swipe · Esc to quit", hintTouch: "use the arrows or swipe", over: "game over · Enter or tap to play again", quit: "quit", dirs: ["up", "left", "down", "right"] },
};

const copy = {
  es: {
    lang: "es",
    title: "Jjato · Agentes de IA, software y contenido en producción",
    description:
      "Jjato es un estudio de producto e IA en Colombia: agentes de IA para WhatsApp, desarrollo web y apps, videos explicadores, contenido con IA y talleres. Fundado por Jaime Aza.",
    nav: [
      { label: "Servicios", href: "#servicios" },
      { label: "En producción", href: "#casos" },
      { label: "Productos", href: "#proyectos" },
    ],
    h1: "Ponemos la IA a trabajar.",
    sub: "Somos un estudio de producto. Construimos agentes de IA, software y contenido que ya están en producción.",
    ctaPrimary: { label: "Hablemos", href: wa("Hola, quiero hablar con Jjato sobre un proyecto.") },
    ctaSecondary: { label: "Qué hacemos", href: "#servicios" },
    hero3d: "Cubo de 27 bloques que se arma y gira",
    services: {
      title: "Qué hacemos",
      lead: "Cinco formas de trabajar con nosotros. Todo se cotiza según lo que necesites.",
      more: { label: "Ver los servicios en detalle", href: "/servicios/" },
      items: [
        { name: "Agentes de IA", line: "Atienden por WhatsApp, toman pedidos y responden con los datos reales de tu negocio.", href: "/servicios/#agentes" },
        { name: "Desarrollo web y apps", line: "De la idea al producto en producción, con su dominio, su login y su base de datos.", href: "/servicios/#desarrollo" },
        { name: "Videos explicadores", line: "Tu producto o tu pitch en un video de 1 a 3 minutos, con narración y animación.", href: "/servicios/#videos" },
        { name: "Contenido con IA", line: "Anuncios, fotos de producto y reels, sin sesión de fotos ni rodaje.", href: "/servicios/#contenido" },
        { name: "Talleres de IA", line: "Tu equipo trabajando con agentes, con flujos que siguen funcionando después del taller.", href: "/servicios/#talleres" },
      ],
    },
    cases: {
      title: "En producción",
      lead: "Lo que construimos lo usan personas reales todos los días.",
      visit: "Visitar",
      items: [
        { name: "Frostbyte", kind: "Agente de IA para un establecimiento de bebidas frías", body: "Los clientes piden por WhatsApp y un agente los atiende: conoce la carta, los precios y si el local está abierto. El equipo edita la carta y revisa las ventas desde su propio panel.", href: "https://frostbyte.com.co", shot: "/media/frostbyte.webp" },
        { name: "Tresqu", kind: "Finanzas personales con agentes", body: "Registras un gasto con un mensaje o con la foto de la factura, por WhatsApp o en la web, y el agente te responde con tus propios números.", href: "https://tresqu.com", shot: "/media/tresqu.webp" },
        { name: "Explicadores", kind: "Videos que explican software e ingeniería", body: "Una serie de videos cortos, con datos reales y animación, que suma más de un millón de vistas al mes en Instagram. Con el mismo método hacemos los videos de nuestros clientes.", href: IG, cta: "Ver en Instagram", examples: [
          { img: "/media/explicador-tesla.webp", href: "https://www.instagram.com/p/DekTznlOpD6/", title: "La física del Tesla volador", detail: "Fricción, succión, empuje y gas real, con un modelo 3D y las cifras del evento." },
          { img: "/media/explicador-vision.webp", href: "https://www.instagram.com/p/DeX3l3DuzQq/", title: "Visión por computadora", detail: "YOLOv8 sigue el balón cuadro a cuadro y ResNet-50 clasifica fotos reales." },
          { img: "/media/explicador-vectores.webp", href: "https://www.instagram.com/p/Deffq3XPXmS/", title: "Bases de datos vectoriales", detail: "Embeddings en 1024 dimensiones y similitud medida entre palabras." },
          { img: "/media/explicador-llms.webp", href: "https://www.instagram.com/p/DevIXIXtH8z/", title: "Historia de los LLM", detail: "De la neurona de 1943 al razonamiento de 2026, con la ecuación de cada era." },
        ] },
      ],
    },
    listTitle: "Nuestros productos",
    listLead: "También construimos nuestras propias herramientas, varias de código abierto.",
    process: {
      title: "Cómo trabajamos",
      steps: [
        { title: "Nos escribes", body: "Por WhatsApp o correo, con lo que necesitas y para cuándo." },
        { title: "Hablamos", body: "Una llamada corta para entender el objetivo y el alcance." },
        { title: "Cotizamos", body: "Te enviamos propuesta, tiempos y precio. Sin compromiso." },
        { title: "Entregamos", body: "Con avances en el camino y ajustes hasta que quede bien." },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Qué es Jjato?", a: "Jjato (con doble J) es un estudio de producto e inteligencia artificial de Colombia, fundado en 2026 por Jaime Aza, AI Engineer. Construimos agentes de IA, software a medida y contenido con IA para negocios de Latinoamérica, y publicamos nuestras propias herramientas en jjato.com." },
        { q: "¿Qué servicios ofrece Jjato?", a: "Cinco: agentes de IA que atienden por WhatsApp y toman pedidos, desarrollo web y de apps, videos explicadores de 1 a 3 minutos, contenido con IA para redes y anuncios, y talleres de IA para equipos." },
        { q: "¿Hacen agentes de IA para WhatsApp?", a: "Sí, y ya están en producción. En Frostbyte el agente toma pedidos por WhatsApp con la carta, los precios y el horario reales del local. En Tresqu registras un gasto con un mensaje o con la foto de la factura y el agente te responde con tus propios números." },
        { q: "¿Cuánto cuesta trabajar con Jjato?", a: "No hay precios fijos: cada proyecto se cotiza. Nos escribes por WhatsApp o a contacto@jjato.com, hacemos una llamada corta y te enviamos una propuesta con tiempos y precio, sin compromiso." },
        { q: "¿Trabajan con empresas fuera de Colombia?", a: "Sí. Trabajamos en remoto con negocios de Colombia y del resto de Latinoamérica, en español o en inglés." },
      ],
    },
    contact: {
      title: "Cuéntanos qué necesitas.",
      body: "Respondemos con una propuesta, tiempos y precio.",
      wa: { label: "Escribir por WhatsApp", href: wa("Hola, quiero cotizar un proyecto con Jjato.") },
      mail: { label: MAIL, href: `mailto:${MAIL}` },
    },
    by: "Fundado por",
    legal: [{ label: "Privacidad", href: "/privacidad/" }, { label: "Términos", href: "/terminos/" }],
    other: { label: "EN", href: "/en/" },
    snake: snake.es,
  },
  en: {
    lang: "en",
    title: "Jjato · AI agents, software and content in production",
    description:
      "Jjato is a product and AI studio from Colombia: WhatsApp AI agents, web and app development, explainer videos, AI content and workshops. Founded by Jaime Aza.",
    nav: [
      { label: "Services", href: "#servicios" },
      { label: "In production", href: "#casos" },
      { label: "Products", href: "#proyectos" },
    ],
    h1: "We put AI to work.",
    sub: "We are a product studio. We build AI agents, software and content that already run in production.",
    ctaPrimary: { label: "Let's talk", href: wa("Hi, I'd like to talk to Jjato about a project.") },
    ctaSecondary: { label: "What we do", href: "#servicios" },
    hero3d: "A cube of 27 blocks assembling and turning",
    services: {
      title: "What we do",
      lead: "Five ways to work with us. Everything is quoted for what you need.",
      more: null,
      items: [
        { name: "AI agents", line: "They answer on WhatsApp, take orders and reply with your business's real data.", href: wa("Hi, I'd like a quote for an AI agent.") },
        { name: "Web and app development", line: "From idea to a product in production, with its domain, login and database.", href: wa("Hi, I'd like a quote for a web or app build.") },
        { name: "Explainer videos", line: "Your product or pitch in a 1 to 3 minute video, with narration and animation.", href: wa("Hi, I'd like a quote for an explainer video.") },
        { name: "AI content", line: "Ads, product photos and reels, with no photo shoot and no filming.", href: wa("Hi, I'd like a quote for AI content.") },
        { name: "AI workshops", line: "Your team working with agents, with workflows that keep running after the workshop.", href: wa("Hi, I'd like a quote for an AI workshop.") },
      ],
    },
    cases: {
      title: "In production",
      lead: "Real people use what we build every day.",
      visit: "Visit",
      items: [
        { name: "Frostbyte", kind: "An AI agent for a cold drinks shop", body: "Customers order on WhatsApp and an agent serves them: it knows the menu, the prices and whether the place is open. The team edits the menu and reviews sales from their own panel.", href: "https://frostbyte.com.co", shot: "/media/frostbyte.webp" },
        { name: "Tresqu", kind: "Personal finance with agents", body: "You log an expense with a message or a photo of the receipt, on WhatsApp or the web, and the agent answers with your own numbers.", href: "https://tresqu.com", shot: "/media/tresqu.webp" },
        { name: "Explainers", kind: "Videos that explain software and engineering", body: "A series of short videos, with real data and animation, with over a million views a month on Instagram. We make our clients' videos with the same method.", href: IG, cta: "Watch on Instagram", examples: [
          { img: "/media/explicador-tesla.webp", href: "https://www.instagram.com/p/DekTznlOpD6/", title: "The physics of the flying Tesla", detail: "Friction, suction, thrust and real gas, with a 3D model and the event's figures." },
          { img: "/media/explicador-vision.webp", href: "https://www.instagram.com/p/DeX3l3DuzQq/", title: "Computer vision", detail: "YOLOv8 tracks the ball frame by frame and ResNet-50 classifies real photos." },
          { img: "/media/explicador-vectores.webp", href: "https://www.instagram.com/p/Deffq3XPXmS/", title: "Vector databases", detail: "Embeddings in 1024 dimensions and similarity measured between words." },
          { img: "/media/explicador-llms.webp", href: "https://www.instagram.com/p/DevIXIXtH8z/", title: "A history of LLMs", detail: "From the 1943 neuron to 2026 reasoning, with each era's equation." },
        ] },
      ],
    },
    listTitle: "Our products",
    listLead: "We also build our own tools, several of them open source.",
    process: {
      title: "How we work",
      steps: [
        { title: "You write to us", body: "On WhatsApp or by email, with what you need and by when." },
        { title: "We talk", body: "A short call to understand the goal and the scope." },
        { title: "We quote", body: "We send a proposal, timeline and price. No commitment." },
        { title: "We deliver", body: "With progress along the way and changes until it's right." },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "What is Jjato?", a: "Jjato (with a double J) is a product and AI studio from Colombia, founded in 2026 by Jaime Aza, an AI Engineer. We build AI agents, custom software and AI content for businesses in Latin America, and we publish our own tools at jjato.com." },
        { q: "What services does Jjato offer?", a: "Five: AI agents that answer on WhatsApp and take orders, web and app development, 1 to 3 minute explainer videos, AI content for social media and ads, and AI workshops for teams." },
        { q: "Do you build AI agents for WhatsApp?", a: "Yes, and they are already in production. At Frostbyte the agent takes orders on WhatsApp with the shop's real menu, prices and opening hours. With Tresqu you log an expense with a message or a photo of the receipt and the agent answers with your own numbers." },
        { q: "How much does it cost to work with Jjato?", a: "There are no fixed prices: every project is quoted. Write to us on WhatsApp or at contacto@jjato.com, we have a short call and send you a proposal with timeline and price, with no commitment." },
        { q: "Do you work with companies outside Colombia?", a: "Yes. We work remotely with businesses in Colombia and the rest of Latin America, in Spanish or English." },
      ],
    },
    contact: {
      title: "Tell us what you need.",
      body: "We reply with a proposal, timeline and price.",
      wa: { label: "Message us on WhatsApp", href: wa("Hi, I'd like a quote for a project with Jjato.") },
      mail: { label: MAIL, href: `mailto:${MAIL}` },
    },
    by: "Founded by",
    legal: [{ label: "Privacy", href: "/en/privacy/" }, { label: "Terms", href: "/en/terms/" }],
    other: { label: "ES", href: "/" },
    snake: snake.en,
  },
};

export const getCopy = (locale) => copy[locale];
export const allProjects = projects;
export const getProjects = (locale) =>
  projects.map((p) => ({ ...p, line: p.line[locale] }));
