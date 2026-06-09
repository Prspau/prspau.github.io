# Portfolio / CV — Ingeniero Informático

Landing page de **una sola página** (single-page portfolio) con estética
moderna y tecnológica: modo oscuro, glow sutil, grid animado, microanimaciones
y experiencia de scroll cuidada. Pensada para impactar a recruiters y empresas
tecnológicas desde el primer segundo.

![stack](https://img.shields.io/badge/Next.js-16-black) ![ts](https://img.shields.io/badge/TypeScript-strict-blue) ![tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8) ![motion](https://img.shields.io/badge/Framer_Motion-11-ff0080)

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (modo estricto)
- **Tailwind CSS** con tema y animaciones personalizadas
- **Framer Motion** para animaciones y reveals al hacer scroll
- SEO básico (metadata, Open Graph, robots), favicon SVG y buen rendimiento
  (página estática prerenderizada)

## Puesta en marcha

```bash
npm install      # instalar dependencias
npm run dev      # entorno de desarrollo → http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build de producción
npm run lint     # linting
```

## Personalización (lo único que necesitas tocar)

Todo el contenido vive en **un solo archivo**:

```
src/data/portfolio.ts
```

Ahí editas, sin tocar componentes:

| Sección            | Qué cambiar                                                   |
| ------------------ | ------------------------------------------------------------ |
| `profile`          | Nombre, rol, taglines del typing effect, bio, foto, ubicación |
| `links`            | Email, GitHub, LinkedIn, ruta del CV                         |
| `about`            | Párrafos de "Sobre mí" y métricas destacadas                |
| `skillCategories`  | Categorías y tecnologías (añade/quita libremente)           |
| `projects`         | Proyectos (estructura reutilizable: añade objetos al array)  |
| `timeline`         | Experiencia, formación y certificaciones                     |
| `contact`          | Textos y endpoint del formulario                             |
| `seo`              | Título, descripción, URL y keywords                          |

### Assets a reemplazar (carpeta `public/`)

- **`cv.pdf`** → tu CV real (ahora hay un PDF placeholder).
- **`profile-placeholder.svg`** → tu foto. Si usas otro nombre/formato,
  actualiza `profile.photo` en `portfolio.ts` (p. ej. `"/foto.jpg"`).

### Formulario de contacto

Por defecto, al enviar se abre el cliente de correo del visitante (`mailto:`)
con el mensaje prerrellenado — funciona sin backend.

Para recibir mensajes como emails reales sin servidor:

1. Crea un formulario gratuito en [Formspree](https://formspree.io).
2. Pega tu endpoint en `contact.formEndpoint` dentro de `portfolio.ts`,
   p. ej. `"https://formspree.io/f/xxxxxxx"`.

El envío pasará a hacerse por `fetch` automáticamente.

## Estructura del proyecto

```
.
├── app/
│   ├── layout.tsx          # fuentes, metadata/SEO, <html>
│   ├── page.tsx            # ensamblaje de las secciones
│   ├── globals.css         # estilos base, tema y utilidades (glass, glow…)
│   └── icon.svg            # favicon
├── src/
│   ├── data/
│   │   └── portfolio.ts    # ← TODO el contenido editable
│   └── components/
│       ├── Navbar.tsx      # navbar sticky + sección activa + menú móvil
│       ├── Footer.tsx
│       ├── sections/       # Hero, About, Skills, Projects, Experience, Contact
│       └── ui/             # Reveal, SectionHeading, Icon, TypingText,
│                           #   TechBackground, ScrollProgress
└── public/                 # cv.pdf, foto, robots.txt
```

## Personalizar el diseño

- **Colores de acento**: `tailwind.config.ts` → `colors` (`electric`, `cyan`,
  `violet`) y los fondos base `ink`.
- **Animaciones / glow**: `tailwind.config.ts` (`keyframes`, `animation`,
  `boxShadow`) y `app/globals.css` (clases `.glass`, `.glow-border`,
  `.text-gradient`, `.kicker`).
- **Tipografías**: `app/layout.tsx` (Space Grotesk + JetBrains Mono vía
  `next/font`).

## Despliegue

Despliega gratis en [Vercel](https://vercel.com): importa el repositorio y
listo (detecta Next.js automáticamente). Alternativas: Netlify, Cloudflare
Pages o cualquier hosting con Node.

## Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion` (desactiva animaciones si el usuario lo pide).
- Etiquetas semánticas, `aria-label` en iconos/botones y foco visible.
- Página estática prerenderizada para un Lighthouse alto.
