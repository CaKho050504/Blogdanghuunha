// Hero Component with Typing Effect and Carousel
function renderHero() {
    const hero = document.querySelector('.hero-section');
    const { name, title, description, image } = portfolioData.personal;
    const social = portfolioData.social;

    // Các nội dung sẽ chạy luân phiên (từ data.js)
    const rotatingTexts = portfolioData.rotatingTexts || [
        "Full Stack Developer",
        "UI/UX Designer", 
        "Creative Developer",
        "Problem Solver"
    ];

    const socialLinks = Object.entries(social)
        .filter(([_, url]) => url)
        .map(([platform, url]) => {
            const icons = {
                github: 'fa-github',
                linkedin: 'fa-linkedin',
                twitter: 'fa-twitter',
                facebook: 'fa-facebook',
                instagram: 'fa-instagram'
            };
            return `<a href="${url}" target="_blank" class="social-link" title="${platform}">
                <i class="fab ${icons[platform]}"></i>
            </a>`;
        }).join('');

    hero.innerHTML = `
        <!-- Hero Content -->
        <div class="container hero-content fade-in-up">
            <div class="hero-text-side">
                <p class="hero-greeting">👋 Xin chào, Tôi là</p>
                <h1 class="hero-title">${name}</h1>
                <h2 class="hero-subtitle">${rotatingTexts[0]}</h2>
                <p class="hero-description">${description}</p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-outline">Xem Dự Án</a>
                </div>
                <div class="hero-social">
                    ${socialLinks}
                </div>
            </div>
            <div class="hero-image-side">
                <div class="hero-image-container">
                    <img src="${image}" alt="${name}" class="hero-image">
                </div>
            </div>
        </div>
    `;

    // Typing effect đã tắt - chỉ hiển thị text tĩnh
}

// Generate Hero Pixel Rain
function generateHeroPixelRain() {
    const container = document.getElementById('heroPixelRain');
    if (!container) return;
    
    const dropCount = 30;
    
    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'pixel-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 3 + 2) + 's';
        drop.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(drop);
    }
}

// Generate Hero Pixel Sparkles
function generateHeroPixelSparkles() {
    const container = document.getElementById('heroPixelSparkles');
    if (!container) return;
    
    const sparkleCount = 20;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'pixel-sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDuration = (Math.random() * 2 + 1) + 's';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(sparkle);
    }
}

// Generate Hero Pixel Boxes
function generateHeroPixelBoxes() {
    const container = document.getElementById('heroPixelBoxes');
    if (!container) return;
    
    const boxCount = 8;
    
    for (let i = 0; i < boxCount; i++) {
        const box = document.createElement('div');
        box.className = 'pixel-box';
        box.style.left = Math.random() * 90 + '%';
        box.style.top = Math.random() * 90 + '%';
        box.style.animationDuration = (Math.random() * 10 + 10) + 's';
        box.style.animationDelay = i * 1.5 + 's';
        container.appendChild(box);
    }
}

