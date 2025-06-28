// Dark Stone Texture Animation for Services Section
// Subtle animated texture that complements the navy-blue and gold color palette

document.addEventListener('DOMContentLoaded', function() {

    // Create texture container
    function createServicesTexture() {
        const servicesSection = document.querySelector('#services');
        if (!servicesSection) return;

        // Create texture overlay container
        const textureContainer = document.createElement('div');
        textureContainer.className = 'services-texture-overlay';
        textureContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
        overflow: hidden;
    `;

        // Create multiple texture layers for depth with enhanced grain
        const layers = [
            {
                size: 120,
                opacity: 0.054, // Increased from 0.03
                speed: 0.8,
                direction: 1
            },
            {
                size: 80,
                opacity: 0.045, // Increased from 0.025
                speed: 1.2,
                direction: -1
            },
            {
                size: 200,
                opacity: 0.036, // Increased from 0.02
                speed: 0.5,
                direction: 1
            }
        ];

        layers.forEach((layer, index) => {
            const textureLayer = document.createElement('div');
            textureLayer.className = `texture-layer-${index}`;
            textureLayer.style.cssText = `
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            opacity: ${layer.opacity};
            background-image: 
                radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.6) 0.8px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(245, 228, 196, 0.5) 0.6px, transparent 1px),
                radial-gradient(circle at 50% 10%, rgba(184, 169, 217, 0.4) 0.4px, transparent 0.6px),
                radial-gradient(circle at 80% 50%, rgba(215, 183, 18, 0.5) 0.7px, transparent 1px),
                radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.3) 0.5px, transparent 0.8px),
                radial-gradient(circle at 90% 20%, rgba(245, 228, 196, 0.4) 0.3px, transparent 0.5px),
                linear-gradient(45deg, 
                    rgba(2, 38, 84, 0.15) 0%, 
                    transparent 20%, 
                    rgba(212, 175, 55, 0.08) 40%, 
                    transparent 60%, 
                    rgba(2, 38, 84, 0.12) 80%,
                    transparent 100%
                ),
                linear-gradient(-45deg, 
                    rgba(245, 228, 196, 0.06) 0%, 
                    transparent 30%, 
                    rgba(2, 38, 84, 0.1) 70%, 
                    transparent 100%
                );
            background-size: 
                ${layer.size * 0.6}px ${layer.size * 0.6}px,
                ${layer.size * 0.8}px ${layer.size * 0.8}px,
                ${layer.size * 0.4}px ${layer.size * 0.4}px,
                ${layer.size * 0.5}px ${layer.size * 0.5}px,
                ${layer.size * 0.3}px ${layer.size * 0.3}px,
                ${layer.size * 0.25}px ${layer.size * 0.25}px,
                ${layer.size * 1.5}px ${layer.size * 1.5}px,
                ${layer.size * 1.8}px ${layer.size * 1.8}px;
            background-position: 
                0 0,
                ${layer.size * 0.3}px ${layer.size * 0.3}px,
                ${layer.size * 0.6}px ${layer.size * 0.4}px,
                ${layer.size * 0.4}px ${layer.size * 0.8}px,
                ${layer.size * 0.2}px ${layer.size * 0.6}px,
                ${layer.size * 0.7}px ${layer.size * 0.1}px,
                0 0,
                ${layer.size * 0.5}px ${layer.size * 0.5}px;
            filter: blur(0.3px);
            mix-blend-mode: overlay;
        `;
            textureContainer.appendChild(textureLayer);
        });

        // Add enhanced stone-like noise texture layer
        const noiseLayer = document.createElement('div');
        noiseLayer.className = 'texture-noise-layer';
        noiseLayer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.025;
        background: 
            repeating-linear-gradient(
                0deg,
                transparent,
                transparent 0.8px,
                rgba(212, 175, 55, 0.15) 0.8px,
                rgba(212, 175, 55, 0.15) 1.2px
            ),
            repeating-linear-gradient(
                90deg,
                transparent,
                transparent 0.8px,
                rgba(245, 228, 196, 0.12) 0.8px,
                rgba(245, 228, 196, 0.12) 1.2px
            ),
            repeating-linear-gradient(
                45deg,
                transparent,
                transparent 1px,
                rgba(2, 38, 84, 0.08) 1px,
                rgba(2, 38, 84, 0.08) 1.5px
            ),
            radial-gradient(
                ellipse 300px 150px at 30% 70%,
                rgba(212, 175, 55, 0.06),
                transparent
            ),
            radial-gradient(
                ellipse 250px 120px at 80% 30%,
                rgba(2, 38, 84, 0.08),
                transparent
            );
        filter: blur(0.2px);
        animation: subtle-pulse 12s ease-in-out infinite;
    `;
        textureContainer.appendChild(noiseLayer);

        // Insert texture container into services section
        servicesSection.insertBefore(textureContainer, servicesSection.firstChild);

        return {textureContainer, layers};
    }

    // Add CSS animations
    function addTextureStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes subtle-pulse {
                0%, 100% { opacity: 0.015; }
                50% { opacity: 0.025; }
            }

            @keyframes texture-drift-1 {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(2px, -1px) rotate(0.2deg); }
                50% { transform: translate(-1px, 1px) rotate(-0.1deg); }
                75% { transform: translate(1px, 2px) rotate(0.15deg); }
                100% { transform: translate(0, 0) rotate(0deg); }
            }

            @keyframes texture-drift-2 {
                0% { transform: translate(0, 0) rotate(0deg); }
                33% { transform: translate(-2px, 1px) rotate(-0.1deg); }
                66% { transform: translate(1px, -2px) rotate(0.1deg); }
                100% { transform: translate(0, 0) rotate(0deg); }
            }

            @keyframes texture-drift-3 {
                0% { transform: translate(0, 0) rotate(0deg); }
                20% { transform: translate(1px, 1px) rotate(0.05deg); }
                40% { transform: translate(-1px, 0px) rotate(-0.05deg); }
                60% { transform: translate(0px, -1px) rotate(0.08deg); }
                80% { transform: translate(1px, 0px) rotate(-0.03deg); }
                100% { transform: translate(0, 0) rotate(0deg); }
            }

            .texture-layer-0 {
                animation: texture-drift-1 20s ease-in-out infinite;
            }

            .texture-layer-1 {
                animation: texture-drift-2 25s ease-in-out infinite reverse;
            }

            .texture-layer-2 {
                animation: texture-drift-3 30s ease-in-out infinite;
            }

            /* Ensure texture doesn't interfere with content */
            .services .container {
                position: relative;
                z-index: 2;
            }

            /* Disable texture animations on touch devices for performance */
            @media (hover: none) and (pointer: coarse) {
                .texture-layer-0,
                .texture-layer-1,
                .texture-layer-2,
                .texture-noise-layer {
                    animation: none !important;
                    transform: none !important;
                }
            }

            /* Reduce texture on very small screens */
            @media (max-width: 480px) {
                .services-texture-overlay {
                    opacity: 0.7;
                }
            }

            @media (max-width: 360px) {
                .services-texture-overlay {
                    opacity: 0.5;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize texture
    function initServicesTexture() {
        addTextureStyles();
        const texture = createServicesTexture();

        if (texture) {
            console.log('Services texture initialized successfully');

            // Optional: Add GSAP enhanced animations if GSAP is available
            if (typeof gsap !== 'undefined') {
                // Very subtle GSAP enhancements
                gsap.to('.texture-layer-0', {
                    rotation: 0.3,
                    duration: 45,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                });

                gsap.to('.texture-layer-1', {
                    rotation: -0.2,
                    duration: 35,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                });

                gsap.to('.texture-layer-2', {
                    scale: 1.01,
                    duration: 40,
                    ease: 'power1.inOut',
                    repeat: -1,
                    yoyo: true
                });

                // Subtle breathing effect for the noise layer
                gsap.to('.texture-noise-layer', {
                    opacity: 0.025,
                    duration: 8,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                });
            }
        }
    }

    // Initialize when DOM is ready
    initServicesTexture();

    // Re-initialize if window is resized (for responsive handling)
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Optional: Adjust texture based on new viewport size
            const textureOverlay = document.querySelector('.services-texture-overlay');
            if (textureOverlay && window.innerWidth < 480) {
                textureOverlay.style.opacity = '0.7';
            } else if (textureOverlay && window.innerWidth < 360) {
                textureOverlay.style.opacity = '0.5';
            } else if (textureOverlay) {
                textureOverlay.style.opacity = '1';
            }
        }, 250);
    });
});