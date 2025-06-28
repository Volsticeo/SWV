// Stats Animation - Add this to your main JavaScript file
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateNumber = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            const showPlus = element.getAttribute('data-plus') === 'true';
            element.textContent = Math.floor(current) + (showPlus && current >= target ? '+' : '');
        }, 16);
    };

    // Create intersection observer for stats section
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateNumber(stat, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Initialize stats animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateStats();
});

// Add smooth scrolling for footer links
document.querySelectorAll('.footer-section a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});