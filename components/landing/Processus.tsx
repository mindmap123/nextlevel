"use client";

import { motion } from "framer-motion";
import { Phone, Palette, Code, Rocket } from "lucide-react";

const STEPS = [
  {
    title: "Appel Découverte",
    desc: "On analyse vos besoins, objectifs et votre marché en 30 min.",
    icon: Phone,
    duration: "30 min",
  },
  {
    title: "Design & UX",
    desc: "Maquettes interactives validées avec vous avant le moindre code.",
    icon: Palette,
    duration: "J+2",
  },
  {
    title: "Développement",
    desc: "Code propre, rapide et optimisé. Vous suivez l'avancement en temps réel.",
    icon: Code,
    duration: "J+5",
  },
  {
    title: "Livraison & Suivi",
    desc: "Mise en ligne, formation et suivi des performances pendant 3 mois.",
    icon: Rocket,
    duration: "J+14",
  },
];

export default function Processus() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(123,47,242,0.05),transparent)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#7B2FF2] font-bold text-xs uppercase tracking-[0.12em] mb-3">Notre processus</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold tracking-[-0.035em] leading-[1.08] mb-4">
            Du brief au <em className="not-italic text-gradient">résultat</em>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg max-w-[440px] mx-auto">
            Un process rodé, des délais tenus. Votre site en 14 jours, pas 3 mois.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-[#7B2FF2]/20 via-[#0066FF]/30 to-[#7B2FF2]/20 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon circle with number */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7B2FF2]/8 to-[#0066FF]/8 border border-[#7B2FF2]/15 flex items-center justify-center group-hover:border-[#7B2FF2]/40 transition-all duration-300 group-hover:shadow-[0_0_0_6px_rgba(123,47,242,0.06)]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2FF2]/[0.12] to-[#0066FF]/[0.08] flex items-center justify-center group-hover:from-[#7B2FF2]/20 group-hover:to-[#0066FF]/15 transition-all duration-300">
                      <step.icon className="w-5 h-5 text-[#7B2FF2]" />
                    </div>
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#7B2FF2] to-[#0066FF] flex items-center justify-center text-[10px] font-black text-white shadow-[0_2px_8px_rgba(123,47,242,0.4)]">
                    {i + 1}
                  </div>
                  {/* Duration chip */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-[#E2E8F0] rounded-full px-2 py-0.5 text-[10px] font-bold text-[#64748B] whitespace-nowrap shadow-sm">
                    {step.duration}
                  </div>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-[#1A1A2E] mb-2 leading-tight mt-1">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed max-w-[160px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
