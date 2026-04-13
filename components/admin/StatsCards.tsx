"use client";

import { Users, FolderOpen, Euro, TrendingUp } from "lucide-react";

export default function StatsCards() {
    const STATS = [
        { label: "Nouveaux Leads", value: "24", icon: Users, change: "+12%" },
        { label: "Projets en cours", value: "8", icon: FolderOpen, change: "+2" },
        { label: "Revenu du mois", value: "48 500 €", icon: Euro, change: "+15%" },
        { label: "Taux de conversion", value: "3.2%", icon: TrendingUp, change: "+0.4%" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
                <div key={stat.label} className="bg-[#111] border border-[#333] p-6 rounded-xl hover:border-[#BFFF00]/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-[#222] rounded-lg text-white">
                            <stat.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[#BFFF00] text-xs font-bold bg-[#BFFF00]/10 px-2 py-1 rounded-full">
                            {stat.change}
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}
