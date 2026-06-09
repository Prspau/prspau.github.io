"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/** Preview generado cuando un proyecto no tiene imagen propia. */
function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-grid-tech [background-size:24px_24px]">
      <div className="absolute inset-0 bg-gradient-to-br from-electric/15 via-transparent to-violet/15" />
      <span className="relative font-mono text-5xl font-bold text-white/10 transition-transform duration-500 group-hover:scale-110">
        {project.title
          .split(" ")
          .map((w) => w[0])
          .slice(0, 3)
          .join("")}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="glass glow-border group flex h-full flex-col overflow-hidden rounded-2xl"
    >
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
        <ProjectPreview project={project} />
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full border border-cyan/30 bg-ink-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan backdrop-blur">
            destacado
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Reto técnico */}
        <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-violet">
            reto técnico
          </p>
          <p className="mt-1 text-sm text-slate-400">{project.challenge}</p>
        </div>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan"
            >
              <Icon name="github" className="h-4 w-4" />
              Código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan"
            >
              <Icon name="external" className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          kicker="// trabajo"
          title="Proyectos destacados"
          subtitle="Una selección de proyectos donde he resuelto retos técnicos reales."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
