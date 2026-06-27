# Design System — Next Level

> Refonte « Dark Growth » (mai 2026). Structure inspirée de growthopportunity.fr,
> base sombre quasi-noir, accent orange brûlé signature Next Level.

## Product Context
- **What this is:** Landing page d'une agence web française. 4 piliers : sites web, SEO local/GMB, outils métier sur mesure, agent vocal IA.
- **Who it's for:** TPE, artisans, professions libérales, PME locales, e-commerce.
- **Project type:** Landing marketing — conversion-focused, mobile-first.

## Aesthetic Direction
- **Direction:** Dark Growth. Fond quasi-noir premium, grosse typo grotesque, un seul accent chaud. Inspiration structurelle : agences growth (GO).
- **Decoration level:** Minimal. Filets fins (`.rule`), grilles bordées, zéro gradient, zéro ombre. Accent rare = impact.
- **Mood:** Premium, direct, « on accélère votre croissance ». Sérieux mais accessible TPE.
- **Key rule:** L'accent orange est réservé aux CTA, chiffres-clés et mots-emphase des titres. Jamais en fond.
- **Signature visuelle :** labels de section entre parenthèses `(Services)`, `(Équipe)`… + filet accent. Wordmark géant en footer.

## Structure (ordre des sections — inspirée GO)
Base sombre, fonds **clairs de temps en temps** (Process, Avis, Contact) pour casser
la monotonie. Bande CTA accent au milieu.

1. **Hero** (sombre) — centré : ★★★★★ + preuve sociale au-dessus du titre, headline mots-accent, CTA unique, chips, logo strip + intro.
2. **(Pour qui)** (sombre) — cible + 4 value props en questions (« Vous voulez… ? » → réponse).
3. **(Services)** (sombre) — 4 lignes numérotées 01-04, tag Best-seller, desc + CTA + livrables cochés.
4. **Bande CTA** (accent orange) — stats animées (CountUp) + « Réserver mon audit ». Levier conversion mi-page.
5. **(Agent vocal IA)** (sombre) — VoiceCaptur : pipeline 3 étapes (appel → décroche → RDV) + avant/après (Sans agent/Avec), mockup d'appel animé + carte résultat « RDV pris », compteurs, voix, CTA démo → voicecaptur.vercel.app.
6. **(Référencement local)** (sombre) — Next Level GMB : mockup Google Maps « Pack 3 » (carte blanche, vous #1 avec pin pulsant + avis + boutons appeler/itinéraire), avant/après #12→#1, leviers, CTA audit GMB → nextlevel-gmb.vercel.app.
7. **(Process)** (CLAIR) — timeline 7 jours, J1 → J+7.
6. **(Réalisations)** (sombre) — études de cas larges alternées + métrique géante (vidéos).
7. **(Valeurs)** (sombre) — liste numérotée 01-05.
8. **(Avis)** (CLAIR) — mur de témoignages, étoiles + métrique géante.
9. **(FAQ)** (sombre) — accordéon, 1re question = prix.
10. **Contact** (CLAIR) — bloc CTA géant « Obtenez votre audit gratuit » + rangée garanties (7j · sans engagement · paiement 3x · suivi 3 mois).
11. **Footer** (sombre) — wordmark géant `Next.Level` + colonnes nav/contact/légal.

> Section Équipe retirée. Fonds clairs : `bone` / `bone-2` / `bone-card` + texte `ink`.

## Typography
- **Display:** Bricolage Grotesque — H1/H2, titres, chiffres. Tracking serré négatif.
  - Hero : clamp(40px, 7.5vw, 92px) / weight 700 / -0.04em / line-height 0.98
  - H2 : clamp(40 → 64px) / -0.04em
  - Wordmark footer : clamp(56px, 16vw, 220px)
  - Emphase : mot en `text-accent`, jamais en gradient
- **Body:** Plus Jakarta Sans — 15-19px / line-height 1.6-1.7. Labels uppercase 11-12px / 0.14em.
- **Loading:** next/font/google — `Bricolage_Grotesque` (400/600/700/800) + `Plus_Jakarta_Sans`.

## Color (source globals.css @theme)
- **Night:** `#0E0F0B` — fond principal
- **Coal:** `#15160F` — sections alternées
- **Card:** `#1B1C14` — surfaces / cartes / modal
- **Cream:** `#F4F2EA` — texte principal
- **Ash:** `#A8A59B` — sous-titres
- **Ash Dim:** `#6E6B61` — labels, métadonnées
- **Accent:** `#FF4D17` — orange brûlé, accent unique
- **Accent Dark:** `#DB3D0C` — hover
- **Line:** `rgba(244,242,234,0.12)` (`.rule`) / strong `0.22` (`.rule-strong`)

> Pas de mode clair. Wordmark logo forcé en `.wordmark-cream` (blanc) sur fond sombre.

## Spacing
- Base 4px. Sections `py-20 md:py-28`. Max width 1280px. Scale 4·8·12·16·20·24·32·40·48·64·80·96·112.

## Conversion
- **CTA unique répété :** « Réserver mon audit » / « Audit gratuit » → même popup. Nav = CTA crème (inversé).
- **Sticky bottom CTA mobile** : surface card + bouton accent.
- **Popup** : bottom sheet mobile / modal desktop, surface `card`, champs sur `night`, accent sur focus.
- **Preuve** : ★ + « +30 projets livrés » en hero ; métriques géantes en réalisations/avis ; prix en FAQ.

## Motion
- Word-reveal hero (settle < 1.6s), fade+translate au scroll (`whileInView`, `once`), marquee logos, soulignés `.link-underline`, hover accent.
- **Compteurs animés** : `components/ui/CountUp.tsx` (rAF, easing cubic, déclenché in-view) — bande CTA + section agent vocal.
- **Animations média** (globals.css) : `.wave-bar` (waveform audio), `.pulse-ring` (appel entrant / pin Maps), `.animate-floaty` (cartes mockup), `.animate-blink` (point statut).
- **Vague signature** : `components/ui/WaveDivider.tsx` (SVG sinusoïdal 2 couches, `.wave-flow-slow/fast` translateX en boucle) — bas du Hero + haut du Footer, reprend la « vague » du site original.
- Duration micro 150 / short 200 / medium 280ms. `prefers-reduced-motion` : toutes les animations coupées (marquee, wave, pulse, floaty, blink, CountUp → valeur finale directe).

## Interactions signature (juin 2026 — « fun qui convertit »)
> Palette + logo inchangés. On garde le Dark Growth, on ajoute de la vie réactive au curseur.
- **CTA magnétique** (`components/ui/CTAButton.tsx`, `.cta-magnetic`) : le bouton suit légèrement le curseur (translate max ~ qq px) + `drop-shadow` accent au hover. Confetti déjà au clic. Désactivé `pointer:coarse` / `reduced-motion`.
- **Hero parallax** (`Hero.tsx`, `.hero-parallax`) : auroras + shader dérivent vers le curseur (translate ±~30px, transition 0.5s). Shader hero remonté à opacity 0.72. Desktop only.
- **Cartes Réalisations tilt 3D** (`Realisations.tsx`, `.tilt-card` + `.tilt-sheen`) : rotateX/Y au survol (perspective 900px), zoom média 1.04, sheen radial accent suivant le curseur, ombre portée. Désactivé `pointer:coarse`.
- **Lignes Services vivantes** (`ServicesOfferts.tsx`) : barre accent verticale qui scale-in au hover, numéro agrandi → accent, titre qui glisse, fond `card/40`.
- **Barre de progression scroll** (`Ambiance.tsx`, `.scroll-progress`) : filet accent fixe en haut, `scaleX` = ratio de scroll. z-70.
- Toutes ces interactions respectent `prefers-reduced-motion` (neutralisées) et `pointer:coarse` (pas de suivi curseur).
