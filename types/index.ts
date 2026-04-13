export interface ILead {
    _id?: string;
    email: string;
    prenom: string;
    nom: string;
    entreprise?: string;
    telephone?: string;
    siteWeb?: string;
    typeService: 'site_web' | 'application_sur_mesure';
    budget: 'starter' | 'croissance' | 'entreprise' | 'sur_devis';
    message: string;
    source: 'landing_form' | 'ai_critique' | 'contact';
    critiqueIA?: string;
    statut: 'nouveau' | 'contacte' | 'qualifie' | 'en_cours' | 'termine';
    dateCreation: Date;
    notes?: string;
}

export interface IProject {
    _id?: string;
    leadId: string;
    nomProjet: string;
    typeProjet: string;
    budget: number;
    delai: string;
    statut: 'devis' | 'en_cours' | 'revision' | 'termine' | 'livre';
    dateDebut?: Date;
    dateLivraison?: Date;
    progressionPct: number;
    fichiers: string[];
    commentaires: IComment[];
}

export interface IComment {
    auteur: string;
    message: string;
    date: Date;
}

export interface ITestimonial {
    _id?: string;
    nom: string;
    entreprise: string;
    poste: string;
    temoignage: string;
    note: number;
    avatarUrl?: string;
    vedette: boolean;
}

export interface IPricingTier {
    nom: string;
    prix: number;
    delai: string;
    fonctionnalites: string[];
    recommande: boolean;
    ordre: number;
}
