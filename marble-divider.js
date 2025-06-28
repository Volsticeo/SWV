// Marble logo scroll animation
function handleMarbleLogoScroll() {
    const marbleDivider = document.querySelector('.marble-divider');
    const marbleLogo = document.querySelector('.marble-logo');

    if (!marbleDivider || !marbleLogo) return;

    const rect = marbleDivider.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if at least 30% of the section is visible from either direction
    const topVisible = rect.top < windowHeight * 0.7;
    const bottomVisible = rect.bottom > windowHeight * 0.3;
    const isInViewport = topVisible && bottomVisible;

    if (isInViewport) {
        marbleLogo.classList.add('active');
    } else {
        marbleLogo.classList.remove('active');
    }
}

// Add scroll event listener with throttling for better performance
let ticking = false;
function requestTick() {
    if (!ticking) {
        requestAnimationFrame(handleMarbleLogoScroll);
        ticking = true;
        setTimeout(() => { ticking = false; }, 16);
    }
}

window.addEventListener('scroll', requestTick);

// Check on page load
document.addEventListener('DOMContentLoaded', handleMarbleLogoScroll);