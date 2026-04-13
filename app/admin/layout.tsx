"use client";

import Link from "next/link";
import { LayoutDashboard, Users, FolderKanban, Settings, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const LINKS = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Leads", href: "/admin/leads", icon: Users },
        { name: "Projets", href: "/admin/projets", icon: FolderKanban },
        { name: "Paramètres", href: "/admin/parametres", icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-[#050505] text-white">
            <aside className="w-64 border-r border-[#333] hidden md:flex flex-col bg-[#111]">
                <div className="p-6">
                    <h1 className="text-xl font-bold uppercase tracking-wider text-[#BFFF00]">ADMIN PANEL</h1>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium",
                                pathname === link.href
                                    ? "bg-[#BFFF00] text-black"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <link.icon className="w-4 h-4" />
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-[#333]">
                    <button className="flex items-center gap-3 px-4 py-2 text-red-500 hover:text-red-400 w-full transition-colors text-sm">
                        <LogOut className="w-4 h-4" />
                        Déconnexion
                    </button>
                </div>
            </aside>

            <main className="flex-1 overflow-auto bg-black p-8">
                {children}
            </main>
        </div>
    );
}
