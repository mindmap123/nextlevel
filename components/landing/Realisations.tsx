"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GradientWaveText from "@/components/ui/gradient-wave-text";

type Project =
  | { title: string; category: string; description: string; result: string; video: string; poster: string; image?: never }
  | { title: string; category: string; description: string; result: string; image: string; video?: never };

const PROJECTS: Project[] = [
    {
        title: "Kimbrandesign",
        category: "Identité & Positionnement",
        description: "Clarifier leur vision, définir un nouveau positionnement et guider une transformation significative.",
        video: "/videos/ocitocine.mp4",
        poster: "/videos/ocitocine-poster.jpg",
        result: "Refonte complète",
    },
    {
        title: "Sompower",
        category: "Refonte & Performance",
        description: "Refonte complète de l'identité digitale. Site repensé de zéro pour maximiser la visibilité et transformer chaque visite en opportunité commerciale.",
        video: "/videos/sompower.mp4",
        poster: "/videos/sompower-poster.jpg",
        result: "+80% de trafic",
    },
    {
        title: "Archidomo",
        category: "Site Vitrine",
        description: "Refonte du site d'une agence d'architecture d'intérieur. Identité visuelle forte, galerie projets immersive et tunnel de prise de contact optimisé.",
        video: "/videos/archidomo.mp4",
        poster: "/videos/archidomo-poster.jpg",
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
                    preload="auto"
                    poster={project.poster}
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

            <div className="max-w-[1200px] mx-auto px-5 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-[#7B2FF2] font-semibold text-sm uppercase tracking-wider mb-3">Nos réalisations</p>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold tracking-[-0.035em] leading-[1.08] mb-4">
                        Des projets qui <em className="not-italic text-gradient">parlent d&apos;eux-mêmes</em>
                    </h2>
                    <div className="max-w-xl mx-auto" style={{ "--gradient-wave-base": "rgb(100,116,139)" } as React.CSSProperties}>
                        <GradientWaveText
                          align="center"
                          inView
                          repeat
                          speed={0.18}
                          bandGap={10}
                          bandCount={4}
                          customColors={["#7B2FF2", "#9B6FFF", "#0066FF", "#6BAAFF"]}
                          className="text-lg"
                        >
                          Chaque projet est une collaboration unique avec un objectif commun : la croissance.
                        </GradientWaveText>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-brand-lg hover:border-[#7B2FF2]/20 hover:-translate-y-1 transition-all duration-300 relative"
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
