"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project =
  | { title: string; category: string; description: string; result: string; video: string; image?: never }
  | { title: string; category: string; description: string; result: string; image: string; video?: never };

const PROJECTS: Project[] = [
    {
        title: "Kimbrandesign",
        category: "Identité & Positionnement",
        description: "Clarifier leur vision, définir un nouveau positionnement et guider une transformation significative.",
        video: "/videos/ocitocine.mp4",
        result: "Refonte complète",
    },
    {
        title: "Sompower",
        category: "Refonte & Performance",
        description: "Refonte complète de l'identité digitale. Site repensé de zéro pour maximiser la visibilité et transformer chaque visite en opportunité commerciale.",
        video: "/videos/sompower.mp4",
        result: "+80% de trafic",
    },
    {
        title: "Archidomo",
        category: "Site Vitrine",
        description: "Refonte du site d'une agence d'architecture d'intérieur. Identité visuelle forte, galerie projets immersive et tunnel de prise de contact optimisé.",
        video: "/videos/archidomo.mp4",
        result: "+60% de demandes",
    },
];

function ProjectMedia({ project }: { project: Project }) {
    if (project.video) {
        return (
            <div className="aspect-[16/10] bg-[#0D0D0D] overflow-hidden relative">
                <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                />
            </div>
        );
    }
    return (
        <div className="aspect-[16/10] bg-gradient-to-br from-[#7B2FF2]/[0.06] via-[#F8F9FC] to-[#0066FF]/[0.06] overflow-hidden relative">
            <Image
                src={project.image!}
                alt={project.title}
                width={600}
                height={375}
                className="object-cover w-full h-full"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                }}
            />
        </div>
    );
}

export default function Realisations() {
    return (
        <section className="py-20 md:py-28 bg-[#F8F9FC] relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-20 right-[6%] w-20 h-20 rounded-full border-2 border-[#0066FF]/8" />
            <div className="absolute bottom-12 left-[10%] w-3 h-3 rounded-full bg-[#7B2FF2]/15 animate-float" />

            <div className="container mx-auto px-5 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-[#7B2FF2] font-semibold text-sm uppercase tracking-wider mb-3">Nos réalisations</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Des projets qui <span className="text-gradient">parlent d&apos;eux-mêmes</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-lg">
                        Chaque projet est une collaboration unique avec un objectif commun : la croissance.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#7B2FF2]/20 transition-all duration-500 md:hover:scale-125 md:hover:z-20"
                        >
                            {/* Project Media */}
                            <div className="relative overflow-hidden">
                                <ProjectMedia project={project} />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#7B2FF2] bg-[#7B2FF2]/[0.06] px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                        {project.result}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{project.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
