// Skills Component
function renderSkills() {
    const skills = document.querySelector('.skills-section');
    
    const skillCategories = portfolioData.skills.map(category => {
        const skillItems = category.items.map(skill => `
            <div class="skill-item" data-level="${skill.level}">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="--skill-width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');

        return `
            <div class="skill-category">
                <div class="skill-category-header">
                    <div class="skill-category-icon">
                        <i class="fas ${category.icon}"></i>
                    </div>
                    <h3>${category.category}</h3>
                </div>
                <div class="skill-list">
                    ${skillItems}
                </div>
            </div>
        `;
    }).join('');

    skills.innerHTML = `
        <div class="container">
            <h2 class="section-title">Kỹ Năng</h2>
            <p class="section-subtitle">
                Những công nghệ và công cụ tôi sử dụng hàng ngày
            </p>
            <div class="skills-container">
                ${skillCategories}
            </div>
        </div>
    `;

    // Animate skill bars on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(skills);
}

