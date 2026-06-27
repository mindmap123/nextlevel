"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Clock, ShieldCheck, CreditCard, LifeBuoy } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import RevealWords from "@/components/ui/RevealWords";
import { usePopup } from "./PopupContext";

const GUARANTEES = [
  { icon: Clock, title: "7 jours", sub: "Délais tenus" },
  { icon: ShieldCheck, title: "Sans engagement", sub: "Devis gratuit" },
  { icon: CreditCard, title: "Paiement 3x", sub: "Sans frais dès 3 000€" },
  { icon: LifeBuoy, title: "Suivi 3 mois", sub: "Après la mise en ligne" },
];

export default function FormulaireContact() {
  const { openPopup } = usePopup();
  const phoneNumber = "+33626834020";
  const whatsappMessage = encodeURIComponent("Bonjour, j'ai un projet web à discuter avec vous !");
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="bg-bone border-t rule-ink">
      <div className="max-w-[1280px] mx-auto px-5 py-24 md:py-32 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-muted mb-8">
            <span className="inline-block w-8 h-px bg-accent" />
            Un projet ?
          </p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-[96px] font-bold tracking-[-0.045em] leading-[0.95] text-ink">
            Obtenez votre
            <br />
            <span className="text-accent">audit gratuit.</span>
          </h2>
          <RevealWords
            className="mt-8 block text-lg md:text-xl text-ink-soft leading-relaxed max-w-[52ch] mx-auto"
            text="On analyse votre situation, on vous donne notre avis honnête, et on vous dit comment on peut vous aider. Sans engagement."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CTAButton
            onClick={openPopup}
            className="group inline-flex items-center justify-center gap-2.5 bg-accent text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-accent-dark transition-colors duration-200"
          >
            Réserver mon audit
            <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
          </CTAButton>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 border rule-ink text-ink font-semibold text-base px-8 py-4 rounded-full hover:border-ink/40 transition-colors duration-200"
          >
            <MessageCircle className="w-[18px] h-[18px]" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 border-t border-l rule-ink"
        >
          {GUARANTEES.map((g) => (
            <div key={g.title} className="border-r border-b rule-ink p-5 text-left">
              <g.icon className="w-5 h-5 text-accent mb-3" strokeWidth={2} />
              <p className="font-display font-bold text-ink text-sm">{g.title}</p>
              <p className="text-ink-muted text-xs mt-1">{g.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
