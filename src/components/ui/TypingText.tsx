"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  className?: string;
};

/**
 * Typing effect sutil: escribe y borra frases en bucle con un cursor parpadeante.
 * Pensado para acompañar el rol del hero sin resultar exagerado.
 */
export default function TypingText({ phrases, className }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      // Pausa al completar la frase
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      // Breve pausa antes de pasar a la siguiente frase
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, 400);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          );
        },
        deleting ? 45 : 85,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-pulse-soft bg-cyan align-middle" />
    </span>
  );
}
