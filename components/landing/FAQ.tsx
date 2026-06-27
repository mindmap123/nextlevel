"use client";

import { useState, useMemo } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Combien ça coûte ?",
    a: "Landing page à partir de 1 000€. Site vitrine 2 500 – 5 000€. E-commerce et applications sur mesure sur devis. On cadre le budget dès l'appel découverte, sans surprise.",
  },
  {
    q: "Combien de temps pour avoir mon site ?",
    a: "Landing page : 5 jours. Site vitrine : 10 jours. E-commerce : 15 jours. Applications sur mesure : 4 à 12 semaines selon la complexité. On respecte nos délais.",
  },
  {
    q: "Comment je paye ?",
    a: "50% à la commande, 50% à la livraison. Paiement en 3x sans frais pour les projets supérieurs à 3 000€.",
  },
  {
    q: "Je pourrai modifier mon site moi-même ?",
    a: "Oui. Tous nos sites sont livrés avec un CMS intuitif et une formation vidéo incluse. Vous êtes autonome dès le jour 1.",
  },
  {
    q: "L'hébergement est inclus ?",
    a: "L'hébergement haute performance est inclus la première année. Ensuite, on vous accompagne ou vous restez libre de votre solution.",
  },
  {
    q: "Quelles garanties ?",
    a: "Bugs corrigés et inclus pendant 3 mois (6 mois pour les applications). Tant que le design n'est pas validé, on le reprend, point.",
  },
  {
    q: "Vous travaillez hors de France ?",
    a: "Oui, des clients dans toute l'Europe et en Amérique du Nord. Tout se fait en visio, aussi efficace qu'en présentiel.",
  },
];

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(FAQS[0].q);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQS;
    return FAQS.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="faq" className="py-20 md:py-28 bg-night">
      <div className="max-w-[1280px] mx-auto px-5 grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ash-dim mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            (FAQ)
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.04em] leading-[1] text-cream">
            Questions
            <br />
            <span className="text-accent">fréquentes.</span>
          </h2>

          {/* Recherche */}
          <div className="mt-8 flex items-center gap-3 bg-card border rule rounded-full px-5 py-3 focus-within:border-accent/50 transition-colors">
            <Search className="w-4 h-4 text-ash-dim shrink-0" strokeWidth={2.25} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une question…"
              aria-label="Rechercher dans la FAQ"
              className="bg-transparent w-full text-sm text-cream placeholder:text-ash-dim outline-none"
            />
          </div>
        </motion.div>

        <div className="border-t rule">
          {filtered.length === 0 && (
            <p className="py-8 text-ash">
              Aucune réponse pour «&nbsp;{query}&nbsp;». Posez-la nous directement à l&apos;appel.
            </p>
          )}
          {filtered.map((faq) => {
            const open = openKey === faq.q;
            return (
              <div key={faq.q} className="border-b rule">
                <button
                  onClick={() => setOpenKey(open ? null : faq.q)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-display font-bold text-cream text-lg pr-4 group-hover:text-accent transition-colors">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-ash-dim group-hover:text-accent transition-colors">
                    {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-ash leading-relaxed max-w-[52ch]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
