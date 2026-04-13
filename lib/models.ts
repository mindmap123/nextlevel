import mongoose, { Schema, model, models } from 'mongoose';

// --- Lead Schema ---
const LeadSchema = new Schema({
    email: { type: String, required: true, unique: true },
    prenom: { type: String, required: true },
    nom: { type: String, required: true },
    entreprise: { type: String },
    telephone: { type: String },
    siteWeb: { type: String },
    typeService: {
        type: String,
        enum: ['site_web', 'application_sur_mesure'],
        required: true
    },
    budget: {
        type: String,
        enum: ['starter', 'croissance', 'entreprise', 'sur_devis']
    },
    message: { type: String },
    source: { type: String, default: 'contact' },
    critiqueIA: { type: String }, // JSON string or text analysis
    statut: {
        type: String,
        enum: ['nouveau', 'contacte', 'qualifie', 'en_cours', 'termine'],
        default: 'nouveau'
    },
    dateCreation: { type: Date, default: Date.now },
    notes: { type: String }
});

// --- Projet Schema ---
const ProjetSchema = new Schema({
    leadId: { type: Schema.Types.ObjectId, ref: 'Lead', required: true },
    nomProjet: { type: String, required: true },
    typeProjet: { type: String }, // e.g., 'site_web', 'crm', etc.
    budget: { type: Number },
    delai: { type: String },
    statut: {
        type: String,
        enum: ['devis', 'en_cours', 'revision', 'termine', 'livre'],
        default: 'devis'
    },
    dateDebut: { type: Date },
    dateLivraison: { type: Date },
    progressionPct: { type: Number, default: 0 },
    fichiers: [{ type: String }], // URLs
    commentaires: [{
        auteur: String,
        message: String,
        date: { type: Date, default: Date.now }
    }]
});

// --- Tarif Schema ---
const TarifSchema = new Schema({
    type: { type: String, enum: ['site', 'application'], required: true }, // Added type to distinguish
    nom: { type: String, required: true },
    prix: { type: Number, required: true },
    delai: { type: String },
    fonctionnalites: [{ type: String }],
    recommande: { type: Boolean, default: false },
    ordre: { type: Number }
});

// --- Temoignage Schema ---
const TemoignageSchema = new Schema({
    nom: { type: String, required: true },
    entreprise: { type: String },
    poste: { type: String },
    temoignage: { type: String, required: true },
    note: { type: Number, min: 1, max: 5, default: 5 },
    avatarUrl: { type: String },
    vedette: { type: Boolean, default: false }
});

export const Lead = models.Lead || model('Lead', LeadSchema);
export const Projet = models.Projet || model('Projet', ProjetSchema);
export const Tarif = models.Tarif || model('Tarif', TarifSchema);
export const Temoignage = models.Temoignage || model('Temoignage', TemoignageSchema);
