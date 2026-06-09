"use client";

import { contact, links } from "@/data/portfolio";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

// Extrae el "handle" final de una URL (p. ej. github.com/Prspau → Prspau).
const handle = (url: string) =>
  url.replace(/\/+$/, "").split("/").filter(Boolean).pop() ?? url;

export default function Contact() {
  const channels = [
    {
      label: "Email",
      value: links.email,
      href: `mailto:${links.email}`,
      name: "mail" as const,
      external: false,
    },
    {
      label: "GitHub",
      value: `@${handle(links.github)}`,
      href: links.github,
      name: "github" as const,
      external: true,
    },
    {
      label: "LinkedIn",
      value: `@${handle(links.linkedin)}`,
      href: links.linkedin,
      name: "linkedin" as const,
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          kicker="// contacto"
          title={contact.heading}
          subtitle={contact.subheading}
        />

        {/* Canales de contacto estáticos */}
        <div className="grid gap-4 sm:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="glass glow-border group flex h-full flex-col items-center gap-3 rounded-2xl p-6 text-center transition-colors hover:bg-white/[0.05]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan transition-transform group-hover:-translate-y-0.5">
                  <Icon name={c.name} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{c.label}</p>
                  <p className="mt-0.5 truncate font-mono text-xs text-slate-400">
                    {c.value}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* CTA principal por email */}
        <Reveal delay={0.24}>
          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:${links.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Icon name="mail" className="h-4 w-4" />
              Escríbeme un correo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
