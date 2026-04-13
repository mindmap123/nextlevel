"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const LINKS = [
        { name: "Vue d'ensemble", href: "/espace-client", icon: LayoutDashboard },
        { name: "Mes Projets", href: "/espace-client/projets", icon: FolderKanban },
        { name: "Mon Profil", href: "/espace-client/profil", icon: User },
    ];

    return (
        <div className="flex h-screen bg-[#050505] text-white">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 hidden md:flex flex-col">
                <div className="p-6">
                    <Link href="/" className="text-2xl font-bold tracking-tighter uppercase block">
                        <span className="text-white">Next</span>
                        <span className="text-[#BFFF00]">Level</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {LINKS.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium",
                                    isActive
                                        ? "bg-[#BFFF00] text-black"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <Icon className="w-5 h-5" />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 w-full transition-colors">
                        <LogOut className="w-5 h-5" />
                        Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Mobile Header could go here */}

                <main className="flex-1 overflow-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
