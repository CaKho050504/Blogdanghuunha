// Main JavaScript - Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    // Render all components
    renderHeader();
    renderHero();
    renderAbout();
    renderEducation();
    renderSkills();
    renderCertificates();
    renderHobbies();
    renderProjects();
    renderBlog();
    renderFooter();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    const observeElements = () => {
        const elements = document.querySelectorAll('.skill-category, .project-card, .blog-card, .about-content, .contact-container');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    };

    // Call after a short delay to ensure all elements are rendered
    setTimeout(observeElements, 100);

    // Floating Buttons Container
    const createFloatingButtons = () => {
        // Create container
        const container = document.createElement('div');
        container.className = 'floating-buttons-container';
        container.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            z-index: 9999;
        `;

        // Scroll to Top Button
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.className = 'floating-btn scroll-top-btn';
        scrollTopBtn.innerHTML = `
            <span>Lên đầu</span>
            <i class="fas fa-angles-up"></i>
        `;
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Contact Button
        const contactBtn = document.createElement('button');
        contactBtn.className = 'floating-btn contact-btn';
        contactBtn.innerHTML = `
            <span>Liên hệ</span>
            <i class="fas fa-headphones"></i>
        `;
        contactBtn.addEventListener('click', () => {
            if (typeof openChatWidget === 'function') {
                openChatWidget();
            }
        });

        container.appendChild(scrollTopBtn);
        container.appendChild(contactBtn);
        document.body.appendChild(container);

        // Initial state - hide scroll to top button
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
        scrollTopBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';

        // Show/hide scroll to top button on scroll
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.visibility = 'visible';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.visibility = 'hidden';
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check initial scroll position
        handleScroll();
    };

    createFloatingButtons();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);

    // Console message
    console.log('%c👋 Xin chào! ', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%cCảm ơn bạn đã xem portfolio của tôi!', 'font-size: 14px; color: #666;');
    console.log('%c🚀 Made with ❤️', 'font-size: 12px; color: #8b5cf6;');
});

