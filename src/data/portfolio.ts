/**
 * ============================================================================
 *  CONFIGURACIÓN DEL PORTFOLIO  —  EDITA ESTE ARCHIVO PARA PERSONALIZAR TODO
 * ============================================================================
 *  Toda la información que se muestra en la web se controla desde aquí.
 *  No necesitas tocar los componentes para cambiar textos, proyectos, skills,
 *  enlaces o datos de contacto. Solo edita los valores de abajo.
 * ============================================================================
 */

export type IconKey =
  | "github"
  | "linkedin"
  | "mail"
  | "download"
  | "external"
  | "code"
  | "ai"
  | "infra"
  | "dev";

/* -------------------------------------------------------------------------- */
/*  DATOS PERSONALES                                                          */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Pau Romero",
  // Texto fijo grande del hero
  role: "Ingeniero Informático",
  // Frases que rotan en el subtítulo animado (typing effect)
  taglines: [
    "Software Engineer",
    "Inteligencia Artificial",
    "Ciberseguridad",
    "Automatización",
    "Sistemas & Infraestructura",
  ],
  // Descripción corta bajo el nombre (hero)
  shortBio:
    "Tecnología, automatización y visión empresarial para transformar procesos en resultados tangibles.",
  // Imagen de perfil (colócala en /public). Deja "" para mostrar el avatar generado.
  photo: "/FotoCV.jpg",
  location: "Barcelona",
  available: true, // muestra el badge "Disponible para proyectos"
};

/* -------------------------------------------------------------------------- */
/*  ENLACES / CONTACTO                                                        */
/* -------------------------------------------------------------------------- */

export const links = {
  email: "pauromer2002@gmail.com",
  github: "https://github.com/Prspau",
  linkedin: "https://www.linkedin.com/in/pau-romero-safont-1401bb19a/",
  cv: "/Pau Romero CV-2.pdf", // coloca tu PDF en /public/cv.pdf
};

/* -------------------------------------------------------------------------- */
/*  SOBRE MÍ                                                                  */
/* -------------------------------------------------------------------------- */

export const about = {
  heading: "Sobre mí",
  paragraphs: [
    "Ingeniero Informático con formación complementaria en Administración y Finanzas y Comercio Internacional, lo que aporta una visión multidisciplinar y estratégica de los entornos empresariales. Esta combinación de conocimientos técnicos y de negocio permite abordar proyectos de automatización, digitalización y desarrollo informático desde una perspectiva alineada con los procesos, objetivos y necesidades reales de la empresa. Perfil orientado a la optimización de operaciones, la mejora de la eficiencia mediante soluciones tecnológicas y la conexión entre el ámbito técnico y la toma de decisiones empresariales.",
  ],
  // Métricas destacadas (edita libremente)
  highlights: [
    { value: "10+", label: "Proyectos técnicos" },
    { value: "6+", label: "Lenguajes dominados" },
    { value: "∞", label: "Ganas de aprender" },
  ],
};

/* -------------------------------------------------------------------------- */
/*  SKILLS / TECH STACK                                                       */
/* -------------------------------------------------------------------------- */

export type SkillCategory = {
  title: string;
  icon: IconKey;
  accent: "electric" | "cyan" | "violet";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes",
    icon: "code",
    accent: "electric",
    skills: ["Java", "C", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Desarrollo",
    icon: "dev",
    accent: "cyan",
    skills: ["Android", "Firebase", "APIs REST", "Backend", "Arquitectura SW"],
  },
  {
    title: "IA / Datos",
    icon: "ai",
    accent: "violet",
    skills: ["Machine Learning", "Data Analysis", "Computer Vision"],
  },
  {
    title: "Infraestructura / Sistemas",
    icon: "infra",
    accent: "electric",
    skills: ["Linux", "Redes", "Ciberseguridad", "Docker", "Git"],
  },
];

/* -------------------------------------------------------------------------- */
/*  PROYECTOS DESTACADOS                                                      */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string;
  description: string;
  challenge: string; // reto técnico principal
  stack: string[];
  image?: string; // ruta en /public (opcional)
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "App Android",
    description:
      "Aplicación móvil nativa con sincronización en la nube, autenticación y experiencia de usuario cuidada.",
    challenge:
      "Diseñar una arquitectura offline-first con sincronización fiable y consumo eficiente de batería.",
    stack: ["Android", "Java", "Firebase", "REST"],
    github: "https://github.com/tu-usuario",
    featured: true,
  },
  {
    title: "Robot autónomo MSP432 + Dynamixel",
    description:
      "Robot con microcontrolador MSP432 y servos Dynamixel, con control de movimiento y sensores en tiempo real.",
    challenge:
      "Control en tiempo real sobre hardware con recursos limitados y comunicación con actuadores Dynamixel.",
    stack: ["C", "MSP432", "Embedded", "Control"],
    github: "https://github.com/tu-usuario",
    featured: true,
  },
  {
    title: "Sistema orientado a la gestión del transito ferroviario en Rodalies de Catalunya mediante Q-learning",
    description:
      "Un entorno de simulación de tráfico ferroviario donde un agente de Q-learning aprende a gestionar el tráfico para minimizar retrasos y colisiones.",
    challenge:
      "Diseñar un entorno de simulación realista y entrenar un agente de aprendizaje por refuerzo con un espacio de estados y acciones complejo.",
    stack: ["Python", "Reinforcement Learning", "Simulación"],
    github: "https://github.com/Prspau/RODI_AI",
    featured: true,
  },
  {
    title: "Gemelo digital para running",
    description:
      "Digital twin que modela y analiza el rendimiento de un corredor a partir de datos de sensores.",
    challenge:
      "Modelar fielmente la dinámica del corredor e ingerir y procesar datos de sensores en streaming.",
    stack: ["Python", "Data Analysis", "Simulación"],
    github: "https://github.com/tu-usuario",
  },
  {
    title: "Proyecto de IA / Computer Vision",
    description:
      "Modelo de aprendizaje automático aplicado a un problema real con pipeline de datos completo.",
    challenge:
      "Construir un dataset robusto y un pipeline reproducible de entrenamiento e inferencia.",
    stack: ["Python", "Machine Learning", "Computer Vision"],
    github: "https://github.com/tu-usuario",
  },
  {
    title: "Visualización de datos",
    description:
      "Dashboard interactivo para explorar y comunicar datasets complejos de forma clara.",
    challenge:
      "Renderizar grandes volúmenes de datos manteniendo una interacción fluida en el navegador.",
    stack: ["JavaScript", "Data Viz", "APIs"],
    github: "https://github.com/tu-usuario",
  },
];

/* -------------------------------------------------------------------------- */
/*  EXPERIENCIA / FORMACIÓN (timeline)                                        */
/* -------------------------------------------------------------------------- */

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  description: string;
  tags?: string[];
  kind: "education" | "experience" | "certification";
};

export const timeline: TimelineItem[] = [
  {
    period: "2020 — 2024",
    title: "Grado en Ingeniería Informática",
    place: "Universidad",
    description:
      "Formación integral en software, sistemas, redes, IA y seguridad. Múltiples proyectos prácticos de ingeniería.",
    tags: ["Software", "Sistemas", "IA"],
    kind: "education",
  },
  {
    period: "2024",
    title: "Especialización en IA y Computer Vision",
    place: "Itinerario / Mención",
    description:
      "Profundización en aprendizaje automático, visión por computador y análisis de datos aplicado.",
    tags: ["Machine Learning", "Computer Vision"],
    kind: "education",
  },
  {
    period: "2023",
    title: "Certificación en Ciberseguridad",
    place: "Entidad certificadora",
    description:
      "Fundamentos de seguridad ofensiva y defensiva, redes y buenas prácticas de hardening.",
    tags: ["Seguridad", "Redes"],
    kind: "certification",
  },
  {
    period: "Actualidad",
    title: "Proyectos y colaboración técnica",
    place: "Freelance / Open Source",
    description:
      "Desarrollo de proyectos propios y colaboraciones, aplicando ingeniería de software de principio a fin.",
    tags: ["Backend", "Mobile", "IA"],
    kind: "experience",
  },
  {
    period: "Actualidad",
    title: "Automatización de tareas y desarrollo de software en empresa (Erkho Sider)",
    place: "Erkho Sider",
    description:
      "Desarrollo de proyectos de software a medida para la empresa, con foco en automatización, digitalización y optimización de procesos empresariales",
    tags: ["Backend", "Python", "IA", "Git", "Docker", "Linux"],
    kind: "experience",
  },
];

/* -------------------------------------------------------------------------- */
/*  CONTACTO                                                                  */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Hablemos",
  subheading:
    "¿Tienes un proyecto, una oferta o una idea? Estoy abierto a nuevas oportunidades y colaboraciones.",
  // Endpoint del formulario. Por defecto abre el cliente de correo (mailto).
  // Para recibir mensajes reales, crea un form en https://formspree.io y pega
  // aquí tu endpoint, p. ej. "https://formspree.io/f/xxxxxxx".
  formEndpoint: "",
};

/* -------------------------------------------------------------------------- */
/*  NAVEGACIÓN                                                                */
/* -------------------------------------------------------------------------- */

export const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
];

/* -------------------------------------------------------------------------- */
/*  SEO                                                                       */
/* -------------------------------------------------------------------------- */

export const seo = {
  title: `${profile.name} — ${profile.role}`,
  description:
    "Portfolio profesional de un Ingeniero Informático: software, IA, ciberseguridad y sistemas. Proyectos, skills y experiencia.",
  url: "https://tu-dominio.com",
  keywords: [
    "Ingeniero Informático",
    "Software Engineer",
    "Portfolio",
    "Inteligencia Artificial",
    "Ciberseguridad",
    "Desarrollador",
  ],
};
