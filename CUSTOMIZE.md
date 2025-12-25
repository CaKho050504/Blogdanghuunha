# 🎨 Hướng Dẫn Tùy Chỉnh Chi Tiết

## 📝 Bước 1: Thay Đổi Thông Tin Cá Nhân

Mở file `js/data.js` và chỉnh sửa object `portfolioData`:

### Thông tin cơ bản

```javascript
personal: {
    name: "Nguyễn Văn A",                    // ✏️ Tên của bạn
    title: "Web Developer",                  // ✏️ Chức danh
    subtitle: "Full Stack Developer",        // ✏️ Mô tả ngắn
    description: "Mô tả về bạn...",         // ✏️ Giới thiệu ngắn
    email: "example@gmail.com",              // ✏️ Email
    phone: "+84 123 456 789",                // ✏️ Số điện thoại
    location: "Hà Nội, Việt Nam",           // ✏️ Địa chỉ
    image: "URL_ảnh_của_bạn"                // ✏️ Link ảnh đại diện
}
```

### Social Media

```javascript
social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    twitter: "https://twitter.com/your-handle",
    facebook: "https://facebook.com/your-profile",
    instagram: "https://instagram.com/your-handle"
}
```

💡 **Tip**: Nếu không dùng mạng xã hội nào, để trống string: `twitter: ""`

---

## 🎯 Bước 2: Cập Nhật Kỹ Năng (Skills)

### Thêm danh mục kỹ năng mới

```javascript
skills: [
    {
        category: "Frontend Development",    // Tên danh mục
        icon: "fa-laptop-code",             // Icon từ Font Awesome
        items: [
            { name: "HTML/CSS", level: 95 }, // Tên & mức độ (0-100)
            { name: "JavaScript", level: 90 },
            // Thêm kỹ năng khác...
        ]
    },
    // Thêm danh mục khác...
]
```

### Danh sách icons Font Awesome phổ biến

- `fa-laptop-code` - Lập trình
- `fa-server` - Backend
- `fa-tools` - Công cụ
- `fa-mobile-alt` - Mobile
- `fa-database` - Database
- `fa-paint-brush` - Design
- `fa-chart-line` - Analytics

🔗 Xem thêm icons tại: https://fontawesome.com/icons

---

## 💼 Bước 3: Thêm Dự Án (Projects)

```javascript
projects: [
    {
        id: 1,                                // ID duy nhất
        title: "Tên Dự Án",                  // Tên dự án
        description: "Mô tả dự án...",       // Mô tả ngắn
        image: "URL_ảnh",                     // Ảnh preview
        technologies: ["React", "Node.js"],   // Công nghệ sử dụng
        category: "web",                      // "web" hoặc "app"
        links: {
            demo: "https://demo-url.com",     // Link demo
            github: "https://github.com/..."  // Link GitHub
        }
    }
]
```

### Categories

- `"web"` - Website projects
- `"app"` - Application projects

💡 Có thể thêm categories mới, nhớ update filter trong `js/components/projects.js`

---

## 🎨 Bước 4: Thay Đổi Màu Sắc & Theme

Mở file `css/variables.css`:

### Màu sắc chính

```css
:root {
    /* Màu chính */
    --primary-color: #6366f1;      /* Màu chủ đạo */
    --secondary-color: #8b5cf6;    /* Màu phụ */
    --accent-color: #ec4899;       /* Màu nhấn */
    
    /* Màu text */
    --text-dark: #1f2937;          /* Text tối */
    --text-light: #6b7280;         /* Text sáng */
    --text-white: #ffffff;         /* Text trắng */
    
    /* Màu background */
    --bg-light: #f9fafb;           /* Nền sáng */
    --bg-white: #ffffff;           /* Nền trắng */
    --bg-dark: #111827;            /* Nền tối */
}
```

### Gợi ý color schemes

**Blue & Purple (Mặc định)**
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

**Green & Teal**
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
--accent-color: #06b6d4;
```

**Orange & Red**
```css
--primary-color: #f97316;
--secondary-color: #ef4444;
--accent-color: #dc2626;
```

**Professional Dark**
```css
--primary-color: #3b82f6;
--secondary-color: #1e40af;
--accent-color: #1d4ed8;
```

🎨 Tool tạo màu: https://coolors.co/

---

## 🖼️ Bước 5: Thêm Hình Ảnh

### Option 1: Sử dụng URL trực tuyến

```javascript
image: "https://i.imgur.com/your-image.jpg"
```

Free image hosting:
- Imgur: https://imgur.com
- Cloudinary: https://cloudinary.com
- ImgBB: https://imgbb.com

### Option 2: Lưu local

1. Tạo thư mục `images/` trong project
2. Đặt ảnh vào thư mục
3. Sử dụng đường dẫn relative:

```javascript
image: "images/profile.jpg"
```

### Kích thước ảnh đề xuất

- **Profile/Avatar**: 400x400px (vuông)
- **About image**: 400x500px (dọc)
- **Project thumbnails**: 800x600px (ngang)

🔧 Optimize ảnh tại: https://tinypng.com

---

## ✍️ Bước 6: Thay Đổi Fonts

### Thêm Google Font

1. Vào https://fonts.google.com
2. Chọn font bạn thích
3. Copy link và thêm vào `<head>` trong `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

4. Cập nhật `css/reset.css`:

```css
body {
    font-family: 'Poppins', 'Segoe UI', sans-serif;
}
```

### Font pairings đẹp

- **Modern**: Poppins + Open Sans
- **Professional**: Montserrat + Roboto
- **Elegant**: Playfair Display + Source Sans Pro
- **Minimal**: Inter + Inter

---

## 📱 Bước 7: Tùy Chỉnh Responsive

Mở file `css/responsive.css` để điều chỉnh breakpoints:

```css
/* Desktop */
@media (max-width: 1024px) {
    /* Styles cho tablet */
}

/* Mobile */
@media (max-width: 768px) {
    /* Styles cho mobile */
}

/* Small Mobile */
@media (max-width: 480px) {
    /* Styles cho điện thoại nhỏ */
}
```

---

## 🎭 Bước 8: Tùy Chỉnh Animations

### Thay đổi animations có sẵn

Trong `css/main.css`:

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);  /* Thay đổi khoảng cách */
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Thêm animation mới

```css
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.my-element {
    animation: slideInRight 0.6s ease-out;
}
```

---

## 🔧 Bước 9: Tùy Chỉnh Components

### Thay đổi layout của một section

Ví dụ: Thay đổi About section từ 2 cột thành 1 cột

File: `css/about.css`

```css
.about-content {
    display: grid;
    grid-template-columns: 1fr;  /* Thay vì 1fr 1fr */
    gap: var(--spacing-xl);
}
```

### Ẩn một section

Thêm vào file CSS tương ứng:

```css
.section-to-hide {
    display: none;
}
```

### Thay đổi thứ tự sections

Trong `index.html`, di chuyển các `<section>` tags:

```html
<main>
    <section id="hero">...</section>
    <section id="projects">...</section>  <!-- Di chuyển lên trên -->
    <section id="about">...</section>
    <section id="skills">...</section>
    <section id="contact">...</section>
</main>
```

---

## 📧 Bước 10: Kết Nối Contact Form

### Option 1: FormSpree (Free)

1. Đăng ký tại https://formspree.io
2. Lấy endpoint URL
3. Cập nhật `js/components/contact.js`:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

### Option 2: EmailJS (Free)

1. Đăng ký tại https://www.emailjs.com
2. Setup service và template
3. Add EmailJS SDK vào `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

4. Cập nhật form handler

### Option 3: Google Apps Script (Free)

Sử dụng Google Sheets làm database
Tutorial: https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server

---

## 🚀 Bước 11: Deploy & Go Live

### GitHub Pages (Free, Recommended)

```bash
# 1. Initialize git
git init

# 2. Add files
git add .

# 3. Commit
git commit -m "Initial commit"

# 4. Create repo trên GitHub, then:
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main

# 5. Enable GitHub Pages trong Settings > Pages
# Chọn branch: main, folder: / (root)
```

Website sẽ có tại: `https://username.github.io/repo-name`

### Netlify (Free)

1. Vào https://netlify.com
2. Kéo thả folder vào Netlify Drop
3. Done! Có domain ngay

### Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## ✅ Checklist Hoàn Thành

Sau khi tùy chỉnh, check list này:

- [ ] ✏️ Đã thay đổi tất cả thông tin cá nhân
- [ ] 🖼️ Đã thêm ảnh của bạn
- [ ] 💼 Đã thêm projects thực tế
- [ ] 🎯 Đã cập nhật skills chính xác
- [ ] 🔗 Đã thêm links mạng xã hội
- [ ] 📧 Đã test contact form
- [ ] 🎨 Đã tùy chỉnh màu sắc (nếu muốn)
- [ ] 📱 Đã test trên mobile
- [ ] 🌐 Đã test trên nhiều browsers
- [ ] 🚀 Đã deploy lên hosting

---

## 🆘 Common Issues & Solutions

### Issue: Ảnh không hiển thị
**Solution**: 
- Check đường dẫn ảnh
- Đảm bảo URL public accessible
- Check browser Console (F12) để xem lỗi

### Issue: CSS không apply
**Solution**:
- Hard refresh: Ctrl + Shift + R
- Check đường dẫn CSS files trong HTML
- Clear browser cache

### Issue: JavaScript không chạy
**Solution**:
- Mở Console (F12) xem errors
- Check thứ tự load scripts trong HTML
- Đảm bảo `data.js` load trước các components

### Issue: Mobile menu không hoạt động
**Solution**:
- Check `js/components/header.js`
- Đảm bảo Font Awesome đã load
- Check browser console

---

## 💡 Pro Tips

1. **SEO**: Thêm meta tags vào `<head>`
```html
<meta name="description" content="Portfolio của [Tên]">
<meta name="keywords" content="web developer, portfolio">
```

2. **Analytics**: Thêm Google Analytics
```html
<!-- Google Analytics code -->
```

3. **Performance**: 
   - Optimize images
   - Minify CSS/JS (khi deploy)
   - Use CDN cho libraries

4. **Accessibility**:
   - Add alt text cho images
   - Use semantic HTML
   - Test với screen readers

---

**Happy Customizing! 🎉**

Nếu bạn cần thêm feature hoặc có câu hỏi, đừng ngại hỏi!

