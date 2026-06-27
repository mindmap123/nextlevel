"use client";

import { motion } from "framer-motion";

const VALUES = [
  {
    n: "01",
    title: "Transparence",
    desc: "Stratégies ouvertes, résultats mesurables, devis clairs. On partage chaque étape, sans jargon ni surprise.",
  },
  {
    n: "02",
    title: "Pragmatisme",
    desc: "On se concentre sur ce qui compte : les résultats. Des choix éprouvés, pas de gadget qui ne sert pas votre business.",
  },
  {
    n: "03",
    title: "Délais tenus",
    desc: "Votre site en 7 jours, pas en 3 mois. Un engagement de délai, respecté à chaque projet.",
  },
  {
    n: "04",
    title: "Sur-mesure",
    desc: "Pas de template recyclé. Chaque site, chaque outil est pensé pour votre métier et vos clients.",
  },
  {
    n: "05",
    title: "Suivi",
    desc: "On ne disparaît pas après la mise en ligne. Formation, corrections et suivi des performances pendant 3 mois.",
  },
];

export default function Valeurs() {
  return (
    <section id="valeurs" className="py-20 md:py-28 bg-night">
      <div className="max-w-[1280px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ash-dim mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            (Valeurs)
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1] text-cream">
            Ce qui nous <span className="text-accent">guide.</span>
          </h2>
        </motion.div>

        <div className="border-t rule">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group grid md:grid-cols-[auto_0.8fr_1.5fr] gap-4 md:gap-12 items-baseline py-8 border-b rule"
            >
              <span className="stat-num text-2xl text-ash-dim group-hover:text-accent transition-colors">{v.n}</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-cream tracking-[-0.02em]">{v.title}</h3>
              <p className="text-ash leading-relaxed max-w-[60ch]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
