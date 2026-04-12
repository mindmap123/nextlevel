import Hero from "@/components/landing/Hero";
import ServicesOfferts from "@/components/landing/ServicesOfferts";
import SitesSurMesure from "@/components/landing/SitesSurMesure";
import ApplicationsSurMesure from "@/components/landing/ApplicationsSurMesure";
import GMBService from "@/components/landing/GMBService";
import Processus from "@/components/landing/Processus";
import Realisations from "@/components/landing/Realisations";
import Temoignages from "@/components/landing/Temoignages";
import FAQ from "@/components/landing/FAQ";
import FormulaireContact from "@/components/landing/FormulaireContact";
import Footer from "@/components/landing/Footer";
import { PopupProvider } from "@/components/landing/PopupContext";
import ContactPopup from "@/components/landing/ContactPopup";

export default function Home() {
  return (
    <PopupProvider>
      <main className="min-h-screen bg-white text-[#1A1A2E] font-body overflow-x-hidden">
        <Hero />
        <ServicesOfferts />
        <SitesSurMesure />
        <ApplicationsSurMesure />
        <GMBService />
        <Processus />
        <Realisations />
        <Temoignages />
        <FAQ />
        <FormulaireContact />
        <Footer />
        <ContactPopup />
      </main>
    </PopupProvider>
  );
}
