"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
    {
        name: "Kim B.",
        role: "Fondatrice, Kimbrandesign",
        text: "On avait une belle identité visuelle mais personne ne nous trouvait en ligne. Next Level a tout repositionné : le site, le message, la stratégie. En 3 semaines on avait des demandes entrantes.",
        stars: 5,
        result: "×3",
        resultLabel: "demandes entrantes",
        photo: "",
    },
    {
        name: "Maxime R.",
        role: "Co-fondateur, Sompower",
        text: "Le site d'avant était correct mais ne convertissait pas. La refonte a tout changé : design, tunnel, copywriting. +80% de trafic qualifié dès le premier mois.",
        stars: 5,
        result: "+80%",
        resultLabel: "trafic qualifié",
        photo: "",
    },
    {
        name: "Stéphane M.",
        role: "Gérant, Archidomo",
        text: "Je pensais que mon site était suffisant. Next Level m'a montré ce que ça pouvait vraiment donner. Galerie immersive, formulaire optimisé. Les demandes de devis ont explosé.",
        stars: 5,
        result: "+60%",
        resultLabel: "demandes de devis",
        photo: "",
    },
];

function AvatarWithFallback({ src, name }: { src: string; name: string }) {
    const initials = name.split(" ").map(n => n[0]).join("");
    const hasValidSrc = src && src.trim().length > 0;
    
    return (
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 relative bg-gradient-brand flex items-center justify-center text-white font-bold text-sm">
            {hasValidSrc && (
                <Image
                    src={src}
                    alt={name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full absolute inset-0"
                />
            )}
            <span className="relative z-10">{initials}</span>
        </div>
    );
}

export default function Temoignages() {
    return (
        <section id="portfolio" className="py-20 md:py-28 bg-[#F8F9FC] relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-10 left-[6%] w-16 h-16 rounded-full border-2 border-[#7B2FF2]/8" />
            <div className="absolute bottom-16 right-[8%] w-4 h-4 rounded-full bg-[#0066FF]/10 animate-float" style={{ animationDelay: "0.7s" }} />

            <div className="container mx-auto px-5 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-[#7B2FF2] font-semibold text-sm uppercase tracking-wider mb-3">Témoignages</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Des résultats, <span className="text-gradient">pas des promesses</span>
                    </h2>
                </motion.div>

                <div className="flex gap-4 overflow-x-auto pb-3 -mx-5 px-5 scrollbar-hide md:grid md:grid-cols-3 md:gap-6 md:max-w-6xl md:mx-auto md:overflow-visible md:pb-0">
                    {REVIEWS.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="group bg-white p-7 rounded-2xl border border-gray-100 relative hover:shadow-xl hover:border-[#7B2FF2]/20 transition-all duration-500 shrink-0 w-[80vw] sm:w-[60vw] md:w-auto"
                        >
                            <Quote className="absolute top-7 right-7 text-[#7B2FF2]/[0.07] w-12 h-12" />

                            {/* Big result number */}
                            <div className="mb-5">
                                <span className="text-4xl font-black text-gradient leading-none">{review.result}</span>
                                <span className="text-sm text-slate-400 ml-2 font-medium">{review.resultLabel}</span>
                            </div>

                            <div className="flex gap-0.5 mb-4">
                                {[...Array(review.stars)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                                ))}
                            </div>

                            <p className="text-slate-600 text-[15px] mb-6 leading-relaxed">&quot;{review.text}&quot;</p>

                            <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                                <AvatarWithFallback src={review.photo} name={review.name} />
                                <div>
                                    <p className="text-[#1A1A2E] font-bold text-sm">{review.name}</p>
                                    <p className="text-slate-400 text-xs">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
