# jato.run

Landing de [jato.run](https://jato.run): los proyectos de Jaime Aza que viven bajo `*.jato.run`.

| Proyecto | Dominio | Código |
| --- | --- | --- |
| HF Studio | [hf-studio.jato.run](https://hf-studio.jato.run) | [Jjat00/hf-studio](https://github.com/Jjat00/hf-studio) |
| Parkboard | [parkboard.jato.run](https://parkboard.jato.run) | [Jjat00/parkboard](https://github.com/Jjat00/parkboard) |
| Keyduelo | [keyduelo.jato.run](https://keyduelo.jato.run) | [Jjat00/keyduelo](https://github.com/Jjat00/keyduelo) |
| Skills | [skills.jato.run](https://skills.jato.run) | [Jjat00/jjat-skills](https://github.com/Jjat00/jjat-skills) |

Astro 7 estático + Tailwind v4, en español (`/`) e inglés (`/en/`). El texto y la lista de proyectos están en `src/i18n/copy.js`: de ahí salen la tabla, el JSON-LD y `llms.txt`.

- **Hero:** retícula de baldosas en canvas (`src/components/Grid.astro`) que se enciende al pasar el mouse y se vuelve un Snake jugable con «▶ jugar» (flechas, WASD o deslizar; cruceta en pantallas táctiles).
- **Para agentes y buscadores:** `/llms.txt` con el índice de proyectos (cada uno apunta al `llms.txt` de su subdominio) y `/robots.txt` con el sitemap.
- **Legal:** privacidad y términos en `/privacidad/`, `/terminos/`, `/en/privacy/` y `/en/terms/`. Cubren jato.run y todas las apps `*.jato.run`, que comparten un login único con Clerk (`accounts.jato.run`). La autenticación la integra cada app; este repo no tiene código de login.

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # dist/
```

Se despliega en Vercel con cada push a `main`.

Si algo de aquí te sirve, una estrella en GitHub ayuda.
