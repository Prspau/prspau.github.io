"use client";

import { motion } from "framer-motion";

type Props = {
  kicker: string;
  title: string;
  subtitle?: string;
};

/** Encabezado consistente para cada sección con kicker monoespaciado. */
export default function SectionHeading({ kicker, title, subtitle }: Props) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <motion.span
        className="kicker"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-glow-cyan" />
        {kicker}
      </motion.span>
      <motion.h2
        className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-4 text-base leading-relaxed text-slate-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
