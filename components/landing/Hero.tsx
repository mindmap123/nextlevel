"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star, ShieldCheck, Zap, CreditCard } from "lucide-react";
import { useRef } from "react";
import { usePopup } from "./PopupContext";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedGradient from "@/components/ui/animated-gradient";
import CountUp from "@/components/ui/CountUp";

const TRUST_STATS = [
  { node: <CountUp to={30} prefix="+" />, label: "projets livrés" },
  { node: <CountUp to={7} suffix=" j" />, label: "pour livrer un site" },
  { node: <span>0</span>, label: "template recyclé" },
];

const BADGES = [
  { icon: Star, label: "4,9/5 sur Google", iconClass: "text-accent", fill: "currentColor" },
  { icon: ShieldCheck, label: "Garantie 3 mois", iconClass: "text-accent", fill: "none" },
  { icon: Zap, label: "Livré en 7 jours", iconClass: "text-accent", fill: "none" },
  { icon: CreditCard, label: "Paiement 3x sans frais", iconClass: "text-accent", fill: "none" },
];

const WAVE_CONFIG = {
  preset: "custom" as const,
  color1: "#12130D",
  color2: "#FF4D17",
  color3: "#C2410C",
  rotation: -20,
  proportion: 42,
  scale: 0.3,
  speed: 35,
  distortion: 3,
  swirl: 40,
  swirlIterations: 6,
  softness: 100,
  offset: 0,
  shape: "Checks" as const,
  shapeSize: 40,
};

const CLIENTS = [
  "Kimbrandesign", "Sompower", "Archidomo", "Iberdrola",
  "Francecanapé", "Arnaud Energies", "22h22", "Wegoboard", "L'atelier", "Griph",
];

const NAV_LINKS = [
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#avis", label: "Avis" },
];

const WORD_EASE = [0.22, 1, 0.36, 1] as const;

function HeadlineWord({ word, accent, delay }: { word: string; accent?: boolean; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0" style={{ paddingBottom: "0.12em" }}>
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay, ease: WORD_EASE }}
        className={`inline-block ${accent ? "text-accent" : ""}`}
      >
        {word}
      </motion.span>
    </span>
  );
}

const HEADLINE: { w: string; a?: boolean }[] = [
  { w: "On" }, { w: "conçoit" }, { w: "des" }, { w: "sites" }, { w: "qui" },
  { w: "transforment", a: true }, { w: "vos" }, { w: "visiteurs" }, { w: "en" }, { w: "clients", a: true },
];

export default function Hero() {
  const { openPopup } = usePopup();
  const auroraRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = auroraRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translate3d(${(px * 36).toFixed(1)}px, ${(py * 28).toFixed(1)}px, 0)`;
  };

  const handleLeave = () => {
    if (auroraRef.current) auroraRef.current.style.transform = "";
  };

  return (
    <>
      <div className="relative bg-night text-cream grain overflow-hidden" onMouseMove={handleMove} onMouseLeave={handleLeave}>
        {/* ── VAGUE animée (fond shader, signature du site original) ── */}
        <div ref={auroraRef} aria-hidden className="hero-parallax pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="hero-aurora hero-aurora--1" style={{ top: "-14%", left: "28%", width: "62vw", height: "62vw" }} />
          <div className="hero-aurora hero-aurora--2" style={{ top: "8%", left: "-12%", width: "55vw", height: "55vw" }} />
          <div className="hero-aurora hero-aurora--3" style={{ top: "18%", right: "-16%", width: "52vw", height: "52vw" }} />
          <AnimatedGradient config={WAVE_CONFIG} style={{ opacity: 0.72 }} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,13,0.12)_0%,rgba(18,19,13,0.45)_55%,rgba(18,19,13,0.82)_100%)]" />
        </div>

        {/* ── NAV ── */}
        <nav className="relative z-50">
          <div className="max-w-[1280px] mx-auto px-5 h-20 md:h-24 flex items-center justify-between">
            <a href="#" aria-label="Next.Level — accueil" className="inline-block">
              <img
                src="/logos/next-level-wordmark-dark.svg"
                alt="Next.Level"
                className="h-7 sm:h-8 w-auto"
              />
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-ash">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="link-underline hover:text-cream transition-colors">
                  {l.label}
                </a>
              ))}
            </div>

            <CTAButton
              onClick={openPopup}
              className="inline-flex items-center gap-2 bg-cream text-night font-semibold text-sm px-5 py-3 rounded-full hover:bg-accent hover:text-white transition-colors duration-200"
            >
              Réserver un appel
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
            </CTAButton>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="relative z-10">
          <div className="max-w-[1100px] mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28 text-center flex flex-col items-center">
            {/* Disponibilité — positionnement studio sélectif */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/[0.04] px-4 py-1.5 text-xs font-semibold text-ash backdrop-blur-sm">
                <span className="relative flex w-2 h-2">
                  <span className="pulse-ring absolute inline-flex w-full h-full rounded-full bg-accent" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
                </span>
                Studio web français · projets sur sélection
              </span>
            </motion.div>

            <h1 className="font-display font-bold tracking-[-0.04em] leading-[0.98] text-[clamp(40px,7.5vw,92px)] max-w-[16ch]">
              {HEADLINE.map((item, i) => (
                <HeadlineWord key={i} word={item.w} accent={item.a} delay={0.1 + i * 0.05} />
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mt-8 text-lg md:text-xl text-ash leading-relaxed max-w-[46ch]"
            >
              Sur-mesure, livrés en 7 jours, pensés pour vendre.
              Pas des brochures en ligne.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="mt-10"
            >
              <CTAButton
                onClick={openPopup}
                className="group inline-flex items-center justify-center gap-2.5 bg-accent text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-accent-dark transition-colors duration-200"
              >
                Réserver un appel
                <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-ash-dim"
            >
              <span>Livré en 7 jours</span>
              <span className="w-1 h-1 rounded-full bg-ash-dim" />
              <span>100% sur-mesure</span>
              <span className="w-1 h-1 rounded-full bg-ash-dim" />
              <span>Suivi 3 mois</span>
            </motion.div>

            {/* ── Mockup navigateur : vrai site en mouvement ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 w-full max-w-[940px]"
            >
              <div className="tilt-card !rounded-2xl bg-card border rule overflow-hidden text-left">
                {/* barre navigateur */}
                <div className="flex items-center gap-3 px-4 py-3 border-b rule bg-night/60">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-cream/15" />
                    <span className="w-3 h-3 rounded-full bg-cream/15" />
                    <span className="w-3 h-3 rounded-full bg-cream/15" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-night/80 border rule px-4 py-1 text-xs text-ash-dim max-w-[260px] w-full justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      votre-site.fr
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent">Live</span>
                </div>
                {/* contenu : vrai site qui bouge */}
                <div className="aspect-[16/9] bg-night overflow-hidden relative">
                  <video
                    src="/videos/archidomo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/videos/archidomo-poster.jpg"
                    className="object-cover w-full h-full"
                  />
                  <span aria-hidden className="tilt-sheen" />
                </div>
              </div>
            </motion.div>
          </div>

        </section>
      </div>

      {/* ── BLOC MARQUES — bandeau confiance, intégré au thème sombre ── */}
      <section aria-label="Ils nous font confiance" className="relative bg-coal border-y rule overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 py-14 md:py-16">
          {/* label */}
          <p className="flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ash mb-9">
            <span className="inline-block w-6 h-px bg-accent" />
            Ils nous font confiance
            <span className="inline-block w-6 h-px bg-accent" />
          </p>

          {/* logos — mur monochrome lisible */}
          <div className="relative overflow-hidden">
            <div className="flex gap-14 animate-marquee w-max items-center" style={{ willChange: "transform" }}>
              {[...CLIENTS, ...CLIENTS].map((name, i) => (
                <span
                  key={i}
                  className="font-display text-2xl md:text-[28px] font-bold whitespace-nowrap select-none text-cream/55 hover:text-accent transition-colors duration-300"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {name}
                </span>
              ))}
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg,#1A1B12 0%,rgba(26,27,18,0) 12%,rgba(26,27,18,0) 88%,#1A1B12 100%)",
              }}
            />
          </div>

          {/* stats */}
          <div className="mt-12 grid grid-cols-3 max-w-2xl mx-auto">
            {TRUST_STATS.map((s, i) => (
              <div
                key={i}
                className={`text-center px-3 ${i !== 0 ? "border-l rule" : ""}`}
              >
                <div className="stat-num text-3xl md:text-4xl text-accent">{s.node}</div>
                <div className="mt-1.5 text-xs md:text-sm text-ash">{s.label}</div>
              </div>
            ))}
          </div>

          {/* badges confiance */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {BADGES.map((b) => (
              <span
                key={b.label}
                className="badge-trust inline-flex items-center gap-2 rounded-full border rule bg-night/60 px-4 py-2 text-sm text-ash backdrop-blur-sm transition-colors duration-300 hover:border-accent/50 hover:text-cream"
              >
                <b.icon className={`w-4 h-4 ${b.iconClass}`} strokeWidth={2.25} fill={b.fill} />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY BOTTOM CTA (mobile) ── */}
      <div className="mobile-sticky-cta fixed bottom-0 left-0 z-40 bg-card border-t rule px-4 py-2.5 flex items-center justify-between gap-3 sm:hidden">
        <p className="min-w-0 truncate text-cream text-[13px] font-semibold leading-none">Votre site en 7 jours</p>
        <CTAButton
          onClick={openPopup}
          className="flex-shrink-0 whitespace-nowrap bg-accent text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-accent-dark transition-colors"
        >
          Réserver un appel →
        </CTAButton>
      </div>
    </>
  );
}
