"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2, CheckCircle, AlertTriangle, Sparkles } from "lucide-react";

export default function CritiqueIA() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<"input" | "analyzing" | "preview" | "full">("input");
    const [analysis, setAnalysis] = useState<any>(null);
    const [email, setEmail] = useState("");
    const [emailLoading, setEmailLoading] = useState(false);

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setLoading(true);
        setStep("analyzing");

        try {
            const res = await fetch("/api/critique-ia", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setAnalysis(data);
            setStep("preview");
        } catch {
            alert("Erreur lors de l'analyse IA.");
            setStep("input");
        } finally {
            setLoading(false);
        }
    };

    const handleUnlock = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setEmailLoading(true);
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    prenom: "Visiteur",
                    nom: "Website",
                    siteWeb: url,
                    typeService: "site_web",
                    source: "ai_critique",
                    critiqueIA: JSON.stringify(analysis),
                    message: "Lead généré via Critique IA"
                })
            });
            if (res.ok) setStep("full");
        } catch (e) {
            console.error(e);
        } finally {
            setEmailLoading(false);
        }
    };

    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#7B2FF2]/[0.04] to-transparent rounded-full blur-[80px]" />

            <div className="container mx-auto px-5 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7B2FF2]/[0.08] text-[#7B2FF2] text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            Outil gratuit propulsé par l&apos;IA
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Votre site <span className="text-gradient">convertit-il</span> assez ?
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto">
                            Entrez votre URL. Notre IA analyse votre site et identifie les fuites de revenus en moins de 10 secondes.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-2xl mx-auto">
                    {step === "input" && (
                        <motion.form
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onSubmit={handleAnalyze}
                            className="relative"
                        >
                            <div className="flex items-center bg-white border-2 border-gray-200 rounded-2xl p-2 pl-5 shadow-lg hover:border-[#7B2FF2]/30 focus-within:border-[#7B2FF2]/50 transition-colors">
                                <Search className="text-slate-400 w-5 h-5 mr-3 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="https://votre-site.fr ou décrivez votre problème..."
                                    className="flex-1 bg-transparent border-none text-[#1A1A2E] placeholder-slate-400 focus:outline-none text-base sm:text-lg py-3"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-brand text-white font-bold text-base px-6 py-3.5 rounded-xl hover:shadow-brand transition-all shrink-0"
                                    disabled={loading}
                                >
                                    {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Analyser"}
                                </button>
                            </div>
                            <p className="text-xs text-slate-400 mt-3 text-center">Gratuit, sans engagement. Résultats en 10 secondes.</p>
                        </motion.form>
                    )}

                    {step === "analyzing" && (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-brand-soft flex items-center justify-center mx-auto mb-4">
                                <Loader2 className="w-8 h-8 text-[#7B2FF2] animate-spin" />
                            </div>
                            <p className="text-xl font-bold text-[#1A1A2E] animate-pulse">Analyse en cours...</p>
                            <p className="text-slate-500 mt-2">Vérification de la vitesse, UX, et conversion</p>
                        </div>
                    )}

                    {step === "preview" && analysis && (
                        <div className="text-center bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
                            <div className="mb-8">
                                <div className="text-6xl font-black text-gradient mb-2">{analysis.score}<span className="text-2xl text-slate-400">/100</span></div>
                                <p className="text-[#7B2FF2] font-bold uppercase tracking-wide text-sm">Score de Conversion</p>
                            </div>

                            <div className="bg-[#F8F9FC] rounded-xl p-4 mb-8 text-left">
                                <p className="text-slate-600 italic">&quot;{analysis.resume}&quot;</p>
                            </div>

                            <div className="p-6 bg-gradient-brand-soft border border-[#7B2FF2]/10 rounded-2xl">
                                <h4 className="font-bold text-[#1A1A2E] mb-2">Débloquer le rapport complet</h4>
                                <p className="text-sm text-slate-500 mb-4">Recevez les recommandations détaillées par email.</p>
                                <form onSubmit={handleUnlock} className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="votre@email.com"
                                        className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1A1A2E] focus:border-[#7B2FF2] outline-none"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button className="bg-gradient-brand text-white font-bold px-6 py-3 rounded-xl hover:shadow-brand transition-all" disabled={emailLoading}>
                                        {emailLoading ? <Loader2 className="animate-spin" /> : "Recevoir"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {step === "full" && analysis && (
                        <div className="space-y-6 bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
                            <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-center gap-3">
                                <CheckCircle className="text-green-600 w-5 h-5" />
                                <p className="text-green-700 text-sm font-medium">Rapport envoyé à {email} !</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-red-600 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <AlertTriangle className="w-4 h-4" />
                                    Problèmes Identifiés
                                </h3>
                                <ul className="space-y-2">
                                    {analysis.problemes.map((p: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm bg-red-50 p-3 rounded-lg">
                                            <span className="text-red-500 mt-0.5 font-bold">×</span> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-[#7B2FF2] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <CheckCircle className="w-4 h-4" />
                                    Recommandations
                                </h3>
                                <ul className="space-y-2">
                                    {analysis.recommandations.map((r: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm bg-[#7B2FF2]/[0.04] p-3 rounded-lg">
                                            <span className="text-[#7B2FF2] mt-0.5 font-bold">✓</span> {r}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={() => window.location.href = "#contact"}
                                className="w-full py-4 bg-gradient-brand text-white font-bold rounded-xl hover:shadow-brand transition-all mt-4"
                            >
                                Discuter de ces solutions avec un expert
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
