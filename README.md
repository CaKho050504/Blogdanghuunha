# Portfolio Website

Website portfolio cá nhân hiện đại và responsive, được xây dựng với HTML, CSS và JavaScript thuần.

## ✨ Tính Năng

- ✅ Design hiện đại và responsive
- ✅ Animations mượt mà
- ✅ **Mouse Effects** - 9 hiệu ứng chuột tương tác đẳng cấp 🖱️✨
  - Custom Cursor với glow effect
  - Particle Trail (vệt hạt theo chuột)
  - Click Ripple (gợn sóng khi click)
  - Sparkle Effect (tia sáng)
  - Magnetic Effect (từ tính trên buttons/cards)
  - Card Tilt 3D
  - Mouse Light
  - Parallax Effect
- ✅ Cấu trúc code module hóa, dễ bảo trì
- ✅ Tách biệt CSS và JavaScript theo từng component
- ✅ Dễ dàng tùy chỉnh thông qua file data.js
- ✅ Mobile-friendly với hamburger menu
- ✅ Scroll animations
- ✅ Project filtering
- ✅ Contact form
- ✅ Social media links

## 📁 Cấu Trúc Dự Án

```
ProfileDHN/
│
├── index.html              # File HTML chính
│
├── css/                    # Thư mục chứa tất cả CSS
│   ├── reset.css          # Reset CSS cho các trình duyệt
│   ├── variables.css      # Biến CSS (màu sắc, kích thước, etc.)
│   ├── main.css           # Styles chung
│   ├── header.css         # Styles cho header/navigation
│   ├── hero.css           # Styles cho hero section
│   ├── about.css          # Styles cho about section
│   ├── education.css      # Styles cho education section
│   ├── skills.css         # Styles cho skills section
│   ├── certificates.css   # Styles cho certificates section
│   ├── hobbies.css        # Styles cho hobbies section
│   ├── projects.css       # Styles cho projects section
│   ├── contact.css        # Styles cho contact section
│   ├── footer.css         # Styles cho footer
│   ├── responsive.css     # Media queries cho responsive
│   ├── animations.css     # Global background animations
│   ├── section-animations.css  # Section-specific animations
│   └── mouse-effects.css  # 🖱️ Mouse effects styles (MỚI)
│
└── js/                     # Thư mục chứa tất cả JavaScript
    ├── data.js            # Dữ liệu portfolio (CHỈNH SỬA FILE NÀY)
    ├── main.js            # File JavaScript chính
    ├── background-effects.js    # Background animations logic
    ├── section-animations.js    # Section animations logic
    ├── mouse-effects.js   # 🖱️ Mouse effects logic (MỚI)
    └── components/        # Thư mục chứa các component
        ├── header.js      # Component header
        ├── hero.js        # Component hero section
        ├── about.js       # Component about section
        ├── education.js   # Component education section
        ├── skills.js      # Component skills section
        ├── certificates.js # Component certificates section
        ├── hobbies.js     # Component hobbies section
        ├── projects.js    # Component projects section
        ├── contact.js     # Component contact section
        └── footer.js      # Component footer
```

## 🚀 Cách Sử Dụng

### 1. Cài Đặt

Không cần cài đặt gì cả! Chỉ cần:
- Clone hoặc download dự án này
- Mở file `index.html` bằng trình duyệt web

### 2. Tùy Chỉnh Thông Tin

**Chỉnh sửa file `js/data.js`** để thay đổi thông tin của bạn:

```javascript
const portfolioData = {
    personal: {
        name: "Tên Của Bạn",        // Thay tên của bạn
        title: "Web Developer",      // Thay chức danh
        email: "email@example.com",  // Thay email
        // ... các thông tin khác
    },
    
    social: {
        github: "https://github.com/...",     // Link GitHub
        linkedin: "https://linkedin.com/...", // Link LinkedIn
        // ... các mạng xã hội khác
    },
    
    skills: [
        // Thêm/sửa kỹ năng của bạn
    ],
    
    projects: [
        // Thêm/sửa dự án của bạn
    ]
};
```

### 3. Tùy Chỉnh Màu Sắc & Theme

Chỉnh sửa file `css/variables.css` để thay đổi màu sắc:

```css
:root {
    --primary-color: #6366f1;      /* Màu chính */
    --secondary-color: #8b5cf6;    /* Màu phụ */
    --accent-color: #ec4899;       /* Màu nhấn */
    /* ... các biến khác */
}
```

### 4. Thêm Ảnh

- Thay thế URL ảnh trong file `js/data.js`
- Hoặc tạo thư mục `images/` và đặt ảnh vào đó
- Cập nhật đường dẫn ảnh trong data.js

## 🎨 Tùy Chỉnh CSS

Mỗi section có file CSS riêng, bạn có thể dễ dàng chỉnh sửa:

- **Header/Navigation**: `css/header.css`
- **Hero Section**: `css/hero.css`
- **About Section**: `css/about.css`
- **Education Section**: `css/education.css`
- **Skills Section**: `css/skills.css`
- **Certificates Section**: `css/certificates.css`
- **Hobbies Section**: `css/hobbies.css`
- **Projects Section**: `css/projects.css`
- **Contact Section**: `css/contact.css`
- **Footer**: `css/footer.css`
- **Responsive**: `css/responsive.css`
- **Animations**: `css/animations.css`
- **Mouse Effects**: `css/mouse-effects.css` 🖱️

## 🖱️ Mouse Effects (MỚI)

Website có **9 hiệu ứng chuột tương tác** đẳng cấp:

1. **Custom Cursor** - Con trỏ tùy chỉnh với glow đỏ
2. **Particle Trail** - Vệt hạt theo chuột
3. **Click Ripple** - Gợn sóng khi click
4. **Sparkle Effect** - Tia sáng khi click
5. **Magnetic Effect** - Từ tính trên buttons/cards
6. **Card Tilt 3D** - Nghiêng card theo chuột
7. **Mouse Light** - Ánh sáng theo chuột
8. **Hover Trail** - Đường vệt khi di chuyển
9. **Parallax Effect** - Hiệu ứng thị sai

### 📚 Tài Liệu:
- **Hướng dẫn chi tiết**: [MOUSE_EFFECTS_GUIDE.md](MOUSE_EFFECTS_GUIDE.md)
- **Test & Debug**: [MOUSE_EFFECTS_TEST.md](MOUSE_EFFECTS_TEST.md)

### 🔧 Tùy Chỉnh:
```css
/* Trong css/mouse-effects.css */
.custom-cursor {
    border-color: #ff0000;  /* Đổi màu cursor */
}

.mouse-particle {
    background: #ff0000;    /* Đổi màu particles */
}
```

### 📱 Mobile:
Tất cả mouse effects **tự động tắt** trên mobile để tối ưu hiệu suất.

## 📱 Responsive

Website tự động điều chỉnh cho các màn hình:
- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)
- Small Mobile (< 480px)

## 🔧 Tùy Chỉnh JavaScript Components

Mỗi component có file riêng trong `js/components/`:

```javascript
// Ví dụ: js/components/hero.js
function renderHero() {
    // Code render hero section
}
```

Bạn có thể chỉnh sửa cấu trúc HTML và logic của từng component một cách độc lập.

## 🌟 Features Chi Tiết

### 1. Navigation
- Fixed header với shadow khi scroll
- Active link highlighting
- Mobile hamburger menu
- Smooth scroll đến các sections

### 2. Hero Section
- Gradient background với animation
- Social media links
- Call-to-action buttons

### 3. About Section
- Image với decorative background
- Info cards
- Responsive grid layout

### 4. Skills Section
- Animated progress bars
- Skill categories với icons
- Intersection Observer cho animations

### 5. Projects Section
- Project filtering (All, Web, App)
- Project cards với hover effects
- Demo và GitHub links

### 6. Contact Section
- Contact form với validation
- Contact information cards
- Form submission handling

### 7. Footer
- Multiple footer sections
- Social media links
- Quick links và services

## 💡 Tips

1. **Thay đổi font**: Thêm Google Fonts vào `index.html` và cập nhật `css/reset.css`

2. **Thêm section mới**:
   - Tạo file CSS mới trong `css/`
   - Tạo file component mới trong `js/components/`
   - Thêm link CSS vào `index.html`
   - Thêm script vào `index.html`
   - Gọi render function trong `js/main.js`

3. **Thêm animations**:
   - Sử dụng CSS animations trong các file CSS
   - Hoặc dùng JavaScript trong `js/main.js`

4. **Form submission**:
   - Hiện tại form chỉ log ra console
   - Để gửi thật, cần backend hoặc service như FormSpree, EmailJS

## 🚀 Deploy

Bạn có thể deploy website lên:

1. **GitHub Pages**:
   - Push code lên GitHub
   - Enable GitHub Pages trong Settings
   - Website sẽ có tại `username.github.io/repo-name`

2. **Netlify**:
   - Kéo thả folder vào Netlify
   - Hoặc connect với GitHub repo

3. **Vercel**:
   - Import project từ GitHub
   - Auto deploy mỗi khi push

4. **Hosting truyền thống**:
   - Upload tất cả files lên server qua FTP

## 📝 Checklist Tùy Chỉnh

- [ ] Thay đổi thông tin cá nhân trong `js/data.js`
- [ ] Cập nhật links mạng xã hội
- [ ] Thêm ảnh của bạn
- [ ] Cập nhật skills và levels
- [ ] Thêm projects của bạn
- [ ] Thay đổi màu sắc theme (nếu muốn)
- [ ] Cập nhật thông tin liên hệ
- [ ] Test trên mobile devices
- [ ] Check tất cả links
- [ ] Deploy lên hosting

## 🆘 Hỗ Trợ

Nếu bạn gặp vấn đề:
1. Kiểm tra Console trong DevTools (F12)
2. Đảm bảo tất cả files được load đúng
3. Kiểm tra đường dẫn files

## 📄 License

Free to use for personal and commercial projects.

---

**Chúc bạn thành công với portfolio của mình! 🎉**

