"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function Navigation() {
    return (
        <nav className="w-full bg-transparent relative z-50">
            {/* Mobile */}
            <div className="lg:hidden container mx-auto px-5 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logos/next-level-logo.png"
                        alt="Next Level"
                        width={300}
                        height={80}
                        className="h-20 w-auto"
                        priority
                    />
                </Link>
                <CTAButton
                    href="#contact"
                    className="group px-4 py-2 bg-gradient-brand text-white font-semibold text-xs rounded-full hover:shadow-brand transition-all duration-300 flex items-center gap-1.5"
                >
                    Nous contacter
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </CTAButton>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block relative container mx-auto px-5 py-4">
                <div className="flex justify-center items-center">
                    <Link href="/">
                        <Image
                            src="/logos/next-level-logo.png"
                            alt="Next Level"
                            width={900}
                            height={120}
                            className="h-44 w-auto"
                            priority
                        />
                    </Link>
                </div>
                <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    <CTAButton
                        href="#contact"
                        className="group px-5 py-2.5 bg-gradient-brand text-white font-semibold text-sm rounded-full hover:shadow-brand transition-all duration-300 flex items-center gap-2"
                    >
                        Discutons de votre projet
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </CTAButton>
                </div>
            </div>
        </nav>
    );
}
