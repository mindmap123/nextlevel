"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle, FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function TableauBord() {
    // Mock data for display
    const recentProjects = [
        { id: 1, name: "Refonte Site Vitrine", status: "en_cours", progress: 65, nextStep: "Validation Design" },
        { id: 2, name: "Consulting CRO", status: "termine", progress: 100, nextStep: "Livré" },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <header className="mb-12">
                <h1 className="text-3xl font-bold mb-2">Bonjour, Alexandre 👋</h1>
                <p className="text-gray-400">Voici ce qui se passe sur vos projets aujourd'hui.</p>
            </header>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Projets en cours</p>
                            <p className="text-2xl font-bold">1</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Projets terminés</p>
                            <p className="text-2xl font-bold">4</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Documents</p>
                            <p className="text-2xl font-bold">12</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Projects */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Projets Actifs</h2>
                    <Link href="/espace-client/projets" className="text-sm text-[#BFFF00] hover:underline">Voir tout</Link>
                </div>

                <div className="grid gap-6">
                    {recentProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                                    <p className="text-sm text-gray-400">Prochaine étape : <span className="text-white">{project.nextStep}</span></p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${project.status === 'en_cours' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                                    }`}>
                                    {project.status.replace('_', ' ')}
                                </span>
                            </div>

                            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
                                <div
                                    className="absolute top-0 left-0 h-full bg-[#BFFF00] transition-all duration-1000"
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{project.progress}% complété</span>
                                <Link href={`/espace-client/projets/${project.id}`} className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#BFFF00] transition-colors">
                                    Accéder au projet <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
