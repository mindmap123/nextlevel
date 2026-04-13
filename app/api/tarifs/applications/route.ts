import { NextResponse } from 'next/server';

// Static data for applications as they are "sur devis" mostly, but we want examples.
// We can also fetch from DB if we seeded it, but for simplicity here we return the static examples from prompt.
const APPLICATIONS = [
    {
        nom: "CRM & Gestion Client",
        prixMin: 12000,
        delai: "4-8 semaines",
        description: "Solution complète pour gérer vos contacts, suivre vos opportunités commerciales.",
        fonctionnalites: ["Gestion des contacts", "Pipeline de ventes", "Automatisation emails", "Rapports & Analytics"],
        icone: "ChartBar"
    },
    {
        nom: "Gestion de Stock",
        prixMin: 8000,
        delai: "3-6 semaines",
        description: "Pilotez votre inventaire en temps réel et optimisez vos approvisionnements.",
        fonctionnalites: ["Suivi temps réel", "Alertes stock", "Codes-barres", "Multi-entrepôts"],
        icone: "Box"
    },
    {
        nom: "Système de Réservation",
        prixMin: 10000,
        delai: "4-6 semaines",
        description: "Solution complète pour gérer vos rendez-vous et paiements en ligne.",
        fonctionnalites: ["Calendrier interactif", "Paiement Stripe", "Notifications SMS", "Disponibilités"],
        icone: "Calendar"
    }
];

export async function GET() {
    return NextResponse.json(APPLICATIONS);
}
