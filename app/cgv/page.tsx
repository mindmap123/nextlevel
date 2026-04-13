import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Conditions Générales de Vente | Next Level",
  description: "Conditions générales de vente de Next Level",
};

export default function CGV() {
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

        <h1 className="text-4xl font-bold text-[#1A1A2E] mb-8">Conditions Générales de Vente</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">1. Objet</h2>
            <p className="text-slate-600 leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Next Level (ci-après "le Prestataire") et tout client professionnel ou particulier (ci-après "le Client") souhaitant bénéficier des services proposés.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Les services proposés incluent :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Création de sites web sur mesure</li>
              <li>Développement d'applications web</li>
              <li>Optimisation du référencement local (Google My Business)</li>
              <li>Développement d'outils métier personnalisés</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">2. Acceptation des CGV</h2>
            <p className="text-slate-600 leading-relaxed">
              Toute commande de services implique l'acceptation sans réserve des présentes CGV. Le Client reconnaît avoir pris connaissance des présentes CGV et les accepter avant toute commande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">3. Devis et commande</h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>3.1 Demande de devis</strong><br />
              Toute prestation débute par une prise de contact via WhatsApp. Le Prestataire établit un devis gratuit et sans engagement détaillant :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>La nature des prestations</li>
              <li>Le prix total TTC</li>
              <li>Les délais de réalisation</li>
              <li>Les conditions de paiement</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>3.2 Validation</strong><br />
              Le devis est valable 30 jours à compter de sa date d'émission. La commande est considérée comme ferme et définitive après signature du devis par le Client et réception de l'acompte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">4. Prix et modalités de paiement</h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>4.1 Prix</strong><br />
              Les prix sont indiqués en euros, toutes taxes comprises (TTC). Le Prestataire se réserve le droit de modifier ses tarifs à tout moment, mais les prestations seront facturées sur la base des tarifs en vigueur au moment de la validation du devis.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>4.2 Modalités de paiement</strong><br />
              Sauf accord contraire, les modalités de paiement sont les suivantes :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>50% d'acompte à la commande</li>
              <li>50% à la livraison finale</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Les paiements s'effectuent par virement bancaire ou tout autre moyen convenu entre les parties.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>4.3 Retard de paiement</strong><br />
              En cas de retard de paiement, des pénalités de retard égales à 3 fois le taux d'intérêt légal seront appliquées, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">5. Délais de réalisation</h2>
            <p className="text-slate-600 leading-relaxed">
              Les délais de réalisation sont indiqués à titre indicatif dans le devis. Le Prestataire s'engage à respecter au mieux ces délais, mais ne saurait être tenu responsable en cas de retard dû à :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Un retard dans la fourniture des éléments nécessaires par le Client (contenus, images, accès, etc.)</li>
              <li>Des demandes de modifications importantes en cours de projet</li>
              <li>Des cas de force majeure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">6. Obligations du Client</h2>
            <p className="text-slate-600 leading-relaxed">
              Le Client s'engage à :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Fournir tous les éléments nécessaires à la réalisation de la prestation (textes, images, logos, accès, etc.)</li>
              <li>Garantir qu'il dispose des droits nécessaires sur tous les contenus fournis</li>
              <li>Répondre dans des délais raisonnables aux demandes de validation</li>
              <li>Respecter les échéances de paiement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">7. Obligations du Prestataire</h2>
            <p className="text-slate-600 leading-relaxed">
              Le Prestataire s'engage à :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Réaliser les prestations conformément au devis validé</li>
              <li>Respecter les délais convenus dans la mesure du possible</li>
              <li>Informer le Client de l'avancement du projet</li>
              <li>Livrer un travail professionnel et fonctionnel</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">8. Modifications et révisions</h2>
            <p className="text-slate-600 leading-relaxed">
              Le nombre de révisions incluses dans le devis est précisé dans celui-ci. Toute demande de modification supplémentaire fera l'objet d'un devis complémentaire.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Les modifications importantes demandées en cours de projet peuvent entraîner un ajustement des délais et du prix initialement convenus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">9. Livraison et recette</h2>
            <p className="text-slate-600 leading-relaxed">
              La livraison s'effectue par mise en ligne du site/application ou remise des fichiers selon les modalités convenues. Le Client dispose d'un délai de 7 jours pour effectuer la recette et signaler d'éventuels dysfonctionnements.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Passé ce délai sans retour du Client, la prestation sera considérée comme acceptée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">10. Garantie et maintenance</h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>10.1 Garantie</strong><br />
              Le Prestataire garantit le bon fonctionnement des livrables pendant 30 jours suivant la livraison. Cette garantie couvre uniquement les bugs et dysfonctionnements liés au code développé par le Prestataire.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>10.2 Maintenance</strong><br />
              Toute prestation de maintenance au-delà de la période de garantie fera l'objet d'un contrat séparé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">11. Propriété intellectuelle</h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>11.1 Droits du Client</strong><br />
              Après paiement intégral du prix, le Client devient propriétaire des éléments créés spécifiquement pour lui (design, code personnalisé, contenus rédigés).
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>11.2 Droits du Prestataire</strong><br />
              Le Prestataire conserve les droits sur :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Les frameworks, bibliothèques et outils open-source utilisés</li>
              <li>Les composants réutilisables développés en interne</li>
              <li>Les méthodologies et savoir-faire</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Le Prestataire se réserve le droit d'utiliser les réalisations à des fins de portfolio et de communication, sauf demande contraire écrite du Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">12. Résiliation</h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>12.1 Par le Client</strong><br />
              Le Client peut résilier le contrat à tout moment. Dans ce cas, il devra régler l'intégralité des prestations déjà réalisées, ainsi qu'une indemnité de 30% du montant restant dû.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>12.2 Par le Prestataire</strong><br />
              Le Prestataire peut résilier le contrat en cas de :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Non-paiement après mise en demeure restée sans effet pendant 15 jours</li>
              <li>Non-fourniture des éléments nécessaires par le Client après relance</li>
              <li>Comportement abusif ou irrespectueux</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">13. Responsabilité</h2>
            <p className="text-slate-600 leading-relaxed">
              La responsabilité du Prestataire est limitée au montant des sommes effectivement perçues au titre du contrat. Le Prestataire ne saurait être tenu responsable :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
              <li>Des dommages indirects (perte de chiffre d'affaires, perte de clientèle, etc.)</li>
              <li>Des contenus fournis par le Client</li>
              <li>Des dysfonctionnements liés à l'hébergement ou aux services tiers</li>
              <li>De l'utilisation non conforme des livrables par le Client</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">14. Confidentialité</h2>
            <p className="text-slate-600 leading-relaxed">
              Les parties s'engagent à garder confidentielles toutes les informations échangées dans le cadre de la prestation. Cet engagement reste valable pendant toute la durée du contrat et 2 ans après sa fin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">15. Force majeure</h2>
            <p className="text-slate-600 leading-relaxed">
              Aucune des parties ne sera tenue responsable d'un retard ou d'une inexécution résultant d'un cas de force majeure (catastrophe naturelle, guerre, grève, panne informatique majeure, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">16. Droit applicable et litiges</h2>
            <p className="text-slate-600 leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, le litige sera porté devant les tribunaux compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">17. Médiation</h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément à l'article L.612-1 du Code de la consommation, le Client consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige.
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
