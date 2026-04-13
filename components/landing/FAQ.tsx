"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
    {
        q: "Combien de temps pour avoir mon site ?",
        a: "Landing page : 5 jours. Site vitrine : 10 jours. E-commerce : 15 jours. Applications sur mesure : 4 à 12 semaines selon la complexité. On respecte nos délais."
    },
    {
        q: "Comment je paye ?",
        a: "50% à la commande, 50% à la livraison. Paiement en 3x sans frais disponible pour les projets supérieurs à 3 000€. On s'adapte."
    },
    {
        q: "Je pourrai modifier mon site moi-même ?",
        a: "Oui. Tous nos sites sont livrés avec un CMS intuitif et une formation vidéo incluse. Vous êtes autonome dès le jour 1."
    },
    {
        q: "L'hébergement est inclus ?",
        a: "L'hébergement haute performance est inclus la première année. Ensuite, on vous accompagne ou vous êtes libre de choisir votre solution."
    },
    {
        q: "Quelles garanties ?",
        a: "Correction de bugs gratuite pendant 3 mois (6 mois pour les applications). Si le résultat ne vous convient pas avant validation, on reprend le design sans frais supplémentaires."
    },
    {
        q: "Vous travaillez avec des entreprises hors de France ?",
        a: "Oui, nous avons des clients dans toute l'Europe et en Amérique du Nord. Tout se fait en visio, c'est aussi efficace qu'en présentiel."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-5 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-[#7B2FF2] font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Questions <span className="text-gradient">fréquentes</span>
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {FAQS.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-[#7B2FF2]/20 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-[#7B2FF2]/[0.02] transition-colors"
                            >
                                <span className="font-bold text-[#1A1A2E] text-base sm:text-lg pr-4">{faq.q}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? 'bg-gradient-brand text-white' : 'bg-[#F8F9FC] text-slate-400'}`}>
                                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-500 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
