// Gallery Modal System
class GalleryModal {
    constructor() {
        this.modal = document.getElementById('galleryModal');
        this.modalImageContainer = document.querySelector('.modal-image-container');
        this.modalInfo = document.querySelector('.modal-info');
        this.closeBtn = document.querySelector('.modal-close');
        this.currentImages = [];
        this.currentIndex = 0;
        this.currentProject = null;

        // Project configurations
        this.projectConfigs = {
            'modern-living': {
                title: 'Residential Spaces',
                description: 'Thoughtfully designed homes that reflect your lifestyle and taste. Our residential projects blend comfort with elegance, creating spaces that truly feel like home while maintaining the highest standards of luxury and functionality.',
                folder: 'residential-spaces',
                details: {
                    'Project Type': 'Residential Interior',
                    'Style': 'Modern Contemporary',
                    'Timeline': 'N/A',
                    'Services': 'Full Interior Design'
                }
            },
            'chic-office': {
                title: 'Elevation Design',
                description: 'Striking facades that blend form, function, and visual appeal. Our elevation designs create memorable first impressions while ensuring structural integrity and environmental harmony.',
                folder: 'elevation-design',
                details: {
                    'Project Type': 'Architectural Design',
                    'Style': 'Contemporary',
                    'Timeline': 'N/A',
                    'Services': 'Elevation & Facade Design'
                }
            },
            'elegant-kitchen': {
                title: 'Commercial Spaces',
                description: 'Smart, stylish designs that enhance business identity and flow. Our commercial projects focus on creating environments that boost productivity while reflecting your brand values.',
                folder: 'commercial-spaces',
                details: {
                    'Project Type': 'Commercial Interior',
                    'Style': 'Professional Modern',
                    'Timeline': 'N/A',
                    'Services': 'Complete Fit-out'
                }
            },
            'luxury-bedroom': {
                title: 'Clinical Spaces',
                description: 'Clean, functional environments tailored for care and comfort. Our clinical designs prioritize hygiene, efficiency, and patient comfort while maintaining aesthetic appeal.',
                folder: 'clinical-spaces',
                details: {
                    'Project Type': 'Healthcare Design',
                    'Style': 'Minimalist Functional',
                    'Timeline': 'N/A',
                    'Services': 'Specialized Medical Fit-out'
                }
            },
            'minimalist-dining': {
                title: 'Landscape Design',
                description: 'Outdoor spaces crafted for beauty, balance, and usability. Our landscape designs create harmonious connections between built and natural environments.',
                folder: 'landscape-design',
                details: {
                    'Project Type': 'Landscape Architecture',
                    'Style': 'Natural Contemporary',
                    'Timeline': 'N/A',
                    'Services': 'Complete Landscape Design'
                }
            },
            'contemporary-lounge': {
                title: 'Office Spaces',
                description: 'Productive workspaces designed for focus, flow, and brand presence. Our office designs enhance collaboration while providing spaces for concentrated work.',
                folder: 'office-spaces',
                details: {
                    'Project Type': 'Corporate Interior',
                    'Style': 'Modern Professional',
                    'Timeline': 'N/A',
                    'Services': 'Office Interior Design'
                }
            },
            'boutique-retail': {
                title: 'Hospitality Design',
                description: 'Inviting interiors that elevate guest experience and ambiance. Our hospitality designs create memorable experiences that keep guests coming back.',
                folder: 'hospitality-design',
                details: {
                    'Project Type': 'Hospitality Interior',
                    'Style': 'Luxury Contemporary',
                    'Timeline': 'N/A',
                    'Services': 'Complete Hotel/Restaurant Design'
                }
            },
            'theater-design': {
                title: 'Theater Design',
                description: 'Premium spaces designed for exceptional viewing experiences and comfort. Every detail is crafted to create an atmosphere of refined luxury and unparalleled service.',
                folder: 'theater-design',
                details: {
                    'Project Type': 'Luxury Hospitality',
                    'Style': 'Ultra-Premium',
                    'Timeline': 'N/A',
                    'Services': 'Luxury Interior & Experience Design'
                }
            }
        };

        this.init();
    }

    init() {
        this.bindEvents();
        this.createModalStructure();
    }

    createModalStructure() {
        // Update modal structure
        this.modalImageContainer.innerHTML = `
            <div class="modal-image-slider">
                <img id="modalImage" src="" alt="" style="display: none;">
            </div>
            <button class="modal-nav prev" id="modalPrev">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
            </button>
            <button class="modal-nav next" id="modalNext">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
            </button>
            <div class="modal-counter" id="modalCounter">1 / 1</div>
            <div class="modal-thumbnails" id="modalThumbnails"></div>
        `;

        // Get references to new elements
        this.modalImage = document.getElementById('modalImage');
        this.modalPrev = document.getElementById('modalPrev');
        this.modalNext = document.getElementById('modalNext');
        this.modalCounter = document.getElementById('modalCounter');
        this.modalThumbnails = document.getElementById('modalThumbnails');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalDescription = document.getElementById('modalDescription');
    }

    bindEvents() {
        // Gallery item clicks
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const project = item.getAttribute('data-project');
                this.openModal(project);
            });
        });

        // Close modal events
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.modal.style.display === 'block') {
                switch(e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'ArrowLeft':
                        this.previousImage();
                        break;
                    case 'ArrowRight':
                        this.nextImage();
                        break;
                }
            }
        });
    }

    async openModal(project) {
        this.currentProject = project;
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Show loading state
        this.showLoading();

        // Load project info
        this.loadProjectInfo(project);

        // Load images
        await this.loadProjectImages(project);

        // Bind navigation events after images are loaded
        this.bindNavigationEvents();
    }

    showLoading() {
        this.modalImageContainer.innerHTML = `
            <div class="modal-loading">
                <div class="loading-spinner"></div>
                <div class="loading-text">Curating Gallery</div>
                <div class="loading-subtext">Preparing your visual experience...</div>
            </div>
        `;
    }

    showError() {
        this.modalImageContainer.innerHTML = `
            <div class="modal-error">
                <div class="error-icon">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"/>
                        <path d="M30 35 Q50 15 70 35 Q70 55 50 75 Q30 55 30 35" fill="currentColor" opacity="0.1"/>
                        <circle cx="35" cy="40" r="3" fill="currentColor"/>
                        <circle cx="65" cy="40" r="3" fill="currentColor"/>
                        <path d="M35 55 Q50 65 65 55" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
                        <path d="M20 20 L80 20 L70 10 L30 10 Z" fill="currentColor" opacity="0.6"/>
                        <rect x="45" y="8" width="10" height="4" fill="currentColor" opacity="0.8"/>
                    </svg>
                </div>
                <div class="error-title">Pictures Being Cooked</div>
                <div class="error-message">
                    Our master chefs are still preparing this visual feast. 
                    The images are being crafted with the finest attention to detail, 
                    just like our designs.
                </div>
                <div class="error-decoration">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
    }

    loadProjectInfo(project) {
        const config = this.projectConfigs[project];
        if (!config) return;

        // Update modal info
        this.modalInfo.innerHTML = `
            <h3 id="modalTitle">${config.title}</h3>
            <p id="modalDescription">${config.description}</p>
            <div class="project-details">
                ${Object.entries(config.details).map(([key, value]) => `
                    <div class="detail-item">
                        <span class="detail-label">${key}:</span>
                        <span class="detail-value">${value}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    async loadProjectImages(project) {
        const config = this.projectConfigs[project];
        if (!config) {
            this.showError();
            return;
        }

        try {
            // Generate image paths (assuming 6-12 images per project)
            const imagePaths = [];
            const folderPath = `Assets/images/${config.folder}`;

            // Common image extensions to try
            const extensions = ['jpg', 'jpeg', 'png', 'webp'];
            const maxImages = 12; // Maximum images to try loading

            for (let i = 1; i <= maxImages; i++) {
                for (const ext of extensions) {
                    const imagePath = `${folderPath}/photo${i}.${ext}`;
                    if (await this.imageExists(imagePath)) {
                        imagePaths.push(imagePath);
                        break; // Found image with this number, move to next
                    }
                }
            }

            // If no images found, show error
            if (imagePaths.length === 0) {
                this.showError();
                return;
            }

            this.currentImages = imagePaths;
            this.currentIndex = 0;
            this.displayImages();

        } catch (error) {
            console.error('Error loading project images:', error);
            this.showError();
        }
    }

    async imageExists(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    }

    displayImages() {
        if (this.currentImages.length === 0) {
            this.showError();
            return;
        }

        // Recreate the image container structure
        this.modalImageContainer.innerHTML = `
            <div class="modal-image-slider">
                <img id="modalImage" src="${this.currentImages[this.currentIndex]}" alt="Project Image">
            </div>
            <button class="modal-nav prev" id="modalPrev">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
            </button>
            <button class="modal-nav next" id="modalNext">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
            </button>
            <div class="modal-counter" id="modalCounter">${this.currentIndex + 1} / ${this.currentImages.length}</div>
            <div class="modal-thumbnails" id="modalThumbnails"></div>
        `;

        // Update references
        this.modalImage = document.getElementById('modalImage');
        this.modalPrev = document.getElementById('modalPrev');
        this.modalNext = document.getElementById('modalNext');
        this.modalCounter = document.getElementById('modalCounter');
        this.modalThumbnails = document.getElementById('modalThumbnails');

        // Generate thumbnails
        this.generateThumbnails();
        this.updateNavigationState();
    }

    generateThumbnails() {
        const thumbnailsHTML = this.currentImages.map((image, index) => `
            <img src="${image}" 
                 alt="Thumbnail ${index + 1}" 
                 class="thumbnail ${index === this.currentIndex ? 'active' : ''}"
                 data-index="${index}">
        `).join('');

        this.modalThumbnails.innerHTML = thumbnailsHTML;

        // Bind thumbnail clicks
        this.modalThumbnails.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                this.goToImage(index);
            });
        });
    }

    bindNavigationEvents() {
        if (this.modalPrev) {
            this.modalPrev.addEventListener('click', () => this.previousImage());
        }
        if (this.modalNext) {
            this.modalNext.addEventListener('click', () => this.nextImage());
        }
    }

    previousImage() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateImage();
        }
    }

    nextImage() {
        if (this.currentIndex < this.currentImages.length - 1) {
            this.currentIndex++;
            this.updateImage();
        }
    }

    goToImage(index) {
        if (index >= 0 && index < this.currentImages.length) {
            this.currentIndex = index;
            this.updateImage();
        }
    }

    updateImage() {
        if (this.modalImage) {
            // Add fade transition
            this.modalImage.style.opacity = '0';

            setTimeout(() => {
                this.modalImage.src = this.currentImages[this.currentIndex];
                this.modalImage.style.opacity = '1';
            }, 150);
        }

        this.updateCounter();
        this.updateThumbnails();
        this.updateNavigationState();
    }

    updateCounter() {
        if (this.modalCounter) {
            this.modalCounter.textContent = `${this.currentIndex + 1} / ${this.currentImages.length}`;
        }
    }

    updateThumbnails() {
        if (this.modalThumbnails) {
            const thumbnails = this.modalThumbnails.querySelectorAll('.thumbnail');
            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle('active', index === this.currentIndex);
            });

            // Scroll active thumbnail into view
            const activeThumb = thumbnails[this.currentIndex];
            if (activeThumb) {
                activeThumb.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }

    updateNavigationState() {
        if (this.modalPrev) {
            this.modalPrev.disabled = this.currentIndex === 0;
        }
        if (this.modalNext) {
            this.modalNext.disabled = this.currentIndex === this.currentImages.length - 1;
        }
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = '';
        this.currentImages = [];
        this.currentIndex = 0;
        this.currentProject = null;
    }

    // Touch/swipe support for mobile
    initTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        this.modalImageContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        this.modalImageContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;

            const deltaX = endX - startX;
            const deltaY = endY - startY;

            // Only process horizontal swipes that are more horizontal than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.previousImage();
                } else {
                    this.nextImage();
                }
            }
        }, { passive: true });
    }

    // Preload adjacent images for better performance
    preloadAdjacentImages() {
        const preloadImage = (src) => {
            const img = new Image();
            img.src = src;
        };

        // Preload previous and next images
        if (this.currentIndex > 0) {
            preloadImage(this.currentImages[this.currentIndex - 1]);
        }
        if (this.currentIndex < this.currentImages.length - 1) {
            preloadImage(this.currentImages[this.currentIndex + 1]);
        }
    }
}

// Enhanced initialization with additional features
document.addEventListener('DOMContentLoaded', function() {
    const galleryModal = new GalleryModal();

    // Initialize touch support
    galleryModal.initTouchSupport();

    // Add image loading optimization
    const originalUpdateImage = galleryModal.updateImage.bind(galleryModal);
    galleryModal.updateImage = function() {
        originalUpdateImage();
        this.preloadAdjacentImages();
    };

    // Add window resize handler for responsive adjustments
    window.addEventListener('resize', () => {
        if (galleryModal.modal && galleryModal.modal.style.display === 'block') {
            // Refresh thumbnails display on resize
            setTimeout(() => {
                galleryModal.updateThumbnails();
            }, 100);
        }
    });
});
