import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Politique de Confidentialité | Next Level",
  description: "Politique de confidentialité de Next Level",
};

export default function PolitiqueConfidentialite() {
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

        <h1 className="text-4xl font-bold text-[#1A1A2E] mb-8">Politique de Confidentialité</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Next Level s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique comment nous traitons les informations lors de votre visite sur notre site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">2. Collecte de données</h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>Next Level ne collecte aucune donnée personnelle via ce site web.</strong>
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Nous ne disposons pas de :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Formulaire de contact avec collecte d'emails</li>
              <li>Newsletter ou inscription</li>
              <li>Système de compte utilisateur</li>
              <li>Cookies de tracking ou publicitaires</li>
              <li>Outils d'analyse comportementale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">3. Communication via WhatsApp</h2>
            <p className="text-slate-600 leading-relaxed">
              Le seul moyen de contact proposé sur ce site est WhatsApp. Lorsque vous cliquez sur le bouton WhatsApp :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Vous êtes redirigé vers l'application WhatsApp (web ou mobile)</li>
              <li>Les échanges se font directement sur la plateforme WhatsApp</li>
              <li>Ces communications sont soumises à la politique de confidentialité de WhatsApp/Meta</li>
              <li>Next Level n'a aucun accès à vos données WhatsApp en dehors des conversations que vous initiez</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">4. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site n'utilise aucun cookie de tracking, publicité ou analyse comportementale.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés (session, préférences d'affichage). Ces cookies ne collectent aucune donnée personnelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">5. Hébergement et logs serveur</h2>
            <p className="text-slate-600 leading-relaxed">
              Le site est hébergé par Vercel Inc. (USA). Comme tout hébergeur web, Vercel peut collecter automatiquement des logs techniques standards :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Pages visitées</li>
              <li>Date et heure de connexion</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Ces données sont conservées temporairement à des fins de sécurité et de performance. Pour plus d'informations, consultez la <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#7B2FF2] hover:underline">politique de confidentialité de Vercel</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">6. Vos droits (RGPD)</h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>Important :</strong> Étant donné que Next Level ne collecte aucune donnée via ce site, ces droits s'appliquent uniquement aux échanges que vous initiez via WhatsApp. Pour exercer ces droits concernant vos conversations WhatsApp, contactez-nous directement via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">7. Sécurité</h2>
            <p className="text-slate-600 leading-relaxed">
              Next Level met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger les données contre la destruction accidentelle ou illicite, la perte accidentelle, l'altération, la diffusion ou l'accès non autorisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">8. Liens externes</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site peut contenir des liens vers des sites externes (WhatsApp, réseaux sociaux, etc.). Next Level n'est pas responsable des politiques de confidentialité de ces sites tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">9. Modifications</h2>
            <p className="text-slate-600 leading-relaxed">
              Next Level se réserve le droit de modifier cette politique de confidentialité à tout moment. La version en vigueur est celle publiée sur cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">10. Contact</h2>
            <p className="text-slate-600 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité, contactez-nous via WhatsApp.
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
