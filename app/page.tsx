import Hero from "@/components/landing/Hero";
import ServicesOfferts from "@/components/landing/ServicesOfferts";
import Processus from "@/components/landing/Processus";
import Realisations from "@/components/landing/Realisations";
import Temoignages from "@/components/landing/Temoignages";
import FAQ from "@/components/landing/FAQ";
import FormulaireContact from "@/components/landing/FormulaireContact";
import Footer from "@/components/landing/Footer";
import { PopupProvider } from "@/components/landing/PopupContext";
import ContactPopup from "@/components/landing/ContactPopup";
import AnimatedGradient from "@/components/ui/animated-gradient";

export default function Home() {
  return (
    <PopupProvider>
      <main className="min-h-screen bg-white text-[#1A1A2E] font-body overflow-x-hidden">
        <Hero />
        <ServicesOfferts />
        <Processus />
        <Realisations />
        <Temoignages />
        <FAQ />
        {/* ── Contact + Footer dans le même conteneur gradient ── */}
        <div className="relative bg-[#1A1A2E] overflow-hidden">
          <AnimatedGradient
            config={{
              preset: "custom",
              color1: "#0D0D1A",
              color2: "#7B2FF2",
              color3: "#0066FF",
              rotation: -20,
              proportion: 30,
              scale: 0.3,
              speed: 35,
              distortion: 3,
              swirl: 40,
              swirlIterations: 6,
              softness: 100,
              offset: 0,
              shape: "Checks",
              shapeSize: 40,
            }}
            style={{ opacity: 0.55 }}
          />
          <FormulaireContact />
          <Footer />
        </div>
        <ContactPopup />
      </main>
    </PopupProvider>
  );
}
