"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Wrench, ArrowRight } from "lucide-react";
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
  },
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
          <p className="text-[#7B2FF2] font-bold text-xs uppercase tracking-[0.12em] mb-3">Ce qu'on fait</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[52px] font-bold tracking-[-0.035em] leading-[1.05] text-[#1A1A2E] max-w-[16ch]">
            Trois expertises,{" "}
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
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={openPopup}
              className={`group relative rounded-2xl p-7 overflow-hidden cursor-pointer transition-all duration-300 ${
                p.featured
                  ? "hover:-translate-y-2 hover:shadow-[0_20px_60px_-12px_rgba(123,47,242,0.45)]"
                  : "bg-white border border-[#E2E8F0] hover:border-[#7B2FF2]/30 hover:shadow-lg hover:-translate-y-1"
              }`}
              style={p.featured ? { background: "linear-gradient(135deg, #7B2FF2 0%, #0066FF 100%)" } : {}}
            >
              {/* Featured: decorative glow orbs */}
              {p.featured && (
                <>
                  <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                  {/* "Most popular" badge */}
                  <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full">
                    Populaire
                  </div>
                </>
              )}

              {/* Watermark number */}
              <span className={`absolute -top-3 -right-1 text-[6rem] font-black leading-none select-none pointer-events-none ${p.featured ? "text-white/10" : "text-[#F1F5F9]"}`}>
                {p.number}
              </span>

              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${p.featured ? "bg-white/20 backdrop-blur-sm" : p.bgLight}`}>
                  <p.icon className={`w-6 h-6 ${p.featured ? "text-white" : p.iconColor}`} />
                </div>

                <h3 className={`font-display text-xl font-bold mb-3 leading-snug ${p.featured ? "text-white" : "text-[#1A1A2E]"}`}>
                  {p.title}
                </h3>

                <p className={`text-[14px] leading-relaxed mb-5 ${p.featured ? "text-white/85" : "text-[#64748B]"}`}>
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        p.featured
                          ? "bg-white/20 text-white border border-white/20"
                          : "bg-[#F8F9FC] border border-[#E2E8F0] text-[#64748B]"
                      }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Featured CTA inline */}
                {p.featured && (
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                    Être recontacté <ArrowRight className="w-4 h-4" />
                  </div>
                )}

                {p.ctaLink && (
                  <a
                    href={p.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold ${p.iconColor} group-hover:gap-2.5 transition-all`}
                  >
                    En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
