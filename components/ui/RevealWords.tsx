"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fondu subtil mot par mot au défilement. */
export default function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.03,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
          initial={{ opacity: 0, y: "0.35em", filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.5, delay: delay + i * stagger, ease: EASE }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
