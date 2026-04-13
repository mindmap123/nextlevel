"use client";

import { motion } from "framer-motion";
import { BarChart3, Package, Calendar, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const APPS = [
    {
        title: "CRM & Gestion Client",
        icon: BarChart3,
        desc: "Gérez vos contacts, suivez vos opportunités et automatisez vos relances commerciales.",
        features: ["Pipeline de ventes visuel", "Automatisation emails", "Rapports analytics", "Gestion contacts"],
        color: "text-[#7B2FF2]",
        bg: "bg-[#7B2FF2]/[0.06]",
    },
    {
        title: "Système de Stock",
        icon: Package,
        desc: "Pilotez votre inventaire en temps réel, gérez vos commandes et optimisez vos approvisionnements.",
        features: ["Suivi temps réel", "Alertes réappro", "Scanning codes-barres", "Multi-entrepôts"],
        color: "text-[#0066FF]",
        bg: "bg-[#0066FF]/[0.06]",
    },
    {
        title: "Plateforme de Réservation",
        icon: Calendar,
        desc: "Rendez-vous, locations, services — avec paiement en ligne et notifications automatiques.",
        features: ["Calendrier interactif", "Paiement Stripe", "Notifications SMS", "Gestion disponibilités"],
        color: "text-[#F59E0B]",
        bg: "bg-[#F59E0B]/[0.06]",
    }
];

export default function ApplicationsSurMesure() {
    return (
        <section id="apps" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-3">Applications</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Des outils <span className="text-gradient">sur mesure</span> pour votre métier
                    </h2>
                    <p className="text-slate-500 max-w-xl text-lg">
                        Solutions logicielles adaptées à vos processus spécifiques.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {APPS.map((app, i) => (
                        <motion.div
                            key={app.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-brand hover:border-[#7B2FF2]/20 transition-all duration-300 flex flex-col"
                        >
                            <div className={`w-12 h-12 rounded-xl ${app.bg} flex items-center justify-center mb-5`}>
                                <app.icon className={`w-6 h-6 ${app.color}`} />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-[#1A1A2E]">{app.title}</h3>
                            <p className="text-slate-500 text-[15px] mb-6 leading-relaxed flex-1">{app.desc}</p>

                            <ul className="space-y-2.5 mb-6">
                                {app.features.map(f => (
                                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                                        <Check className={`w-4 h-4 ${app.color} shrink-0`} />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-5 border-t border-gray-100 mt-auto">
                                <Link href="#contact" className="inline-flex items-center gap-1.5 text-[#7B2FF2] font-semibold text-sm hover:gap-2.5 transition-all">
                                    Demander un devis <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <p className="text-slate-400 text-sm">Besoin d&apos;une application spécifique ? <Link href="#contact" className="text-[#7B2FF2] font-semibold hover:underline">Parlons-en</Link></p>
                </motion.div>
            </div>
        </section>
    );
}
