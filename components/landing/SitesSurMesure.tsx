"use client";

import { motion } from "framer-motion";
import { Monitor, Zap, ShoppingBag, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const SITES = [
    {
        title: "Landing Page",
        subtitle: "Idéal pour lancer une offre",
        icon: Zap,
        desc: "Une page ultra-optimisée pour convertir vos visiteurs en leads ou clients. Design premium et copywriting orienté résultats.",
        features: ["Design sur mesure", "Optimisé conversion", "SEO de base", "Formulaire intégré"],
        delay: "5 jours",
        popular: false,
    },
    {
        title: "Site Vitrine",
        subtitle: "Le plus demandé",
        icon: Monitor,
        desc: "Votre présence digitale complète : activité, services, équipe et réalisations. Conçu pour inspirer confiance et générer des contacts.",
        features: ["5 pages sur mesure", "Responsive Mobile First", "SEO Technique Avancé", "CMS intégré"],
        delay: "10 jours",
        popular: true,
    },
    {
        title: "E-commerce",
        subtitle: "Vendez en ligne 24/7",
        icon: ShoppingBag,
        desc: "Boutique en ligne performante avec paiement sécurisé, gestion des stocks et expérience d'achat fluide sur mobile.",
        features: ["Catalogue produits", "Paiement Stripe/PayPal", "Gestion commandes", "Tableau de bord vendeur"],
        delay: "15 jours",
        popular: false,
    }
];

export default function SitesSurMesure() {
    return (
        <section id="sites" className="py-20 md:py-28 bg-[#F8F9FC]">
            <div className="container mx-auto px-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-[#7B2FF2] font-semibold text-sm uppercase tracking-wider mb-3">Sites Web</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Un site qui <span className="text-gradient">travaille pour vous</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl text-lg">
                        Chaque site est pensé pour convertir, pas juste pour afficher.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {SITES.map((site, i) => (
                        <motion.div
                            key={site.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-7 rounded-2xl bg-white border ${site.popular ? 'border-[#7B2FF2]/30 shadow-brand' : 'border-gray-100'} hover:shadow-brand hover:border-[#7B2FF2]/20 transition-all duration-300 flex flex-col`}
                        >
                            {site.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-brand text-white text-xs font-bold rounded-full">
                                    Populaire
                                </div>
                            )}

                            <div className="w-12 h-12 rounded-xl bg-[#7B2FF2]/[0.06] flex items-center justify-center mb-5">
                                <site.icon className="w-6 h-6 text-[#7B2FF2]" />
                            </div>

                            <h3 className="text-xl font-bold mb-1 text-[#1A1A2E]">{site.title}</h3>
                            <p className="text-sm text-[#7B2FF2] font-medium mb-4">{site.subtitle}</p>

                            <p className="text-slate-500 text-[15px] mb-6 leading-relaxed flex-1">{site.desc}</p>

                            <ul className="space-y-2.5 mb-6">
                                {site.features.map(f => (
                                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-[#7B2FF2] shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-5 border-t border-gray-100 mt-auto flex items-center justify-between">
                                <span className="text-xs text-slate-400 font-medium">Livré en {site.delay}</span>
                                <Link href="#contact" className="inline-flex items-center gap-1.5 text-[#7B2FF2] font-semibold text-sm hover:gap-2.5 transition-all">
                                    Démarrer <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
