"use client";

import { useEffect, useState } from "react";
import { IProject } from "@/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Loader2, Folder, ExternalLink, MoreVertical } from "lucide-react";

export default function TableauProjets() {
    const [projets, setProjets] = useState<IProject[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjets() {
            try {
                const res = await fetch("/api/projets");
                const data = await res.json();
                setProjets(data);
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProjets();
    }, []);

    if (loading) return <div className="text-center py-12 text-gray-400"><Loader2 className="animate-spin w-8 h-8 mx-auto mb-4" />Chargement des projets...</div>;

    return (
        <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[#333] bg-[#0A0A0A]">
                            <th className="p-4 font-medium text-gray-400 text-sm">Projet</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Type</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Client</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Progression</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Statut</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projets.map((projet) => (
                            <tr key={projet._id} className="border-b border-[#333] hover:bg-white/5 transition-colors">
                                <td className="p-4 font-bold text-white flex items-center gap-2">
                                    <Folder className="w-4 h-4 text-[#BFFF00]" />
                                    {projet.nomProjet}
                                </td>
                                <td className="p-4 text-sm text-gray-300 capitalize">{projet.typeProjet}</td>
                                <td className="p-4 text-sm text-gray-300">
                                    {/* Assuming IProject has a populated leadId object or we fetch it. For now simplistic */}
                                    Lead #{typeof projet.leadId === 'object' ? (projet.leadId as any)._id : projet.leadId}
                                </td>
                                <td className="p-4 text-sm text-gray-300 w-32">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs w-8 text-right">{projet.progressionPct}%</span>
                                        <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#BFFF00]" style={{ width: `${projet.progressionPct}%` }} />
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`text-xs px-2 py-1 rounded-full font-bold uppercase ${projet.statut === 'en_cours' ? 'bg-blue-500/20 text-blue-400' :
                                            projet.statut === 'livre' ? 'bg-green-500/20 text-green-400' :
                                                'bg-gray-800 text-white'
                                        }`}>
                                        {projet.statut}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {projets.length === 0 && !loading && (
                <div className="p-12 text-center text-gray-500">Aucun projet en cours.</div>
            )}
        </div>
    );
}
