// Gallery Light Lines Generator with GSAP - Updated Version
document.addEventListener('DOMContentLoaded', function() {
    const lightingToggle = document.getElementById('lightingToggle');
    const lightBg = document.getElementById('lightBg');
    const lightCanvas = document.getElementById('lightCanvas');

    // Check if elements exist
    if (!lightingToggle || !lightBg || !lightCanvas) {
        console.warn('Gallery lighting elements not found');
        return;
    }

    // Initialize GSAP
    gsap.registerPlugin();

    // Updated Configuration - More elements for luxury feel
    const config = {
        horizontalLines: 16,
        verticalLines: 12,
        diagonalLines: 10,
        shadows: 20,
        intersections: 28,
        ambientGlows: 8,
        luxuryDots: 35,      // New: Subtle luxury dots
        shimmerParticles: 15  // New: Shimmer particles
    };

    let timeline = gsap.timeline({ paused: true });
    let continuousAnimations = []; // Track continuous animations
    let isLightingActive = true;

    // Generate light lines and shadows
    function createLightElements() {
        // Clear existing elements
        lightCanvas.innerHTML = '';

        // Stop any existing continuous animations
        continuousAnimations.forEach(anim => anim.kill());
        continuousAnimations = [];

        const elements = [];

        // Create horizontal light lines
        for (let i = 0; i < config.horizontalLines; i++) {
            const line = document.createElement('div');
            line.className = 'light-line horizontal';

            const topPosition = Math.random() * 100;
            const leftPosition = Math.random() * 20;
            const lineWidth = 25 + Math.random() * 60; // 25-85% width

            line.style.top = `${topPosition}%`;
            line.style.left = `${leftPosition}%`;
            line.style.maxWidth = `${lineWidth}%`;

            lightCanvas.appendChild(line);
            elements.push({ element: line, type: 'horizontal', delay: i * 0.08 });
        }

        // Create vertical light lines
        for (let i = 0; i < config.verticalLines; i++) {
            const line = document.createElement('div');
            line.className = 'light-line vertical';

            const leftPosition = Math.random() * 100;
            const topPosition = Math.random() * 20;
            const lineHeight = 20 + Math.random() * 50; // 20-70% height

            line.style.left = `${leftPosition}%`;
            line.style.top = `${topPosition}%`;
            line.style.maxHeight = `${lineHeight}%`;

            lightCanvas.appendChild(line);
            elements.push({ element: line, type: 'vertical', delay: i * 0.12 });
        }

        // Create diagonal light lines
        for (let i = 0; i < config.diagonalLines; i++) {
            const line = document.createElement('div');
            line.className = 'light-line diagonal';

            const topPosition = Math.random() * 100;
            const leftPosition = Math.random() * 100;
            const lineWidth = 15 + Math.random() * 45;
            const rotation = (Math.random() - 0.5) * 80; // -40 to 40 degrees

            line.style.top = `${topPosition}%`;
            line.style.left = `${leftPosition}%`;
            line.style.maxWidth = `${lineWidth}%`;
            line.style.transform = `rotate(${rotation}deg)`;

            lightCanvas.appendChild(line);
            elements.push({ element: line, type: 'diagonal', delay: i * 0.15 });
        }

        // Create shadow elements
        for (let i = 0; i < config.shadows; i++) {
            const shadow = document.createElement('div');
            shadow.className = 'shadow-element';

            const topPosition = Math.random() * 100;
            const leftPosition = Math.random() * 100;
            const size = 30 + Math.random() * 140; // 30-170px

            shadow.style.top = `${topPosition}%`;
            shadow.style.left = `${leftPosition}%`;
            shadow.style.width = `${size}px`;
            shadow.style.height = `${size * 0.7}px`; // Elliptical shadows
            shadow.style.transform = `rotate(${Math.random() * 360}deg)`;

            lightCanvas.appendChild(shadow);
            elements.push({ element: shadow, type: 'shadow', delay: i * 0.04 });
        }

        // Create light intersections
        for (let i = 0; i < config.intersections; i++) {
            const intersection = document.createElement('div');
            intersection.className = 'light-intersection';

            const topPosition = Math.random() * 100;
            const leftPosition = Math.random() * 100;

            intersection.style.top = `${topPosition}%`;
            intersection.style.left = `${leftPosition}%`;

            lightCanvas.appendChild(intersection);
            elements.push({ element: intersection, type: 'intersection', delay: i * 0.06 });
        }

        // Create ambient glows
        for (let i = 0; i < config.ambientGlows; i++) {
            const glow = document.createElement('div');
            glow.className = 'ambient-glow';

            const topPosition = Math.random() * 100;
            const leftPosition = Math.random() * 100;
            const size = 150 + Math.random() * 350; // 150-500px

            glow.style.top = `${topPosition}%`;
            glow.style.left = `${leftPosition}%`;
            glow.style.width = `${size}px`;
            glow.style.height = `${size}px`;
            glow.style.animationDelay = `${i * 0.8}s`;

            lightCanvas.appendChild(glow);
            elements.push({ element: glow, type: 'glow', delay: i * 0.25 });
        }

        // NEW: Create luxury dots
        for (let i = 0; i < config.luxuryDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'luxury-dot';

            const topPosition = Math.random() * 100;
            const leftPosition = Math.random() * 100;
            const size = 1 + Math.random() * 2; // 1-3px

            dot.style.top = `${topPosition}%`;
            dot.style.left = `${leftPosition}%`;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;

            lightCanvas.appendChild(dot);
            elements.push({ element: dot, type: 'luxury-dot', delay: i * 0.03 });
        }

        // NEW: Create shimmer particles
        for (let i = 0; i < config.shimmerParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'shimmer-particle';

            const topPosition = Math.random() * 100;
            const leftPosition = Math.random() * 100;
            const size = 2 + Math.random() * 4; // 2-6px

            particle.style.top = `${topPosition}%`;
            particle.style.left = `${leftPosition}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            lightCanvas.appendChild(particle);
            elements.push({ element: particle, type: 'shimmer', delay: i * 0.1 });
        }

        return elements;
    }

    // Create animations with GSAP
    function createAnimations(elements) {
        timeline.clear();

        elements.forEach(({ element, type, delay }) => {
            switch (type) {
                case 'horizontal':
                    timeline.fromTo(element,
                        { width: 0, opacity: 0 },
                        {
                            width: element.style.maxWidth || '50%',
                            opacity: 1,
                            duration: 1.2,
                            ease: "power2.out"
                        },
                        delay
                    );
                    break;

                case 'vertical':
                    timeline.fromTo(element,
                        { height: 0, opacity: 0 },
                        {
                            height: element.style.maxHeight || '40%',
                            opacity: 1,
                            duration: 1.0,
                            ease: "power2.out"
                        },
                        delay
                    );
                    break;

                case 'diagonal':
                    timeline.fromTo(element,
                        { width: 0, opacity: 0 },
                        {
                            width: element.style.maxWidth || '30%',
                            opacity: 1,
                            duration: 1.5,
                            ease: "power1.out"
                        },
                        delay
                    );
                    break;

                case 'shadow':
                    timeline.fromTo(element,
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 0.5,
                            duration: 1.8,
                            ease: "power2.out"
                        },
                        delay
                    );
                    break;

                case 'intersection':
                    timeline.fromTo(element,
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 0.7,
                            duration: 0.6,
                            ease: "back.out(1.4)"
                        },
                        delay + 0.8
                    );
                    break;

                case 'glow':
                    timeline.fromTo(element,
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 0.6,
                            duration: 2.5,
                            ease: "power1.out"
                        },
                        delay
                    );
                    break;

                case 'luxury-dot':
                    timeline.fromTo(element,
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 0.8,
                            duration: 0.4,
                            ease: "power2.out"
                        },
                        delay + 1.2
                    );
                    break;

                case 'shimmer':
                    timeline.fromTo(element,
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 0.6,
                            duration: 0.8,
                            ease: "elastic.out(1, 0.3)"
                        },
                        delay + 1.5
                    );
                    break;
            }
        });

        // Add continuous subtle animations only for specific elements
        elements.forEach(({ element, type }) => {
            if (type === 'intersection') {
                const anim = gsap.to(element, {
                    opacity: "random(0.3, 0.9)",
                    duration: "random(3, 6)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: "random(0, 3)"
                });
                continuousAnimations.push(anim);
            }

            if (type === 'shimmer') {
                const anim = gsap.to(element, {
                    opacity: "random(0.2, 0.8)",
                    scale: "random(0.8, 1.2)",
                    duration: "random(4, 8)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: "random(0, 4)"
                });
                continuousAnimations.push(anim);
            }
        });
    }

    // Initialize the lighting system
    function initializeLighting() {
        const elements = createLightElements();
        createAnimations(elements);

        if (isLightingActive) {
            timeline.play();
        }
    }

    // Toggle lighting function
    function toggleLighting() {
        isLightingActive = !isLightingActive;

        if (isLightingActive) {
            lightingToggle.classList.add('active');
            lightBg.classList.add('active');
            timeline.play();
        } else {
            lightingToggle.classList.remove('active');
            lightBg.classList.remove('active');
            timeline.reverse();
        }

        // Smooth feedback animation
        gsap.to(lightingToggle, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });

        // Update aria state
        lightingToggle.setAttribute('aria-checked', isLightingActive.toString());
    }

    // Event listeners
    lightingToggle.addEventListener('click', toggleLighting);

    // Keyboard accessibility
    lightingToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleLighting();
        }
    });

    // Accessibility attributes
    lightingToggle.setAttribute('tabindex', '0');
    lightingToggle.setAttribute('role', 'switch');
    lightingToggle.setAttribute('aria-label', 'Toggle ambient lighting');
    lightingToggle.setAttribute('aria-checked', isLightingActive.toString());

    // Scroll-triggered effects
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: ".gallery",
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            if (isLightingActive) {
                timeline.play();
            }
        },
        onLeave: () => {
            timeline.pause();
        },
        onEnterBack: () => {
            if (isLightingActive) {
                timeline.play();
            }
        }
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initializeLighting();
        }, 300);
    });

    // Initialize on load
    setTimeout(() => {
        initializeLighting();
    }, 500);

    // REMOVED: The periodic regeneration interval that was causing lines to disappear
    // This was the problematic code that made lines disappear and regenerate
});