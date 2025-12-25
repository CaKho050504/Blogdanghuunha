// Blog Component
function renderBlog() {
    const blog = document.querySelector('.blog-section');
    
    // Get unique categories
    const categories = ['all', ...new Set(portfolioData.blog.map(post => post.category))];
    
    const filterButtons = categories.map(cat => `
        <button class="blog-filter-btn ${cat === 'all' ? 'active' : ''}" data-filter="${cat}">
            ${cat === 'all' ? 'Tất Cả' : cat}
        </button>
    `).join('');

    const blogPosts = portfolioData.blog.map(post => {
        const tags = post.tags.map(tag => 
            `<span class="blog-tag">${tag}</span>`
        ).join('');

        // Format date
        const date = new Date(post.date);
        const formattedDate = date.toLocaleDateString('vi-VN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        return `
            <article class="blog-card" data-category="${post.category}">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                    <div class="blog-category-badge">${post.category}</div>
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="blog-date">
                            <i class="far fa-calendar"></i> ${formattedDate}
                        </span>
                        <span class="blog-read-time">
                            <i class="far fa-clock"></i> ${post.readTime}
                        </span>
                    </div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-tags">
                        ${tags}
                    </div>
                    <a href="blog-detail.html?id=${post.id}" class="blog-read-more">
                        Đọc thêm <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>
        `;
    }).join('');

    blog.innerHTML = `
        <div class="container">
            <h2 class="section-title">Blog</h2>
            <p class="section-subtitle">
                Chia sẻ kiến thức và kinh nghiệm về lập trình
            </p>
            <div class="blog-filters">
                ${filterButtons}
            </div>
            <div class="blog-container">
                ${blogPosts}
            </div>
        </div>
    `;

    // Filter functionality
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter blog posts
            blogCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add transition styles
    blogCards.forEach(card => {
        card.style.transition = 'opacity 0.3s, transform 0.3s';
    });
}

