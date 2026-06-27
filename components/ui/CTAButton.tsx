"use client";

import { useState, useCallback, useRef } from 'react';
import { useConfetti } from '@/lib/useConfetti';

interface CTAButtonProps {
    onClick?: () => void;
    href?: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit';
    target?: string;
    rel?: string;
}

export default function CTAButton({
    onClick,
    href,
    children,
    className = '',
    disabled = false,
    type = 'button',
    target,
    rel
}: CTAButtonProps) {
    const { fireConfetti } = useConfetti();
    const [isClicked, setIsClicked] = useState(false);
    const elRef = useRef<HTMLElement>(null);

    const handleMove = useCallback((e: React.MouseEvent) => {
        const el = elRef.current;
        if (!el) return;
        if (window.matchMedia("(pointer: coarse)").matches) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        const clamp = (v: number, max: number) => Math.max(-max, Math.min(max, v));
        const tx = clamp(x * 0.1, 7);
        const ty = clamp(y * 0.14, 7);
        el.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
    }, []);

    const handleLeave = useCallback(() => {
        const el = elRef.current;
        if (el) el.style.transform = "";
    }, []);

    const handleClick = useCallback((e: React.MouseEvent) => {
        if (disabled || isClicked) return;

        // Toujours empêcher le comportement par défaut pour ajouter le délai
        e.preventDefault();

        setIsClicked(true);
        fireConfetti();

        // Délai avant d'exécuter l'action
        setTimeout(() => {
            if (onClick) {
                onClick();
            } else if (href) {
                if (target === '_blank') {
                    window.open(href, '_blank', rel);
                } else {
                    window.location.href = href;
                }
            }
            setIsClicked(false);
        }, 600);
    }, [disabled, isClicked, fireConfetti, onClick, href, target, rel]);

    const baseClassName = `cta-magnetic ${className} ${isClicked ? 'pointer-events-none' : ''}`;

    if (href) {
        return (
            <a
                ref={elRef as React.RefObject<HTMLAnchorElement>}
                href={href}
                onClick={handleClick}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className={baseClassName}
                target={target}
                rel={rel}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            ref={elRef as React.RefObject<HTMLButtonElement>}
            type={type}
            onClick={handleClick}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            disabled={disabled}
            className={baseClassName}
        >
            {children}
        </button>
    );
}
