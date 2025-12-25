// Footer Component
function renderFooter() {
    const footer = document.getElementById('footer');
    const { about, quickLinks, services } = portfolioData.footer;
    const social = portfolioData.social;

    const quickLinksList = quickLinks.map(link => 
        `<a href="${link.href}" class="footer-link">
            <i class="fas fa-chevron-right"></i> ${link.name}
        </a>`
    ).join('');

    const servicesList = services.map(service => 
        `<a href="${service.href}" class="footer-link">
            <i class="fas fa-chevron-right"></i> ${service.name}
        </a>`
    ).join('');

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
            return `<a href="${url}" target="_blank" class="footer-social-link" title="${platform}">
                <i class="fab ${icons[platform]}"></i>
            </a>`;
        }).join('');

    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Về Tôi</h3>
                    <p>${about}</p>
                    <div class="footer-social">
                        ${socialLinks}
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Liên Kết</h3>
                    <div class="footer-links">
                        ${quickLinksList}
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Dịch Vụ</h3>
                    <div class="footer-links">
                        ${servicesList}
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Liên Hệ</h3>
                    <div class="footer-links">
                        <div class="footer-link">
                            <i class="fas fa-envelope"></i> ${portfolioData.personal.email}
                        </div>
                        <div class="footer-link">
                            <i class="fas fa-phone"></i> ${portfolioData.personal.phone}
                        </div>
                        <div class="footer-link">
                            <i class="fas fa-map-marker-alt"></i> ${portfolioData.personal.location}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

