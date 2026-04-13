import { useCallback, useEffect, useState } from 'react';

export function useConfetti() {
    const [confetti, setConfetti] = useState<typeof import('canvas-confetti').default | null>(null);

    useEffect(() => {
        // Charger canvas-confetti uniquement côté client
        import('canvas-confetti').then((module) => {
            setConfetti(() => module.default);
        });
    }, []);

    const fireConfetti = useCallback(() => {
        if (!confetti) return;

        const duration = 2000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval: NodeJS.Timeout = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            
            // Confettis depuis la gauche
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#7B2FF2', '#0066FF', '#00A3FF', '#FFFFFF']
            });
            
            // Confettis depuis la droite
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#7B2FF2', '#0066FF', '#00A3FF', '#FFFFFF']
            });
        }, 250);
    }, [confetti]);

    return { fireConfetti };
}
