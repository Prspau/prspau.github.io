"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { links, profile } from "@/data/portfolio";
import { withBasePath } from "@/lib/basePath";
import Icon from "@/components/ui/Icon";
import TechBackground from "@/components/ui/TechBackground";
import TypingText from "@/components/ui/TypingText";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <TechBackground />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr]">
        {/* Columna de texto */}
        <motion.div variants={container} initial="hidden" animate="visible">
          {profile.available && (
            <motion.div variants={item} className="mb-6">
              <span className="kicker">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                Disponible para proyectos
              </span>
            </motion.div>
          )}

          <motion.p
            variants={item}
            className="mb-3 font-mono text-sm text-slate-400"
          >
            <span className="text-cyan">$</span> hola, soy
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-gradient">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-center gap-x-3 text-xl font-medium text-slate-200 sm:text-2xl"
          >
            <span>{profile.role}</span>
            <span className="text-slate-600">·</span>
            <TypingText
              phrases={profile.taglines}
              className="font-mono text-cyan"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.shortBio}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href={withBasePath(links.cv)}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Icon name="download" className="h-4 w-4" />
              Descargar CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <Icon name="mail" className="h-4 w-4" />
              Contactar
            </a>
          </motion.div>

          {/* Social */}
          <motion.div variants={item} className="mt-7 flex items-center gap-3">
            {[
              { href: links.github, name: "github" as const, label: "GitHub" },
              {
                href: links.linkedin,
                name: "linkedin" as const,
                label: "LinkedIn",
              },
              {
                href: `mailto:${links.email}`,
                name: "mail" as const,
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.name === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan"
              >
                <Icon name={s.name} className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Columna del retrato */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto hidden w-full max-w-xs lg:block"
        >
          <div className="glow-border animate-float relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] before:opacity-100">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="(max-width: 1024px) 0px, 320px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          </div>
          {/* Tarjeta flotante decorativa */}
          <div className="glass absolute -bottom-4 -left-6 rounded-xl px-4 py-3 font-mono text-xs text-slate-300 shadow-glow-cyan">
            <span className="text-cyan">{"</>"}</span> open to work
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#about"
        aria-label="Bajar"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          scroll
        </span>
        <span className="grid h-9 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-cyan" />
        </span>
      </motion.a>
    </section>
  );
}
