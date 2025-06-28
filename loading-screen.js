// Immediately scroll to top before anything else
window.scrollTo(0, 0);

// Loading Screen JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const body = document.body;

    // Prevent scrolling during loading and ensure page starts from top
    body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    // Force scroll to top on page show (handles back/forward browser navigation)
    window.addEventListener('pageshow', function() {
        window.scrollTo(0, 0);
    });

    // Minimum loading time (increased from 3.5s to 5.5s)
    const minLoadingTime = 4500; // 5.5 seconds
    const startTime = Date.now();

    // Function to hide loading screen
    function hideLoadingScreen() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        setTimeout(() => {
            // Ensure page is at top before showing content
            window.scrollTo(0, 0);

            loadingScreen.classList.add('hidden');
            body.style.overflow = 'auto';

            // Remove loading screen from DOM after animation
            setTimeout(() => {
                if (loadingScreen && loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
            }, 800); // Match the CSS transition duration

        }, remainingTime);
    }

    // Wait for all images and resources to load
    if (document.readyState === 'complete') {
        hideLoadingScreen();
    } else {
        window.addEventListener('load', hideLoadingScreen);
    }

    // Backup timeout (increased to 10 seconds)
    setTimeout(() => {
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            hideLoadingScreen();
        }
    }, 10000); // 10 seconds maximum

    // Add extra glow effect on logo animation completion
    const logo = document.querySelector('.loading-logo-image');
    if (logo) {
        logo.addEventListener('animationend', function(e) {
            if (e.animationName === 'logoEntrance') {
                logo.style.filter = `
                    drop-shadow(0 0 25px rgba(215, 183, 18, 0.6))
                    drop-shadow(0 0 50px rgba(215, 183, 18, 0.3))
                    drop-shadow(0 0 75px rgba(215, 183, 18, 0.15))
                `;
            }
        });
    }
});