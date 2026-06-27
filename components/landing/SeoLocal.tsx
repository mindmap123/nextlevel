"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Star, Phone, Navigation, ArrowUpRight, BarChart3 } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const GMB_URL = "https://nextlevel-gmb.vercel.app/";

const LEVIERS = [
  { icon: MapPin, title: "Fiche GMB optimisée", desc: "Photos, description, catégories, posts hebdo." },
  { icon: Star, title: "Avis clients 5★", desc: "Collecte automatisée, réponse sous 24h." },
  { icon: Search, title: "SEO local", desc: "Cohérence NAP sur 50+ annuaires, mots-clés de proximité." },
  { icon: BarChart3, title: "Reporting", desc: "Positions, appels, itinéraires : l'impact mesuré." },
];

const RESULTS = [
  { name: "Plomberie Martin", rating: "4,9", reviews: "127", you: true },
  { name: "AquaPro Services", rating: "4,2", reviews: "48" },
  { name: "ServiPlomb 24", rating: "3,8", reviews: "31" },
];

function MapsMockup() {
  return (
    <div className="bg-bone-card rounded-3xl border border-black/10 overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)]">
      {/* Barre de recherche */}
      <div className="p-4 border-b border-black/10">
        <div className="flex items-center gap-2.5 bg-white rounded-full border border-black/10 px-4 py-2.5 shadow-sm">
          <Search className="w-4 h-4 text-ink-muted" />
          <span className="text-ink text-sm font-medium">plombier près de moi</span>
        </div>
      </div>

      {/* Mini carte */}
      <div
        className="relative h-32"
        style={{
          background:
            "linear-gradient(135deg,#E8EDE6 0%,#DCE6E0 40%,#E6E2D6 100%)",
        }}
      >
        {/* routes stylisées */}
        <div className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "linear-gradient(90deg,transparent 49%,#cfd6cd 49%,#cfd6cd 51%,transparent 51%),linear-gradient(0deg,transparent 49%,#cfd6cd 49%,#cfd6cd 51%,transparent 51%)", backgroundSize: "46px 46px" }}
        />
        {/* pins concurrents */}
        <MapPin className="absolute top-6 left-12 w-5 h-5 text-ink-muted fill-ink-muted/30" />
        <MapPin className="absolute bottom-7 right-16 w-5 h-5 text-ink-muted fill-ink-muted/30" />
        {/* pin VOUS */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="relative flex">
            <span className="pulse-ring absolute inline-flex w-8 h-8 -left-1.5 -top-1.5 rounded-full bg-accent" />
            <MapPin className="relative w-7 h-7 text-accent fill-accent" />
          </span>
        </div>
      </div>

      {/* Résultats Pack 3 */}
      <div className="p-3 space-y-2">
        {RESULTS.map((r, i) => (
          <div
            key={r.name}
            className={`rounded-2xl p-3.5 flex items-center gap-3 ${
              r.you ? "bg-accent/8 border-2 border-accent" : "bg-white border border-black/10"
            }`}
          >
            <span className={`stat-num text-2xl w-8 shrink-0 ${r.you ? "text-accent" : "text-ink-muted"}`}>
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-display font-bold text-ink text-sm truncate">{r.name}</p>
                {r.you && (
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-accent text-white rounded-full px-1.5 py-0.5">
                    Vous
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs font-bold text-ink">{r.rating}</span>
                <span className="flex">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3 h-3 text-amber-500 fill-amber-500" />
                  ))}
                </span>
                <span className="text-xs text-ink-muted">({r.reviews})</span>
              </div>
            </div>
            {r.you && (
              <div className="flex gap-1.5 shrink-0">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center"><Phone className="w-3.5 h-3.5" /></span>
                <span className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center"><Navigation className="w-3.5 h-3.5" /></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SeoLocal() {
  return (
    <section id="seo-local" className="py-20 md:py-28 bg-coal relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Texte ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ash-dim mb-6">
              <span className="inline-block w-8 h-px bg-accent" />
              Référencement local · par Next Level GMB
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1] text-cream">
              Vos clients vous cherchent.
              <br />
              <span className="text-accent">Apparaissez en premier.</span>
            </h2>
            <p className="mt-5 text-lg text-ash leading-relaxed max-w-[48ch]">
              Les 3 premières fiches Google Maps captent <strong className="text-cream">70% des clics</strong>.
              Si vous n&apos;y êtes pas, vos concurrents raflent vos clients. On vous y place en 30 jours.
            </p>

            {/* Avant / Après position */}
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-card border rule rounded-2xl px-5 py-4 text-center">
                <div className="text-xs text-ash-dim mb-1">Avant</div>
                <div className="stat-num text-3xl text-ash line-through decoration-red-400/60">#12</div>
              </div>
              <ArrowUpRight className="w-7 h-7 text-accent" strokeWidth={2.5} />
              <div className="bg-accent/10 border border-accent/40 rounded-2xl px-5 py-4 text-center">
                <div className="text-xs text-accent mb-1">Après 30j</div>
                <div className="stat-num text-3xl text-accent">#1</div>
              </div>
              <p className="text-sm text-ash ml-2">
                <span className="stat-num text-2xl text-cream">+<CountUp to={38} /></span><br />
                appels / mois
              </p>
            </div>

            {/* Leviers */}
            <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {LEVIERS.map((l) => (
                <div key={l.title} className="group flex gap-3">
                  <span className="icon-chip shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <l.icon className="icon-pop w-[18px] h-[18px]" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-display font-bold text-cream text-sm">{l.title}</p>
                    <p className="text-xs text-ash-dim leading-relaxed">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={GMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-center gap-2.5 bg-accent text-white font-semibold text-base px-7 py-4 rounded-full hover:bg-accent-dark transition-colors duration-200"
            >
              Auditer ma fiche Google
              <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
            </a>
          </motion.div>

          {/* ── Mockup Google Maps ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="animate-floaty"
          >
            <MapsMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
