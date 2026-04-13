"use client";

import { useState, useCallback } from 'react';
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

    const baseClassName = `${className} ${isClicked ? 'pointer-events-none' : ''}`;

    if (href) {
        return (
            <a
                href={href}
                onClick={handleClick}
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
            type={type}
            onClick={handleClick}
            disabled={disabled}
            className={baseClassName}
        >
            {children}
        </button>
    );
}
