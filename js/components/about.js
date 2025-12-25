// About Component
function renderAbout() {
    const about = document.querySelector('.about-section');
    const { title, description, info, images } = portfolioData.about;

    const paragraphs = description.map(p => `<p>${p}</p>`).join('');
    
    const infoItems = info.map(item => `
        <div class="info-item">
            <i class="fas ${item.icon}"></i>
            <div>
                <strong>${item.label}</strong>
                <span>${item.value}</span>
            </div>
        </div>
    `).join('');

    // Create image slider with banner style
    const sliderImages = images.map((img, index) => `
        <div class="slider-image ${index === 0 ? 'active' : ''}">
            <img src="${img}" alt="About Me ${index + 1}">
        </div>
    `).join('');

    const sliderDots = images.map((_, index) => `
        <span class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
    `).join('');

    about.innerHTML = `
        <div class="container">
            <h2 class="section-title">${title}</h2>
            <div class="about-content">
                <div class="about-slider-container">
                    <div class="about-slider">
                        <div class="slider-track">
                            ${sliderImages}
                        </div>
                    </div>
                    <div class="slider-controls">
                        <button class="slider-btn prev-btn">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="slider-btn next-btn">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    <div class="slider-dots">
                        ${sliderDots}
                    </div>
                </div>
                <div class="about-text">
                    <h3>Web Developer & Designer</h3>
                    ${paragraphs}
                    <div class="about-info">
                        ${infoItems}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Initialize slider
    initAboutSlider();
}

// About Slider Logic - Banner Style (Horizontal Slide)
function initAboutSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    const images = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    let autoPlayInterval;
    let isTransitioning = false;

    function updateSlider(index, direction = 'next') {
        if (isTransitioning) return;
        isTransitioning = true;

        // Remove all classes
        images.forEach(img => {
            img.classList.remove('active', 'entering', 'leaving');
        });
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Calculate transform
        const offset = -index * 100;
        sliderTrack.style.transform = `translateX(${offset}%)`;
        
        // Add classes for animation
        images[index].classList.add('active', 'entering');
        dots[index].classList.add('active');
        
        currentIndex = index;

        // Reset transition lock
        setTimeout(() => {
            isTransitioning = false;
            images[index].classList.remove('entering');
        }, 600);
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % images.length;
        updateSlider(nextIndex, 'next');
    }

    function prevSlide() {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider(prevIndex, 'prev');
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 3500); // Change slide every 3.5 seconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function restartAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        restartAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        restartAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index !== currentIndex) {
                const direction = index > currentIndex ? 'next' : 'prev';
                updateSlider(index, direction);
                restartAutoPlay();
            }
        });
    });

    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    sliderTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    });

    sliderTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left
            } else {
                prevSlide(); // Swipe right
            }
        }
    }

    // Pause on hover (desktop)
    sliderTrack.addEventListener('mouseenter', stopAutoPlay);
    sliderTrack.addEventListener('mouseleave', startAutoPlay);

    // Start auto play
    startAutoPlay();
}

