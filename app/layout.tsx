import '@/app/globals.css';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Next Level | Agence Web qui Convertit - Sites & Apps Sur Mesure',
  description: 'Agence web spécialisée en sites haute-conversion, applications sur mesure et référencement local. Transformez vos visiteurs en clients.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-white text-[#1A1A2E] min-h-screen font-body antialiased">
        {children}
      </body>
    </html>
  );
}
