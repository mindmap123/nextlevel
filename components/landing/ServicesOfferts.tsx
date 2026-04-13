"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Wrench, ArrowRight } from "lucide-react";
import { usePopup } from "./PopupContext";

const PILLARS = [
  {
    number: "01",
    icon: Globe,
    title: "Sites web qui vendent",
    desc: "Site vitrine, landing page ou e-commerce : on conçoit des sites rapides, beaux et optimisés pour convertir vos visiteurs en clients.",
    features: ["Site vitrine", "Landing page", "E-commerce", "Mobile first", "SEO on-page"],
    iconColor: "text-[#7B2FF2]",
    bgLight: "bg-[#7B2FF2]/[0.07]",
    hoverBorder: "group-hover:border-[#7B2FF2]/30",
    ctaLink: null,
  },
  {
    number: "02",
    icon: MapPin,
    title: "Référencement local Google",
    desc: "Fiche Google My Business optimisée, avis clients et SEO local pour apparaître dans le top 3 des recherches \"près de moi\" dans votre zone.",
    features: ["Fiche GMB", "Avis clients", "SEO local", "Top 3 Google Maps", "Photos pro"],
    iconColor: "text-[#0066FF]",
    bgLight: "bg-[#0066FF]/[0.07]",
    hoverBorder: "group-hover:border-[#0066FF]/30",
    ctaLink: "https://nextlevel-gmb.vercel.app/",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Outils métier sur mesure",
    desc: "CRM, calculateur de marges, suivi de chantier, bon de commande digital, tableau de bord... On automatise ce que vous faites encore à la main.",
    features: ["CRM sur mesure", "Calcul de marges", "Suivi chantier", "Devis & factures", "Dashboard"],
    iconColor: "text-[#7B2FF2]",
    bgLight: "bg-[#7B2FF2]/[0.07]",
    hoverBorder: "group-hover:border-[#7B2FF2]/30",
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-[52px] font-bold tracking-tight leading-[1.05] text-[#1A1A2E] max-w-[16ch]">
            Trois expertises,{" "}
            <em className="not-italic text-gradient">un seul objectif</em>
          </h2>
          <p className="text-[#64748B] mt-4 text-base sm:text-lg max-w-[480px]">
            Faire croître votre business grâce au digital.
          </p>
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
              className={`group bg-white border border-[#E2E8F0] ${p.hoverBorder} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer`}
              onClick={openPopup}
            >
              {/* Watermark number */}
              <span className="absolute -top-3 -right-1 text-[6rem] font-black text-[#F1F5F9] leading-none select-none pointer-events-none">
                {p.number}
              </span>

              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${p.bgLight} flex items-center justify-center mb-5`}>
                  <p.icon className={`w-6 h-6 ${p.iconColor}`} />
                </div>

                <h3 className="font-display text-xl font-bold text-[#1A1A2E] mb-3 leading-snug">
                  {p.title}
                </h3>

                <p className="text-[#64748B] text-[14px] leading-relaxed mb-5">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F8F9FC] border border-[#E2E8F0] text-[#64748B]"
                    >
                      {f}
                    </span>
                  ))}
                </div>

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
