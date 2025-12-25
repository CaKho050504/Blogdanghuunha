# 🖱️ Hướng Dẫn Mouse Effects (Hiệu Ứng Chuột)

## 📋 Tổng Quan

Website của bạn đã được trang bị **9 hiệu ứng chuột tương tác** đẳng cấp:

### ✨ Các Hiệu Ứng Chính:

1. **Custom Cursor** - Con trỏ chuột tùy chỉnh với glow đỏ
2. **Particle Trail** - Vệt hạt theo chuột
3. **Click Ripple** - Gợn sóng khi click
4. **Hover Trail** - Đường vệt khi di chuyển
5. **Sparkle Effect** - Tia sáng khi click
6. **Magnetic Effect** - Hiệu ứng từ tính trên buttons/cards
7. **Card Tilt** - Hiệu ứng nghiêng 3D cho cards
8. **Mouse Light** - Ánh sáng theo chuột
9. **Parallax Effect** - Hiệu ứng thị sai cho background

---

## 🎯 File Liên Quan

### CSS:
- `css/mouse-effects.css` - Styles cho tất cả hiệu ứng chuột

### JavaScript:
- `js/mouse-effects.js` - Logic điều khiển hiệu ứng

---

## 🎨 Chi Tiết Hiệu Ứng

### 1. Custom Cursor (Con Trỏ Tùy Chỉnh)

**Mô tả:** Con trỏ chuột tùy chỉnh với viền đỏ và điểm sáng ở giữa.

**Tùy chỉnh trong `css/mouse-effects.css`:**

```css
.custom-cursor {
    width: 20px;          /* Kích thước cursor */
    height: 20px;
    border: 2px solid #ff0000;  /* Màu viền */
}

.custom-cursor::before {
    width: 6px;           /* Kích thước điểm giữa */
    height: 6px;
    background: #ff0000;  /* Màu điểm giữa */
    box-shadow: 0 0 15px #ff0000;  /* Độ sáng */
}
```

**Khi hover (active):**
```css
.custom-cursor.active {
    width: 40px;          /* Cursor lớn hơn */
    height: 40px;
}
```

---

### 2. Particle Trail (Vệt Hạt)

**Mô tả:** Hạt nhỏ xuất hiện theo đường di chuyển của chuột.

**Tùy chỉnh:**

```css
.mouse-particle {
    width: 8px;           /* Kích thước hạt */
    height: 8px;
    background: #ff0000;  /* Màu hạt */
    box-shadow: 0 0 10px #ff0000;  /* Glow effect */
}
```

**Điều chỉnh tần suất xuất hiện** trong `js/mouse-effects.js`:

```javascript
// Tìm dòng này:
if (Math.random() > 0.7) {  // 0.7 = 30% xuất hiện
    this.createParticle(e.clientX, e.clientY);
}

// Thay đổi giá trị:
// 0.5 = 50% (nhiều hơn)
// 0.9 = 10% (ít hơn)
```

---

### 3. Click Ripple (Gợn Sóng Click)

**Mô tả:** Vòng tròn lan rộng khi click chuột.

**Tùy chỉnh:**

```css
.click-ripple {
    border: 2px solid #ff0000;  /* Màu viền */
}

@keyframes rippleExpand {
    0% {
        width: 10px;      /* Kích thước ban đầu */
        height: 10px;
    }
    100% {
        width: 100px;     /* Kích thước cuối */
        height: 100px;
    }
}
```

**Thời gian animation:**
```javascript
// Trong js/mouse-effects.js, tìm:
setTimeout(() => ripple.remove(), 600);  // 600ms
// Thay đổi để ripple tồn tại lâu/ngắn hơn
```

---

### 4. Hover Trail (Đường Vệt Hover)

**Mô tả:** Các điểm nhỏ xuất hiện khi di chuyển chuột.

**Tùy chỉnh:**

```css
.hover-trail {
    width: 3px;           /* Kích thước điểm */
    height: 3px;
    background: #ff0000;  /* Màu */
}
```

**Điều chỉnh tần suất:**
```javascript
// Tìm:
if (Math.random() > 0.8) {  // 20% xuất hiện
    this.createHoverTrail(e.clientX, e.clientY);
}
```

---

### 5. Sparkle Effect (Hiệu Ứng Tia Sáng)

**Mô tả:** 8 tia sáng bắn ra khi click.

**Tùy chỉnh số lượng tia:**
```javascript
// Trong createSparkles():
const sparkleCount = 8;  // Thay đổi số lượng tia (4, 12, 16...)
```

**Tùy chỉnh style:**
```css
.sparkle {
    width: 4px;           /* Kích thước tia */
    height: 4px;
    background: #ff0000;  /* Màu tia */
}
```

---

### 6. Magnetic Effect (Hiệu Ứng Từ Tính)

**Mô tả:** Elements bị "hút" về phía con trỏ chuột.

**Điều chỉnh độ mạnh:**
```javascript
// Trong magneticEffect():
const strength = 0.3;  // 0.1 = yếu, 0.5 = mạnh
const moveX = (x / maxDistance) * 20 * strength;  // 20 = khoảng cách tối đa
```

**Thêm/bớt elements:**
```javascript
// Trong attachEventListeners():
const interactiveElements = document.querySelectorAll(
    'a, button, .hobby-card, .certificate-card'
    // Thêm class của bạn vào đây
);
```

---

### 7. Card Tilt (Nghiêng Card 3D)

**Mô tả:** Card nghiêng theo vị trí chuột.

**Điều chỉnh độ nghiêng:**
```javascript
// Trong tiltEffect():
const rotateX = ((y - centerY) / centerY) * -10;  // -10 = góc nghiêng
const rotateY = ((x - centerX) / centerX) * 10;

// Thay đổi -10 và 10:
// -5, 5 = nghiêng ít hơn
// -15, 15 = nghiêng nhiều hơn
```

---

### 8. Mouse Light (Ánh Sáng Chuột)

**Mô tả:** Vùng sáng mờ theo chuột.

**Tùy chỉnh:**

```css
.mouse-light {
    width: 400px;         /* Kích thước vùng sáng */
    height: 400px;
    background: radial-gradient(
        circle,
        rgba(255, 0, 0, 0.15) 0%,    /* Độ sáng trung tâm */
        rgba(255, 0, 0, 0.08) 30%,   /* Độ sáng giữa */
        transparent 70%               /* Trong suốt */
    );
}
```

---

### 9. Parallax Effect (Hiệu Ứng Thị Sai)

**Mô tả:** Background di chuyển theo chuột.

**Sử dụng:**
Thêm class `parallax-layer` vào element:

```html
<div class="parallax-layer">Nội dung</div>
```

**Điều chỉnh độ mạnh:**
```javascript
// Trong updateParallax():
const depth = (index + 1) * 10;  // 10 = độ mạnh
// 5 = di chuyển ít hơn
// 20 = di chuyển nhiều hơn
```

---

## 🎛️ Tùy Chỉnh Nâng Cao

### Thay Đổi Màu Sắc

Tìm tất cả `#ff0000` trong `css/mouse-effects.css` và thay bằng màu bạn muốn:

```css
/* Ví dụ: đổi sang màu xanh */
#ff0000 → #00ff00  (xanh lá)
#ff0000 → #0000ff  (xanh dương)
#ff0000 → #ff00ff  (tím)
```

### Tắt Một Số Hiệu Ứng

**Tắt Particle Trail:**
```javascript
// Comment out dòng này:
// if (Math.random() > 0.7) {
//     this.createParticle(e.clientX, e.clientY);
// }
```

**Tắt Mouse Light:**
```css
.mouse-light {
    display: none;
}
```

**Tắt Custom Cursor (dùng cursor mặc định):**
```css
body {
    cursor: auto !important;  /* Thay vì cursor: none; */
}

.custom-cursor,
.cursor-outer {
    display: none;
}
```

### Điều Chỉnh Hiệu Suất

**Giảm số lượng particles:**
```javascript
// Giảm tần suất xuất hiện
if (Math.random() > 0.9) {  // Từ 0.7 lên 0.9
    this.createParticle(e.clientX, e.clientY);
}
```

**Tắt effects trên mobile** (đã tích hợp sẵn):
```css
@media (max-width: 768px) {
    .custom-cursor,
    .cursor-outer,
    .mouse-light {
        display: none;  /* Tự động tắt trên mobile */
    }
}
```

---

## 🔧 Troubleshooting

### Cursor không hiện?

1. Kiểm tra `index.html` đã include đúng file:
```html
<link rel="stylesheet" href="css/mouse-effects.css">
<script src="js/mouse-effects.js"></script>
```

2. Mở Console (F12) xem có lỗi không.

3. Thử hard refresh: `Ctrl + Shift + R`

### Hiệu ứng chạy chậm?

1. Giảm tần suất particle:
```javascript
if (Math.random() > 0.95) {  // Rất ít particles
```

2. Giảm số lượng sparkles:
```javascript
const sparkleCount = 4;  // Từ 8 xuống 4
```

3. Tắt một số hiệu ứng không cần thiết.

### Cursor không thay đổi khi hover?

Kiểm tra element có trong danh sách interactive:
```javascript
const interactiveElements = document.querySelectorAll(
    'a, button, .your-class-here'  // Thêm class của bạn
);
```

---

## 💡 Tips & Tricks

### 1. Tạo cursor riêng cho từng section:

```css
.hero-section .custom-cursor {
    border-color: #ff0000;  /* Đỏ */
}

.about-section .custom-cursor {
    border-color: #00ff00;  /* Xanh */
}
```

### 2. Thay đổi hình dạng cursor:

```css
.custom-cursor {
    border-radius: 0;       /* Vuông thay vì tròn */
    /* hoặc */
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);  /* Kim cương */
}
```

### 3. Thêm text vào cursor:

```javascript
// Trong createCursors():
this.cursor.innerHTML = '<span style="color: #ff0000; font-size: 10px;">●</span>';
```

### 4. Rainbow cursor effect:

```css
.custom-cursor {
    background: linear-gradient(45deg, #ff0000, #ff7700, #ffff00, #00ff00, #0000ff, #9900ff);
    animation: rainbow 3s linear infinite;
}

@keyframes rainbow {
    100% { filter: hue-rotate(360deg); }
}
```

---

## 📱 Mobile Behavior

Tất cả mouse effects **tự động tắt trên mobile** để:
- Tiết kiệm hiệu suất
- Tránh lỗi touch events
- Cải thiện trải nghiệm người dùng

---

## 🎨 Preset Themes

### Cyber Theme (Màu xanh neon):
```css
/* Thay #ff0000 thành #00ffff */
```

### Purple Dream:
```css
/* Thay #ff0000 thành #9900ff */
```

### Golden Luxury:
```css
/* Thay #ff0000 thành #ffd700 */
```

---

## 📞 Support

Nếu bạn cần thêm hiệu ứng hoặc gặp vấn đề, hãy:
1. Kiểm tra Console (F12) xem có lỗi
2. Đảm bảo các file được load đúng thứ tự
3. Thử disable từng hiệu ứng để tìm nguyên nhân

---

**Chúc bạn có một website đầy hiệu ứng ấn tượng! 🚀✨**

