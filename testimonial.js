// Testimonials data with social media styling
const testimonialsData = [
    {
        name: "Sarah Mitchell",
        role: "Homeowner",
        content: "Absolutely transformed our living space! The attention to detail and understanding of our vision was incredible. Every corner now tells a story of elegance and comfort.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
        platform: "instagram",
        platformName: "Instagram",
        time: "2h ago",
        likes: "47",
        comments: "12"
    },
    {
        name: "David Chen",
        role: "Restaurant Owner",
        content: "Our restaurant's ambiance has completely elevated the dining experience. Customer compliments have tripled since the redesign. Professional excellence at its finest!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        platform: "linkedin",
        platformName: "LinkedIn",
        time: "5h ago",
        likes: "89",
        comments: "23"
    },
    {
        name: "Emma Rodriguez",
        role: "Tech Executive",
        content: "Working from home has never been this inspiring. The home office design perfectly balances productivity with comfort. Highly recommend their services!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        platform: "twitter",
        platformName: "X",
        time: "1d ago",
        likes: "156",
        comments: "34"
    },
    {
        name: "Michael Thompson",
        role: "Boutique Owner",
        content: "The retail space design has significantly improved customer flow and sales. Every element serves both aesthetic and functional purposes beautifully.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        platform: "facebook",
        platformName: "Facebook",
        time: "3d ago",
        likes: "92",
        comments: "18"
    },
    {
        name: "Lisa Park",
        role: "Hotel Manager",
        content: "Our hotel lobby now creates the perfect first impression. Guests constantly praise the sophisticated yet welcoming atmosphere. Exceptional work!",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
        platform: "instagram",
        platformName: "Instagram",
        time: "4h ago",
        likes: "78",
        comments: "15"
    },
    {
        name: "James Wilson",
        role: "Startup Founder",
        content: "The office design reflects our company culture perfectly. It's become a recruitment advantage - candidates are impressed before interviews even begin!",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        platform: "linkedin",
        platformName: "LinkedIn",
        time: "6h ago",
        likes: "134",
        comments: "29"
    },
    {
        name: "Rachel Kim",
        role: "Art Gallery Owner",
        content: "The gallery redesign has enhanced how visitors experience our exhibitions. The lighting and spatial flow now complement our artists' work perfectly.",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
        platform: "twitter",
        platformName: "X",
        time: "2d ago",
        likes: "203",
        comments: "41"
    },
    {
        name: "Mark Davis",
        role: "Real Estate Developer",
        content: "These show units are selling faster than ever. The interior design showcases each property's potential beautifully. ROI has exceeded expectations!",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
        platform: "facebook",
        platformName: "Facebook",
        time: "1w ago",
        likes: "67",
        comments: "22"
    }
];

let currentTestimonialIndex = 0;

// Touch/swipe variables
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
let isSwipeEnabled = false;

function createTestimonialCard(testimonial) {
    const platformIcons = {
        twitter: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
        facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
        linkedin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
    };

    return `
        <div class="testimonial-card fade-in">
            <div class="social-platform">
                <div class="platform-icon ${testimonial.platform}">
                    ${platformIcons[testimonial.platform]}
                </div>
                <span class="platform-name">${testimonial.platformName}</span>
            </div>
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="client-avatar">
                <div class="client-info">
                    <h4>${testimonial.name}</h4>
                    <p class="client-role">${testimonial.role}</p>
                </div>
            </div>
            <div class="testimonial-content">
                <p>"${testimonial.content}"</p>
            </div>
            <div class="testimonial-footer">
                <span class="post-time">${testimonial.time}</span>
                <div class="social-actions">
                    <div class="social-action">
                        <span>❤️</span>
                        <span>${testimonial.likes}</span>
                    </div>
                    <div class="social-action">
                        <span>💬</span>
                        <span>${testimonial.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function updateTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    const cards = grid.querySelectorAll('.testimonial-card');

    // Fade out current cards
    cards.forEach(card => {
        card.classList.add('fade-out');
        card.classList.remove('fade-in');
    });

    setTimeout(() => {
        // Get next 4 testimonials
        const nextTestimonials = [];
        for (let i = 0; i < 4; i++) {
            nextTestimonials.push(testimonialsData[(currentTestimonialIndex + i) % testimonialsData.length]);
        }

        // Update grid content
        grid.innerHTML = nextTestimonials.map(createTestimonialCard).join('');

        // Trigger fade in animation
        setTimeout(() => {
            const newCards = grid.querySelectorAll('.testimonial-card');
            newCards.forEach(card => {
                card.classList.remove('fade-out');
                card.classList.add('fade-in');
            });
        }, 50);

    }, 500);

    // Update arrow states
    updateArrowStates();
}

function goToPreviousTestimonials() {
    currentTestimonialIndex = (currentTestimonialIndex - 4 + testimonialsData.length) % testimonialsData.length;
    updateTestimonials();
}

function goToNextTestimonials() {
    currentTestimonialIndex = (currentTestimonialIndex + 4) % testimonialsData.length;
    updateTestimonials();
}

function updateArrowStates() {
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    if (prevArrow && nextArrow) {
        // Since we have more than 4 testimonials, both arrows should always be enabled
        // But we can add visual feedback for when we're at the beginning/end of the cycle
        prevArrow.classList.remove('disabled');
        nextArrow.classList.remove('disabled');
    }
}

// Check if device supports touch and screen size
function checkIfSwipeEnabled() {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    const isTabletOrMobile = window.innerWidth <= 1024; // 1024px is the tablet breakpoint from CSS
    return isTouchDevice && isTabletOrMobile;
}

// Touch event handlers
function handleTouchStart(e) {
    if (!isSwipeEnabled) return;

    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    if (!isSwipeEnabled) return;

    // Prevent default scrolling if it's a horizontal swipe
    const touchCurrentX = e.touches[0].clientX;
    const touchCurrentY = e.touches[0].clientY;
    const deltaX = Math.abs(touchCurrentX - touchStartX);
    const deltaY = Math.abs(touchCurrentY - touchStartY);

    // If horizontal swipe is more prominent than vertical, prevent default
    if (deltaX > deltaY && deltaX > 10) {
        e.preventDefault();
    }
}

function handleTouchEnd(e) {
    if (!isSwipeEnabled) return;

    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;
    handleSwipe();
}

function handleSwipe() {
    if (!isSwipeEnabled) return;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const minSwipeDistance = 50; // Minimum distance for a swipe

    // Check if it's a horizontal swipe (horizontal distance > vertical distance)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
            // Swipe right - go to previous testimonials
            goToPreviousTestimonials();
        } else {
            // Swipe left - go to next testimonials
            goToNextTestimonials();
        }
    }
}

// Setup swipe functionality
function setupSwipeEvents() {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const testimonialsGrid = document.getElementById('testimonialsGrid');

    if (testimonialsContainer && testimonialsGrid) {
        // Add touch events to the container
        testimonialsContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
        testimonialsContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
        testimonialsContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

        // Also add to the grid for better coverage
        testimonialsGrid.addEventListener('touchstart', handleTouchStart, { passive: true });
        testimonialsGrid.addEventListener('touchmove', handleTouchMove, { passive: false });
        testimonialsGrid.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
}

// Update swipe enabled state on window resize
function updateSwipeState() {
    isSwipeEnabled = checkIfSwipeEnabled();
}

function initializeTestimonials() {
    // Initial load
    updateTestimonials();

    // Setup arrow navigation
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    if (prevArrow) {
        prevArrow.addEventListener('click', goToPreviousTestimonials);
    }

    if (nextArrow) {
        nextArrow.addEventListener('click', goToNextTestimonials);
    }

    // Update arrow states
    updateArrowStates();

    // Setup swipe functionality
    updateSwipeState();
    setupSwipeEvents();

    // Listen for window resize to update swipe state
    window.addEventListener('resize', updateSwipeState);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTestimonials();
});