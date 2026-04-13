import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const phoneNumber = "+33626834020";
    const whatsappMessage = encodeURIComponent("Bonjour, j'ai une question !");
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${whatsappMessage}`;

    return (
        <footer className="bg-[#1A1A2E] text-white py-16">
            <div className="container mx-auto px-5">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="block mb-4">
                            <Image
                                src="/logos/next-level-logo.svg"
                                alt="Next Level"
                                width={200}
                                height={40}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Nous transformons votre expertise en présence digitale performante. Sites web, applications sur mesure et visibilité locale pour générer des clients qualifiés.
                        </p>
                        <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#20BA5A] transition-colors"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Discuter sur WhatsApp
                        </a>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4 text-sm">Services</h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li><Link href="#sites" className="hover:text-white transition-colors flex items-center gap-1">Sites Web <ArrowUpRight className="w-3 h-3" /></Link></li>
                            <li><Link href="#apps" className="hover:text-white transition-colors flex items-center gap-1">Applications <ArrowUpRight className="w-3 h-3" /></Link></li>
                            <li><Link href="#gmb" className="hover:text-white transition-colors flex items-center gap-1">Google My Business <ArrowUpRight className="w-3 h-3" /></Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4 text-sm">Agence</h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li><Link href="#portfolio" className="hover:text-white transition-colors">Témoignages</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4 text-sm">Légal</h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link></li>
                            <li><Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link></li>
                            <li><Link href="/cgv" className="hover:text-white transition-colors">CGV</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center">
                    <p className="text-slate-500 text-sm">&copy; 2026 Next Level. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
