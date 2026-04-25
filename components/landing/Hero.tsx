"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Zap, TrendingUp, Globe } from "lucide-react";
import { usePopup } from "./PopupContext";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedGradient from "@/components/ui/animated-gradient";

const STATS = [
  { num: "+80", label: "projets livrés" },
  { num: "4.9/5", label: "note clients" },
  { num: "14j", label: "délai moyen" },
  { num: "+40%", label: "conversion moy." },
];

const CLIENTS = [
  "Kimbrandesign",
  "Sompower",
  "Archidomo",
  "Iberdrola",
  "Francecanapé",
  "T Design",
  "Griph",
];

// Floating pill badges
const FLOATING_PILLS = [
  { icon: TrendingUp, label: "+40% conversions", delay: 0, x: "72%", y: "12%", color: "text-[#7B2FF2]", bg: "bg-[#F0E8FF]" },
  { icon: Globe, label: "Top 3 Google Maps", delay: 0.3, x: "65%", y: "52%", color: "text-[#0066FF]", bg: "bg-[#E8F0FF]" },
  { icon: Zap, label: "Livraison 14 jours", delay: 0.6, x: "75%", y: "35%", color: "text-[#7B2FF2]", bg: "bg-[#F0E8FF]" },
];

function FloatingPill({ pill }: { pill: typeof FLOATING_PILLS[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: pill.delay + 0.8 }}
      style={{ left: pill.x, top: pill.y }}
      className="absolute hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] whitespace-nowrap"
    >
      <div className={`w-6 h-6 rounded-full ${pill.bg} flex items-center justify-center`}>
        <pill.icon className={`w-3.5 h-3.5 ${pill.color}`} />
      </div>
      <span className="text-xs font-bold text-[#1A1A2E]">{pill.label}</span>
    </motion.div>
  );
}

export default function Hero() {
  const { openPopup } = usePopup();

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F1F5F9]">
        <div className="max-w-[1200px] mx-auto px-5 h-14 sm:h-16 flex items-center justify-between">
          <Image
            src="/logos/next-level-logo.svg"
            alt="Next Level"
            width={560}
            height={90}
            className="h-8 sm:h-10 w-auto"
            priority
          />
          <CTAButton
            onClick={openPopup}
            className="
              flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5
              bg-gradient-brand text-white text-xs sm:text-sm font-bold
              rounded-full shadow-brand
              hover:opacity-90 hover:-translate-y-px
              transition-all duration-200
            "
          >
            Prendre RDV
            <ArrowRight className="w-3.5 h-3.5" />
          </CTAButton>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden relative">
        {/* WebGL animated gradient — léger, couleurs brand */}
        <AnimatedGradient
          config={{
            preset: "custom",
            color1: "#FFFFFF",
            color2: "#9B6FFF",
            color3: "#6BAAFF",
            rotation: 15,
            proportion: 38,
            scale: 0.3,
            speed: 35,
            distortion: 3,
            swirl: 40,
            swirlIterations: 6,
            softness: 100,
            offset: 0,
            shape: "Checks",
            shapeSize: 40,
          }}
          style={{ opacity: 0.55 }}
        />

        <div className="max-w-[1200px] mx-auto px-5 pt-10 pb-14 sm:pt-16 sm:pb-20 relative z-10">

          {/* Floating pills (desktop) */}
          {FLOATING_PILLS.map((pill) => (
            <FloatingPill key={pill.label} pill={pill} />
          ))}

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#F0E8FF] text-[#7B2FF2] border border-[#7B2FF2]/20 rounded-full px-3.5 py-1.5 text-xs font-bold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FF2] animate-pulse" />
              Des prospects qualifiés, prêts à acheter
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
            Vous êtes bon dans
            <br />
            votre business.
            <br />
            <em className="not-italic text-gradient">
              On s'assure que ça se voit sur internet.
            </em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-[520px] mb-8"
          >
            Plus de visibilité, plus de clients.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-10"
          >
            <CTAButton
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
              Prendre RDV
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl sm:max-w-none"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-xl px-4 py-3.5 hover:border-[#7B2FF2]/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight leading-none text-gradient">
                  {s.num}
                </div>
                <div className="text-xs text-[#64748B] mt-1.5 font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── LOGO STRIP — perspective marquee ───────── */}
        <div className="border-y border-[#F1F5F9] bg-[#F8F9FC] py-8 overflow-hidden relative">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#94A3B8] mb-5 text-center">
            Ils nous font confiance
          </p>

          {/* 3D perspective container */}
          <div
            className="relative overflow-hidden"
            style={{ perspective: "1200px" }}
          >
            {/* Rotating plane */}
            <div
              style={{
                transform: "rotateX(8deg) rotateY(-18deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex gap-12 animate-infinite-scroll w-max">
                {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((name, i) => {
                  const total = CLIENTS.length * 3;
                  const pos = i / total;
                  const dist = Math.abs(pos - 0.5) * 2;
                  return (
                    <span
                      key={i}
                      className="font-display text-base font-bold whitespace-nowrap"
                      style={{
                        color: "#1A1A2E",
                        opacity: 0.18 + (1 - dist) * 0.38,
                        filter: `blur(${dist * 1.5}px)`,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Left / right fade */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(90deg, #F8F9FC 0%, transparent 18%, transparent 82%, #F8F9FC 100%)" }}
            />
            {/* Top / bottom fade */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(180deg, #F8F9FC 0%, transparent 30%, transparent 70%, #F8F9FC 100%)" }}
            />
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
        <CTAButton
          onClick={openPopup}
          className="
            flex-shrink-0
            bg-gradient-brand text-white text-xs font-bold
            px-4 py-2.5 rounded-full shadow-brand
            hover:opacity-90 transition-opacity
          "
        >
          Prendre RDV →
        </CTAButton>
      </div>
    </>
  );
}
