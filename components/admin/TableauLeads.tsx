"use client";

import { useEffect, useState } from "react";
import { ILead } from "@/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Loader2, ExternalLink, Mail, Phone, MoreHorizontal } from "lucide-react";

export default function TableauLeads() {
    const [leads, setLeads] = useState<ILead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLeads() {
            try {
                const res = await fetch("/api/leads");
                const data = await res.json();
                setLeads(data);
            } catch (error) {
                console.error("Failed to fetch leads", error);
            } finally {
                setLoading(false);
            }
        }
        fetchLeads();
    }, []);

    if (loading) return <div className="text-center py-12 text-gray-400"><Loader2 className="animate-spin w-8 h-8 mx-auto mb-4" />Chargement des leads...</div>;

    return (
        <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[#333] bg-[#0A0A0A]">
                            <th className="p-4 font-medium text-gray-400 text-sm">Nom / Contact</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Projet</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Budget</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Date</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Source</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Status</th>
                            <th className="p-4 font-medium text-gray-400 text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead._id} className="border-b border-[#333] hover:bg-white/5 transition-colors">
                                <td className="p-4">
                                    <div className="font-bold text-white">{lead.prenom} {lead.nom}</div>
                                    <div className="text-xs text-gray-500">{lead.entreprise}</div>
                                    <div className="flex gap-2 mt-1">
                                        <a href={`mailto:${lead.email}`} className="text-gray-400 hover:text-white"><Mail className="w-3 h-3" /></a>
                                        {lead.telephone && <a href={`tel:${lead.telephone}`} className="text-gray-400 hover:text-white"><Phone className="w-3 h-3" /></a>}
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-gray-300">
                                    {lead.typeService === 'site_web' ? 'Site Web' : 'App Sur Mesure'}
                                    {lead.siteWeb && (
                                        <a href={lead.siteWeb} target="_blank" className="block text-xs text-blue-400 hover:underline flex items-center gap-1 mt-1">
                                            {lead.siteWeb} <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </td>
                                <td className="p-4 text-sm text-gray-300 capitalize">{lead.budget}</td>
                                <td className="p-4 text-sm text-gray-300">{lead.dateCreation && formatDate(lead.dateCreation)}</td>
                                <td className="p-4">
                                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">{lead.source}</span>
                                </td>
                                <td className="p-4">
                                    <span className={`text-xs px-2 py-1 rounded-full font-bold uppercase ${lead.statut === 'nouveau' ? 'bg-[#BFFF00]/20 text-[#BFFF00]' :
                                            lead.statut === 'contacte' ? 'bg-blue-500/20 text-blue-400' :
                                                'bg-gray-800 text-white'
                                        }`}>
                                        {lead.statut}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {leads.length === 0 && !loading && (
                <div className="p-12 text-center text-gray-500">Aucun lead pour le moment.</div>
            )}
        </div>
    );
}
