"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function FormulaireContact() {
    const phoneNumber = "+33626834020";
    const whatsappMessage = encodeURIComponent("Bonjour, j'ai un projet web à discuter avec vous !");
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${whatsappMessage}`;

    return (
        <section id="contact" className="py-20 md:py-28 bg-[#F8F9FC] relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-20 right-[5%] w-4 h-4 rounded-full bg-[#7B2FF2]/10 animate-float" />
            <div className="absolute bottom-32 left-[8%] w-3 h-3 rounded-sm bg-[#0066FF]/10 rotate-45 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7B2FF2]/[0.04] rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0066FF]/[0.04] rounded-full blur-[120px]" />

            <div className="container mx-auto px-5 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <p className="text-[#7B2FF2] font-semibold text-sm uppercase tracking-wider mb-3">Parlons de votre projet</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Prêt à <span className="text-gradient">passer au niveau supérieur</span> ?
                        </h2>
                        <p className="text-slate-500 text-lg">Vous avez un projet ? Parlons-en sur WhatsApp</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 md:p-12 shadow-lg text-center"
                    >
                        {/* WhatsApp CTA */}
                        <CTAButton
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Discuter sur WhatsApp
                        </CTAButton>

                        <p className="text-slate-500 text-sm mt-6 max-w-md mx-auto">
                            Réponse rapide • Sans engagement • Devis gratuit
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
