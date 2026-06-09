"use client";

import { motion } from "framer-motion";

/**
 * Fondo decorativo: grid tecnológico con máscara radial, dos orbes glow
 * flotantes y partículas minimalistas. Puramente estético (aria-hidden).
 *
 * Las partículas se generan de forma determinista (sin Math.random ni estado)
 * para que el render del servidor y el del cliente coincidan: cero desajustes
 * de hidratación y sin setState en efectos.
 */
const PARTICLES = Array.from({ length: 22 }).map((_, i) => {
  // PRNG simple y estable basado en el índice.
  const rand = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  return {
    left: `${rand(i + 1) * 100}%`,
    top: `${rand(i + 7.3) * 100}%`,
    delay: rand(i + 3.1) * 4,
    duration: 4 + rand(i + 5.7) * 4,
  };
});

export default function TechBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Grid con desvanecido radial */}
      <div
        className="absolute inset-0 bg-grid-tech [background-size:44px_44px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)",
        }}
      />

      {/* Orbes glow flotantes */}
      <motion.div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-electric/20 blur-[100px]"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet/20 blur-[110px]"
        animate={{ y: [0, -28, 0], x: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Partículas */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan/70"
          style={{ left: p.left, top: p.top }}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
