// Hobbies Component with Banner Carousel
function renderHobbies() {
    const hobbies = document.querySelector('.hobbies-section');
    
    // Create banner slides
    const bannerSlides = portfolioData.hobbies.map((hobby, index) => {
        const activities = hobby.activities.slice(0, 3).map(activity => `
            <span class="activity-tag">${activity}</span>
        `).join('');

        return `
            <div class="hobby-banner-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                <div class="hobby-banner-image" style="background-image: url('${hobby.images[0]}');">
                    <div class="hobby-banner-overlay"></div>
                    <div class="hobby-banner-content">
                        <div class="hobby-banner-icon">
                            <i class="fas ${hobby.icon}"></i>
                        </div>
                        <div class="hobby-banner-info">
                            <h3 class="hobby-banner-name">${hobby.name}</h3>
                            <span class="hobby-banner-level">${hobby.level}</span>
                            <p class="hobby-banner-description">${hobby.description}</p>
                            <div class="hobby-banner-activities">
                                ${activities}
                            </div>
                            <button class="hobby-banner-btn" onclick="openHobbyModal(${index})">
                                <i class="fas fa-images"></i> Xem Album
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Create thumbnails
    const thumbnails = portfolioData.hobbies.map((hobby, index) => `
        <div class="hobby-thumbnail-item ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="goToHobbySlide(${index})">
            <img src="${hobby.images[0]}" alt="${hobby.name}">
            <div class="thumbnail-overlay">
                <i class="fas ${hobby.icon}"></i>
            </div>
        </div>
    `).join('');

    hobbies.innerHTML = `
        <div class="container">
            <h2 class="section-title">Sở Thích</h2>
            <p class="section-subtitle">
                Những gì tôi yêu thích làm ngoài coding
            </p>
            
            <!-- Banner Carousel -->
            <div class="hobbies-banner-container">
                <div class="hobbies-banner-wrapper">
                    <div class="hobbies-banner-track" id="hobbiesBannerTrack">
                        ${bannerSlides}
                    </div>
                    
                    <!-- Navigation Buttons -->
                    <button class="hobby-banner-nav hobby-banner-prev" onclick="hobbyBannerPrev()">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="hobby-banner-nav hobby-banner-next" onclick="hobbyBannerNext()">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    
                    <!-- Dots Indicator -->
                    <div class="hobby-banner-dots" id="hobbyBannerDots">
                        ${portfolioData.hobbies.map((_, i) => `
                            <span class="hobby-dot ${i === 0 ? 'active' : ''}" onclick="goToHobbySlide(${i})"></span>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Thumbnails -->
                <div class="hobbies-thumbnails-container">
                    ${thumbnails}
                </div>
            </div>
        </div>
        
        <!-- Modal for Hobby Images -->
        <div id="hobby-modal" class="hobby-modal">
            <div class="hobby-modal-content">
                <button class="hobby-modal-close" onclick="closeHobbyModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="hobby-modal-header">
                    <h2 id="modal-hobby-title"></h2>
                    <p id="modal-hobby-description"></p>
                </div>
                <div class="hobby-modal-slider">
                    <!-- Image Counter -->
                    <div class="hobby-image-counter" id="hobby-image-counter">
                        <span class="current-slide">1</span> / <span class="total-slides">5</span>
                    </div>
                    
                    <!-- Main Slider -->
                    <div class="hobby-slider-container">
                        <!-- Navigation Buttons - Inside Container -->
                        <button class="hobby-slider-btn hobby-prev-btn" onclick="hobbyPrevSlide()">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        
                        <div class="hobby-slider-track" id="hobby-slider-track">
                            <!-- Images will be inserted here -->
                        </div>
                        
                        <button class="hobby-slider-btn hobby-next-btn" onclick="hobbyNextSlide()">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        
                        <!-- Zoom Hint -->
                        <div class="hobby-zoom-hint">
                            <i class="fas fa-search-plus"></i>
                            <span>Double-click để phóng to</span>
                        </div>
                    </div>
                    
                    <!-- Thumbnail Strip -->
                    <div class="hobby-thumbnails" id="hobby-thumbnails">
                        <!-- Thumbnails will be inserted here -->
                    </div>
                    
                    <!-- Dots Navigation -->
                    <div class="hobby-slider-dots" id="hobby-slider-dots">
                        <!-- Dots will be inserted here -->
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Global variables for hobby slider
let currentHobbyIndex = 0;
let currentHobbySlide = 0;
let hobbyAutoPlayInterval;
let hobbyBannerAutoPlayInterval;

// Open Modal
function openHobbyModal(hobbyIndex) {
    const hobby = portfolioData.hobbies[hobbyIndex];
    const modal = document.getElementById('hobby-modal');
    const sliderTrack = document.getElementById('hobby-slider-track');
    const dotsContainer = document.getElementById('hobby-slider-dots');
    const thumbnailsContainer = document.getElementById('hobby-thumbnails');
    
    currentHobbyIndex = hobbyIndex;
    currentHobbySlide = 0;
    
    // Set title and description
    document.getElementById('modal-hobby-title').innerHTML = `
        <i class="fas ${hobby.icon}"></i> ${hobby.name}
    `;
    document.getElementById('modal-hobby-description').textContent = hobby.description;
    
    // Update counter
    document.querySelector('.total-slides').textContent = hobby.images.length;
    document.querySelector('.current-slide').textContent = '1';
    
    // Create slider images with double-click zoom
    const images = hobby.images.map((img, index) => `
        <div class="hobby-slide ${index === 0 ? 'active loaded' : 'loading'}" 
             ondblclick="toggleImageZoom(event)"
             oncontextmenu="event.preventDefault();">
            <img src="${img}" alt="${hobby.name} ${index + 1}" loading="lazy" 
                 onload="this.parentElement.classList.remove('loading'); this.parentElement.classList.add('loaded');"
                 onerror="this.parentElement.classList.remove('loading'); this.parentElement.classList.add('loaded');">
        </div>
    `).join('');
    
    // Create thumbnails
    const thumbnails = hobby.images.map((img, index) => `
        <div class="hobby-thumbnail ${index === 0 ? 'active' : ''}" onclick="hobbyGoToSlide(${index})">
            <img src="${img}" alt="Thumbnail ${index + 1}">
            <div class="thumbnail-overlay">${index + 1}</div>
        </div>
    `).join('');
    
    // Create dots
    const dots = hobby.images.map((_, index) => `
        <span class="hobby-dot ${index === 0 ? 'active' : ''}" onclick="hobbyGoToSlide(${index})"></span>
    `).join('');
    
    sliderTrack.innerHTML = images;
    thumbnailsContainer.innerHTML = thumbnails;
    dotsContainer.innerHTML = dots;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add swipe gestures
    addSwipeGestures();
    
    // Start autoplay (will pause on user interaction)
    startHobbyAutoPlay();
    
    // Add keyboard navigation
    addKeyboardNavigation();
}

// Close Modal
function closeHobbyModal() {
    const modal = document.getElementById('hobby-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    stopHobbyAutoPlay();
    isAutoPlayPaused = false;
    currentZoomedSlide = null;
}

// Slider functions
function updateHobbySlider(slideIndex) {
    const hobby = portfolioData.hobbies[currentHobbyIndex];
    const slides = document.querySelectorAll('.hobby-slide');
    const dots = document.querySelectorAll('.hobby-dot');
    const thumbnails = document.querySelectorAll('.hobby-thumbnail');
    const track = document.getElementById('hobby-slider-track');
    
    if (!slides.length) return;
    
    // Remove active classes
    slides.forEach(slide => slide.classList.remove('active', 'entering', 'zoomed'));
    dots.forEach(dot => dot.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Transform track
    const offset = -slideIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Add active classes
    slides[slideIndex].classList.add('active', 'entering');
    dots[slideIndex].classList.add('active');
    if (thumbnails[slideIndex]) {
        thumbnails[slideIndex].classList.add('active');
    }
    
    // Update counter
    const currentSlideEl = document.querySelector('.current-slide');
    if (currentSlideEl) {
        currentSlideEl.textContent = slideIndex + 1;
    }
    
    // Scroll thumbnail into view (only scroll the thumbnail container, not the page)
    if (thumbnails[slideIndex]) {
        const thumbnailsContainer = document.getElementById('hobby-thumbnails');
        if (thumbnailsContainer) {
            const thumbnail = thumbnails[slideIndex];
            const containerRect = thumbnailsContainer.getBoundingClientRect();
            const thumbnailRect = thumbnail.getBoundingClientRect();
            const scrollLeft = thumbnailsContainer.scrollLeft;
            const thumbnailLeft = thumbnailRect.left - containerRect.left + scrollLeft;
            const thumbnailWidth = thumbnailRect.width;
            const containerWidth = containerRect.width;
            
            // Calculate scroll position to center the thumbnail
            const targetScroll = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
            
            thumbnailsContainer.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    }
    
    currentHobbySlide = slideIndex;
    
    setTimeout(() => {
        slides[slideIndex].classList.remove('entering');
    }, 600);
}

function hobbyNextSlide() {
    // Remove zoom if active
    if (currentZoomedSlide) {
        currentZoomedSlide.classList.remove('zoomed');
        currentZoomedSlide = null;
    }
    
    pauseOnInteraction();
    
    const hobby = portfolioData.hobbies[currentHobbyIndex];
    const nextIndex = (currentHobbySlide + 1) % hobby.images.length;
    updateHobbySlider(nextIndex);
}

function hobbyPrevSlide() {
    // Remove zoom if active
    if (currentZoomedSlide) {
        currentZoomedSlide.classList.remove('zoomed');
        currentZoomedSlide = null;
    }
    
    pauseOnInteraction();
    
    const hobby = portfolioData.hobbies[currentHobbyIndex];
    const prevIndex = (currentHobbySlide - 1 + hobby.images.length) % hobby.images.length;
    updateHobbySlider(prevIndex);
}

function hobbyGoToSlide(index) {
    // Remove zoom if active
    if (currentZoomedSlide) {
        currentZoomedSlide.classList.remove('zoomed');
        currentZoomedSlide = null;
    }
    
    pauseOnInteraction();
    
    updateHobbySlider(index);
}

let isAutoPlayPaused = false;

function startHobbyAutoPlay() {
    if (isAutoPlayPaused) return;
    stopHobbyAutoPlay(); // Clear any existing interval
    hobbyAutoPlayInterval = setInterval(hobbyNextSlide, 4000);
}

function stopHobbyAutoPlay() {
    if (hobbyAutoPlayInterval) {
        clearInterval(hobbyAutoPlayInterval);
        hobbyAutoPlayInterval = null;
    }
}

function pauseHobbyAutoPlay() {
    isAutoPlayPaused = true;
    stopHobbyAutoPlay();
}

function resumeHobbyAutoPlay() {
    isAutoPlayPaused = false;
    startHobbyAutoPlay();
}

function restartHobbyAutoPlay() {
    if (!isAutoPlayPaused) {
        stopHobbyAutoPlay();
        startHobbyAutoPlay();
    }
}

// Pause autoplay on user interaction
function pauseOnInteraction() {
    pauseHobbyAutoPlay();
    // Resume after 5 seconds of no interaction
    setTimeout(() => {
        if (document.getElementById('hobby-modal')?.classList.contains('active')) {
            resumeHobbyAutoPlay();
        }
    }, 5000);
}

// Simplified zoom function - double click to zoom
let currentZoomedSlide = null;

function toggleImageZoom(event) {
    event.preventDefault();
    const slide = event.currentTarget || event.target.closest('.hobby-slide');
    if (!slide) return;
    
    const img = slide.querySelector('img');
    if (!img) return;
    
    const isCurrentlyZoomed = slide.classList.contains('zoomed');
    
    // Remove zoom from all slides
    document.querySelectorAll('.hobby-slide').forEach(s => {
        s.classList.remove('zoomed');
        const imgEl = s.querySelector('img');
        if (imgEl) {
            imgEl.style.transform = '';
        }
    });
    
    // Toggle zoom on clicked slide
    if (!isCurrentlyZoomed) {
        slide.classList.add('zoomed');
        stopHobbyAutoPlay(); // Pause autoplay when zoomed
        currentZoomedSlide = slide;
    } else {
        startHobbyAutoPlay(); // Resume autoplay
        currentZoomedSlide = null;
    }
}

// Keyboard navigation
let keyboardNavigationAdded = false;

function addKeyboardNavigation() {
    if (keyboardNavigationAdded) return;
    keyboardNavigationAdded = true;
    
    document.addEventListener('keydown', handleKeyboardNavigation);
}

function handleKeyboardNavigation(e) {
    const modal = document.getElementById('hobby-modal');
    if (!modal.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeHobbyModal();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            hobbyPrevSlide();
            break;
        case 'ArrowRight':
            e.preventDefault();
            hobbyNextSlide();
            break;
    }
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('hobby-modal');
    if (e.target === modal) {
        closeHobbyModal();
    }
});

// Swipe gestures for mobile
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

function addSwipeGestures() {
    const sliderContainer = document.querySelector('.hobby-slider-container');
    if (!sliderContainer) return;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Only handle horizontal swipes (ignore if vertical swipe is larger)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        // Remove zoom if active
        if (currentZoomedSlide) {
            currentZoomedSlide.classList.remove('zoomed');
            currentZoomedSlide = null;
            return; // Don't navigate if zoomed
        }
        
        if (deltaX > 0) {
            // Swipe right - go to previous
            hobbyPrevSlide();
        } else {
            // Swipe left - go to next
            hobbyNextSlide();
        }
    }
}

// ========================================
// HOBBY BANNER CAROUSEL FUNCTIONS
// ========================================

let currentHobbyBannerIndex = 0;

function initHobbyBanner() {
    // Auto-play banner
    startHobbyBannerAutoPlay();
    
    // Pause on hover
    const bannerContainer = document.querySelector('.hobbies-banner-container');
    if (bannerContainer) {
        bannerContainer.addEventListener('mouseenter', stopHobbyBannerAutoPlay);
        bannerContainer.addEventListener('mouseleave', startHobbyBannerAutoPlay);
    }
}

function updateHobbyBanner(index) {
    const slides = document.querySelectorAll('.hobby-banner-slide');
    const thumbnails = document.querySelectorAll('.hobby-thumbnail-item');
    const dots = document.querySelectorAll('.hobby-banner-dots .hobby-dot');
    const track = document.getElementById('hobbiesBannerTrack');
    
    if (!slides.length || !track) return;
    
    currentHobbyBannerIndex = index;
    
    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    // Update thumbnails
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    // Transform track
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Scroll thumbnail into view (only scroll the thumbnail container, not the page)
    if (thumbnails[index]) {
        const thumbnailsContainer = document.querySelector('.hobbies-thumbnails-container');
        if (thumbnailsContainer) {
            const thumbnail = thumbnails[index];
            const containerRect = thumbnailsContainer.getBoundingClientRect();
            const thumbnailRect = thumbnail.getBoundingClientRect();
            const scrollLeft = thumbnailsContainer.scrollLeft;
            const thumbnailLeft = thumbnailRect.left - containerRect.left + scrollLeft;
            const thumbnailWidth = thumbnailRect.width;
            const containerWidth = containerRect.width;
            
            // Calculate scroll position to center the thumbnail
            const targetScroll = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
            
            thumbnailsContainer.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    }
}

function hobbyBannerNext() {
    const total = portfolioData.hobbies.length;
    const nextIndex = (currentHobbyBannerIndex + 1) % total;
    updateHobbyBanner(nextIndex);
    restartHobbyBannerAutoPlay();
}

function hobbyBannerPrev() {
    const total = portfolioData.hobbies.length;
    const prevIndex = (currentHobbyBannerIndex - 1 + total) % total;
    updateHobbyBanner(prevIndex);
    restartHobbyBannerAutoPlay();
}

function goToHobbySlide(index) {
    updateHobbyBanner(index);
    restartHobbyBannerAutoPlay();
}

function startHobbyBannerAutoPlay() {
    if (hobbyBannerAutoPlayInterval) clearInterval(hobbyBannerAutoPlayInterval);
    hobbyBannerAutoPlayInterval = setInterval(hobbyBannerNext, 4000);
}

function stopHobbyBannerAutoPlay() {
    if (hobbyBannerAutoPlayInterval) {
        clearInterval(hobbyBannerAutoPlayInterval);
        hobbyBannerAutoPlayInterval = null;
    }
}

function restartHobbyBannerAutoPlay() {
    stopHobbyBannerAutoPlay();
    startHobbyBannerAutoPlay();
}

