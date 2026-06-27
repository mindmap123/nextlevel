"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePopup } from "./PopupContext";
import CTAButton from "@/components/ui/CTAButton";
import CountUp from "@/components/ui/CountUp";
import RevealWords from "@/components/ui/RevealWords";

const STATS = [
  { to: 80, prefix: "+", suffix: "%", label: "de trafic" },
  { to: 3, prefix: "×", suffix: "", label: "de demandes" },
  { to: 7, prefix: "", suffix: "j", label: "de délai" },
];

export default function CtaBand() {
  const { openPopup } = usePopup();

  return (
    <section className="bg-accent text-white">
      <div className="max-w-[1280px] mx-auto px-5 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.02] text-white">
              Votre site en 7 jours. Vos premiers clients dans la foulée.
            </h2>
            <RevealWords
              className="mt-4 block text-white/85 text-lg max-w-[46ch]"
              text="Audit gratuit en 30 min : on vous dit exactement quoi améliorer pour convertir plus."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <CountUp
                    to={s.to}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="stat-num text-4xl md:text-5xl text-white block"
                  />
                  <div className="text-sm text-white/75 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <CTAButton
              onClick={openPopup}
              className="group inline-flex items-center justify-center gap-2.5 bg-white text-accent font-semibold text-base px-7 py-4 rounded-full hover:bg-night hover:text-white transition-colors duration-200 w-full sm:w-fit"
            >
              Réserver mon audit gratuit
              <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
