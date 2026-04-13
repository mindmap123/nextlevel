import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Mentions Légales | Next Level",
  description: "Mentions légales de Next Level",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-5 py-16 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#7B2FF2] hover:text-[#6222CC] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-bold text-[#1A1A2E] mb-8">Mentions Légales</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">1. Hébergement</h2>
            <p className="text-slate-600 leading-relaxed">
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#7B2FF2] hover:underline">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">2. Propriété intellectuelle</h2>
            <p className="text-slate-600 leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de Next Level, sauf mention contraire.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit de Next Level.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">3. Données personnelles</h2>
            <p className="text-slate-600 leading-relaxed">
              Next Level ne collecte aucune donnée personnelle via ce site web. Les échanges se font exclusivement via WhatsApp, plateforme tierce soumise à sa propre politique de confidentialité.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Pour plus d'informations, consultez notre <Link href="/politique-confidentialite" className="text-[#7B2FF2] hover:underline">Politique de Confidentialité</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">4. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site n'utilise aucun cookie de tracking ou de publicité. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">5. Limitation de responsabilité</h2>
            <p className="text-slate-600 leading-relaxed">
              Next Level s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Next Level ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Next Level ne pourra être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">6. Droit applicable</h2>
            <p className="text-slate-600 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-slate-500">
            Dernière mise à jour : Avril 2026
          </p>
        </div>
      </div>
    </main>
  );
}
