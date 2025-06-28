// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global variables
let isMenuOpen = false;
const galleryProjects = {
    'modern-living': {
        title: 'Modern Living Room',
        description: 'A contemporary living space that perfectly balances comfort and style. Features custom furniture, ambient lighting, and a sophisticated color palette that creates an inviting atmosphere perfect for both relaxation and entertaining.',
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    'chic-office': {
        title: 'Chic Office Space',
        description: 'A dynamic workplace environment designed to boost productivity and creativity. Incorporates ergonomic furniture, natural lighting, and collaborative spaces that inspire innovation and team collaboration.',
        images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    'elegant-kitchen': {
        title: 'Elegant Kitchen',
        description: 'The perfect blend of form and function in culinary design. Features high-end appliances, custom cabinetry, and an island that serves as both workspace and gathering place for family and friends.',
        images: [
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    'luxury-bedroom': {
        title: 'Luxury Bedroom',
        description: 'A serene and sophisticated retreat designed for ultimate relaxation. Features plush textiles, custom lighting, and carefully curated decor that creates a peaceful sanctuary for rest and rejuvenation.',
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    'minimalist-dining': {
        title: 'Minimalist Dining',
        description: 'Clean lines meet warmth in this thoughtfully designed dining space. Emphasizes simplicity without sacrificing comfort, creating an environment perfect for intimate dinners and family gatherings.',
        images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    'contemporary-lounge': {
        title: 'Contemporary Lounge',
        description: 'Where comfort meets style in perfect harmony. This lounge area features modern furnishings, artistic elements, and a layout that encourages both conversation and relaxation.',
        images: [
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    'boutique-retail': {
        title: 'Boutique Retail',
        description: 'An immersive shopping experience that tells a story. Every element is carefully considered to create an environment that showcases products beautifully while providing customers with a memorable retail journey.',
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
    setupMobileMenu();
    setupGallery();
    setupProcessSteps();
    setupContactForm();
    setupSmoothScrolling();
    duplicateClientLogos();
});

// Initialize GSAP Animations
function initializeAnimations() {
    // Hero animations
    gsap.fromTo('.hero-text h1', {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
    });

    gsap.fromTo('.hero-text p', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.fromTo('.cta-button', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });

    gsap.fromTo('.hero-image-overlay', {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.9,
        ease: 'power3.out'
    });

    // Services section animations
    gsap.fromTo('.service-card', {
        y: 80,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%'
        }
    });

    // Process steps animations
    gsap.fromTo('.process-step', {
        y: 80,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.design-process',
            start: 'top 80%'
        }
    });

    // Gallery animations
    gsap.fromTo('.gallery-item', {
        scale: 0.8,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.gallery',
            start: 'top 80%'
        }
    });

    // Team section animation
    gsap.fromTo('.team-avatar', {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.team',
            start: 'top 80%'
        }
    });

    gsap.fromTo('.team-text', {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.team',
            start: 'top 80%'
        }
    });

    // Testimonials background animation
    gsap.fromTo('.testimonials-background img', {
        scale: 1.2,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%'
        }
    });

    // Testimonial cards animation
    gsap.fromTo('.testimonial-card', {
        y: 80,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 70%'
        }
    });
}

// Mobile Menu Setup
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function () {
            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(255, 255, 254, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.backdropFilter = 'blur(10px)';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }
}

// Gallery Setup
function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.querySelector('.modal-close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const projectKey = this.getAttribute('data-project');
            const project = galleryProjects[projectKey];

            if (project) {
                modalImage.src = project.images[0];
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                modal.style.display = 'block';

                // Animate modal entrance
                gsap.fromTo(modal, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 0.3
                });

                gsap.fromTo('.modal-content', {
                    scale: 0.8,
                    y: 50
                }, {
                    scale: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power3.out'
                });
            }
        });
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', function () {
            gsap.to(modal, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    modal.style.display = 'none';
                }
            });
        });
    }

    // Close modal on outside click
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                gsap.to(modal, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        modal.style.display = 'none';
                    }
                });
            }
        });
    }
}

// Process Steps Setup
function setupProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');
    const processBgImage = document.getElementById('process-bg-image');

    processSteps.forEach(step => {
        step.addEventListener('mouseenter', function () {
            const bgUrl = this.getAttribute('data-bg');
            if (bgUrl && processBgImage) {
                gsap.to(processBgImage, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        processBgImage.src = bgUrl;
                        gsap.to(processBgImage, {
                            opacity: 1,
                            duration: 0.3
                        });
                    }
                });
            }
        });
    });
}

// Contact Form Setup
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Simulate form submission
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                gsap.to(window, {
                    duration: 1,
                    scrollTo: targetPosition,
                    ease: 'power2.inOut'
                });
            }
        });
    });
}

// Scroll to Section Function
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        gsap.to(window, {
            duration: 1,
            scrollTo: targetPosition,
            ease: 'power2.inOut'
        });
    }
}

// Duplicate Client Logos for Infinite Scroll
function duplicateClientLogos() {
    const clientsTrack = document.querySelector('.clients-track');
    if (clientsTrack) {
        const logos = clientsTrack.innerHTML;
        clientsTrack.innerHTML += logos; // Duplicate for seamless loop
    }
}

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;

    if (scrolled > 100) {
        header.style.background = 'rgba(255, 255, 254, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 254, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Custom Scrollbar Setup
function setupCustomScrollbar() {
    // Create custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #002654, #D7B712);
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #D7B712, #002654);
        }
    `;
    document.head.appendChild(style);
}

// Gallery Tile Layout Setup
function setupGalleryTileLayout() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    // Define tile positions and sizes based on your hand-drawn layout
    const tileConfigs = [
        {width: '35%', height: '300px', top: '0', left: '0'},           // Large left tile
        {width: '30%', height: '140px', top: '0', left: '37%'},         // Top middle
        {width: '31%', height: '140px', top: '0', left: '69%'},         // Top right
        {width: '30%', height: '150px', top: '150px', left: '37%'},     // Middle center
        {width: '31%', height: '150px', top: '150px', left: '69%'},     // Middle right
        {width: '35%', height: '180px', top: '310px', left: '0'},       // Bottom left
        {width: '63%', height: '120px', top: '380px', left: '37%'}      // Bottom wide
    ];

    // Apply masonry-style positioning
    galleryGrid.style.position = 'relative';
    galleryGrid.style.height = '500px';

    const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        if (tileConfigs[index]) {
            const config = tileConfigs[index];
            item.style.position = 'absolute';
            item.style.width = config.width;
            item.style.height = config.height;
            item.style.top = config.top;
            item.style.left = config.left;
            item.style.overflow = 'hidden';
            item.style.borderRadius = '8px';
            item.style.cursor = 'pointer';
            item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

            // Ensure images fill and are masked properly
            const img = item.querySelector('img');
            if (img) {
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.objectPosition = 'center';
            }

            // Add hover effect
            item.addEventListener('mouseenter', function () {
                gsap.to(this, {
                    scale: 1.05,
                    zIndex: 10,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', function () {
                gsap.to(this, {
                    scale: 1,
                    zIndex: 1,
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        }
    });
}

// Enhanced Gallery Modal with Image Series
function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.querySelector('.modal-close');

    let currentImageIndex = 0;
    let currentProject = null;

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const projectKey = this.getAttribute('data-project');
            currentProject = galleryProjects[projectKey];
            currentImageIndex = 0;

            if (currentProject) {
                showModalImage();
                modal.style.display = 'block';

                // Animate modal entrance
                gsap.fromTo(modal, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 0.3
                });

                gsap.fromTo('.modal-content', {
                    scale: 0.8,
                    y: 50
                }, {
                    scale: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power3.out'
                });
            }
        });
    });

    function showModalImage() {
        if (currentProject && currentProject.images[currentImageIndex]) {
            modalImage.src = currentProject.images[currentImageIndex];
            modalTitle.textContent = currentProject.title;
            modalDescription.textContent = currentProject.description;

            // Add navigation if multiple images
            if (currentProject.images.length > 1) {
                addImageNavigation();
            }
        }
    }

    function addImageNavigation() {
        // Remove existing navigation
        const existingNav = modal.querySelector('.image-navigation');
        if (existingNav) existingNav.remove();

        const navigation = document.createElement('div');
        navigation.className = 'image-navigation';
        navigation.style.cssText = `
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 1001;
        `;

        currentProject.images.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.style.cssText = `
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: none;
                background: ${index === currentImageIndex ? '#D7B712' : 'rgba(255,255,255,0.5)'};
                cursor: pointer;
                transition: all 0.3s ease;
            `;

            dot.addEventListener('click', () => {
                currentImageIndex = index;
                showModalImage();
            });

            navigation.appendChild(dot);
        });

        modal.querySelector('.modal-content').appendChild(navigation);
    }

    // Close modal functionality
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    function closeModal() {
        gsap.to(modal, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                modal.style.display = 'none';
                // Remove navigation
                const nav = modal.querySelector('.image-navigation');
                if (nav) nav.remove();
            }
        });
    }
}

// Testimonials Background Animation
function setupTestimonialsBackground() {
    gsap.fromTo('.testimonials-background img', {
        scale: 1.3,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
        }
    });

    // Testimonial cards animation
    gsap.fromTo('.testimonial-card', {
        y: 80,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 70%'
        }
    });
}

// Clients Slider Setup
function setupClientsSlider() {
    const clientsTrack = document.querySelector('.clients-track');
    if (!clientsTrack) return;

    // Create infinite scroll animation
    const trackWidth = clientsTrack.scrollWidth / 2; // Half because we duplicated

    gsap.to('.clients-track', {
        x: -trackWidth,
        duration: 20,
        ease: 'none',
        repeat: -1
    });

    // Pause on hover
    const clientsSlider = document.querySelector('.clients-slider');
    if (clientsSlider) {
        clientsSlider.addEventListener('mouseenter', () => {
            gsap.globalTimeline.pause();
        });

        clientsSlider.addEventListener('mouseleave', () => {
            gsap.globalTimeline.resume();
        });
    }
}

// Enhanced Process Steps with Background Change
function setupProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');
    const processBgImage = document.getElementById('process-bg-image');

    processSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', function () {
            const bgUrl = this.getAttribute('data-bg');
            if (bgUrl && processBgImage) {
                // Add active state to step
                processSteps.forEach(s => s.classList.remove('active'));
                this.classList.add('active');

                gsap.to(processBgImage, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        processBgImage.src = bgUrl;
                        gsap.to(processBgImage, {
                            opacity: 1,
                            duration: 0.3
                        });
                    }
                });
            }
        });

        // Add click animation
        step.addEventListener('click', function () {
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
        });
    });
}

// Mobile Menu Setup (Enhanced)
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function () {
            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                gsap.set(navLinks, {
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    width: '100%',
                    background: 'rgba(255, 255, 254, 0.98)',
                    padding: '20px',
                    backdropFilter: 'blur(10px)',
                    opacity: 0,
                    y: -20
                });

                gsap.to(navLinks, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(navLinks, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        navLinks.style.display = 'none';
                    }
                });
            }
        });
    }
}

// Enhanced Contact Form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;

            // Animate button
            gsap.to(submitButton, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });

            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 5px;
        z-index: 1000;
        font-family: 'Inter', sans-serif;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    gsap.fromTo(notification, {
        x: 300,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
    });

    setTimeout(() => {
        gsap.to(notification, {
            x: 300,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                notification.remove();
            }
        });
    }, 4000);
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: targetPosition,
                    ease: 'power2.inOut'
                });
            }
        });
    });
}

// Scroll to Section Function
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        gsap.to(window, {
            duration: 1.2,
            scrollTo: targetPosition,
            ease: 'power2.inOut'
        });
    }
}

// Duplicate Client Logos for Infinite Scroll
function duplicateClientLogos() {
    const clientsTrack = document.querySelector('.clients-track');
    if (clientsTrack) {
        const logos = clientsTrack.innerHTML;
        clientsTrack.innerHTML += logos;
    }
}

// Additional luxury animations
function addLuxuryTouches() {
    // Parallax effect for hero
    gsap.to('.hero-background img', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Floating animation for CTA buttons
    gsap.to('.cta-button', {
        y: -5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
    });
}

// Initialize luxury touches
document.addEventListener('DOMContentLoaded', addLuxuryTouches);