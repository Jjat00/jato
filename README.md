# Jjato

Sitio de [jjato.com](https://jjato.com). Jjato es un estudio de producto e IA de Colombia, fundado por [Jaime Aza](https://jaimeaza.tech): agentes de IA, desarrollo web y de apps, videos explicadores, contenido con IA y talleres para equipos.

Astro 7 estático + Tailwind v4, en español (`/`) e inglés (`/en/`). Se despliega en Vercel con cada push a `main`.

## Páginas

- **Portada** (`/` y `/en/`): hero con un cubo 3D en three.js que se arma y gira, servicios, trabajo en producción, productos, cómo trabajamos, preguntas frecuentes y contacto. Toma el tema claro u oscuro del navegador, y una línea de luz recorre las secciones al hacer scroll.
- **Servicios** (`/servicios/`, solo en español): cada servicio en detalle, con qué incluye, para quién es y el botón para cotizar por WhatsApp.
- **Workflow** (`/workflow/`, solo en español): el flujo de trabajo con agentes paso a paso, con el sitio, el repo y las estrellas de cada herramienta propia (se leen de GitHub al compilar).
- **Guía IA** (`/guia-ia/`, solo en español): cómo conectar Claude o ChatGPT a Gmail, Calendar, Drive y otras apps con Composio.
- **Legal:** privacidad y términos en `/privacidad/`, `/terminos/`, `/en/privacy/` y `/en/terms/`. Cubren jjato.com y todas las apps `*.jjato.com`, que comparten un login único con Clerk (`accounts.jjato.com`), y la conexión con TikTok de boost. Este repo no tiene código de login.

## Dónde se edita

| Qué | Archivo |
| --- | --- |
| Texto de la portada en los dos idiomas, productos y preguntas frecuentes | `src/i18n/copy.js` |
| Servicios por encargo | `src/i18n/servicios.js` |
| Logo y palabra del pie (en trazos, sin depender de fuentes) | `src/components/Logo.astro`, `src/components/Wordmark.astro` |
| Archivos de marca: logo, símbolo e ícono en SVG y PNG | `public/marca/` |
| Imagen para compartir en redes (1200 × 630) | `public/og.png` |

## Para buscadores y agentes

Todo se genera del mismo contenido de la página, así que se actualiza solo al editar `copy.js` o `servicios.js`.

- `/llms.txt`: qué es Jjato, servicios, trabajo en producción, productos y páginas, para modelos de lenguaje.
- `/llms-full.txt`: el texto completo del sitio en Markdown, en los dos idiomas.
- JSON-LD con la organización (`https://jjato.com/#org`), sus servicios, productos y preguntas frecuentes.
- `/robots.txt` con los rastreadores de buscadores e IA permitidos de forma explícita, y el sitemap con fecha.
- Clave de IndexNow en `public/` (el `.txt` con nombre hexadecimal) para avisar a Bing de páginas nuevas.

## Apps bajo jjato.com

| App | Dominio | Código |
| --- | --- | --- |
| HF Studio | [hf-studio.jjato.com](https://hf-studio.jjato.com) | [Jjat00/hf-studio](https://github.com/Jjat00/hf-studio) |
| Parkboard | [parkboard.jjato.com](https://parkboard.jjato.com) | [Jjat00/parkboard](https://github.com/Jjat00/parkboard) |
| boost | [boost.jjato.com](https://boost.jjato.com) | privado |
| Keyduelo | [keyduelo.jjato.com](https://keyduelo.jjato.com) | [Jjat00/keyduelo](https://github.com/Jjat00/keyduelo) |
| Skills | [skills.jjato.com](https://skills.jjato.com) | [Jjat00/jjat-skills](https://github.com/Jjat00/jjat-skills) |

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # dist/
```
