"use client";

import { useEffect, useRef } from "react";

/** Felt Quality : grain film fixe + lueur orange réactive au curseur + barre de progression scroll. */
export default function Ambiance() {
  const glowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    let raf = 0;
    const bar = progressRef.current;
    const onScroll = () => {
      if (!bar) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? window.scrollY / h : 0;
        bar.style.transform = `scaleX(${p.toFixed(4)})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const el = glowRef.current;
    const onMove = (e: PointerEvent) => {
      if (!el || coarse || reduced) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
        el.style.opacity = "1";
      });
    };
    const onLeave = () => {
      if (el) el.style.opacity = "0";
    };

    if (!coarse && !reduced) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" aria-hidden />
      <div ref={glowRef} className="mouse-glow" aria-hidden />
      <div className="film-grain" aria-hidden />
    </>
  );
}
