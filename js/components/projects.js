// Projects Component
function renderProjects() {
    const projects = document.querySelector('.projects-section');
    
    // No filter buttons needed for single project
    const filterButtons = '';

    const projectCards = portfolioData.projects.map(project => {
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        return `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${techTags}
                    </div>
                    <div class="project-links">
                        <a href="${project.links.demo}" class="project-link primary">
                            <i class="fas fa-external-link-alt"></i> Xem Demo
                        </a>
                        <a href="${project.links.github}" target="_blank" class="project-link secondary">
                            <i class="fab fa-github"></i> Code
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    projects.innerHTML = `
        <div class="container">
            <h2 class="section-title">Dự Án</h2>
            <p class="section-subtitle">
                Dự án tôi đã làm gần đây
            </p>
            <div class="projects-container">
                ${projectCards}
            </div>
        </div>
    `;

    // No filter needed for single project
}

