# Design System — Next Level

## Product Context
- **What this is:** Site landing page d'une agence web française proposant 3 piliers : sites web sur mesure, référencement local/GMB, et outils métier sur mesure.
- **Who it's for:** TPE et e-commerce (boulangeries, boutiques Shopify, artisans, professions libérales, PME locales)
- **Space/industry:** Agence web / digital, marché français
- **Project type:** Landing page marketing — conversion-focused, mobile-first

## Aesthetic Direction
- **Direction:** Clean & Assertif — ni le froid du cabinet de conseil, ni le toy design startup. Fort, direct, accessible. Le premier viewport fonctionne comme une affiche.
- **Decoration level:** Intentional — gradient brand utilisé stratégiquement (boutons CTA, titres em, CTA band), pas omniprésent
- **Mood:** Professionnel et accessible. Le visiteur doit ressentir confiance et compétence dès les 3 premières secondes. Pas intimidant pour une TPE.
- **Key rule:** Le gradient brand (violet→bleu) est une signature visuelle forte — l'utiliser sur les CTA primaires, les titres `em` en hero, et la CTA band. Jamais sur des éléments décoratifs secondaires.

## Typography
- **Display/Hero:** Fraunces — serif variable, expressif et chaleureux. Utilisé exclusivement sur les H1 et H2. Mémorable, personne d'autre dans la catégorie agences web FR n'utilise un serif comme display.
  - Hero : clamp(40px, 10.5vw, 88px) / font-weight: 700 / letter-spacing: -0.04em / line-height: 1.02
  - H2 sections : clamp(28px, 7vw, 48px) / font-weight: 700 / letter-spacing: -0.035em / line-height: 1.08
  - Style italic (em) : gradient brand appliqué en background-clip text
- **Body:** Plus Jakarta Sans — lisible, moderne, neutre. Pour tout le reste : paragraphes, nav, labels, boutons, tags.
  - Body : 15-16px / line-height: 1.65-1.7
  - UI labels : 11-13px / font-weight: 700 / letter-spacing: 0.06-0.1em / text-transform: uppercase
- **Loading:** Google Fonts — `Fraunces:ital,opsz,wght@0,9..144,400;600;700;900;1,9..144,600;700` + `Plus+Jakarta+Sans:wght@300;400;500;600;700`

## Color
- **Approach:** Brand gradient comme accent unique, neutraux froids, un fond blanc pur

### Palette exacte (source globals.css)
- **Primary:** `#7B2FF2` — violet, couleur signature, CTA, accents
- **Primary Dark:** `#6222CC` — hover state des éléments primaires
- **Secondary:** `#0066FF` — bleu, second pôle du gradient brand
- **Accent:** `#00A3FF` — bleu clair, utilisable pour highlights secondaires
- **Gradient Brand:** `linear-gradient(135deg, #7B2FF2 0%, #0066FF 100%)` — boutons CTA, section hero em, CTA band background, sticky CTA
- **Background:** `#FFFFFF` — fond principal
- **Background Soft:** `#F8F9FC` — sections alternées (logo strip, process)
- **Background Muted:** `#F1F3F8` — inputs, cards neutres
- **Surface:** `#FFFFFF` — cards, modals
- **Text Primary:** `#1A1A2E` — texte principal
- **Text Secondary:** `#64748B` — sous-titres, descriptions
- **Text Muted:** `#94A3B8` — labels, placeholders, métadonnées
- **Border:** `#E2E8F0` — bordures normales
- **Border Light:** `#F1F5F9` — séparateurs légers
- **Shadow Brand:** `0 4px 24px -4px rgba(123,47,242,.25)`
- **Shadow Brand LG:** `0 8px 40px -8px rgba(123,47,242,.30)`

### Dark mode
- BG: `#0D0D1A` / Surface: `#13132A` / Text: `#F0F0FF` / Muted: `#8B98B5` / Border: `#252534`

## Spacing
- **Base unit:** 4px (grid 4pt, pratique 8pt)
- **Density:** Comfortable (sections : 52px mobile / 80px desktop)
- **Scale:** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96

## Layout
- **Approach:** Mobile-first strict — chaque composant pensé 390px d'abord, desktop en override CSS
- **Hero:** Plein écran, headline domine les 2/3 du viewport, 1 seul CTA primaire
- **Nav:** Logo gauche + 1 seul CTA droit "Être recontacté" — pas de menu burger, pas de liens de navigation (c'est une landing)
- **Services:** 3 piliers en cards verticales mobile → grid 2 cols tablet → grid 3 cols desktop. Pilier 1 en "featured" card (gradient brand)
- **Témoignages:** Scroll horizontal sur mobile (overflow-x: auto, scrollbar-width: none)
- **Logos clients:** Scroll horizontal mobile
- **Grid:** 4/8/12 colonnes selon breakpoint
- **Max content width:** 1200px
- **Border radius:** sm: 8px, md: 14px, lg: 20px, xl: 28px, full: 9999px
- **Breakpoints:** 640px (popup centré) / 768px (2 cols) / 1100px (3 cols)

## Conversion
- **CTA unique:** "Être recontacté" — un seul message, tous les boutons primaires du site ouvrent le même popup
- **Sticky bottom CTA:** Toujours visible sur mobile. Background `#1A1A2E`, bouton gradient brand
- **Popup modal:** Bottom sheet sur mobile (border-radius top uniquement), modal centré sur desktop (≥640px). Animation slideUp 0.25s
  - Champs : Prénom · Email · Téléphone · Budget (3 options : 1k-5k / +5k / Pas de budget défini)
  - Confirmation visuelle au submit (bouton vert + fermeture auto 2s)
- **Proof points hero:** 4 stats en grid 2×2 mobile / 4 cols desktop — immédiatement après le CTA
- **Zéro mention de tarifs** sur la landing
- **Zéro mention "gratuit"**

## Motion
- **Approach:** Minimal-fonctionnel — aucune animation en boucle, pas d'orbes, pas de perspective grid
- **Easing:** enter: ease-out / exit: ease-in / move: ease-in-out
- **Duration:** micro: 150ms / short: 200ms / medium: 280ms
- **Autorisé:** fade+translate au scroll (Framer Motion), slideUp popup, hover translateY(-2px) sur boutons, blink badge dot

## 3 Piliers — Structure de contenu
1. **Sites web sur mesure** — vitrine, e-commerce, landing, refonte, SEO technique inclus
2. **Référencement local & GMB** — fiche Google My Business, citations locales, gestion avis, suivi positions
3. **Outils métier sur mesure** — CRM clients, calculateur de marges/devis, réservation en ligne, portail client, gestion de stock, dashboard analytique métier

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-12 | Fraunces comme display font | Mémorable, personne d'autre dans la catégorie agences web FR n'utilise un serif — différenciation immédiate |
| 2026-04-12 | Gradient violet→bleu conservé mais limité | Couleur brand existante, valeur de reconnaissance. Limité aux CTA + hero em pour éviter le pattern "gradient partout" |
| 2026-04-12 | 3 piliers au lieu de liste de services | Structure plus claire pour TPE/PME — 3 expertises distinctes, 1 seul partenaire |
| 2026-04-12 | Popup "Être recontacté" unique | 1 seul CTA sur toute la landing = zéro friction, zéro confusion sur quoi faire |
| 2026-04-12 | Budget 3 options (1k-5k / +5k / pas de budget) | Qualifier sans intimider — pas de seuil bas qui dévalue, pas de budget obligatoire |
| 2026-04-12 | Mobile-first strict | Cible TPE/PME consulte majoritairement sur mobile. Base = 390px, desktop en override |
| 2026-04-12 | Zéro tarifs sur la landing | Positionnement partenaire, pas prestataire prix. La conversation commence au rappel |
