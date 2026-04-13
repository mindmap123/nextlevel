// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";

export default function CodeReveal() {
    const initRef = useRef(false);

    useEffect(() => {
        if (initRef.current) return;
        initRef.current = true;

        // Charger Three.js
        const loadThreeJS = () => {
            return new Promise((resolve) => {
                if ((window as any).THREE) {
                    resolve(true);
                    return;
                }
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
                script.onload = () => resolve(true);
                document.head.appendChild(script);
            });
        };

        const init = async () => {
            await loadThreeJS();
            setTimeout(() => {
                initCardStream();
                initParticleScanner();
                initThreeParticles();
            }, 300);
        };

        init();
    }, []);

    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display uppercase">
                    LE CODE CACHÉ DE LA <span className="text-[#BFF549]">PERFORMANCE</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Nous ne concevons pas au hasard. Nous ingénions chaque pixel pour la conversion.
                </p>
            </div>

            <div className="relative w-full h-[300px] flex items-center justify-center">
                <canvas 
                    id="particleCanvas"
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[250px] z-0 pointer-events-none"
                />
                <canvas 
                    id="scannerCanvas"
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[300px] z-[15] pointer-events-none"
                />
                <div 
                    id="cardStream"
                    className="absolute w-full h-[180px] flex items-center overflow-visible"
                >
                    <div 
                        id="cardLine"
                        className="flex items-center gap-[60px] whitespace-nowrap cursor-grab select-none"
                    />
                </div>
            </div>

            <style jsx>{`
                #cardLine:active {
                    cursor: grabbing;
                }
                #cardLine.dragging {
                    cursor: grabbing;
                }
            `}</style>
        </section>
    );
}

// ============================================
// CARD STREAM CONTROLLER
// ============================================
function initCardStream() {
    const container = document.getElementById("cardStream");
    const cardLine = document.getElementById("cardLine");
    if (!container || !cardLine) return;

    let position = 0;
    let velocity = 120;
    let direction = -1;
    let isAnimating = true;
    let isDragging = false;
    let lastTime = 0;
    let lastMouseX = 0;
    let mouseVelocity = 0;
    const friction = 0.95;
    const minVelocity = 30;

    const cardImages = [
        "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b55e654d1341fb06f8_4.1.png",
        "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5a080a31ee7154b19_1.png",
        "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5c1e4919fd69672b8_3.png",
        "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5f6a5e232e7beb4be_2.png",
        "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5bea2f1b07392d936_4.png",
    ];

    // Générer le code ASCII
    function generateCode(width: number, height: number) {
        const lines = [
            "// compiled preview • scanner demo",
            "/* generated for visual effect – not executed */",
            "const SCAN_WIDTH = 8;",
            "const FADE_ZONE = 35;",
            "const MAX_PARTICLES = 2500;",
            "function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }",
            "function lerp(a, b, t) { return a + (b - a) * t; }",
            "class Particle {",
            "  constructor(x, y, vx, vy, r, a) {",
            "    this.x = x; this.y = y;",
            "    this.vx = vx; this.vy = vy;",
            "    this.r = r; this.a = a;",
            "  }",
            "  step(dt) { this.x += this.vx * dt; this.y += this.vy * dt; }",
            "}",
            "const scanner = {",
            "  x: Math.floor(window.innerWidth / 2),",
            "  width: SCAN_WIDTH,",
            "  glow: 3.5,",
            "};",
        ];

        let code = "";
        for (let i = 0; i < height; i++) {
            let line = lines[i % lines.length];
            if (line.length < width) {
                line = line + " ".repeat(width - line.length);
            } else if (line.length > width) {
                line = line.substring(0, width);
            }
            code += line + (i < height - 1 ? "\n" : "");
        }
        return code;
    }

    // Créer les cartes
    const cardsCount = 30;
    for (let i = 0; i < cardsCount; i++) {
        const wrapper = document.createElement("div");
        wrapper.className = "card-wrapper";
        wrapper.style.cssText = "position: relative; width: 400px; height: 250px; flex-shrink: 0;";

        const normalCard = document.createElement("div");
        normalCard.className = "card-normal";
        normalCard.style.cssText = `
            position: absolute; top: 0; left: 0; width: 400px; height: 250px;
            border-radius: 15px; overflow: hidden; background: transparent;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4); z-index: 2;
            clip-path: inset(0 0 0 var(--clip-right, 0%));
        `;

        const cardImage = document.createElement("img");
        cardImage.style.cssText = `
            width: 100%; height: 100%; object-fit: cover; border-radius: 15px;
            filter: brightness(1.1) contrast(1.1);
        `;
        cardImage.src = cardImages[i % cardImages.length];
        normalCard.appendChild(cardImage);

        const asciiCard = document.createElement("div");
        asciiCard.className = "card-ascii";
        asciiCard.style.cssText = `
            position: absolute; top: 0; left: 0; width: 400px; height: 250px;
            border-radius: 15px; overflow: hidden; z-index: 1;
            clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0);
        `;

        const asciiContent = document.createElement("div");
        asciiContent.style.cssText = `
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            color: rgba(220, 210, 255, 0.6); font-family: 'Courier New', monospace;
            font-size: 11px; line-height: 13px; overflow: hidden; white-space: pre;
            -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.2) 100%);
            mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.2) 100%);
        `;
        asciiContent.textContent = generateCode(67, 19);
        asciiCard.appendChild(asciiContent);

        wrapper.appendChild(normalCard);
        wrapper.appendChild(asciiCard);
        cardLine.appendChild(wrapper);
    }

    // Gestion du clipping
    function updateCardClipping() {
        const scannerX = window.innerWidth / 2;
        const scannerWidth = 8;
        const scannerLeft = scannerX - scannerWidth / 2;
        const scannerRight = scannerX + scannerWidth / 2;
        let anyScanningActive = false;

        document.querySelectorAll(".card-wrapper").forEach((wrapper) => {
            const rect = wrapper.getBoundingClientRect();
            const cardLeft = rect.left;
            const cardRight = rect.right;
            const cardWidth = rect.width;

            const normalCard = wrapper.querySelector(".card-normal") as HTMLElement;
            const asciiCard = wrapper.querySelector(".card-ascii") as HTMLElement;

            if (cardLeft < scannerRight && cardRight > scannerLeft) {
                anyScanningActive = true;
                const scannerIntersectLeft = Math.max(scannerLeft - cardLeft, 0);
                const scannerIntersectRight = Math.min(scannerRight - cardLeft, cardWidth);
                const normalClipRight = (scannerIntersectLeft / cardWidth) * 100;
                const asciiClipLeft = (scannerIntersectRight / cardWidth) * 100;
                normalCard.style.setProperty("--clip-right", `${normalClipRight}%`);
                asciiCard.style.setProperty("--clip-left", `${asciiClipLeft}%`);
            } else {
                if (cardRight < scannerLeft) {
                    normalCard.style.setProperty("--clip-right", "100%");
                    asciiCard.style.setProperty("--clip-left", "100%");
                } else if (cardLeft > scannerRight) {
                    normalCard.style.setProperty("--clip-right", "0%");
                    asciiCard.style.setProperty("--clip-left", "0%");
                }
            }
        });

        if ((window as any).setScannerScanning) {
            (window as any).setScannerScanning(anyScanningActive);
        }
    }

    // Events
    function startDrag(e: MouseEvent | Touch) {
        isDragging = true;
        isAnimating = false;
        lastMouseX = e.clientX;
        mouseVelocity = 0;
        const transform = window.getComputedStyle(cardLine as Element).transform;
        if (transform !== "none") {
            const matrix = new DOMMatrix(transform);
            position = matrix.m41;
        }
        cardLine.classList.add("dragging");
        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";
    }

    function onDrag(e: MouseEvent | Touch) {
        if (!isDragging) return;
        const deltaX = e.clientX - lastMouseX;
        position += deltaX;
        mouseVelocity = deltaX * 60;
        lastMouseX = e.clientX;
        cardLine.style.transform = `translateX(${position}px)`;
        updateCardClipping();
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        cardLine.classList.remove("dragging");
        if (Math.abs(mouseVelocity) > minVelocity) {
            velocity = Math.abs(mouseVelocity);
            direction = mouseVelocity > 0 ? 1 : -1;
        } else {
            velocity = 120;
        }
        isAnimating = true;
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
    }

    cardLine.addEventListener("mousedown", (e) => {
        e.preventDefault();
        startDrag(e);
    });
    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            e.preventDefault();
            onDrag(e);
        }
    });
    document.addEventListener("mouseup", () => endDrag());
    
    cardLine.addEventListener("touchstart", (e) => { 
        e.preventDefault(); 
        startDrag(e.touches[0]); 
    }, { passive: false });
    
    document.addEventListener("touchmove", (e) => { 
        if (isDragging) {
            e.preventDefault();
            onDrag(e.touches[0]); 
        }
    }, { passive: false });
    
    document.addEventListener("touchend", () => endDrag());

    // Animation
    function animate() {
        const currentTime = performance.now();
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        if (isAnimating && !isDragging) {
            if (velocity > minVelocity) {
                velocity *= friction;
            } else {
                velocity = Math.max(minVelocity, velocity);
            }
            position += velocity * direction * deltaTime;
            const containerWidth = container.offsetWidth;
            const cardLineWidth = (400 + 60) * cardsCount;
            if (position < -cardLineWidth) {
                position = containerWidth;
            } else if (position > containerWidth) {
                position = -cardLineWidth;
            }
            cardLine.style.transform = `translateX(${position}px)`;
            updateCardClipping();
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ============================================
// PARTICLE SCANNER
// ============================================
function initParticleScanner() {
    const canvas = document.getElementById("scannerCanvas") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = window.innerWidth;
    const h = 300;
    canvas.width = w;
    canvas.height = h;

    const lightBarX = w / 2;
    const lightBarWidth = 3;
    const fadeZone = 60;
    let scanningActive = false;
    let currentGlowIntensity = 1;
    const transitionSpeed = 0.05;

    const particles: any[] = [];
    let count = 0;
    let maxParticles = 800;
    let intensity = 0.8;
    const baseIntensity = 0.8;
    const baseMaxParticles = 800;
    const scanTargetIntensity = 1.8;
    const scanTargetParticles = 2500;
    let currentIntensity = intensity;
    let currentMaxParticles = maxParticles;

    // Gradient cache
    const gradientCanvas = document.createElement("canvas");
    const gradientCtx = gradientCanvas.getContext("2d");
    gradientCanvas.width = 16;
    gradientCanvas.height = 16;
    if (gradientCtx) {
        const half = 8;
        const gradient = gradientCtx.createRadialGradient(half, half, 0, half, half, half);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(196, 181, 253, 0.8)");
        gradient.addColorStop(0.7, "rgba(139, 92, 246, 0.4)");
        gradient.addColorStop(1, "transparent");
        gradientCtx.fillStyle = gradient;
        gradientCtx.beginPath();
        gradientCtx.arc(half, half, half, 0, Math.PI * 2);
        gradientCtx.fill();
    }

    (window as any).setScannerScanning = (active: boolean) => {
        scanningActive = active;
    };

    function randomFloat(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    function createParticle() {
        const intensityRatio = intensity / baseIntensity;
        const speedMultiplier = 1 + (intensityRatio - 1) * 1.2;
        const sizeMultiplier = 1 + (intensityRatio - 1) * 0.7;

        return {
            x: lightBarX + randomFloat(-lightBarWidth / 2, lightBarWidth / 2),
            y: randomFloat(0, h),
            vx: randomFloat(0.2, 1.0) * speedMultiplier,
            vy: randomFloat(-0.15, 0.15) * speedMultiplier,
            radius: randomFloat(0.4, 1) * sizeMultiplier,
            alpha: randomFloat(0.6, 1),
            decay: randomFloat(0.005, 0.025) * (2 - intensityRatio * 0.5),
            originalAlpha: 0,
            life: 1.0,
            time: 0,
            twinkleSpeed: randomFloat(0.02, 0.08) * speedMultiplier,
            twinkleAmount: randomFloat(0.1, 0.25),
        };
    }

    function updateParticle(particle: any) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.time++;
        particle.alpha = particle.originalAlpha * particle.life + Math.sin(particle.time * particle.twinkleSpeed) * particle.twinkleAmount;
        particle.life -= particle.decay;

        if (particle.x > w + 10 || particle.life <= 0) {
            particle.x = lightBarX + randomFloat(-lightBarWidth / 2, lightBarWidth / 2);
            particle.y = randomFloat(0, h);
            particle.vx = randomFloat(0.2, 1.0);
            particle.vy = randomFloat(-0.15, 0.15);
            particle.alpha = randomFloat(0.6, 1);
            particle.originalAlpha = particle.alpha;
            particle.life = 1.0;
            particle.time = 0;
        }
    }

    function drawParticle(particle: any) {
        if (particle.life <= 0) return;
        let fadeAlpha = 1;
        if (particle.y < fadeZone) {
            fadeAlpha = particle.y / fadeZone;
        } else if (particle.y > h - fadeZone) {
            fadeAlpha = (h - particle.y) / fadeZone;
        }
        fadeAlpha = Math.max(0, Math.min(1, fadeAlpha));
        ctx.globalAlpha = particle.alpha * fadeAlpha;
        ctx.drawImage(gradientCanvas, particle.x - particle.radius, particle.y - particle.radius, particle.radius * 2, particle.radius * 2);
    }

    function drawLightBar() {
        const targetGlowIntensity = scanningActive ? 3.5 : 1;
        currentGlowIntensity += (targetGlowIntensity - currentGlowIntensity) * transitionSpeed;
        const glowIntensity = currentGlowIntensity;

        ctx.globalCompositeOperation = "lighter";

        const coreGradient = ctx.createLinearGradient(lightBarX - lightBarWidth / 2, 0, lightBarX + lightBarWidth / 2, 0);
        coreGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        coreGradient.addColorStop(0.5, `rgba(255, 255, 255, ${1 * glowIntensity})`);
        coreGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.globalAlpha = 1;
        ctx.fillStyle = coreGradient;
        ctx.fillRect(lightBarX - lightBarWidth / 2, 0, lightBarWidth, h);

        const glow1Gradient = ctx.createLinearGradient(lightBarX - lightBarWidth * 2, 0, lightBarX + lightBarWidth * 2, 0);
        glow1Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
        glow1Gradient.addColorStop(0.5, `rgba(196, 181, 253, ${0.8 * glowIntensity})`);
        glow1Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
        ctx.globalAlpha = scanningActive ? 1.0 : 0.8;
        ctx.fillStyle = glow1Gradient;
        ctx.fillRect(lightBarX - lightBarWidth * 2, 0, lightBarWidth * 4, h);

        if (scanningActive) {
            const glow2Gradient = ctx.createLinearGradient(lightBarX - lightBarWidth * 4, 0, lightBarX + lightBarWidth * 4, 0);
            glow2Gradient.addColorStop(0, "rgba(139, 92, 246, 0)");
            glow2Gradient.addColorStop(0.5, `rgba(139, 92, 246, ${0.4 * glowIntensity})`);
            glow2Gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
            ctx.globalAlpha = 0.6;
            ctx.fillStyle = glow2Gradient;
            ctx.fillRect(lightBarX - lightBarWidth * 4, 0, lightBarWidth * 8, h);
        }
    }

    function render() {
        const targetIntensity = scanningActive ? scanTargetIntensity : baseIntensity;
        const targetMaxParticles = scanningActive ? scanTargetParticles : baseMaxParticles;

        currentIntensity += (targetIntensity - currentIntensity) * transitionSpeed;
        currentMaxParticles += (targetMaxParticles - currentMaxParticles) * transitionSpeed;

        intensity = currentIntensity;
        maxParticles = Math.floor(currentMaxParticles);

        ctx.clearRect(0, 0, w, h);
        drawLightBar();
        ctx.globalCompositeOperation = "lighter";

        for (let i = 1; i <= count; i++) {
            if (particles[i]) {
                updateParticle(particles[i]);
                drawParticle(particles[i]);
            }
        }

        if (Math.random() < intensity && count < maxParticles) {
            const particle = createParticle();
            particle.originalAlpha = particle.alpha;
            count++;
            particles[count] = particle;
        }

        const intensityRatio = intensity / baseIntensity;
        if (intensityRatio > 1.1 && Math.random() < (intensityRatio - 1.0) * 1.2 && count < maxParticles) {
            const particle = createParticle();
            particle.originalAlpha = particle.alpha;
            count++;
            particles[count] = particle;
        }

        requestAnimationFrame(render);
    }

    for (let i = 0; i < maxParticles; i++) {
        const particle = createParticle();
        particle.originalAlpha = particle.alpha;
        count++;
        particles[count] = particle;
    }

    render();
}

// ============================================
// THREE.JS PARTICLES
// ============================================
function initThreeParticles() {
    const canvas = document.getElementById("particleCanvas") as HTMLCanvasElement;
    if (!canvas || !(window as any).THREE) return;

    const THREE = (window as any).THREE;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, 125, -125, 1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 250);
    renderer.setClearColor(0x000000, 0);

    const particleCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount);

    const particleCanvas = document.createElement("canvas");
    particleCanvas.width = 100;
    particleCanvas.height = 100;
    const particleCtx = particleCanvas.getContext("2d");
    if (particleCtx) {
        const half = 50;
        const gradient = particleCtx.createRadialGradient(half, half, 0, half, half, half);
        gradient.addColorStop(0.025, "#fff");
        gradient.addColorStop(0.1, "hsl(217, 61%, 33%)");
        gradient.addColorStop(0.25, "hsl(217, 64%, 6%)");
        gradient.addColorStop(1, "transparent");
        particleCtx.fillStyle = gradient;
        particleCtx.beginPath();
        particleCtx.arc(half, half, half, 0, Math.PI * 2);
        particleCtx.fill();
    }
    const texture = new THREE.CanvasTexture(particleCanvas);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * window.innerWidth * 2;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
        positions[i * 3 + 2] = 0;
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
        const orbitRadius = Math.random() * 200 + 100;
        sizes[i] = (Math.random() * (orbitRadius - 60) + 60) / 8;
        velocities[i] = Math.random() * 60 + 30;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const alphas = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
        alphas[i] = (Math.random() * 8 + 2) / 10;
    }
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));

    const material = new THREE.ShaderMaterial({
        uniforms: { pointTexture: { value: texture }, size: { value: 15.0 } },
        vertexShader: `
            attribute float alpha;
            varying float vAlpha;
            varying vec3 vColor;
            uniform float size;
            void main() {
                vAlpha = alpha;
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size;
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform sampler2D pointTexture;
            varying float vAlpha;
            varying vec3 vColor;
            void main() {
                gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        vertexColors: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    function animate() {
        const positions = particles.geometry.attributes.position.array as Float32Array;
        const alphas = particles.geometry.attributes.alpha.array as Float32Array;
        const time = Date.now() * 0.001;

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] += velocities[i] * 0.016;
            if (positions[i * 3] > window.innerWidth / 2 + 100) {
                positions[i * 3] = -window.innerWidth / 2 - 100;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
            }
            positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.5;
            const twinkle = Math.floor(Math.random() * 10);
            if (twinkle === 1 && alphas[i] > 0) {
                alphas[i] -= 0.05;
            } else if (twinkle === 2 && alphas[i] < 1) {
                alphas[i] += 0.05;
            }
            alphas[i] = Math.max(0, Math.min(1, alphas[i]));
        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.alpha.needsUpdate = true;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();
}
