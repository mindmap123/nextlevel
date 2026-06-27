"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Kim B.",
    role: "Fondatrice, Kimbrandesign",
    text: "On avait une belle identité mais personne ne nous trouvait en ligne. Next Level a tout repositionné : le site, le message, la stratégie. En 3 semaines on avait des demandes entrantes.",
    result: "×3",
    resultLabel: "demandes entrantes",
  },
  {
    name: "Maxime R.",
    role: "Co-fondateur, Sompower",
    text: "Le site d'avant ne convertissait pas. La refonte a tout changé : design, tunnel, copywriting. +80% de trafic qualifié dès le premier mois.",
    result: "+80%",
    resultLabel: "trafic qualifié",
  },
  {
    name: "Stéphane M.",
    role: "Gérant, Archidomo",
    text: "Je pensais que mon site était suffisant. Next Level m'a montré ce que ça pouvait vraiment donner. Galerie immersive, formulaire optimisé. Les demandes de devis ont explosé.",
    result: "+60%",
    resultLabel: "demandes de devis",
  },
];

export default function Temoignages() {
  return (
    <section id="avis" className="py-20 md:py-28 bg-bone-2">
      <div className="max-w-[1280px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-muted mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            (Avis)
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1] text-ink">
            Des résultats,
            <br />
            <span className="text-accent">pas des promesses.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 border-t border-l rule-ink">
          {REVIEWS.map((review, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-r border-b rule-ink p-8 flex flex-col bg-bone-card"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              <div className="flex items-end gap-2 mb-5">
                <span className="stat-num text-5xl text-accent">{review.result}</span>
                <span className="text-xs text-ink-muted mb-1.5">{review.resultLabel}</span>
              </div>

              <blockquote className="font-display text-lg leading-snug text-ink mb-8 tracking-[-0.01em] flex-1">
                « {review.text} »
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-5 border-t rule-ink">
                <span className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs">
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span>
                  <span className="block text-ink font-bold text-sm">{review.name}</span>
                  <span className="block text-ink-muted text-xs">{review.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
