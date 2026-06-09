"use client";

import { motion } from "framer-motion";
import { skillCategories, type SkillCategory } from "@/data/portfolio";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const accentMap: Record<
  SkillCategory["accent"],
  { text: string; ring: string; chip: string }
> = {
  electric: {
    text: "text-electric",
    ring: "group-hover:border-electric/50",
    chip: "hover:border-electric/40 hover:text-electric",
  },
  cyan: {
    text: "text-cyan",
    ring: "group-hover:border-cyan/50",
    chip: "hover:border-cyan/40 hover:text-cyan",
  },
  violet: {
    text: "text-violet",
    ring: "group-hover:border-violet/50",
    chip: "hover:border-violet/40 hover:text-violet",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="// stack técnico"
          title="Skills & Tecnologías"
          subtitle="Herramientas y tecnologías con las que diseño, construyo y despliego."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((cat, idx) => {
            const accent = accentMap[cat.accent];
            return (
              <Reveal key={cat.title} delay={idx * 0.08}>
                <div
                  className={`glass group h-full rounded-2xl p-6 transition-colors ${accent.ring} hover:bg-white/[0.05]`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] ${accent.text}`}
                    >
                      <Icon name={cat.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.35 }}
                        className={`cursor-default rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-sm text-slate-300 transition-all hover:-translate-y-0.5 ${accent.chip}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
