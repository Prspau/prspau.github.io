"use client";

import { about, profile } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="// quién soy" title={about.heading} />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          {/* Texto */}
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08} as="div">
                <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <p className="pt-2 font-mono text-sm text-slate-500">
                <span className="text-cyan">const</span>{" "}
                <span className="text-violet">ubicacion</span> ={" "}
                <span className="text-slate-300">
                  &quot;{profile.location}&quot;
                </span>
                ;
              </p>
            </Reveal>
          </div>

          {/* Métricas */}
          <Reveal y={32}>
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
              {about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="glass glow-border rounded-2xl p-5 text-center lg:text-left"
                >
                  <div className="text-gradient text-3xl font-bold sm:text-4xl">
                    {h.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
