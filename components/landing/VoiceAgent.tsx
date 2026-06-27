"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  PhoneIncoming, Sparkles, CalendarCheck, PhoneMissed, PhoneCall,
  ArrowRight, Play, ArrowUpRight, Check, X,
} from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import RevealWords from "@/components/ui/RevealWords";

const DEMO_URL = "https://voicecaptur.vercel.app/";

const PIPELINE = [
  { icon: PhoneIncoming, title: "1 · Un client appelle", desc: "Jour, nuit, week-end, en plein rush." },
  { icon: Sparkles, title: "2 · L'agent décroche", desc: "Répond en 1 sonnerie, qualifie la demande." },
  { icon: CalendarCheck, title: "3 · RDV + résumé", desc: "Rendez-vous pris, fiche lead envoyée à votre équipe." },
];

const VOICES = ["Clara", "Inès", "Hugo", "Léo"];

function Waveform() {
  const bars = Array.from({ length: 24 });
  return (
    <div className="flex items-center justify-center gap-[3px] h-10">
      {bars.map((_, i) => (
        <span
          key={i}
          className="wave-bar w-[3px] rounded-full bg-accent"
          style={{
            height: "100%",
            animationDelay: `${(i % 7) * 0.12}s`,
            animationDuration: `${0.8 + (i % 5) * 0.12}s`,
            opacity: 0.5 + (i % 4) * 0.15,
          }}
        />
      ))}
    </div>
  );
}

export default function VoiceAgent() {
  return (
    <section id="agent-vocal" className="py-20 md:py-28 bg-night relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 w-[40rem] h-[40rem] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(circle, #FF4D17 0%, transparent 70%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-5 relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ash-dim mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            Agent vocal IA · par VoiceCaptur
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[1] text-cream">
            Un appel manqué, c&apos;est un client <span className="text-accent">chez le concurrent.</span>
          </h2>
          <RevealWords
            className="mt-5 block text-lg text-ash leading-relaxed max-w-[50ch]"
            text="VoiceCaptur décroche à votre place, 24/7. Il répond, qualifie la demande, prend le rendez-vous et vous envoie le résumé. Vous ne perdez plus un seul lead."
          />
        </motion.div>

        {/* ── Pipeline 3 étapes (compréhension instantanée) ── */}
        <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-2 items-stretch mb-12">
          {PIPELINE.map((step, i) => (
            <Fragment key={step.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border rule rounded-2xl p-6 flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-1.5">{step.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{step.desc}</p>
              </motion.div>
              {i < PIPELINE.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-accent">
                  <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* ── Avant / Après + Mockup ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Avant / Après */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {/* Sans agent */}
            <div className="bg-card border border-red-500/25 rounded-2xl p-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-red-400 mb-5">
                <X className="w-4 h-4" /> Sans agent
              </span>
              <PhoneMissed className="w-7 h-7 text-red-400/80 mb-4" strokeWidth={1.75} />
              <p className="font-display font-bold text-cream text-base mb-1">18h32 — appel manqué</p>
              <p className="text-sm text-ash">Le client raccroche et appelle le concurrent. Lead perdu.</p>
            </div>
            {/* Avec agent */}
            <div className="bg-card border border-accent/40 rounded-2xl p-6 relative">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-accent mb-5">
                <Check className="w-4 h-4" /> Avec VoiceCaptur
              </span>
              <PhoneCall className="w-7 h-7 text-accent mb-4" strokeWidth={1.75} />
              <p className="font-display font-bold text-cream text-base mb-1">18h32 — décroché</p>
              <p className="text-sm text-ash">Demande qualifiée, RDV pris pour demain 9h, résumé envoyé.</p>
            </div>
          </motion.div>

          {/* Mockup d'appel animé */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-card border rule rounded-3xl p-7 md:p-8 animate-floaty shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-between mb-7">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cream">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="pulse-ring absolute inline-flex w-full h-full rounded-full bg-accent" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-accent animate-blink" />
                </span>
                En appel
              </span>
              <span className="text-sm text-ash-dim tabular-nums">0:11</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display font-bold text-cream leading-tight">Agent Immo</p>
                <p className="text-xs text-ash-dim">Duval Immobilier</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-night border rule rounded-2xl rounded-tl-sm p-4 mb-4"
            >
              <p className="text-cream text-[15px] leading-relaxed">
                Bonjour, agence Duval Immobilier, que puis-je faire pour vous&nbsp;?
              </p>
            </motion.div>

            <Waveform />

            {/* Carte résultat qui "tombe" */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-5 bg-accent/10 border border-accent/30 rounded-2xl p-4 flex items-center gap-3"
            >
              <CalendarCheck className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="text-cream text-sm font-bold">RDV pris · demain 9h00</p>
                <p className="text-ash-dim text-xs">Lead qualifié · résumé envoyé au CRM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Résultats + voix + CTA ── */}
        <div className="mt-14 grid md:grid-cols-[1fr_auto] gap-8 items-center border-t rule pt-10">
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="stat-num text-4xl text-accent"><CountUp to={100} suffix="%" /></div>
              <div className="text-sm text-ash-dim mt-1">appels décrochés</div>
            </div>
            <div>
              <div className="stat-num text-4xl text-accent">24/7</div>
              <div className="text-sm text-ash-dim mt-1">disponible</div>
            </div>
            <div>
              <div className="stat-num text-4xl text-accent">0</div>
              <div className="text-sm text-ash-dim mt-1">lead perdu</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col items-start gap-5">
            <div className="flex flex-wrap gap-2">
              {VOICES.map((v) => (
                <span key={v} className="inline-flex items-center gap-1.5 text-sm font-semibold text-cream border rule rounded-full pl-2 pr-3.5 py-1.5">
                  <span className="w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-accent" />
                  </span>
                  {v}
                </span>
              ))}
            </div>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-accent text-white font-semibold text-base px-7 py-4 rounded-full hover:bg-accent-dark transition-colors duration-200 whitespace-nowrap"
            >
              Voir une démo
              <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
