"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Phone } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import { usePopup } from "./PopupContext";

export default function FormulaireContact() {
    const { openPopup } = usePopup();
    const phoneNumber = "+33626834020";
    const whatsappMessage = encodeURIComponent("Bonjour, j'ai un projet web à discuter avec vous !");
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${whatsappMessage}`;

    return (
        <section id="contact" className="relative overflow-hidden">


            <div className="max-w-[1200px] mx-auto px-5 py-20 md:py-28 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-white/70 font-bold text-xs uppercase tracking-[0.12em] mb-4">
                            Parlons de votre projet
                        </p>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-[52px] font-bold tracking-[-0.04em] leading-[1.05] text-white mb-5">
                            Prêt à passer au{" "}
                            <em className="not-italic text-white/90 underline decoration-white/30 underline-offset-4">
                                niveau supérieur
                            </em>{" "}
                            ?
                        </h2>
                        <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-10">
                            On analyse votre situation, on vous donne notre avis honnête,<br className="hidden sm:block" /> et on vous dit comment on peut vous aider.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3"
                    >
                        {/* Primary CTA */}
                        <CTAButton
                            onClick={openPopup}
                            className="
                                inline-flex items-center gap-2.5
                                bg-white text-[#7B2FF2] font-bold text-base
                                px-7 py-4 rounded-xl
                                shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                                hover:bg-white/95 hover:-translate-y-0.5
                                transition-all duration-200
                                w-full sm:w-auto justify-center
                            "
                        >
                            Être recontacté
                            <ArrowRight className="w-4 h-4" />
                        </CTAButton>

                        {/* WhatsApp secondary */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex items-center gap-2.5
                                bg-white/15 border border-white/30 text-white font-bold text-base
                                px-7 py-4 rounded-xl
                                hover:bg-white/25 hover:-translate-y-0.5
                                transition-all duration-200
                                w-full sm:w-auto justify-center
                                backdrop-blur-sm
                            "
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-white/50 text-xs mt-6"
                    >
                        Réponse sous 24h · Sans engagement · Devis gratuit
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
