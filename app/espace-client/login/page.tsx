"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock login for now
        setTimeout(() => {
            router.push("/espace-client");
        }, 1500);
    };

    return (
        <div className="min-h-screen grid md:grid-cols-2 bg-black text-white">
            <div className="hidden md:flex flex-col justify-center items-center bg-[#111] border-r border-white/10 p-12 text-center">
                <h1 className="text-4xl font-bold uppercase mb-4">
                    <span className="text-white">Next</span>
                    <span className="text-[#BFFF00]">Level</span>
                </h1>
                <p className="text-gray-400 max-w-md">Connectez-vous pour suivre l'avancement de votre projet en temps réel.</p>
            </div>

            <div className="flex flex-col justify-center p-12">
                <div className="max-w-md w-full mx-auto">
                    <h2 className="text-2xl font-bold mb-8">Connexion Client</h2>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:border-[#BFFF00] outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Mot de passe</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 focus:border-[#BFFF00] outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#BFFF00] text-black font-bold py-3 rounded-lg hover:bg-[#a6de00] transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Se Connecter"}
                        </button>
                    </form>
                    <p className="mt-8 text-center text-sm text-gray-500">
                        Pas encore client ? <a href="/#contact" className="text-[#BFFF00] hover:underline">Démarrer un projet</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
