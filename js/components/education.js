// Education Component
function renderEducation() {
    const education = document.querySelector('.education-section');
    
    const educationItems = portfolioData.education.map(item => {
        const achievements = item.achievements.map((achievement, index) => {
            // Support both string and object format
            const achievementText = typeof achievement === 'string' ? achievement : achievement.text;
            const achievementImage = typeof achievement === 'object' && achievement.image ? achievement.image : null;
            const achievementId = `achievement-${item.id}-${index}`;
            
            return `
                <div class="achievement-item ${achievementImage ? 'clickable' : ''}" 
                     data-achievement-id="${achievementId}"
                     data-achievement-text="${achievementText.replace(/"/g, '&quot;')}"
                     ${achievementImage ? `data-achievement-image="${achievementImage.replace(/"/g, '&quot;')}"` : ''}>
                    <i class="fas fa-check-circle"></i>
                    <span>${achievementText}</span>
                    ${achievementImage ? '<i class="fas fa-image achievement-view-icon"></i>' : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="education-item">
                <div class="education-logo">
                    ${item.logo ? 
                        `<img src="${item.logo}" alt="${item.school}">` : 
                        `<i class="fas fa-university"></i>`
                    }
                </div>
                <div class="education-content">
                    <div class="education-header">
                        <div>
                            <h3 class="education-school">${item.school}</h3>
                            <p class="education-degree">${item.degree} - ${item.major}</p>
                        </div>
                        <div class="education-duration">
                            <i class="fas fa-calendar-alt"></i>
                            <span>${item.duration}</span>
                        </div>
                    </div>
                    
                    ${item.gpa ? `<div class="education-gpa">
                        <i class="fas fa-star"></i> GPA: ${item.gpa}
                    </div>` : ''}
                    
                    <p class="education-description">${item.description}</p>
                    
                    <div class="education-achievements">
                        <h4>
                            <i class="fas fa-trophy"></i>
                            Thành Tích & Giải Thưởng
                        </h4>
                        <div class="achievement-list">
                            ${achievements}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    education.innerHTML = `
        <div class="container">
            <h2 class="section-title">Học Vấn</h2>
            <p class="section-subtitle">
                Quá trình học tập và phát triển
            </p>
            <div class="education-container">
                ${educationItems}
            </div>
        </div>
        
        <!-- Achievement Modal -->
        <div id="achievement-modal" class="achievement-modal">
            <div class="achievement-modal-content">
                <button class="achievement-modal-close" onclick="closeAchievementModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="achievement-modal-body">
                    <h3 id="achievement-modal-title"></h3>
                    <div class="achievement-modal-image-container">
                        <img id="achievement-modal-image" src="" alt="Achievement Proof">
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add click event listeners to achievement items
    const achievementItems = document.querySelectorAll('.achievement-item.clickable');
    achievementItems.forEach(item => {
        item.addEventListener('click', () => {
            const achievementText = item.getAttribute('data-achievement-text');
            const achievementImage = item.getAttribute('data-achievement-image');
            if (achievementImage) {
                openAchievementModal(null, achievementText, achievementImage);
            }
        });
    });
}

// Achievement Modal Functions
function openAchievementModal(achievementId, achievementText, imageUrl) {
    const modal = document.getElementById('achievement-modal');
    if (!modal) return;
    
    document.getElementById('achievement-modal-title').textContent = achievementText;
    document.getElementById('achievement-modal-image').src = imageUrl;
    document.getElementById('achievement-modal-image').alt = achievementText;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAchievementModal() {
    const modal = document.getElementById('achievement-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('achievement-modal');
        if (modal && modal.classList.contains('active')) {
            closeAchievementModal();
        }
    }
});

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('achievement-modal');
    if (modal && e.target === modal) {
        closeAchievementModal();
    }
});

