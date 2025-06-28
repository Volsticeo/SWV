// Team Section Texture Background Animation
document.addEventListener('DOMContentLoaded', function() {
    const teamSection = document.querySelector('.team');

    if (!teamSection) return;

    // Create texture container
    const textureContainer = document.createElement('div');
    textureContainer.className = 'team-texture-bg';
    textureContainer.innerHTML = `
        <div class="texture-lines-container">
            <svg class="texture-svg" width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:rgba(215,183,18,0.25)" />
                        <stop offset="50%" style="stop-color:rgba(215,183,18,0.45)" />
                        <stop offset="100%" style="stop-color:rgba(215,183,18,0.2)" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgba(255,255,255,0.12)" />
                        <stop offset="50%" style="stop-color:rgba(255,255,255,0.28)" />
                        <stop offset="100%" style="stop-color:rgba(255,255,255,0.08)" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                
                <!-- Main texture lines -->
                <g class="texture-group-1">
                    <path class="texture-line line-1" d="M0,200 Q400,150 800,180 T1600,160 L1920,150" 
                          stroke="url(#lineGradient1)" stroke-width="1.8" fill="none" opacity="0.6"/>
                    <path class="texture-line line-2" d="M0,350 Q300,320 600,340 T1200,330 L1920,320" 
                          stroke="url(#lineGradient2)" stroke-width="1.4" fill="none" opacity="0.5"/>
                    <path class="texture-line line-3" d="M0,500 Q500,470 1000,490 T1920,480" 
                          stroke="url(#lineGradient1)" stroke-width="2" fill="none" opacity="0.55"/>
                </g>
                
                <g class="texture-group-2">
                    <path class="texture-line line-4" d="M0,650 Q400,620 800,640 T1600,630 L1920,620" 
                          stroke="url(#lineGradient2)" stroke-width="1.2" fill="none" opacity="0.45"/>
                    <path class="texture-line line-5" d="M0,800 Q600,770 1200,790 T1920,780" 
                          stroke="url(#lineGradient1)" stroke-width="1.6" fill="none" opacity="0.5"/>
                </g>
                
                <!-- Diagonal lines -->
                <g class="texture-diagonal">
                    <line class="diagonal-line diag-1" x1="-100" y1="0" x2="800" y2="1080" 
                          stroke="url(#lineGradient1)" stroke-width="1" opacity="0.3"/>
                    <line class="diagonal-line diag-2" x1="600" y1="0" x2="1500" y2="1080" 
                          stroke="url(#lineGradient2)" stroke-width="0.8" opacity="0.25"/>
                    <line class="diagonal-line diag-3" x1="1200" y1="0" x2="2100" y2="1080" 
                          stroke="url(#lineGradient1)" stroke-width="1.2" opacity="0.35"/>
                </g>
                
                <!-- Subtle dots pattern -->
                <g class="texture-dots">
                    <circle class="dot dot-1" cx="200" cy="250" r="2" fill="rgba(215,183,18,0.35)" opacity="0.8"/>
                    <circle class="dot dot-2" cx="600" cy="400" r="1.5" fill="rgba(255,255,255,0.25)" opacity="0.6"/>
                    <circle class="dot dot-3" cx="1000" cy="300" r="1.8" fill="rgba(215,183,18,0.3)" opacity="0.7"/>
                    <circle class="dot dot-4" cx="1400" cy="550" r="1.2" fill="rgba(255,255,255,0.22)" opacity="0.5"/>
                    <circle class="dot dot-5" cx="300" cy="700" r="1.6" fill="rgba(215,183,18,0.28)" opacity="0.65"/>
                    <circle class="dot dot-6" cx="800" cy="750" r="1.3" fill="rgba(255,255,255,0.18)" opacity="0.55"/>
                    <circle class="dot dot-7" cx="1200" cy="650" r="2.2" fill="rgba(215,183,18,0.38)" opacity="0.75"/>
                    <circle class="dot dot-8" cx="1600" cy="800" r="1.4" fill="rgba(255,255,255,0.2)" opacity="0.6"/>
                </g>
                
                <!-- Floating glowing particles -->
                <g class="floating-particles">
                    <circle class="particle particle-1" cx="150" cy="180" r="2.5" fill="rgba(215,183,18,0.45)" filter="url(#glow)" opacity="0.6"/>
                    <circle class="particle particle-2" cx="450" cy="320" r="2" fill="rgba(255,255,255,0.35)" filter="url(#glow)" opacity="0.5"/>
                    <circle class="particle particle-3" cx="750" cy="150" r="2.8" fill="rgba(215,183,18,0.5)" filter="url(#glow)" opacity="0.65"/>
                    <circle class="particle particle-4" cx="1100" cy="380" r="1.8" fill="rgba(255,255,255,0.3)" filter="url(#glow)" opacity="0.55"/>
                    <circle class="particle particle-5" cx="1350" cy="220" r="3" fill="rgba(215,183,18,0.42)" filter="url(#glow)" opacity="0.7"/>
                    <circle class="particle particle-6" cx="1650" cy="420" r="2.2" fill="rgba(255,255,255,0.32)" filter="url(#glow)" opacity="0.6"/>
                    <circle class="particle particle-7" cx="350" cy="580" r="2.4" fill="rgba(215,183,18,0.48)" filter="url(#glow)" opacity="0.62"/>
                    <circle class="particle particle-8" cx="650" cy="680" r="1.9" fill="rgba(255,255,255,0.28)" filter="url(#glow)" opacity="0.58"/>
                    <circle class="particle particle-9" cx="950" cy="520" r="2.6" fill="rgba(215,183,18,0.46)" filter="url(#glow)" opacity="0.66"/>
                    <circle class="particle particle-10" cx="1250" cy="720" r="1.7" fill="rgba(255,255,255,0.34)" filter="url(#glow)" opacity="0.52"/>
                    <circle class="particle particle-11" cx="1550" cy="640" r="2.3" fill="rgba(215,183,18,0.4)" filter="url(#glow)" opacity="0.64"/>
                    <circle class="particle particle-12" cx="250" cy="480" r="2.1" fill="rgba(255,255,255,0.31)" filter="url(#glow)" opacity="0.56"/>
                </g>
            </svg>
        </div>
    `;

    // Insert texture background
    teamSection.insertBefore(textureContainer, teamSection.firstChild);

    // Add CSS styles dynamically
    const textureStyles = `
        <style>
        .team-texture-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
            pointer-events: none;
            opacity: 1;
        }
        
        .texture-lines-container {
            width: 100%;
            height: 100%;
            position: relative;
        }
        
        .texture-svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            filter: blur(0.2px);
        }
        
        .texture-line {
            vector-effect: non-scaling-stroke;
        }
        
        .diagonal-line {
            vector-effect: non-scaling-stroke;
        }
        
        .dot {
            filter: blur(0.1px);
        }
        
        .particle {
            filter: blur(0.2px);
        }
        
        /* Ensure team content stays above texture */
        .team .container {
            position: relative;
            z-index: 2;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .team-texture-bg {
                opacity: 0.9;
            }
            .texture-svg {
                filter: blur(0.3px);
            }
        }
        </style>
    `;
    document.head.insertAdjacentHTML('beforeend', textureStyles);

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('.texture-line', {
        drawSVG: '0% 0%',
        opacity: 0
    });

    gsap.set('.diagonal-line', {
        drawSVG: '0% 0%',
        opacity: 0
    });

    gsap.set('.dot', {
        scale: 0,
        opacity: 0
    });

    gsap.set('.particle', {
        scale: 0,
        opacity: 0
    });

    // Main texture animation timeline
    const textureTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.team',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Animate horizontal lines with higher opacity
    textureTimeline
        .to('.line-1', {
            drawSVG: '0% 100%',
            opacity: 0.85,
            duration: 2.5,
            ease: 'power2.out'
        }, 0)
        .to('.line-2', {
            drawSVG: '0% 100%',
            opacity: 0.7,
            duration: 2.2,
            ease: 'power2.out'
        }, 0.3)
        .to('.line-3', {
            drawSVG: '0% 100%',
            opacity: 0.8,
            duration: 2.8,
            ease: 'power2.out'
        }, 0.6)
        .to('.line-4', {
            drawSVG: '0% 100%',
            opacity: 0.65,
            duration: 2.1,
            ease: 'power2.out'
        }, 0.9)
        .to('.line-5', {
            drawSVG: '0% 100%',
            opacity: 0.75,
            duration: 2.4,
            ease: 'power2.out'
        }, 1.2);

    // Animate diagonal lines with higher opacity
    textureTimeline
        .to('.diag-1', {
            drawSVG: '0% 100%',
            opacity: 0.5,
            duration: 3,
            ease: 'power1.out'
        }, 1.5)
        .to('.diag-2', {
            drawSVG: '0% 100%',
            opacity: 0.4,
            duration: 2.8,
            ease: 'power1.out'
        }, 1.8)
        .to('.diag-3', {
            drawSVG: '0% 100%',
            opacity: 0.55,
            duration: 3.2,
            ease: 'power1.out'
        }, 2.1);

    // Animate dots with stagger
    textureTimeline
        .to('.dot', {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            stagger: 0.15
        }, 2.5);

    // Animate floating particles with stagger
    textureTimeline
        .to('.particle', {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'back.out(1.4)',
            stagger: 0.2
        }, 3);

    // Continuous subtle floating animation for lines
    gsap.to('.texture-group-1', {
        y: -5,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
    });

    gsap.to('.texture-group-2', {
        y: 3,
        duration: 5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1
    });

    // Subtle diagonal movement
    gsap.to('.texture-diagonal', {
        x: 10,
        duration: 6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
    });

    // Gentle pulsing for dots
    gsap.to('.dot', {
        opacity: '+=0.2',
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
            each: 0.5,
            from: 'random'
        }
    });

    // Floating particles continuous animations
    gsap.to('.particle', {
        y: -15,
        x: 8,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
            each: 0.3,
            from: 'random'
        }
    });

    // Random glow pulsing for particles
    gsap.to('.particle', {
        opacity: '+=0.3',
        scale: '+=0.2',
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
            each: 0.8,
            from: 'random'
        }
    });

    // Individual particle random movements
    document.querySelectorAll('.particle').forEach((particle, index) => {
        gsap.to(particle, {
            rotation: 360,
            duration: 15 + (index * 2),
            ease: 'none',
            repeat: -1
        });

        // Random intensity glow every few seconds
        gsap.to(particle, {
            opacity: `+=${0.4 + Math.random() * 0.3}`,
            duration: 0.8 + Math.random() * 0.7,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1,
            repeatDelay: 1 + Math.random() * 3
        });
    });

    // Optional: Parallax effect on scroll
    gsap.to('.team-texture-bg', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.team',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Team card hover interactions
    const teamCards = document.querySelectorAll('.team-member-card');

    teamCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Slightly brighten nearby texture elements
            gsap.to(`.dot-${index + 1}, .line-${index + 1}`, {
                opacity: '+=0.2',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            // Return to normal opacity
            gsap.to(`.dot-${index + 1}, .line-${index + 1}`, {
                opacity: '-=0.2',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Performance optimization: Pause animations when section is out of view
    ScrollTrigger.create({
        trigger: '.team',
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => {
            gsap.globalTimeline.play();
        },
        onLeave: () => {
            gsap.globalTimeline.pause();
        },
        onEnterBack: () => {
            gsap.globalTimeline.play();
        },
        onLeaveBack: () => {
            gsap.globalTimeline.pause();
        }
    });

    // Cleanup function for memory management
    window.addEventListener('beforeunload', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.killTweensOf('*');
    });
});

// Additional utility function for dynamic texture intensity
function adjustTextureIntensity(intensity = 1) {
    const textureContainer = document.querySelector('.team-texture-bg');
    if (textureContainer) {
        gsap.to(textureContainer, {
            opacity: 1 * intensity,
            duration: 0.5,
            ease: 'power2.inOut'
        });
    }
}

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { adjustTextureIntensity };
}
