"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Search, ArrowRight, Check, TrendingUp } from "lucide-react";
import Link from "next/link";

const GMB_SERVICES = [
    {
        title: "Création de Fiche",
        icon: MapPin,
        desc: "On crée et configure votre fiche Google Business de A à Z pour que vous apparaissiez sur Google Maps.",
        features: ["Configuration complète", "Catégories stratégiques", "Photos optimisées", "Cohérence NAP"],
    },
    {
        title: "Optimisation SEO Local",
        icon: Search,
        desc: "Votre fiche existe mais n'apparaît pas dans le top 3 ? On optimise chaque levier pour dominer le Local Pack.",
        features: ["Audit complet", "Mots-clés géolocalisés", "Posts réguliers", "Suivi performances"],
    },
    {
        title: "Gestion des Avis",
        icon: Star,
        desc: "87% des internautes lisent les avis avant de choisir. On met en place une stratégie pour collecter et gérer vos avis.",
        features: ["Acquisition d'avis", "Réponses pro", "Gestion avis négatifs", "Rapport mensuel"],
    }
];

export default function GMBService() {
    return (
        <section id="gmb" className="py-20 md:py-28 bg-[#F8F9FC]">
            <div className="container mx-auto px-5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-wider mb-3">Visibilité locale</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Dominez les recherches <span className="text-gradient">&quot;près de moi&quot;</span>
                        </h2>
                        <p className="text-slate-500 max-w-xl text-lg">
                            76% des recherches locales génèrent une visite physique le même jour. Soyez là où vos clients vous cherchent.
                        </p>
                    </motion.div>

                    {/* Stat highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-4 mb-10 p-6 rounded-2xl bg-white border border-gray-100"
                    >
                        {[
                            { value: "76%", label: "des recherches locales → visite" },
                            { value: "3x", label: "plus de clics dans le top 3" },
                            { value: "87%", label: "lisent les avis avant d'acheter" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl sm:text-3xl font-black text-gradient">{stat.value}</div>
                                <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {GMB_SERVICES.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-brand hover:border-[#7B2FF2]/20 transition-all duration-300 flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/[0.08] flex items-center justify-center mb-5">
                                    <service.icon className="w-6 h-6 text-[#F59E0B]" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-[#1A1A2E]">{service.title}</h3>
                                <p className="text-slate-500 text-[15px] mb-6 leading-relaxed flex-1">{service.desc}</p>

                                <ul className="space-y-2.5 mb-6">
                                    {service.features.map(f => (
                                        <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                                            <Check className="w-4 h-4 text-[#F59E0B] shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-5 border-t border-gray-100 mt-auto">
                                    <Link href="#contact" className="inline-flex items-center gap-1.5 text-[#7B2FF2] font-semibold text-sm hover:gap-2.5 transition-all">
                                        Booster ma visibilité <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
