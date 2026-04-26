"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Rocket, Star, Clock, TrendingUp } from "lucide-react";
import { usePopup } from "./PopupContext";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedGradient from "@/components/ui/animated-gradient";
import GradientWaveText from "@/components/ui/gradient-wave-text"
;

const STATS = [
  { num: "+80", label: "projets livrés", icon: Rocket },
  { num: "4.9/5", label: "note clients", icon: Star },
  { num: "7j", label: "délai moyen", icon: Clock },
  { num: "+40%", label: "conversion moy.", icon: TrendingUp },
];

const CLIENTS = [
  "Kimbrandesign", "Sompower", "Archidomo",
  "Iberdrola", "Francecanapé", "T Design", "Griph",
];

export default function Hero() {
  const { openPopup } = usePopup();

  return (
    <>
      <div className="relative bg-white">
        <AnimatedGradient
          config={{
            preset: "custom",
            color1: "#FFFFFF", color2: "#9B6FFF", color3: "#6BAAFF",
            rotation: 15, proportion: 38, scale: 0.3, speed: 35,
            distortion: 3, swirl: 40, swirlIterations: 6,
            softness: 100, offset: 0, shape: "Checks", shapeSize: 40,
          }}
          style={{ opacity: 0.55 }}
        />

        {/* ── NAV ── */}
        <nav className="sticky top-0 z-50 bg-transparent">
          <div className="max-w-[1200px] mx-auto px-5 h-16 pt-3 lg:h-28 lg:pt-0 flex items-center justify-center lg:justify-between">
            <Image src="/logos/next-level-logo.svg" alt="Next Level"
              width={560} height={90} className="h-10 sm:h-14 w-auto" priority />
            {/* CTA desktop uniquement */}
            <CTAButton onClick={openPopup} className="
              hidden lg:inline-flex items-center gap-2
              bg-gradient-brand text-white font-bold text-sm
              px-5 py-2.5 rounded-xl shadow-brand
              hover:opacity-95 hover:-translate-y-0.5 transition-all duration-200">
              Prendre RDV <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden">

          {/* Desktop : 2 colonnes côte à côte */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_1.35fr] max-w-[1340px] mx-auto pl-10 pr-0 pt-10 pb-0 relative z-10 items-center gap-0">

            {/* Colonne gauche */}
            <div className="pb-14 pr-8">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 bg-[#F0E8FF] text-[#7B2FF2] border border-[#7B2FF2]/20 rounded-full px-3.5 py-1.5 text-xs font-bold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FF2] animate-pulse" />
                  Votre partenaire digital sur mesure
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-display font-bold tracking-[-0.04em] leading-[1.02] text-[58px] xl:text-[72px] text-[#1A1A2E] mb-5"
              >
                On vous trouve.
                <br />
                <em className="not-italic text-gradient">On vous choisit.</em>
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-[420px] mb-8"
                style={{ "--gradient-wave-base": "rgb(100,116,139)" } as React.CSSProperties}
              >
                <GradientWaveText align="left" inView repeat speed={0.18} bandGap={10} bandCount={4}
                  customColors={["#7B2FF2", "#9B6FFF", "#0066FF", "#6BAAFF"]}
                  className="text-lg leading-relaxed">
                  Plus de visibilité, plus de clients.
                </GradientWaveText>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }} className="mb-10">
                <CTAButton onClick={openPopup} className="
                  inline-flex items-center gap-2.5
                  bg-gradient-brand text-white font-bold text-lg
                  px-7 py-4 rounded-xl shadow-brand
                  hover:shadow-brand-lg hover:opacity-95 hover:-translate-y-0.5
                  transition-all duration-200">
                  Prendre RDV <ArrowRight className="w-5 h-5" />
                </CTAButton>
              </motion.div>

              {/* Stats en ligne horizontale */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="grid grid-cols-4 gap-3">
                {STATS.map((s, i) => (
                  <motion.div key={s.label}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-xl px-3 py-3 hover:border-[#7B2FF2]/30 hover:shadow-sm transition-all duration-300">
                    <s.icon className="w-3.5 h-3.5 text-[#7B2FF2] mb-1.5" />
                    <div className="font-display text-xl xl:text-2xl font-bold tracking-tight leading-none text-gradient">{s.num}</div>
                    <div className="text-[11px] text-[#64748B] mt-1 font-medium leading-tight">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Colonne droite — image pleine hauteur */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative self-stretch flex items-center justify-end">
              <Image src="/images/hero/hero_nextlevel-V1.png" alt="Next Level — Agence web"
                width={900} height={800}
                className="w-full h-auto max-h-[600px] xl:max-h-[700px] object-contain"
                priority />
            </motion.div>
          </div>

          {/* Mobile : colonne unique */}
          <div className="lg:hidden relative z-10">
            <div className="px-5 pt-8 pb-6">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 bg-[#F0E8FF] text-[#7B2FF2] border border-[#7B2FF2]/20 rounded-full px-3.5 py-1.5 text-xs font-bold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FF2] animate-pulse" />
                  Votre partenaire digital sur mesure
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-display font-bold tracking-[-0.04em] leading-[1.02] text-[40px] sm:text-[52px] text-[#1A1A2E] mb-4"
              >
                On vous trouve.
                <br />
                <em className="not-italic text-gradient">On vous choisit.</em>
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
                style={{ "--gradient-wave-base": "rgb(100,116,139)" } as React.CSSProperties}
              >
                <GradientWaveText align="left" inView repeat speed={0.18} bandGap={10} bandCount={4}
                  customColors={["#7B2FF2", "#9B6FFF", "#0066FF", "#6BAAFF"]}
                  className="text-base leading-relaxed">
                  Plus de visibilité, plus de clients.
                </GradientWaveText>
              </motion.div>

            </div>

            {/* Image pleine largeur mobile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full">
              <Image src="/images/hero/hero_nextlevel-V1.png" alt="Next Level — Agence web"
                width={800} height={600}
                className="w-full object-top"
                style={{ maxHeight: "340px", objectFit: "contain" }}
                priority />
            </motion.div>

            {/* CTA dans la zone gradient */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }} className="px-5 pt-4 pb-6">
              <CTAButton onClick={openPopup} className="
                w-full flex items-center justify-center gap-2
                bg-gradient-brand text-white font-bold text-base
                px-6 py-3.5 rounded-xl shadow-brand
                hover:opacity-95 transition-all duration-200">
                Prendre RDV <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </motion.div>

            {/* Stats */}
            <div className="bg-[#F8F9FC] px-5 pt-4 pb-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="grid grid-cols-2 gap-3">
                {STATS.map((s, i) => (
                  <motion.div key={s.label}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3.5">
                    <s.icon className="w-3.5 h-3.5 text-[#7B2FF2] mb-1.5" />
                    <div className="font-display text-2xl font-bold tracking-tight leading-none text-gradient">{s.num}</div>
                    <div className="text-xs text-[#64748B] mt-1.5 font-medium">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── LOGO STRIP ── */}
          <div className="border-y border-[#F1F5F9] bg-[#F8F9FC] py-8 overflow-hidden relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#94A3B8] mb-5 text-center">
              Ils nous font confiance
            </p>
            <div className="relative overflow-hidden">
              <div className="flex gap-16 animate-infinite-scroll w-max py-1" style={{ willChange: "transform" }}>
                {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((name, i) => (
                  <span key={i} className="font-display text-2xl font-bold whitespace-nowrap select-none"
                    style={{ color: "#1A1A2E", opacity: 0.35, letterSpacing: "-0.03em" }}>
                    {name}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(90deg, #F8F9FC 0%, transparent 15%, transparent 85%, #F8F9FC 100%)" }} />
            </div>
          </div>
        </section>
      </div>

      {/* ── STICKY BOTTOM CTA (mobile) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1A1A2E] border-t border-white/5 px-4 py-3 flex items-center justify-between gap-3 sm:hidden">
        <div className="leading-tight">
          <p className="text-white text-[13px] font-bold">Discutons de votre projet</p>
          <p className="text-white/50 text-[11px]">On vous répond sous 24h</p>
        </div>
        <CTAButton onClick={openPopup} className="flex-shrink-0 bg-gradient-brand text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-brand hover:opacity-90 transition-opacity">
          Prendre RDV →
        </CTAButton>
      </div>
    </>
  );
}
