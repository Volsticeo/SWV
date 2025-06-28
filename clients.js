// Clients Section JavaScript - Enhanced with flowing wave lines and center scaling

document.addEventListener('DOMContentLoaded', function() {
    initClientsSection();
});

function initClientsSection() {
    createFlowingWaveBackground();
    // Don't recreate logos - use existing HTML structure
    setupInfiniteScroll();
    addInteractiveEffects();
    initCenterScaling(); // Add center scaling functionality
}

// Initialize center scaling effect
function initCenterScaling() {
    const clientsSlider = document.querySelector('.clients-slider');
    const clientsTrack = document.querySelector('.clients-track');

    if (!clientsSlider || !clientsTrack) return;

    function updateLogoScaling() {
        const clientLogos = document.querySelectorAll('.client-logo');
        const sliderRect = clientsSlider.getBoundingClientRect();
        const sliderCenter = sliderRect.left + sliderRect.width / 2;

        clientLogos.forEach(logo => {
            const logoRect = logo.getBoundingClientRect();
            const logoCenter = logoRect.left + logoRect.width / 2;

            // Calculate distance from center (normalized)
            const maxDistance = sliderRect.width / 2 + logoRect.width / 2;
            const distance = Math.abs(logoCenter - sliderCenter);
            const normalizedDistance = Math.min(distance / maxDistance, 1);

            // Calculate scale based on distance from center
            // Closer to center = larger scale (1.2), further = smaller scale (0.8)
            const minScale = 0.8;
            const maxScale = 1.2;
            const scale = maxScale - (normalizedDistance * (maxScale - minScale));

            // Apply the scaling
            logo.style.transform = `scale(${scale})`;

            // Optional: Add slight opacity change for extra effect
            const minOpacity = 0.6;
            const maxOpacity = 1;
            const opacity = maxOpacity - (normalizedDistance * (maxOpacity - minOpacity));
            logo.style.opacity = opacity;
        });
    }

    // Use requestAnimationFrame for smooth animation
    function animateScaling() {
        updateLogoScaling();
        requestAnimationFrame(animateScaling);
    }

    // Start the animation
    animateScaling();

    // Also update on window resize
    window.addEventListener('resize', updateLogoScaling);
}

// Create flowing wave background similar to the image
function createFlowingWaveBackground() {
    const clientsSection = document.querySelector('.clients');
    if (!clientsSection) return;

    // Create canvas for flowing wave pattern
    const canvas = document.createElement('canvas');
    canvas.className = 'wave-pattern-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.6'; // Added dimming effect
    clientsSection.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = clientsSection.offsetWidth;
        canvas.height = clientsSection.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Use dark blue color for waves
    const rgbColor = {
        r: 30,   // Dark blue
        g: 58,   // Dark blue
        b: 138   // Dark blue
    };

    // Wave parameters - reduced for cleaner look
    const waves = [];
    const numWaves = 5; // Reduced from 12 to 5

    // Create multiple wave layers with more spacing
    for (let i = 0; i < numWaves; i++) {
        waves.push({
            amplitude: Math.random() * 60 + 30, // Slightly reduced amplitude
            frequency: Math.random() * 0.015 + 0.005, // Slower frequency
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.015 + 0.005, // Slower speed
            verticalOffset: (canvas.height / (numWaves - 1)) * i + Math.random() * 40,
            opacity: Math.random() * 0.25 + 0.08, // Reduced opacity for subtlety
            strokeWidth: Math.random() * 1.5 + 1, // Thinner lines
            flowDirection: Math.random() > 0.5 ? 1 : -1,
            curvature: Math.random() * 0.4 + 0.2
        });
    }

    // Draw flowing wave lines
    function drawWaves(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        waves.forEach((wave, index) => {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${wave.opacity})`;
            ctx.lineWidth = wave.strokeWidth;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Create flowing wave path
            const points = [];
            const resolution = canvas.width / 3;

            for (let x = -50; x <= canvas.width + 50; x += resolution / 100) {
                const primaryWave = Math.sin(x * wave.frequency + time * wave.speed * wave.flowDirection + wave.phase) * wave.amplitude;
                const secondaryWave = Math.sin(x * wave.frequency * 1.5 + time * wave.speed * 0.7 + wave.phase) * wave.amplitude * 0.3;
                const tertiaryWave = Math.cos(x * wave.frequency * 0.8 + time * wave.speed * 1.2) * wave.amplitude * 0.2;

                const y = wave.verticalOffset + primaryWave + secondaryWave + tertiaryWave;

                points.push({ x, y });
            }

            // Draw smooth curves through points
            if (points.length > 2) {
                ctx.moveTo(points[0].x, points[0].y);

                for (let i = 1; i < points.length - 1; i++) {
                    const currentPoint = points[i];
                    const nextPoint = points[i + 1];

                    const controlX = currentPoint.x + (nextPoint.x - currentPoint.x) * wave.curvature;
                    const controlY = currentPoint.y + (nextPoint.y - currentPoint.y) * wave.curvature;

                    ctx.quadraticCurveTo(currentPoint.x, currentPoint.y, controlX, controlY);
                }
            }

            ctx.stroke();

            // Add subtle gradient overlay only occasionally for depth
            if (index % 2 === 0 && index < 3) { // Only first few waves, less frequent
                const gradient = ctx.createLinearGradient(0, wave.verticalOffset - wave.amplitude, 0, wave.verticalOffset + wave.amplitude);
                gradient.addColorStop(0, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0)`);
                gradient.addColorStop(0.5, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${wave.opacity * 0.2})`); // Even more subtle
                gradient.addColorStop(1, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0)`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = wave.strokeWidth * 1.5; // Less thick
                ctx.stroke();
            }
        });
    }

    // Animation loop
    function animateWaves() {
        const time = Date.now() * 0.001;
        drawWaves(time);
        requestAnimationFrame(animateWaves);
    }

    animateWaves();

    // GSAP animation for canvas opacity
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(canvas, {
            opacity: 0.2, // Dimmer range
            duration: 10, // Slower transition
            ease: "sine.inOut"
        })
        .to(canvas, {
            opacity: 0.5, // Less bright peak
            duration: 10,
            ease: "sine.inOut"
        });
    }
}

// Add interactive effects to existing client logos (MODIFIED)
function addInteractiveEffects() {
    const clientLogos = document.querySelectorAll('.client-logo');

    clientLogos.forEach(logo => {
        // Add glassmorphism circle if it doesn't exist
        if (!logo.querySelector('.client-logo-circle')) {
            const logoCircle = document.createElement('div');
            logoCircle.className = 'client-logo-circle';
            logo.appendChild(logoCircle);
        }

        // Add hover effects with GSAP if available
        if (typeof gsap !== 'undefined') {
            logo.addEventListener('mouseenter', () => {
                // Store current scale to maintain center scaling effect
                const currentScale = parseFloat(logo.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
                gsap.to(logo, {
                    duration: 0.4,
                    scale: currentScale * 1.1, // Multiply by current scale instead of setting absolute
                    rotation: 3,
                    ease: "power2.out"
                });
            });

            logo.addEventListener('mouseleave', () => {
                // Reset to current center-based scale (will be overridden by center scaling)
                gsap.to(logo, {
                    duration: 0.4,
                    rotation: 0,
                    ease: "power2.out"
                });
            });
        }
    });
}

// Setup infinite scroll animation (KEEP AS IS)
function setupInfiniteScroll() {
    const clientsTrack = document.querySelector('.clients-track');
    if (!clientsTrack) return;

    // Duplicate existing logos for seamless scrolling
    const existingLogos = clientsTrack.innerHTML;
    clientsTrack.innerHTML = existingLogos + existingLogos;

    // Pause animation on hover
    const clientsSlider = document.querySelector('.clients-slider');

    if (clientsSlider && typeof gsap !== 'undefined') {
        clientsSlider.addEventListener('mouseenter', () => {
            clientsTrack.style.animationPlayState = 'paused';
        });

        clientsSlider.addEventListener('mouseleave', () => {
            clientsTrack.style.animationPlayState = 'running';
        });
    }

    // Add intersection observer for performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                clientsTrack.style.animationPlayState = 'running';
            } else {
                clientsTrack.style.animationPlayState = 'paused';
            }
        });
    });

    if (clientsSlider) {
        observer.observe(clientsSlider);
    }
}

// Utility function to handle resize events
function handleResize() {
    const existingCanvas = document.querySelector('.wave-pattern-canvas');
    if (existingCanvas) {
        existingCanvas.remove();
        createFlowingWaveBackground();
    }
}

// Debounced resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 250);
});