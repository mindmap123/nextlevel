"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { usePopup } from "./PopupContext";
import SectionAura from "@/components/ui/SectionAura";

type Pillar = {
  number: string;
  title: string;
  tag?: string;
  desc: string;
  deliverables: string[];
  ctaLabel: string;
  ctaLink: string | null;
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Sites qui vendent",
    tag: "Best-seller",
    desc: "Site vitrine, landing page ou e-commerce : rapides, beaux et pensés pour convertir vos visiteurs en clients.",
    deliverables: ["Design & UX sur mesure", "Copywriting orienté conversion", "Mobile first & SEO on-page", "Tunnel de contact optimisé"],
    ctaLabel: "Être recontacté",
    ctaLink: null,
  },
  {
    number: "02",
    title: "Visibilité locale Google",
    desc: "Apparaître dans le top 3 des recherches « près de moi » sur votre zone, et y rester.",
    deliverables: ["Fiche Google My Business", "Gestion des avis clients", "SEO local sur votre zone", "Photos pro & posts réguliers"],
    ctaLabel: "En savoir plus",
    ctaLink: "https://nextlevel-gmb.vercel.app/",
  },
  {
    number: "03",
    title: "Outils métier sur mesure",
    desc: "On automatise ce que vous faites encore à la main pour vous faire gagner du temps.",
    deliverables: ["CRM & tableau de bord", "Calcul de marges", "Suivi de chantier", "Devis & factures digitaux"],
    ctaLabel: "Être recontacté",
    ctaLink: null,
  },
  {
    number: "04",
    title: "Agent vocal IA 24/7",
    desc: "Un assistant qui répond à vos appels, qualifie les demandes et vous transmet les bons prospects.",
    deliverables: ["Réponse 24/7", "Qualification des appels", "Prise de RDV automatique", "Résumé & relance clients"],
    ctaLabel: "En savoir plus",
    ctaLink: "https://voicecaptur.vercel.app",
  },
];

export default function ServicesOfferts() {
  const { openPopup } = usePopup();

  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28 bg-coal">
      <SectionAura color="#FF6B3D" position="top-right" opacity={0.09} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ash-dim mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            (Services)
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1] text-cream">
            Quatre expertises,
            <br />
            <span className="text-accent">un seul objectif.</span>
          </h2>
        </motion.div>

        <div className="border-t rule">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative grid md:grid-cols-[auto_1fr_1.2fr] gap-6 md:gap-12 py-10 md:py-12 border-b rule transition-colors duration-300 hover:bg-card/40 md:px-6 md:-mx-6 md:rounded-xl"
            >
              {/* barre accent verticale au hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full md:left-0"
              />
              {/* Number + title */}
              <div className="flex items-start gap-4 md:w-[260px]">
                <span className="font-display text-2xl font-bold text-ash-dim group-hover:text-accent transition-colors duration-300 pt-0.5 tabular-nums">{p.number}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-cream leading-tight tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">
                    {p.title}
                  </h3>
                  {p.tag && (
                    <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-accent border border-accent/40 rounded-full px-2.5 py-1">
                      {p.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Desc + CTA */}
              <div className="flex flex-col items-start gap-5">
                <p className="text-ash leading-relaxed max-w-[40ch]">{p.desc}</p>
                <button
                  type="button"
                  onClick={() => (p.ctaLink ? window.open(p.ctaLink, "_blank") : openPopup())}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cream group-hover:text-accent group-hover:gap-2.5 transition-all"
                >
                  {p.ctaLabel}
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.25} />
                </button>
              </div>

              {/* Deliverables */}
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 content-start">
                {p.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-sm text-ash">
                    <Check className="w-4 h-4 text-accent shrink-0" strokeWidth={2.5} />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
