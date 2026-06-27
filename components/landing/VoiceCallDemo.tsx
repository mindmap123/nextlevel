"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Sparkles, User, CalendarCheck, RotateCcw, Play } from "lucide-react";

type Turn = { who: "agent" | "client"; text: string; ms: number };

const SCRIPT: Turn[] = [
  { who: "agent", text: "Agence Duval Immobilier, bonjour ! Que puis-je faire pour vous ?", ms: 2600 },
  { who: "client", text: "Bonjour, je cherche un T3 sur Lyon 6, autour de 350 000 €.", ms: 2600 },
  { who: "agent", text: "Parfait. On a deux biens qui correspondent. Vous préférez visiter cette semaine ou la prochaine ?", ms: 3200 },
  { who: "client", text: "Cette semaine si possible, plutôt le matin.", ms: 2400 },
  { who: "agent", text: "C'est noté. Je vous réserve demain 9h00 et je vous envoie la confirmation par SMS.", ms: 3000 },
];

type Status = "idle" | "ringing" | "connected" | "done";

function Waveform({ active }: { active: boolean }) {
  const bars = Array.from({ length: 20 });
  return (
    <div className="flex items-center justify-center gap-[3px] h-8">
      {bars.map((_, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full bg-accent ${active ? "wave-bar" : ""}`}
          style={{
            height: active ? "100%" : "18%",
            animationDelay: `${(i % 7) * 0.1}s`,
            animationDuration: `${0.7 + (i % 5) * 0.12}s`,
            opacity: active ? 0.5 + (i % 4) * 0.15 : 0.3,
            transition: "height 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

export default function VoiceCallDemo() {
  const [status, setStatus] = useState<Status>("idle");
  const [visible, setVisible] = useState(0); // nb de turns affichés
  const [typing, setTyping] = useState<null | "agent" | "client">(null);
  const [seconds, setSeconds] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const startedOnce = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const start = useCallback(() => {
    clearTimers();
    setStatus("ringing");
    setVisible(0);
    setTyping(null);
    setSeconds(0);

    // décroche après la sonnerie
    timers.current.push(
      setTimeout(() => {
        setStatus("connected");
        let acc = 0;
        SCRIPT.forEach((turn, i) => {
          // indicateur "écrit/parle"
          timers.current.push(
            setTimeout(() => setTyping(turn.who), acc + 250)
          );
          // bulle révélée
          timers.current.push(
            setTimeout(() => {
              setTyping(null);
              setVisible(i + 1);
            }, acc + 900)
          );
          acc += turn.ms;
        });
        // fin → carte résultat
        timers.current.push(
          setTimeout(() => {
            setTyping(null);
            setStatus("done");
          }, acc + 400)
        );
      }, 1600)
    );
  }, [clearTimers]);

  // timer d'appel
  useEffect(() => {
    if (status !== "connected" && status !== "done") return;
    if (status === "done") return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  // auto-scroll transcript
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [visible, typing, status]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const mmss = `${String(Math.floor(seconds / 60)).padStart(1, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  const agentSpeaking = typing === "agent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      onViewportEnter={() => {
        if (!startedOnce.current) {
          startedOnce.current = true;
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) start();
        }
      }}
      className="relative bg-card border rule rounded-3xl p-6 md:p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)]"
    >
      {/* glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-10 w-64 h-64 rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle,#FF4D17 0%,transparent 70%)" }}
      />

      {/* En-tête statut */}
      <div className="relative flex items-center justify-between mb-5">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cream">
          <span className="relative flex w-2.5 h-2.5">
            {(status === "ringing" || status === "connected") && (
              <span className="pulse-ring absolute inline-flex w-full h-full rounded-full bg-accent" />
            )}
            <span className={`relative inline-flex w-2.5 h-2.5 rounded-full ${status === "done" ? "bg-green-500" : status === "idle" ? "bg-ash-dim" : "bg-accent animate-blink"}`} />
          </span>
          {status === "idle" && "VoiceCaptur · prêt"}
          {status === "ringing" && "Appel entrant…"}
          {status === "connected" && "En ligne"}
          {status === "done" && "Appel terminé"}
        </span>
        <span className="text-sm text-ash-dim tabular-nums">{status === "idle" ? "00:00" : mmss}</span>
      </div>

      {/* Identité appelant */}
      <div className="relative flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
          {status === "idle" || status === "ringing" ? <Phone className="w-5 h-5" /> : <User className="w-5 h-5" />}
        </div>
        <div>
          <p className="font-display font-bold text-cream leading-tight">
            {status === "idle" ? "Client potentiel" : "Marc · prospect"}
          </p>
          <p className="text-xs text-ash-dim tabular-nums">06 87 24 11 09</p>
        </div>
      </div>

      {/* Transcript */}
      <div
        ref={scrollRef}
        className="relative h-[260px] overflow-y-auto scrollbar-hide flex flex-col gap-3 pr-1"
      >
        {status === "idle" && (
          <div className="m-auto text-center px-4">
            <p className="text-ash text-sm leading-relaxed mb-1">
              Un client appelle votre agence à 18h32.
            </p>
            <p className="text-ash-dim text-xs">Lancez la démo : l&apos;agent décroche et gère tout seul.</p>
          </div>
        )}

        {SCRIPT.slice(0, visible).map((turn, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className={`flex items-end gap-2 ${turn.who === "agent" ? "" : "flex-row-reverse"}`}
          >
            <span
              className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                turn.who === "agent" ? "bg-accent text-white" : "bg-night border rule text-ash"
              }`}
            >
              {turn.who === "agent" ? <Sparkles className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
            </span>
            <div
              className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed ${
                turn.who === "agent"
                  ? "bg-accent/12 border border-accent/25 text-cream rounded-bl-sm"
                  : "bg-night border rule text-ash rounded-br-sm"
              }`}
            >
              {turn.text}
            </div>
          </motion.div>
        ))}

        {/* indicateur de frappe / parole */}
        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex items-end gap-2 ${typing === "agent" ? "" : "flex-row-reverse"}`}
            >
              <span
                className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                  typing === "agent" ? "bg-accent text-white" : "bg-night border rule text-ash"
                }`}
              >
                {typing === "agent" ? <Sparkles className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
              </span>
              <div className={`rounded-2xl px-3.5 py-3 ${typing === "agent" ? "bg-accent/12 border border-accent/25 rounded-bl-sm" : "bg-night border rule rounded-br-sm"}`}>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ash-dim animate-blink" style={{ animationDelay: "0s" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-ash-dim animate-blink" style={{ animationDelay: "0.2s" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-ash-dim animate-blink" style={{ animationDelay: "0.4s" }} />
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carte résultat */}
        <AnimatePresence>
          {status === "done" && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="mt-1 bg-accent/10 border border-accent/40 rounded-2xl p-4 flex items-center gap-3"
            >
              <span className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5" />
              </span>
              <div>
                <p className="text-cream text-sm font-bold">RDV pris · demain 9h00</p>
                <p className="text-ash-dim text-xs">Lead qualifié · résumé envoyé au CRM · SMS confirmé</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Waveform + contrôle */}
      <div className="relative mt-5 pt-5 border-t rule">
        <div className="mb-4">
          <Waveform active={status === "connected"} />
        </div>

        {status === "idle" && (
          <button
            onClick={start}
            className="cta-magnetic w-full inline-flex items-center justify-center gap-2.5 bg-accent text-white font-semibold px-6 py-3.5 rounded-full hover:bg-accent-dark transition-colors"
          >
            <Play className="w-4 h-4 fill-white" /> Simuler un appel entrant
          </button>
        )}
        {(status === "ringing" || status === "connected") && (
          <div className="w-full inline-flex items-center justify-center gap-2.5 bg-night border rule text-ash font-semibold px-6 py-3.5 rounded-full">
            <PhoneOff className="w-4 h-4 text-accent" /> {status === "ringing" ? "Décrochage…" : "Conversation en cours…"}
          </div>
        )}
        {status === "done" && (
          <button
            onClick={start}
            className="w-full inline-flex items-center justify-center gap-2.5 bg-cream text-night font-semibold px-6 py-3.5 rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Rejouer l&apos;appel
          </button>
        )}
      </div>
    </motion.div>
  );
}
