// Servicios por encargo de Jjato: alimentan /servicios, su JSON-LD y llms-full.txt.
const IG = "https://www.instagram.com/jaimejjat/";

export const services = [
  {
    id: "videos",
    kicker: "Videos explicadores",
    title: "Tu pitch, tu producto o tu historia, contados en un video",
    body: "Videos de 1 a 3 minutos con narración, subtítulos, gráficas y animación, en el mismo estilo de mis explicadores. Tomo un tema complejo y lo dejo claro para quien no lo conoce.",
    forWho: "Startups que se presentan ante inversionistas, lanzamientos de producto y negocios que necesitan explicar lo que hacen.",
    includes: ["Guion trabajado contigo", "Voz, subtítulos y animación", "Formato vertical y horizontal", "Rondas de ajustes"],
    examples: [{ name: "Explicadores en @jaimejjat", what: "Más de un millón de vistas al mes en Instagram.", href: IG }],
    ask: "Hola Jaime, quiero cotizar un video explicador.",
  },
  {
    id: "contenido",
    kicker: "Contenido con IA",
    title: "Anuncios, fotos de producto y reels hechos con IA",
    body: "Piezas para redes y campañas sin necesidad de sesión de fotos ni rodaje: anuncios en video, fotos de producto, animaciones en 3D y carruseles. Uso los mejores modelos de imagen y video, y cuido que tu producto y tu marca se vean como son.",
    forWho: "Marcas y negocios que necesitan contenido constante para Instagram, TikTok o anuncios pagados.",
    includes: ["Guiones y ángulos de venta", "Fotos y videos de producto con IA", "Animación 3D de producto", "Formatos para cada red"],
    examples: [
      { name: "Reels en @jaimejjat", what: "Carruseles y reels hechos con este mismo flujo.", href: IG },
      { name: "HF Studio", what: "Mi estudio de imagen, video y audio con IA.", href: "https://hf-studio.jjato.com" },
    ],
    ask: "Hola Jaime, quiero cotizar contenido con IA para mi marca.",
  },
  {
    id: "agentes",
    kicker: "Agentes de IA",
    title: "Agentes que trabajan para tu negocio",
    body: "Agentes que atienden por WhatsApp, toman pedidos, responden con la información real de tu negocio y se conectan con tus sistemas. Pensados para producción, con pruebas y seguimiento de lo que responden.",
    forWho: "Negocios que reciben muchos mensajes, procesos repetitivos y equipos que quieren usar IA sin montar todo desde cero.",
    includes: ["Diagnóstico del proceso", "Agente conectado a tus datos y herramientas", "WhatsApp, web o interno", "Pruebas y monitoreo"],
    examples: [
      { name: "Frostbyte", what: "Pedidos por WhatsApp de un establecimiento de bebidas frías.", href: "https://frostbyte.com.co" },
      { name: "Tresqu", what: "Finanzas personales con agentes, por WhatsApp y web.", href: "https://tresqu.com" },
    ],
    ask: "Hola Jaime, quiero cotizar un agente de IA para mi negocio.",
  },
  {
    id: "desarrollo",
    kicker: "Desarrollo web y apps",
    title: "De la idea al producto en producción",
    body: "Landings, plataformas web y apps, del diseño al despliegue. Construyo rápido con agentes y entrego algo que funciona, con su dominio, su login y su base de datos.",
    forWho: "Startups que necesitan su MVP, negocios que quieren su sitio o su sistema propio y equipos que necesitan una mano extra.",
    includes: ["Diseño y desarrollo", "Backend, base de datos y login", "Despliegue y dominio", "Código fuente para ti"],
    examples: [
      { name: "HF Studio", what: "Estudio de video, imagen y audio con IA.", href: "https://hf-studio.jjato.com" },
      { name: "boost", what: "Programa y mide posts de Instagram y TikTok.", href: "https://boost.jjato.com" },
      { name: "Parkboard", what: "Tablero de pendientes para agentes.", href: "https://parkboard.jjato.com" },
    ],
    ask: "Hola Jaime, quiero cotizar un desarrollo web o una app.",
  },
  {
    id: "talleres",
    kicker: "Talleres de IA",
    title: "Tu equipo trabajando con agentes de IA",
    body: "Talleres prácticos y acompañamiento para que tu equipo use IA en su día a día: agentes como Claude Code y Codex, automatizaciones y flujos que se quedan funcionando después del taller.",
    forWho: "Equipos de desarrollo, emprendedores y empresas que quieren adoptar IA con un método y no a prueba y error.",
    includes: ["Diagnóstico de cómo trabajan hoy", "Taller práctico, en vivo o virtual", "Flujos y skills listos para usar", "Seguimiento posterior"],
    examples: [
      { name: "Mi flujo de trabajo", what: "El paso a paso de cómo trabajo con agentes.", href: "/workflow/" },
      { name: "Skills", what: "Habilidades para agentes, de código abierto.", href: "https://skills.jjato.com" },
    ],
    ask: "Hola Jaime, quiero cotizar un taller de IA para mi equipo.",
  },
];
