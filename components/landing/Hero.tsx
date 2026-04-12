"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { usePopup } from "./PopupContext";

const STATS = [
  { num: "+200", label: "projets livrés" },
  { num: "4.9/5", label: "note clients" },
  { num: "14j", label: "délai moyen" },
  { num: "+40%", label: "conversion moy." },
];

const CLIENTS = [
  "Boulangerie Martin",
  "ModoShop",
  "Cabinet Leroux",
  "FleursByNath",
  "Atelier Métal",
  "Déco&Maison",
  "OptiVue Clermont",
  "Resto L'Annexe",
];

export default function Hero() {
  const { openPopup } = usePopup();

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F1F5F9]">
        <div className="max-w-[1200px] mx-auto px-5 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/logos/next-level-logo.png"
            alt="Next Level"
            width={160}
            height={40}
            className="h-9 sm:h-10 w-auto"
            priority
          />

          {/* Single CTA */}
          <button
            onClick={openPopup}
            className="
              flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5
              bg-gradient-brand text-white text-xs sm:text-sm font-bold
              rounded-full shadow-brand
              hover:opacity-90 hover:-translate-y-px
              transition-all duration-200
            "
          >
            Être recontacté
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 pt-10 pb-14 sm:pt-16 sm:pb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#F0E8FF] text-[#7B2FF2] border border-[#7B2FF2]/20 rounded-full px-3.5 py-1.5 text-xs font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FF2] animate-pulse" />
              Agence digitale — TPE &amp; E-commerce
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="
              font-display font-bold tracking-[-0.04em] leading-[1.02]
              text-[42px] sm:text-[58px] md:text-[72px] lg:text-[88px]
              text-[#1A1A2E] mb-5
              max-w-[14ch]
            "
          >
            Votre présence
            <br />
            digitale qui{" "}
            <em className="not-italic text-gradient">
              convertit.
            </em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-[520px] mb-8"
          >
            Sites web, référencement local et outils sur mesure. On construit
            votre présence digitale pour qu'elle ramène des clients —
            pas juste des visites.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-10"
          >
            <button
              onClick={openPopup}
              className="
                inline-flex items-center gap-2.5
                bg-gradient-brand text-white font-bold text-base sm:text-lg
                px-7 py-4 rounded-xl
                shadow-brand hover:shadow-brand-lg
                hover:opacity-95 hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              Être recontacté
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Stats grid — 2×2 mobile / 4 cols desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl sm:max-w-none"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl px-4 py-3.5"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight leading-none text-gradient">
                  {s.num}
                </div>
                <div className="text-xs text-[#94A3B8] mt-1.5 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── LOGO STRIP ──────────────────────────────── */}
        <div className="border-t border-[#F1F5F9] bg-[#F8F9FC] py-3.5 px-5 overflow-hidden">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#94A3B8] mb-2.5">
            Ils nous font confiance
          </p>
          {/* Infinite horizontal scroll */}
          <div className="flex gap-10 overflow-x-auto scrollbar-hide [-webkit-overflow-scrolling:touch]">
            {/* Duplicate for seamless loop on desktop */}
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span
                key={i}
                className="font-display text-sm font-bold text-[#94A3B8] opacity-50 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY BOTTOM CTA (mobile) ──────────────── */}
      <div className="
        fixed bottom-0 left-0 right-0 z-40
        bg-[#1A1A2E] border-t border-white/5
        px-4 py-3
        flex items-center justify-between gap-3
        sm:hidden
      ">
        <div className="leading-tight">
          <p className="text-white text-[13px] font-bold">Discutons de votre projet</p>
          <p className="text-white/50 text-[11px]">On vous répond sous 24h</p>
        </div>
        <button
          onClick={openPopup}
          className="
            flex-shrink-0
            bg-gradient-brand text-white text-xs font-bold
            px-4 py-2.5 rounded-full shadow-brand
            hover:opacity-90 transition-opacity
          "
        >
          Être recontacté →
        </button>
      </div>
    </>
  );
}
