// Design Process Background Changer and Mobile Interactions
document.addEventListener('DOMContentLoaded', function() {
    const processSteps = document.querySelectorAll('.process-step');
    const processBgImage = document.getElementById('process-bg-image');
    let activeTimeout;
    let isMobile = window.innerWidth <= 768;

    // Update mobile state on resize
    window.addEventListener('resize', function() {
        isMobile = window.innerWidth <= 768;
        // Reset any active mobile overlays on resize
        if (!isMobile) {
            processSteps.forEach(step => {
                step.classList.remove('active');
            });
        }
    });

    // Background change functionality for desktop/tablet
    function changeBackground(bgUrl, duration = 800) {
        if (processBgImage && bgUrl) {
            processBgImage.style.opacity = '0.7';

            setTimeout(() => {
                processBgImage.src = bgUrl;
                processBgImage.style.opacity = '1';
            }, duration / 2);
        }
    }

    // Desktop/Tablet hover interactions
    function setupDesktopInteractions() {
        processSteps.forEach(step => {
            const bgUrl = step.getAttribute('data-bg');

            step.addEventListener('mouseenter', function() {
                if (!isMobile) {
                    changeBackground(bgUrl);
                    clearTimeout(activeTimeout);
                }
            });

            step.addEventListener('mouseleave', function() {
                if (!isMobile) {
                    // Return to default background after a delay
                    activeTimeout = setTimeout(() => {
                        const defaultBg = './Assets/design-process/Design_Process-01.JPG';
                        changeBackground(defaultBg);
                    }, 300);
                }
            });
        });
    }

    // Mobile interactions
    function setupMobileInteractions() {
        processSteps.forEach(step => {
            const bgUrl = step.getAttribute('data-bg');
            const title = step.getAttribute('data-title');
            const description = step.getAttribute('data-description');

            // Hide mobile overlay (we don't want the blue overlay)
            if (!step.querySelector('.mobile-overlay')) {
                const mobileOverlay = document.createElement('div');
                mobileOverlay.className = 'mobile-overlay';
                mobileOverlay.style.display = 'none';
                step.appendChild(mobileOverlay);
            }

            // Create mobile-specific styling without affecting original cards
            if (window.innerWidth <= 768) {
                // Hide original cards on mobile and create mobile layout
                step.style.cssText += `
                position: relative !important;
            `;

                // Create mobile version if it doesn't exist
                if (!step.querySelector('.mobile-card')) {
                    const mobileCard = document.createElement('div');
                    mobileCard.className = 'mobile-card';
                    mobileCard.innerHTML = `
                    <div class="mobile-step-icon">${step.querySelector('.step-icon').textContent}</div>
                    <div class="mobile-step-title">${step.querySelector('h3').textContent}</div>
                `;

                    // Style the mobile card
                    mobileCard.style.cssText = `
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 90px !important;
                    height: 85px !important;
                    background: rgba(0, 0, 0, 0.7) !important;
                    border-radius: 8px !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    justify-content: center !important;
                    color: white !important;
                    backdrop-filter: blur(10px) !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                    z-index: 10 !important;
                `;

                    // Style mobile icon
                    const mobileIcon = mobileCard.querySelector('.mobile-step-icon');
                    mobileIcon.style.cssText = `
                    width: 26px !important;
                    height: 26px !important;
                    background: #D4AF37 !important;
                    border-radius: 50% !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    font-size: 14px !important;
                    font-weight: bold !important;
                    color: black !important;
                    margin-bottom: 6px !important;
                `;

                    // Style mobile title
                    const mobileTitle = mobileCard.querySelector('.mobile-step-title');
                    mobileTitle.style.cssText = `
                    font-size: 0.95em !important;
                    font-weight: 600 !important;
                    text-align: center !important;
                    margin: 0 !important;
                    line-height: 1.1 !important;
                `;

                    step.appendChild(mobileCard);

                    // Hide original content on mobile
                    const originalContent = step.children;
                    for (let i = 0; i < originalContent.length; i++) {
                        if (!originalContent[i].classList.contains('mobile-card') &&
                            !originalContent[i].classList.contains('mobile-overlay')) {
                            originalContent[i].style.display = 'none';
                        }
                    }
                }

                // Ensure parent container is flex for horizontal layout
                const parentContainer = step.parentElement;
                if (parentContainer) {
                    parentContainer.style.cssText += `
                    display: flex !important;
                    flex-direction: row !important;
                    justify-content: space-around !important;
                    align-items: flex-start !important;
                    gap: 10px !important;
                    padding: 20px 10px !important;
                `;
                }

                // Size the step containers for mobile
                step.style.cssText += `
                width: 90px !important;
                height: 85px !important;
                flex-shrink: 0 !important;
                position: relative !important;
            `;
            }

            step.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();

                    // Remove active class from all steps
                    processSteps.forEach(otherStep => {
                        if (otherStep !== step) {
                            otherStep.classList.remove('active');
                        }
                    });

                    // Toggle active class on clicked step
                    const isActive = step.classList.contains('active');

                    if (isActive) {
                        step.classList.remove('active');
                        // Return to default background
                        const defaultBg = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
                        changeBackground(defaultBg, 400);
                    } else {
                        step.classList.add('active');
                        // Change background
                        changeBackground(bgUrl, 400);
                    }
                }
            });

            // Close overlay when clicking outside
            document.addEventListener('click', function (e) {
                if (window.innerWidth <= 768 && !step.contains(e.target)) {
                    step.classList.remove('active');
                }
            });
        });
    }

    // Auto-cycle backgrounds on mobile (optional feature)
    function startMobileAutoCycle() {
        if (!isMobile) return;

        let currentIndex = 0;
        const backgrounds = [];

        processSteps.forEach(step => {
            const bg = step.getAttribute('data-bg');
            if (bg) backgrounds.push(bg);
        });

        if (backgrounds.length > 0) {
            setInterval(() => {
                if (!document.querySelector('.process-step.active')) {
                    changeBackground(backgrounds[currentIndex], 1000);
                    currentIndex = (currentIndex + 1) % backgrounds.length;
                }
            }, 4000);
        }
    }

    // Smooth scroll animation for process section
    function setupScrollAnimation() {
        const processSection = document.querySelector('.design-process');

        if (processSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        processSteps.forEach((step, index) => {
                            setTimeout(() => {
                                step.style.opacity = '1';
                                step.style.transform = 'translateY(0)';
                            }, index * 150);
                        });
                    }
                });
            }, {
                threshold: 0.2
            });

            observer.observe(processSection);

            // Initially hide steps for animation
            processSteps.forEach(step => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(30px)';
                step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
        }
    }

    // Keyboard navigation for accessibility
    function setupKeyboardNavigation() {
        processSteps.forEach((step, index) => {
            step.setAttribute('tabindex', '0');
            step.setAttribute('role', 'button');
            step.setAttribute('aria-label', `Step ${index + 1}: ${step.querySelector('h3').textContent}`);

            step.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    step.click();
                }
            });
        });
    }

    // Touch gesture support for mobile
    function setupTouchGestures() {
        if (!isMobile) return;

        let touchStartY = 0;

        processSteps.forEach(step => {
            step.addEventListener('touchstart', function(e) {
                touchStartY = e.touches[0].clientY;
            }, { passive: true });

            step.addEventListener('touchend', function(e) {
                const touchEndY = e.changedTouches[0].clientY;
                const swipeDistance = touchStartY - touchEndY;

                // Swipe up to activate, swipe down to deactivate
                if (Math.abs(swipeDistance) > 30) {
                    if (swipeDistance > 0 && !step.classList.contains('active')) {
                        step.click();
                    } else if (swipeDistance < 0 && step.classList.contains('active')) {
                        step.classList.remove('active');
                    }
                }
            }, { passive: true });
        });
    }

    // Preload background images for smooth transitions
    function preloadBackgrounds() {
        const backgrounds = [];
        processSteps.forEach(step => {
            const bg = step.getAttribute('data-bg');
            if (bg && !backgrounds.includes(bg)) {
                backgrounds.push(bg);
                const img = new Image();
                img.src = bg;
            }
        });
    }

    // Performance optimization: debounce resize events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Initialize all functionality
    function init() {
        preloadBackgrounds();
        setupDesktopInteractions();
        setupMobileInteractions();
        setupScrollAnimation();
        setupKeyboardNavigation();
        setupTouchGestures();

        // Optional: Start auto-cycle on mobile
        // startMobileAutoCycle();
    }

    // Initialize when DOM is ready
    init();

    // Handle window resize with debouncing
    const debouncedResize = debounce(() => {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= 768;

        if (wasMobile !== isMobile) {
            // Reset states when switching between mobile/desktop
            processSteps.forEach(step => {
                step.classList.remove('active');
            });

            // Return to default background
            const defaultBg = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
            changeBackground(defaultBg, 200);
        }
    }, 250);

    window.addEventListener('resize', debouncedResize);

    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        clearTimeout(activeTimeout);
    });
});