"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

const PLANS = [
    {
        name: "Starter",
        price: 4500,
        delay: "5 jours",
        features: [
            "Landing page sur mesure",
            "Responsive (mobile/tablet/desktop)",
            "SEO de base",
            "Formulaire de contact",
            "Hébergement 1 an inclus"
        ],
        recommended: false,
        cta: "Choisir Starter"
    },
    {
        name: "Croissance",
        price: 8500,
        delay: "10 jours",
        features: [
            "Site complet 5 pages",
            "Stratégie de conversion (CRO)",
            "CMS intégré (gestion autonome)",
            "Animations & effets modernes",
            "Rédaction de contenu",
            "SEO avancé",
            "Support 3 mois"
        ],
        recommended: true,
        cta: "Choisir Croissance"
    },
    {
        name: "Entreprise",
        price: 15000,
        delay: "Sur mesure",
        features: [
            "Design system complet",
            "Architecture headless",
            "A/B testing intégré",
            "Support prioritaire 24/7",
            "Audits conversion mensuels",
            "Multilingue",
            "Intégrations API"
        ],
        recommended: false,
        cta: "Nous Contacter"
    }
];

export default function TarifsSites() {
    return (
        <section id="tarifs" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                {/* Section tarifs supprimée */}
            </div>
        </section>
    );
}
