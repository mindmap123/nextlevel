"use client";

import { motion } from "framer-motion";
import { Phone, Palette, Code, Rocket } from "lucide-react";
import RevealWords from "@/components/ui/RevealWords";

const STEPS = [
  { day: "J1", title: "Appel découverte", desc: "On analyse vos besoins, objectifs et votre marché en 30 min.", icon: Phone },
  { day: "J+1", title: "Design & UX", desc: "Maquettes interactives validées avec vous avant le moindre code.", icon: Palette },
  { day: "J+4", title: "Développement", desc: "Code propre et rapide. Vous suivez l'avancement en temps réel.", icon: Code },
  { day: "J+7", title: "Livraison & suivi", desc: "Mise en ligne, formation et suivi des performances pendant 3 mois.", icon: Rocket },
];

export default function Processus() {
  return (
    <section id="process" className="py-20 md:py-28 bg-bone-2">
      <div className="max-w-[1280px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-muted mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            (Process)
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1] text-ink">
            Du brief au résultat
            <br />
            en <span className="text-accent">7 jours.</span>
          </h2>
          <RevealWords
            className="mt-5 block text-lg text-ink-soft max-w-[44ch]"
            text="Un process rodé, des délais tenus. Pas 3 mois d'attente."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l rule-ink">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group border-r border-b rule-ink p-7 md:p-8"
            >
              <div className="flex items-baseline justify-between mb-10">
                <span className="stat-num text-3xl text-accent">{step.day}</span>
                <span className="font-display text-sm font-bold text-ink-muted">0{i + 1}</span>
              </div>
              <step.icon className="w-7 h-7 text-ink mb-5 group-hover:text-accent transition-colors" strokeWidth={1.75} />
              <h3 className="font-display text-lg font-bold text-ink mb-2 leading-snug">{step.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
