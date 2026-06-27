import '@/app/globals.css';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import Ambiance from '@/components/ui/Ambiance';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Next Level | Votre site en 7 jours, pas en 3 mois',
  description: 'Agence web française. Sites haute-conversion, SEO local et outils métier sur mesure, livrés en 7 jours. Audit honnête et gratuit.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${plusJakartaSans.variable} scroll-smooth h-full`} suppressHydrationWarning>
      <body className="bg-night text-cream min-h-full font-body antialiased m-0 p-0">
        <Ambiance />
        {children}
      </body>
    </html>
  );
}
