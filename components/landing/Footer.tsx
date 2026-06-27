"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import AnimatedGradient from "@/components/ui/animated-gradient";

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

export default function Footer() {
  const phoneNumber = "+33626834020";
  const whatsappMessage = encodeURIComponent("Bonjour, j'ai une question !");
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${whatsappMessage}`;

  return (
    <footer className="relative bg-night overflow-hidden border-t rule">
      {/* ── VAGUE animée (fond shader, signature du site original) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="hero-aurora hero-aurora--1" style={{ bottom: "-20%", left: "10%", width: "55vw", height: "55vw" }} />
        <div className="hero-aurora hero-aurora--3" style={{ top: "-18%", right: "-10%", width: "48vw", height: "48vw" }} />
        <AnimatedGradient config={WAVE_CONFIG} style={{ opacity: 0.55 }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,13,0.3)_0%,rgba(18,19,13,0.55)_60%,rgba(18,19,13,0.8)_100%)]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 pt-16 pb-10">
        {/* Wordmark géant */}
        <div className="border-b rule pb-10 mb-10">
          <img
            src="/logos/next-level-wordmark-dark.svg"
            alt="Next.Level"
            className="w-full h-auto block"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-ash text-sm leading-relaxed mb-5 max-w-[36ch]">
              On transforme votre expertise en présence digitale performante. Sites,
              applications sur mesure et visibilité locale pour générer des clients qualifiés.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Discuter sur WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-bold text-cream mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-ash">
              <li><Link href="#pour-qui" className="hover:text-accent transition-colors">Pour qui</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#realisations" className="hover:text-accent transition-colors">Réalisations</Link></li>
              <li><Link href="#avis" className="hover:text-accent transition-colors">Avis</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-cream mb-4 text-sm">Contact</h4>
            <ul className="space-y-2.5 text-sm text-ash">
              <li><Link href="#contact" className="hover:text-accent transition-colors">Appel découverte</Link></li>
              <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-cream mb-4 text-sm">Légal</h4>
            <ul className="space-y-2.5 text-sm text-ash">
              <li><Link href="/mentions-legales" className="hover:text-accent transition-colors">Mentions Légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-accent transition-colors">Confidentialité</Link></li>
              <li><Link href="/cgv" className="hover:text-accent transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t rule flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-ash-dim text-sm">&copy; 2026 Next Level. Tous droits réservés.</p>
          <p className="text-ash-dim text-sm">Votre site en 7 jours, pas en 3 mois.</p>
        </div>
      </div>
    </footer>
  );
}
