"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { usePopup } from "./PopupContext";
import { useConfetti } from "@/lib/useConfetti";

const BUDGET_OPTIONS = [
  { value: "starter",   label: "1 000 – 5 000€" },
  { value: "croissance", label: "Plus de 5 000€" },
  { value: "sur_devis", label: "Pas de budget défini" },
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

  // Focus first field when popup opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => prenomRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closePopup(); };
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
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom,
          nom: prenom, // minimal popup — nom = prenom
          email,
          telephone,
          budget: budget || "sur_devis",
          typeService: "site_web",
          message: "Demande de rappel via le formulaire popup.",
          source: "contact",
          statut: "nouveau",
        }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSuccess(true);
      fireConfetti(); // 🎉 Confettis au succès
      setTimeout(() => {
        closePopup();
        setSuccess(false);
        setPrenom(""); setEmail(""); setTelephone(""); setBudget("");
      }, 2200);
    } catch {
      setError("Une erreur est survenue. Réessayez ou contactez-nous directement.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm"
            onClick={closePopup}
          />

          {/* Modal — bottom sheet mobile, centered desktop */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.4, 1] }}
            className="
              fixed z-[501] bg-white w-full max-w-md
              bottom-0 left-0 right-0 mx-auto
              rounded-t-[28px] px-5 pb-8 pt-5
              sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2
              sm:rounded-[28px] sm:left-1/2 sm:-translate-x-1/2
              sm:px-8 sm:py-8
              max-h-[92vh] overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar (mobile only) */}
            <div className="w-8 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-4 sm:hidden" />

            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F1F3F8] flex items-center justify-center text-[#94A3B8] hover:bg-[#E2E8F0] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 bg-[#F0E8FF] text-[#7B2FF2] rounded-full px-3 py-1 text-xs font-bold mb-3">
                <Phone className="w-3 h-3" />
                Rappel sous 24h
              </div>
              <h2 className="font-display text-[22px] font-bold tracking-tight leading-tight">
                Être recontacté
              </h2>
              <p className="text-sm text-[#64748B] mt-1 leading-relaxed">
                Laissez vos coordonnées, on vous rappelle rapidement pour discuter de votre projet.
              </p>
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <p className="font-bold text-[#1A1A2E]">Demande envoyée !</p>
                <p className="text-sm text-[#64748B]">On vous rappelle bientôt.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Prénom */}
                <div className="mb-3">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1.5">
                    Prénom *
                  </label>
                  <input
                    ref={prenomRef}
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Laurent"
                    className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[15px] text-[#1A1A2E] placeholder:text-[#94A3B8] outline-none focus:border-[#7B2FF2] focus:ring-2 focus:ring-[#7B2FF2]/10 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="laurent@monentreprise.fr"
                    className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[15px] text-[#1A1A2E] placeholder:text-[#94A3B8] outline-none focus:border-[#7B2FF2] focus:ring-2 focus:ring-[#7B2FF2]/10 transition-all"
                  />
                </div>

                {/* Téléphone */}
                <div className="mb-4">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1.5">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="06 00 00 00 00"
                    className="w-full bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[15px] text-[#1A1A2E] placeholder:text-[#94A3B8] outline-none focus:border-[#7B2FF2] focus:ring-2 focus:ring-[#7B2FF2]/10 transition-all"
                  />
                </div>

                {/* Budget — 3 chips */}
                <div className="mb-5">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] mb-2">
                    Budget
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setBudget(opt.value)}
                        className={`
                          py-2.5 px-2 rounded-xl text-center text-xs font-bold leading-tight
                          border transition-all duration-150
                          ${budget === opt.value
                            ? "border-[#7B2FF2] bg-[#F0E8FF] text-[#7B2FF2]"
                            : "border-[#E2E8F0] text-[#64748B] hover:border-[#7B2FF2]/40 hover:text-[#7B2FF2]"
                          }
                        `}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-xs mb-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-brand text-white font-bold text-[15px] py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-brand hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    "Envoyer ma demande →"
                  )}
                </button>

                <p className="text-center text-[11px] text-[#94A3B8] mt-3">
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
