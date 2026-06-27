import Hero from "@/components/landing/Hero";
import PourQui from "@/components/landing/PourQui";
import ServicesOfferts from "@/components/landing/ServicesOfferts";
import CtaBand from "@/components/landing/CtaBand";
import VoiceAgent from "@/components/landing/VoiceAgent";
import SeoLocal from "@/components/landing/SeoLocal";
import Processus from "@/components/landing/Processus";
import Realisations from "@/components/landing/Realisations";
import Valeurs from "@/components/landing/Valeurs";
import Temoignages from "@/components/landing/Temoignages";
import FAQ from "@/components/landing/FAQ";
import FormulaireContact from "@/components/landing/FormulaireContact";
import Footer from "@/components/landing/Footer";
import { PopupProvider } from "@/components/landing/PopupContext";
import ContactPopup from "@/components/landing/ContactPopup";

export default function Home() {
  return (
    <PopupProvider>
      <main className="min-h-screen bg-night text-cream font-body overflow-x-hidden">
        <Hero />
        <PourQui />
        <ServicesOfferts />
        <CtaBand />
        <VoiceAgent />
        <SeoLocal />
        <Processus />
        <Realisations />
        <Valeurs />
        <Temoignages />
        <FAQ />
        <FormulaireContact />
        <Footer />
        <ContactPopup />
      </main>
    </PopupProvider>
  );
}
