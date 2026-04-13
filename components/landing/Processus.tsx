"use client";

import { motion } from "framer-motion";
import { Phone, Palette, Code, Rocket } from "lucide-react";

const STEPS = [
    {
        title: "Appel Découverte",
        desc: "On analyse vos besoins, objectifs et votre marché en 30 min.",
        icon: Phone,
    },
    {
        title: "Design & UX",
        desc: "Maquettes interactives validées avec vous avant le moindre code.",
        icon: Palette,
    },
    {
        title: "Développement",
        desc: "Code propre, rapide et optimisé. Vous suivez l'avancement en temps réel.",
        icon: Code,
    },
    {
        title: "Livraison & Suivi",
        desc: "Mise en ligne, formation et suivi des performances pendant 3 mois.",
        icon: Rocket,
    },
];

export default function Processus() {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Decorative line connecting steps on desktop */}
            <div className="hidden md:block absolute top-[calc(50%-20px)] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#7B2FF2]/20 via-[#0066FF]/20 to-[#7B2FF2]/20" />

            {/* Floating shapes */}
            <div className="absolute top-12 right-[12%] w-5 h-5 rounded-sm bg-[#7B2FF2]/10 rotate-45 animate-float" style={{ animationDelay: "0.3s" }} />
            <div className="absolute bottom-16 left-[10%] w-3 h-3 rounded-full bg-[#0066FF]/15 animate-float" style={{ animationDelay: "1.2s" }} />

            <div className="container mx-auto px-5 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-[#7B2FF2] font-semibold text-sm uppercase tracking-wider mb-3">Notre processus</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Du brief au <span className="text-gradient">résultat</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="text-center group relative"
                        >
                            <div className="relative mx-auto mb-5 w-20 h-20">
                                {/* Background circle */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-brand-soft group-hover:bg-gradient-brand transition-all duration-500" />
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <step.icon className="w-8 h-8 text-[#7B2FF2] group-hover:text-white transition-colors duration-500" />
                                </div>
                                {/* Step number */}
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-[#7B2FF2] flex items-center justify-center text-xs font-black text-[#7B2FF2]">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold mb-2 text-[#1A1A2E]">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
