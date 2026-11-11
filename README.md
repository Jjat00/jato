# jjato

Landing de [jjato.com](https://jjato.com): los proyectos de Jaime Aza que viven bajo `*.jjato.com`.

| Proyecto | Dominio | Código |
| --- | --- | --- |
| HF Studio | [hf-studio.jjato.com](https://hf-studio.jjato.com) | [Jjat00/hf-studio](https://github.com/Jjat00/hf-studio) |
| Parkboard | [parkboard.jjato.com](https://parkboard.jjato.com) | [Jjat00/parkboard](https://github.com/Jjat00/parkboard) |
| boost | [boost.jjato.com](https://boost.jjato.com) | privado |
| Keyduelo | [keyduelo.jjato.com](https://keyduelo.jjato.com) | [Jjat00/keyduelo](https://github.com/Jjat00/keyduelo) |
| Skills | [skills.jjato.com](https://skills.jjato.com) | [Jjat00/jjat-skills](https://github.com/Jjat00/jjat-skills) |

Astro 7 estático + Tailwind v4, en español (`/`) e inglés (`/en/`). El texto y la lista de proyectos están en `src/i18n/copy.js`: de ahí salen la tabla, el JSON-LD y `llms.txt`.

- **Hero:** retícula de baldosas en canvas (`src/components/Grid.astro`) que se enciende al pasar el mouse y se vuelve un Snake jugable con «▶ jugar» (flechas, WASD o deslizar; cruceta en pantallas táctiles).
- **Workflow:** `/workflow/` (solo en español, enlazada desde el menú de la portada) cuenta paso a paso el flujo de trabajo con agentes: Herdr, Claude Code, skills y subagentes, MCP, Composio y CLIs. Cada herramienta propia enlaza su sitio y su repo, con las estrellas leídas de GitHub al compilar (`src/pages/workflow.astro`).
- **Guía IA:** `/guia-ia/` (solo en español) explica cómo conectar Claude o ChatGPT a Gmail, Google Calendar, Drive y otras apps con Composio, con tareas para delegar y advertencias de seguridad. Es el recurso que se manda por DM a quien comenta «IA» en un reel (`src/pages/guia-ia.astro`).
- **Para agentes y buscadores:** `/llms.txt` con el índice de proyectos (cada uno apunta al `llms.txt` de su subdominio) y la página de workflow; `/robots.txt` con el sitemap.
- **Legal:** privacidad y términos en `/privacidad/`, `/terminos/`, `/en/privacy/` y `/en/terms/`. Cubren jjato.com y todas las apps `*.jjato.com`, que comparten un login único con Clerk (`accounts.jjato.com`), y también la conexión con TikTok que usan apps como boost para publicar videos. La autenticación la integra cada app; este repo no tiene código de login.

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # dist/
```

Se despliega en Vercel con cada push a `main`.

Si algo de aquí te sirve, una estrella en GitHub ayuda.
