// Certificates Component
function renderCertificates() {
    const certificates = document.querySelector('.certificates-section');
    
    // Get unique types
    const types = ['all', ...new Set(portfolioData.certificates.map(c => c.type))];
    
    const filterButtons = types.map(type => {
        const typeNames = {
            'all': 'Tất Cả',
            'language': 'Ngoại Ngữ',
            'computer': 'Tin Học',
            'online': 'Khóa Học'
        };
        
        return `
            <button class="certificate-filter-btn ${type === 'all' ? 'active' : ''}" 
                    data-filter="${type}">
                ${typeNames[type] || type}
            </button>
        `;
    }).join('');

    const certificateCards = portfolioData.certificates.map((cert, index) => {
        return `
            <div class="certificate-card" data-type="${cert.type}" onclick="openCertificateModal(${index})">
                <div class="certificate-image" style="background-image: url('${cert.image}'); background-size: cover; background-position: center;">
                    <div class="certificate-image-overlay"></div>
                    <i class="fas ${cert.icon} certificate-icon"></i>
                    <div class="certificate-click-hint">
                        <i class="fas fa-eye"></i>
                        <span>Click để xem</span>
                    </div>
                </div>
                <div class="certificate-content">
                    <span class="certificate-type">${
                        cert.type === 'language' ? 'Ngoại ngữ' :
                        cert.type === 'computer' ? 'Tin học' :
                        cert.type === 'online' ? 'Khóa học' : cert.type
                    }</span>
                    <h3 class="certificate-name">${cert.name}</h3>
                    <p class="certificate-issuer">
                        <i class="fas fa-building"></i>
                        ${cert.issuer}
                    </p>
                    
                    <div class="certificate-details">
                        ${cert.score ? `<div class="certificate-score">
                            <i class="fas fa-star"></i> ${cert.score}
                        </div>` : ''}
                        ${cert.level ? `<div class="certificate-level">
                            <i class="fas fa-certificate"></i> ${cert.level}
                        </div>` : ''}
                        ${cert.achievement ? `<div class="certificate-level">
                            <i class="fas fa-trophy"></i> ${cert.achievement}
                        </div>` : ''}
                    </div>
                    
                    <div class="certificate-date">
                        <i class="fas fa-calendar"></i>
                        ${cert.date}
                    </div>
                    
                    <p class="certificate-description">${cert.description}</p>
                </div>
            </div>
        `;
    }).join('');

    certificates.innerHTML = `
        <div class="container">
            <h2 class="section-title">Chứng Chỉ & Khóa Học</h2>
            <p class="section-subtitle">
                Các chứng chỉ và khóa học đã hoàn thành
                <span class="click-info">💡 Click vào thẻ để xem chi tiết</span>
            </p>
            
            <div class="certificates-filters">
                ${filterButtons}
            </div>
            
            <div class="certificates-container">
                ${certificateCards}
            </div>
        </div>
        
        <!-- Modal for Certificate Details -->
        <div id="certificate-modal" class="certificate-modal">
            <div class="certificate-modal-content">
                <button class="certificate-modal-close" onclick="closeCertificateModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="certificate-modal-body">
                    <div class="certificate-modal-image-container">
                        <img id="certificate-modal-image" src="" alt="Certificate">
                    </div>
                    <div class="certificate-modal-info">
                        <div class="certificate-modal-header">
                            <span id="certificate-modal-type" class="certificate-type"></span>
                            <h2 id="certificate-modal-title"></h2>
                            <p id="certificate-modal-issuer"></p>
                        </div>
                        <div class="certificate-modal-details" id="certificate-modal-details">
                            <!-- Details will be inserted here -->
                        </div>
                        <div class="certificate-modal-description">
                            <p id="certificate-modal-desc"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Filter functionality - Improved
    const filterBtns = document.querySelectorAll('.certificate-filter-btn');
    const certificateElements = document.querySelectorAll('.certificate-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button with smooth transition
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.style.transform = 'scale(1)';
            });
            btn.classList.add('active');
            btn.style.transform = 'scale(1.05)';

            const filter = btn.dataset.filter;

            // Filter certificates with improved animation
            certificateElements.forEach((card, index) => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1) translateY(0)';
                    }, index * 30); // Stagger animation
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.85) translateY(-10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add transition styles
    certificateElements.forEach(card => {
        card.style.transition = 'opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
}

// Certificate Modal Functions
function openCertificateModal(certIndex) {
    const cert = portfolioData.certificates[certIndex];
    const modal = document.getElementById('certificate-modal');
    
    // Set certificate data
    document.getElementById('certificate-modal-type').textContent = 
        cert.type === 'language' ? 'Ngoại ngữ' :
        cert.type === 'computer' ? 'Tin học' :
        cert.type === 'online' ? 'Khóa học' : cert.type;
    
    document.getElementById('certificate-modal-title').innerHTML = `
        <i class="fas ${cert.icon}"></i> ${cert.name}
    `;
    
    document.getElementById('certificate-modal-issuer').innerHTML = `
        <i class="fas fa-building"></i> ${cert.issuer}
        ${cert.instructor ? `<br><i class="fas fa-user-tie"></i> ${cert.instructor}` : ''}
    `;
    
    document.getElementById('certificate-modal-image').src = cert.image;
    document.getElementById('certificate-modal-desc').textContent = cert.description;
    
    // Set details
    let detailsHTML = `<div class="certificate-date-large">
        <i class="fas fa-calendar"></i> ${cert.date}
    </div>`;
    
    if (cert.score) {
        detailsHTML += `<div class="certificate-info-item">
            <i class="fas fa-star"></i>
            <div>
                <strong>Điểm số:</strong>
                <span>${cert.score}</span>
            </div>
        </div>`;
    }
    
    if (cert.level) {
        detailsHTML += `<div class="certificate-info-item">
            <i class="fas fa-certificate"></i>
            <div>
                <strong>Cấp độ:</strong>
                <span>${cert.level}</span>
            </div>
        </div>`;
    }
    
    if (cert.achievement) {
        detailsHTML += `<div class="certificate-info-item">
            <i class="fas fa-trophy"></i>
            <div>
                <strong>Thành tích:</strong>
                <span>${cert.achievement}</span>
            </div>
        </div>`;
    }
    
    document.getElementById('certificate-modal-details').innerHTML = detailsHTML;
    
    // Show modal with smooth animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Scroll to top of modal content
    const modalContent = modal.querySelector('.certificate-modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}

function closeCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('certificate-modal');
        if (modal && modal.classList.contains('active')) {
            closeCertificateModal();
        }
    }
});

// Close on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('certificate-modal');
    if (modal && e.target === modal) {
        closeCertificateModal();
    }
});

