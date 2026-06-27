"use client";

import { motion } from "framer-motion";
import SectionAura from "@/components/ui/SectionAura";

const QUESTIONS = [
  {
    q: "Vous voulez un site qui convertit, pas juste joli ?",
    a: "On conçoit chaque page autour d'un objectif : transformer le visiteur en client. Design, copywriting et tunnel pensés pour la conversion, pas pour la galerie.",
  },
  {
    q: "Vous en avez assez d'être invisible sur Google ?",
    a: "SEO local, fiche Google My Business, avis clients : on vous place dans le top 3 des recherches « près de moi » sur votre zone.",
  },
  {
    q: "Vous perdez du temps sur des tâches manuelles ?",
    a: "CRM, devis, suivi de chantier, agent vocal IA : on automatise ce que vous faites encore à la main pour que vous vous concentriez sur votre métier.",
  },
  {
    q: "Vous voulez des délais tenus, pas des promesses ?",
    a: "Votre site en ligne en 7 jours, pas en 3 mois. Process rodé, étapes validées avec vous, suivi des performances pendant 3 mois.",
  },
];

export default function PourQui() {
  return (
    <section id="pour-qui" className="relative overflow-hidden py-20 md:py-28 bg-night">
      <SectionAura color="#F59E0B" position="top-left" opacity={0.08} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ash-dim mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            (Pour qui)
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05] text-cream">
            Les TPE, artisans et e-commerces qui cherchent un vrai{" "}
            <span className="text-accent">retour</span> sur leur présence en ligne.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 border-t border-l rule">
          {QUESTIONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="group border-r border-b rule p-8 md:p-10 transition-colors duration-300 hover:bg-card"
            >
              <h3 className="font-display text-xl md:text-2xl font-bold text-cream mb-4 leading-snug">
                {item.q}
              </h3>
              <p className="text-ash leading-relaxed max-w-[46ch]">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
