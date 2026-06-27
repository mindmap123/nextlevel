/** Halo lumineux d'ambiance par section — teinte warm subtile, jamais au premier plan.
 *  Palette chaude dérivée de l'accent (orange signature) : ne casse pas l'identité.
 *  Le parent <section> doit être `relative overflow-hidden`, le contenu en `relative z-10`. */
export default function SectionAura({
  color = "#FF4D17",
  position = "top-right",
  size = "46rem",
  opacity = 0.1,
}: {
  color?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: string;
  opacity?: number;
}) {
  const pos: Record<string, React.CSSProperties> = {
    "top-left": { top: "-12rem", left: "-10rem" },
    "top-right": { top: "-12rem", right: "-10rem" },
    "bottom-left": { bottom: "-12rem", left: "-10rem" },
    "bottom-right": { bottom: "-12rem", right: "-10rem" },
    center: { top: "50%", left: "50%", transform: "translate(-50%,-50%)" },
  };
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-0 rounded-full"
      style={{
        width: size,
        height: size,
        opacity,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        ...pos[position],
      }}
    />
  );
}
