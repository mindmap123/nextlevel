"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionAura from "@/components/ui/SectionAura";

type Project = {
  title: string;
  category: string;
  description: string;
  result: string;
  resultLabel: string;
} & ({ video: string; poster: string; image?: never } | { image: string; video?: never; poster?: never });

const PROJECTS: Project[] = [
  {
    title: "Sompower",
    category: "Refonte & performance",
    description:
      "Refonte complète de l'identité digitale. Site repensé de zéro pour maximiser la visibilité et transformer chaque visite en opportunité commerciale.",
    video: "/videos/sompower.mp4",
    poster: "/videos/sompower-poster.jpg",
    result: "+80%",
    resultLabel: "de trafic qualifié",
  },
  {
    title: "Archidomo",
    category: "Site vitrine",
    description:
      "Refonte du site d'une agence d'architecture d'intérieur. Identité forte, galerie projets immersive et tunnel de prise de contact optimisé.",
    video: "/videos/archidomo.mp4",
    poster: "/videos/archidomo-poster.jpg",
    result: "+60%",
    resultLabel: "de demandes",
  },
  {
    title: "Kimbrandesign",
    category: "Identité & positionnement",
    description:
      "Clarifier leur vision, définir un nouveau positionnement et guider une transformation digitale significative.",
    video: "/videos/ocitocine.mp4",
    poster: "/videos/ocitocine-poster.jpg",
    result: "×3",
    resultLabel: "de demandes entrantes",
  },
];

function ProjectMedia({ project }: { project: Project }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-py * 7).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * 9).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(1)}%`);
  };

  const handleLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  const inner = project.video ? (
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
  ) : (
    <Image src={project.image!} alt={project.title} width={800} height={500} className="object-cover w-full h-full" />
  );

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="tilt-card aspect-[16/10] bg-card overflow-hidden relative rounded-xl border rule"
    >
      {inner}
      <span aria-hidden className="tilt-sheen" />
    </div>
  );
}

export default function Realisations() {
  return (
    <section id="realisations" className="relative overflow-hidden py-20 md:py-28 bg-night">
      <SectionAura color="#FFB020" position="bottom-left" opacity={0.07} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ash-dim mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            (Réalisations)
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1] text-cream">
            Des projets qui parlent
            <br />
            <span className="text-accent">d&apos;eux-mêmes.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center py-12 border-t rule ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ProjectMedia project={project} />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ash-dim mb-5">{project.category}</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4 tracking-[-0.03em]">
                  {project.title}
                </h3>
                <p className="text-[15px] md:text-base text-ash leading-relaxed mb-8 max-w-[44ch]">
                  {project.description}
                </p>
                <div className="flex items-end gap-3 border-t rule pt-6">
                  <span className="stat-num text-6xl md:text-7xl text-accent">{project.result}</span>
                  <span className="text-sm text-ash-dim mb-2">{project.resultLabel}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
