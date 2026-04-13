import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Tarif, Temoignage } from '@/lib/models';

export async function GET() {
    await connectDB();

    // Clean existing data ? Maybe just upsert or delete all for now.
    await Tarif.deleteMany({});
    await Temoignage.deleteMany({});

    const tarifsSites = [
        {
            type: 'site',
            nom: 'Starter',
            prix: 4500,
            delai: '5 jours',
            fonctionnalites: ['Landing page sur mesure', 'Responsive (Mobile/Desktop)', 'SEO de base', 'Formulaire de contact', 'Hébergement 1 an inclus'],
            recommande: false,
            ordre: 1
        },
        {
            type: 'site',
            nom: 'Croissance',
            prix: 8500,
            delai: '10 jours',
            fonctionnalites: ['Site complet 5 pages', 'Stratégie de conversion (CRO)', 'CMS intégré (Gestion autonome)', 'Animations & effes modernes', 'Rédaction de contenu', 'SEO avancé'],
            recommande: true,
            ordre: 2
        },
        {
            type: 'site',
            nom: 'Entreprise',
            prix: 15000,
            delai: 'Sur mesure',
            fonctionnalites: ['Design system complet', 'Architecture headless', 'A/B testing intégré', 'Support prioritaire 24/7', 'Audits conversion mensuels', 'Multilingue'],
            recommande: false,
            ordre: 3
        }
    ];

    const temoignages = [
        {
            nom: 'Alexandre Dupont',
            entreprise: 'TechStream',
            poste: 'CEO',
            temoignage: "Nous avons vu nos conversions augmenter de 140% dans les 30 premiers jours. L'équipe comprend vraiment la psychologie du client.",
            note: 5,
            vedette: true
        },
        {
            nom: 'Sophie Martin',
            entreprise: 'GlowUp',
            poste: 'Fondatrice',
            temoignage: "Le plus beau site que j'ai jamais eu. Mais surtout, il génère des ventes pendant que je dors.",
            note: 5,
            vedette: true
        },
        {
            nom: 'Jean Lefebvre',
            entreprise: 'Industries FR',
            poste: 'Directeur Marketing',
            temoignage: "Leur processus a transformé notre site d'entreprise en machine à convertir.",
            note: 5,
            vedette: false
        }
    ];

    await Tarif.insertMany(tarifsSites);
    await Temoignage.insertMany(temoignages);

    return NextResponse.json({ message: 'Database seeded successfully with French content' });
}
