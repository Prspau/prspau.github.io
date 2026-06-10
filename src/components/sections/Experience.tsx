"use client";

import { motion } from "framer-motion";
import { timeline, type TimelineItem } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const kindLabel: Record<TimelineItem["kind"], string> = {
  education: "Formación",
  experience: "Experiencia",
  certification: "Certificación",
};

const kindColor: Record<TimelineItem["kind"], string> = {
  education: "text-electric border-electric/30",
  experience: "text-cyan border-cyan/30",
  certification: "text-violet border-violet/30",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          kicker="// trayectoria"
          title="Experiencia & Formación"
          subtitle="Mi recorrido académico y profesional."
        />

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-[19px] top-2 h-full w-px bg-gradient-to-b from-electric/50 via-white/10 to-transparent md:left-1/2" />

          <ul className="space-y-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={i} className="relative">
                  <div
                    className={`flex flex-col gap-4 md:flex-row md:items-center ${
                      isLeft ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Nodo */}
                    <span className="absolute left-[19px] top-2 z-10 grid h-2.5 w-2.5 -translate-x-1/2 place-items-center md:left-1/2">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-glow-cyan" />
                    </span>

                    {/* Espaciador en desktop */}
                    <div className="hidden flex-1 md:block" />

                    {/* Tarjeta */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6 }}
                      className="glass glow-border ml-10 flex-1 rounded-2xl p-5 md:ml-0"
                    >
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full border bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${kindColor[item.kind]}`}
                        >
                          {kindLabel[item.kind]}
                        </span>
                        <span className="font-mono text-xs text-slate-500">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-cyan/80">{item.place}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                      {item.tags && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
