"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const NEVER = [
  "Des templates recyclés vendus au prix du sur-mesure.",
  "Des sites « vitrines » jolis mais muets, qui ne ramènent aucun client.",
  "Des réunions à rallonge facturées pour brasser du vent.",
  "Des délais de 3 mois pour ce qui se livre en 7 jours.",
  "Des rapports remplis de jargon que personne ne lit.",
  "Le silence radio une fois le site mis en ligne.",
];

export default function Valeurs() {
  return (
    <section id="manifeste" className="py-20 md:py-28 bg-night">
      <div className="max-w-[1280px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-4xl"
        >
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ash-dim mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            (Manifeste)
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.02] text-cream">
            Un beau site qui ne vend pas,
            <br />
            <span className="text-accent">ça ne sert à rien.</span>
          </h2>
          <p className="mt-6 text-lg text-ash leading-relaxed max-w-[54ch]">
            On n&apos;est pas là pour gonfler un portfolio. On est là pour que votre
            site vous ramène des clients. Le reste, c&apos;est de la déco.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Ce qu'on ne fera jamais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-xl font-bold text-cream mb-6">
              Ce qu&apos;on ne fera jamais
            </p>
            <ul className="border-t rule">
              {NEVER.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 py-4 border-b rule"
                >
                  <X className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-ash leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Conviction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:sticky md:top-28 bg-card border rule rounded-3xl p-8 md:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-6">
              Notre conviction
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-cream leading-snug tracking-[-0.02em]">
              Votre site web, ce n&apos;est pas une carte de visite.
              C&apos;est votre meilleur commercial — disponible 24/7,
              qui ne dort jamais et ne rate <span className="text-accent">aucun client.</span>
            </p>
            <p className="mt-6 text-ash leading-relaxed">
              On le construit comme tel : chaque page, chaque mot, chaque bouton
              a un seul job — transformer un visiteur en client. Mesurable,
              pas décoratif.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
