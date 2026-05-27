"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { usePopup } from "./PopupContext";
import CTAButton from "@/components/ui/CTAButton";
import GradientWaveText from "@/components/ui/gradient-wave-text";
import AnimatedGradient from "@/components/ui/animated-gradient";

const CLIENTS = [
  "Kimbrandesign", "Sompower", "Archidomo",
  "Iberdrola", "Francecanapé", "Arnaud Energies", "22h22", "Wegoboard", "L'atelier", "Griph",
];

const WORD_EASE = [0.22, 1, 0.36, 1] as const;

function WordRevealLine({
  text,
  emphasis = false,
  lineDelay = 0,
}: {
  text: string;
  emphasis?: boolean;
  lineDelay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className="block">
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.22em] last:mr-0"
          style={{ paddingBottom: "0.12em" }}
        >
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: lineDelay + i * 0.08, ease: WORD_EASE }}
            className={`inline-block ${emphasis ? "text-gradient" : ""}`}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { openPopup } = usePopup();

  return (
    <>
      <div className="relative overflow-hidden bg-[#1A1A2E] lg:bg-[#08050D] text-white">
        {/* Mobile : même bg que footer (AnimatedGradient sur #1A1A2E) */}
        <div aria-hidden className="absolute inset-0 z-0 overflow-hidden lg:hidden">
          <AnimatedGradient
            config={{
              preset: "custom",
              color1: "#0D0D1A",
              color2: "#7B2FF2",
              color3: "#0066FF",
              rotation: -20,
              proportion: 30,
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
        </div>
        {/* Desktop : aurores brand en mouvement */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden lg:block">
          <div
            className="hero-aurora hero-aurora--violet"
            style={{ top: "-12%", left: "30%", width: "60vw", height: "60vw" }}
          />
          <div
            className="hero-aurora hero-aurora--blue"
            style={{ top: "10%", left: "-10%", width: "55vw", height: "55vw" }}
          />
          <div
            className="hero-aurora hero-aurora--lilac"
            style={{ top: "20%", right: "-15%", width: "50vw", height: "50vw" }}
          />
        </div>
        {/* Grain subtil desktop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(8,5,13,0.50)_0%,rgba(8,5,13,0.78)_100%)] hidden lg:block" />

        {/* ── NAV ── */}
        <nav className="sticky top-0 z-50 bg-transparent lg:absolute lg:inset-x-0">
          <div className="max-w-[1200px] mx-auto px-5 h-16 pt-4 lg:h-24 lg:pt-0 flex items-center justify-center lg:justify-between">
            <Image
              src="/logos/next-level-logo-mobile.png"
              alt="Next Level"
              width={520}
              height={173}
              className="block lg:hidden h-11 w-auto"
              priority
            />
            <Image 
              src="/logos/next-level-logo.svg" 
              alt="Next Level"
              width={180}
              height={56}
              className="hidden lg:block h-10 sm:h-12 lg:h-14 w-auto"
              priority
            />
            {/* CTA desktop uniquement */}
            <CTAButton onClick={openPopup} className="
              hidden lg:inline-flex items-center justify-center gap-2
              border border-white/20 bg-white/[0.06] text-white/85 font-bold text-sm
              px-5 py-3 rounded-full backdrop-blur-sm
              hover:opacity-95 hover:-translate-y-0.5 transition-all duration-200">
              Contact
              <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden">

          {/* Desktop : colonne unique centrée — occupe le viewport entier */}
          <div className="hidden lg:flex flex-col items-center justify-center max-w-[1080px] mx-auto px-5 pt-24 pb-16 relative z-10 text-center min-h-screen">

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="inline-flex items-center gap-2 bg-white/[0.06] text-[#EAD7FF] border border-white/15 rounded-full px-4 py-1.5 text-xs font-bold mb-8 backdrop-blur-sm uppercase tracking-[0.08em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C02AE8]" />
                Votre partenaire digital sur mesure
              </div>
            </motion.div>

            <h1 className="font-body font-medium tracking-[-0.045em] leading-[1.05] text-[88px] text-[#FFF9FF] mb-8">
              <WordRevealLine text="On vous trouve." lineDelay={0.1} />
              <span className="block">
                <em className="not-italic inline-block relative pb-3">
                  <WordRevealLine text="On vous choisit." emphasis lineDelay={0.34} />
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 1.05, ease: [0.65, 0, 0.35, 1] }}
                    style={{ transformOrigin: "left center" }}
                    aria-hidden
                    className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-gradient-brand"
                  />
                </em>
              </span>
            </h1>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-[560px] mb-12"
              style={{ "--gradient-wave-base": "rgba(255,255,255,0.72)" } as React.CSSProperties}
            >
              <GradientWaveText align="center" inView repeat speed={0.18} bandGap={10} bandCount={4}
                customColors={["#7B2FF2", "#9B6FFF", "#0066FF", "#6BAAFF"]}
                className="text-xl leading-relaxed">
                Plus de visibilité, plus de clients.
              </GradientWaveText>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }} className="mb-14">
              <CTAButton onClick={openPopup} className="
                group relative inline-flex items-center justify-center gap-2.5
                bg-gradient-brand text-white font-bold text-base
                px-7 py-4 rounded-full
                ring-1 ring-white/15
                shadow-[0_10px_40px_-10px_rgba(123,47,242,0.55),0_0_0_1px_rgba(255,255,255,0.08)_inset]
                hover:-translate-y-0.5 hover:shadow-[0_18px_52px_-10px_rgba(123,47,242,0.75),0_0_0_1px_rgba(255,255,255,0.12)_inset]
                transition-all duration-200">
                <span className="relative">Prendre RDV</span>
                <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-3"
              aria-hidden
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm text-[#EAD7FF] backdrop-blur-sm">
                <span className="text-[#B600FF]">✦</span>
                Sites sur mesure
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm text-[#EAD7FF] backdrop-blur-sm">
                <span className="text-[#B600FF]">✓</span>
                Leads qualifiés
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm text-[#EAD7FF] backdrop-blur-sm">
                <span className="text-[#B600FF]">↗</span>
                Conversion optimisée
              </div>
            </motion.div>
          </div>

          {/* Mobile : colonne unique — remplit viewport sous le nav */}
          <div className="lg:hidden relative z-10">
            <div className="px-5 pt-6 pb-20 text-center flex flex-col items-center justify-center min-h-[calc(100svh-64px)]">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 bg-white/10 text-[#F1D9FF] border border-white/15 rounded-full px-3.5 py-1.5 text-xs font-bold mb-6 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C02AE8] animate-pulse" />
                  Votre partenaire digital sur mesure
                </div>
              </motion.div>

              <h1 className="font-body font-medium tracking-[-0.045em] leading-[1.08] text-[44px] sm:text-[58px] text-[#FFF9FF] mb-6 drop-shadow-[0_2px_18px_rgba(0,0,0,0.36)]">
                <WordRevealLine text="On vous trouve." lineDelay={0.1} />
                <span className="block">
                  <em className="not-italic inline-block relative pb-2">
                    <WordRevealLine text="On vous choisit." emphasis lineDelay={0.34} />
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 1.05, ease: [0.65, 0, 0.35, 1] }}
                      style={{ transformOrigin: "left center" }}
                      aria-hidden
                      className="absolute left-0 bottom-0 h-[2.5px] w-full rounded-full bg-gradient-brand"
                    />
                  </em>
                </span>
              </h1>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8 max-w-[420px]"
                style={{ "--gradient-wave-base": "rgba(255,255,255,0.66)" } as React.CSSProperties}
              >
                <GradientWaveText align="center" inView repeat speed={0.18} bandGap={10} bandCount={4}
                  customColors={["#7B2FF2", "#9B6FFF", "#0066FF", "#6BAAFF"]}
                  className="text-base leading-relaxed">
                  Plus de visibilité, plus de clients.
                </GradientWaveText>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }} className="mb-8">
                <CTAButton onClick={openPopup} className="
                  group inline-flex items-center justify-center gap-2
                  bg-gradient-brand text-white font-bold text-base
                  px-6 py-3.5 rounded-full
                  ring-1 ring-white/15
                  shadow-[0_8px_32px_-8px_rgba(123,47,242,0.6),0_0_0_1px_rgba(255,255,255,0.08)_inset]
                  hover:-translate-y-0.5 transition-all duration-200">
                  Prendre RDV
                  <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
                </CTAButton>
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
                  <span key={i} className="font-display text-2xl font-bold whitespace-nowrap select-none text-[#1A1A2E]/35"
                    style={{ letterSpacing: "-0.03em" }}>
                    {name}
                  </span>
                ))}
              </div>
              <div className="hero-logo-strip-mask absolute inset-0 pointer-events-none" />
            </div>
          </div>
        </section>
      </div>

      {/* ── STICKY BOTTOM CTA (mobile) ── */}
      <div className="mobile-sticky-cta fixed bottom-0 left-0 z-40 bg-[#1A1A2E] border-t border-white/5 px-4 py-2 flex items-center justify-between gap-3 sm:hidden">
        <p className="min-w-0 truncate text-white text-[13px] font-bold leading-none">Discutons de votre projet</p>
        <CTAButton onClick={openPopup} className="flex-shrink-0 whitespace-nowrap bg-gradient-brand text-white text-xs font-bold px-4 py-2 rounded-full shadow-brand hover:opacity-90 transition-opacity">
          Prendre RDV →
        </CTAButton>
      </div>
    </>
  );
}
