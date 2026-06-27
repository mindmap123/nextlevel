"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { usePopup } from "./PopupContext";
import { useConfetti } from "@/lib/useConfetti";

const BUDGET_OPTIONS = [
  { value: "starter", label: "1 000 – 5 000€" },
  { value: "croissance", label: "Plus de 5 000€" },
  { value: "sur_devis", label: "Pas défini" },
] as const;

type BudgetValue = typeof BUDGET_OPTIONS[number]["value"];

export default function ContactPopup() {
  const { isOpen, closePopup } = usePopup();
  const { fireConfetti } = useConfetti();

  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [budget, setBudget] = useState<BudgetValue | "">("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const prenomRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => prenomRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closePopup]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!prenom || !email || !telephone) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setLoading(true);

    try {
      const budgetLabel = BUDGET_OPTIONS.find((opt) => opt.value === budget)?.label || "Pas de budget défini";
      const message = `🎯 *Nouvelle demande de contact*

👤 *Prénom:* ${prenom}
📧 *Email:* ${email}
📱 *Téléphone:* ${telephone}
💰 *Budget:* ${budgetLabel}

_Demande envoyée depuis le site Next Level_`;

      const phoneNumber = "+33626834020";
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

      setSuccess(true);
      fireConfetti();

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 800);

      setTimeout(() => {
        closePopup();
        setSuccess(false);
        setPrenom("");
        setEmail("");
        setTelephone("");
        setBudget("");
      }, 2500);
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-night border rule rounded-xl px-4 py-3 text-[15px] text-cream placeholder:text-ash-dim outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all";
  const labelClass = "block text-[10px] font-bold uppercase tracking-widest text-ash-dim mb-1.5";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[500] bg-black/75 backdrop-blur-sm"
            onClick={closePopup}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.4, 1] }}
            className="
              fixed z-[501] bg-card border rule w-full max-w-md
              bottom-0 left-0 right-0 mx-auto
              rounded-t-[28px] px-5 pb-8 pt-5
              sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2
              sm:rounded-[28px] sm:left-1/2 sm:-translate-x-1/2
              sm:px-8 sm:py-8
              max-h-[92vh] overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-8 h-1 bg-cream/15 rounded-full mx-auto mb-4 sm:hidden" />

            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-night flex items-center justify-center text-ash-dim hover:text-cream transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 bg-accent/15 text-accent rounded-full px-3 py-1 text-xs font-bold mb-3">
                <Phone className="w-3 h-3" />
                Rappel immédiat
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight leading-tight text-cream">
                Réserver un appel
              </h2>
              <p className="text-sm text-ash mt-1 leading-relaxed">
                Laissez vos coordonnées. On vous rappelle sous 24h pour parler de votre projet — sans blabla commercial.
              </p>
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                  <span className="text-2xl">✓</span>
                </div>
                <p className="font-bold text-cream">Demande envoyée !</p>
                <p className="text-sm text-ash">On vous rappelle bientôt.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className={labelClass}>Prénom *</label>
                  <input
                    ref={prenomRef}
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Laurent"
                    className={inputClass}
                  />
                </div>

                <div className="mb-3">
                  <label className={labelClass}>Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="laurent@monentreprise.fr"
                    className={inputClass}
                  />
                </div>

                <div className="mb-4">
                  <label className={labelClass}>Téléphone *</label>
                  <input
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="06 00 00 00 00"
                    className={inputClass}
                  />
                </div>

                <div className="mb-5">
                  <label className={labelClass}>Budget</label>
                  <div className="grid grid-cols-3 gap-2">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setBudget(opt.value)}
                        className={`py-2.5 px-2 rounded-xl text-center text-xs font-bold leading-tight border transition-all duration-150 ${
                          budget === opt.value
                            ? "border-accent bg-accent/15 text-accent"
                            : "rule text-ash hover:border-accent/40 hover:text-accent"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {error && <p className="text-red-500 text-xs mb-3">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-white font-bold text-[15px] py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-accent-dark transition-colors disabled:opacity-60"
                >
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    "Envoyer ma demande →"
                  )}
                </button>

                <p className="text-center text-[11px] text-ash-dim mt-3">
                  🔒 Données confidentielles · Pas de spam
                </p>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
