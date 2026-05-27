"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Wrench, PhoneCall, ArrowRight } from "lucide-react";
import { usePopup } from "./PopupContext";
import GradientWaveText from "@/components/ui/gradient-wave-text";

const PILLARS = [
  {
    number: "01",
    icon: Globe,
    title: "Sites web qui vendent",
    desc: "Site vitrine, landing page ou e-commerce : on conçoit des sites rapides, beaux et optimisés pour convertir vos visiteurs en clients.",
    features: ["Site vitrine", "Landing page", "E-commerce", "Mobile first", "SEO on-page"],
    featured: true,
    ctaLink: null,
  },
  {
    number: "02",
    icon: MapPin,
    title: "Référencement local Google",
    desc: "Fiche Google My Business optimisée, avis clients et SEO local pour apparaître dans le top 3 des recherches \"près de moi\" dans votre zone.",
    features: ["Fiche GMB", "Avis clients", "SEO local", "Top 3 Google Maps", "Photos pro"],
    featured: false,
    iconColor: "text-[#0066FF]",
    bgLight: "bg-[#0066FF]/[0.07]",
    ctaLink: "https://nextlevel-gmb.vercel.app/",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Outils métier sur mesure",
    desc: "CRM, calculateur de marges, suivi de chantier, bon de commande digital, tableau de bord... On automatise ce que vous faites encore à la main.",
    features: ["CRM sur mesure", "Calcul de marges", "Suivi chantier", "Devis & factures", "Dashboard"],
    featured: false,
    iconColor: "text-[#7B2FF2]",
    bgLight: "bg-[#7B2FF2]/[0.07]",
    ctaLink: null,
    ctaLabel: "Être recontacté",
  },
  {
    number: "04",
    icon: PhoneCall,
    title: "Agent vocal intelligent",
    desc: "Un assistant téléphonique qui répond à vos appels, qualifie les demandes, prend les informations utiles et vous transmet les bons prospects.",
    features: ["Réponse 24/7", "Qualification appels", "Prise de RDV", "Résumé automatique", "Relance clients"],
    featured: false,
    iconColor: "text-[#00A3FF]",
    bgLight: "bg-[#00A3FF]/[0.08]",
    ctaLink: "https://voicecaptur.vercel.app",
  },
];

const CARD_BACKGROUNDS = [
  "linear-gradient(145deg, #FFFFFF 0%, #F4EDFF 46%, #E9DAFF 100%)",
  "linear-gradient(145deg, #FFFFFF 0%, #EEF6FF 46%, #DCEBFF 100%)",
  "linear-gradient(145deg, #FFFFFF 0%, #EEF0FF 46%, #E0E4FF 100%)",
  "linear-gradient(145deg, #FFFFFF 0%, #EAFBFF 46%, #D8F4FF 100%)",
];

const CARD_ACCENTS = [
  "#7B2FF2",
  "#0066FF",
  "#4F46E5",
  "#00A3FF",
];

const CARD_SHADOWS = [
  "rgba(123,47,242,0.28)",
  "rgba(0,102,255,0.24)",
  "rgba(79,70,229,0.24)",
  "rgba(0,163,255,0.22)",
];

export default function ServicesOfferts() {
  const { openPopup } = usePopup();

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8F9FC] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#7B2FF2] font-bold text-xs uppercase tracking-[0.12em] mb-3">Ce que l'on fait</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[52px] font-bold tracking-[-0.035em] leading-[1.05] text-[#1A1A2E] max-w-[16ch]">
            Quatre expertises,{" "}
            <em className="not-italic text-gradient">un seul objectif</em>
          </h2>
          <div className="mt-4 max-w-[480px]" style={{ "--gradient-wave-base": "rgb(100,116,139)" } as React.CSSProperties}>
            <GradientWaveText
              align="left"
              inView
              repeat
              speed={0.18}
              bandGap={10}
              bandCount={4}
              customColors={["#7B2FF2", "#9B6FFF", "#0066FF", "#6BAAFF"]}
              className="text-base sm:text-lg"
            >
              Faire croître votre business grâce au digital.
            </GradientWaveText>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={openPopup}
              data-service-card
              className="group relative rounded-2xl p-7 overflow-hidden cursor-pointer border border-white shadow-[0_18px_48px_-28px_rgba(26,26,46,0.3)] transition-all duration-300 hover:-translate-y-2"
              style={{ background: CARD_BACKGROUNDS[i], boxShadow: `0 18px 48px -30px ${CARD_SHADOWS[i]}` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5 pointer-events-none"
                style={{ backgroundColor: CARD_ACCENTS[i] }}
              />
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: CARD_ACCENTS[i], opacity: 0.16 }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.12)_55%,rgba(255,255,255,0))] pointer-events-none" />

              {p.featured && (
                <div
                  className="absolute top-5 right-5 text-white text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: CARD_ACCENTS[i] }}
                >
                  Populaire
                </div>
              )}

              {/* Watermark number */}
              <span
                className="absolute -top-3 -right-1 text-[6rem] font-black leading-none select-none pointer-events-none"
                style={{ color: CARD_ACCENTS[i], opacity: 0.08 }}
              >
                {p.number}
              </span>

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/70 border border-white shadow-sm"
                  style={{ color: CARD_ACCENTS[i] }}
                >
                  <p.icon className="w-6 h-6" />
                </div>

                <h3 className="font-display text-xl font-bold mb-3 leading-snug text-[#1A1A2E]">
                  {p.title}
                </h3>

                <p className="text-[14px] leading-relaxed mb-5 text-[#64748B]">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/72 border border-white text-[#64748B]"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Featured CTA inline */}
                {p.featured && (
                  <div
                    className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all"
                    style={{ color: CARD_ACCENTS[i] }}
                  >
                    Être recontacté <ArrowRight className="w-4 h-4" />
                  </div>
                )}

                {p.ctaLink && (
                  <a
                    href={p.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all"
                    style={{ color: CARD_ACCENTS[i] }}
                  >
                    En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {!p.ctaLink && p.ctaLabel && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openPopup();
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all"
                    style={{ color: CARD_ACCENTS[i] }}
                  >
                    {p.ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
