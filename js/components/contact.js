// Contact Component - Improved
function renderContact() {
    const contact = document.querySelector('.contact-section');
    const { email, phone, location } = portfolioData.personal;

    contact.innerHTML = `
        <div class="container">
            <h2 class="section-title">Liên Hệ</h2>
            <p class="section-subtitle">
                Hãy liên hệ với tôi qua form dưới đây hoặc thông tin bên cạnh
            </p>
            
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Thông Tin Liên Hệ</h3>
                    <p class="contact-info-description">
                        Tôi luôn sẵn sàng lắng nghe và hợp tác trên các dự án mới. Hãy liên hệ với tôi!
                    </p>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Email</h4>
                            <p>${email}</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Điện Thoại</h4>
                            <p>${phone}</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Địa Chỉ</h4>
                            <p>${location}</p>
                        </div>
                    </div>
                </div>

                <form class="contact-form" id="contactForm">
                    <div class="form-group">
                        <label for="name">
                            <i class="fas fa-user"></i> Họ và Tên *
                        </label>
                        <input type="text" id="name" name="name" placeholder="Nhập họ và tên của bạn" required>
                    </div>

                    <div class="form-group">
                        <label for="email">
                            <i class="fas fa-envelope"></i> Email *
                        </label>
                        <input type="email" id="email" name="email" placeholder="your.email@example.com" required>
                    </div>

                    <div class="form-group">
                        <label for="subject">
                            <i class="fas fa-tag"></i> Tiêu Đề *
                        </label>
                        <input type="text" id="subject" name="subject" placeholder="Tiêu đề tin nhắn" required>
                    </div>

                    <div class="form-group">
                        <label for="message">
                            <i class="fas fa-comment"></i> Nội Dung *
                        </label>
                        <textarea id="message" name="message" placeholder="Nhập nội dung tin nhắn của bạn..." required></textarea>
                    </div>

                    <button type="submit" class="submit-btn">
                        <i class="fas fa-paper-plane"></i>
                        <span>Gửi Tin Nhắn</span>
                    </button>

                    <div class="form-message" id="formMessage"></div>
                </form>
            </div>
        </div>
    `;

    // Form submission
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            };

            // Simulate form submission
            // In a real application, you would send this to a server
            console.log('Form submitted:', formData);

            // Show success message
            formMessage.textContent = 'Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';

            // Reset form
            form.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.opacity = '0';
                setTimeout(() => {
                    formMessage.style.display = 'none';
                    formMessage.style.opacity = '1';
                }, 300);
            }, 5000);
        });
    }
}

// Note: Modal functions removed - Contact section now displays directly on page

