# 🎨 Hướng Dẫn Background Effects

## ✨ Hiệu Ứng Đã Được Thêm

Website của bạn giờ có các hiệu ứng động cho background:

### 1. **Gradient Animation** 🌈
- Gradient màu đen-đỏ chuyển động mượt
- Tự động thay đổi theo thời gian

### 2. **Floating Particles** ⚪
- 10 particles bay lên từ dưới
- Màu đỏ, trong suốt
- Xoay và di chuyển ngẫu nhiên

### 3. **Glowing Orbs** 🔴
- 3 quả cầu phát sáng lớn
- Màu đỏ với blur effect
- Di chuyển theo chuột (parallax)
- Float tự động

### 4. **Animated Grid** 📐
- Lưới màu đỏ mờ
- Di chuyển liên tục

### 5. **Geometric Lines** ━
- 4 đường ngang chuyển động
- Gradient effect
- Slide từ trái sang phải

### 6. **Twinkling Stars** ⭐
- 50 ngôi sao nhấp nháy
- Vị trí ngẫu nhiên
- Màu đỏ

---

## 🎮 Hiệu Ứng Tương Tác

### **Mouse Parallax**
- Di chuyển chuột để thấy các orbs di chuyển theo
- Tạo hiệu ứng 3D depth

### **Scroll Animations**
- Sections fade in khi scroll
- Mượt mà và chuyên nghiệp

---

## ⚙️ Tùy Chỉnh Hiệu Ứng

### Bật/Tắt Hiệu Ứng

Mở file **`js/background-effects.js`** (dòng 187-203):

```javascript
function initBackgroundEffects() {
    createStars();                    // ✅ Stars
    initParallax();                   // ✅ Mouse parallax
    // initInteractiveParticles();    // ❌ Tắt (uncomment để bật)
    initScrollGlow();                 // ✅ Scroll glow
    // initCursorTrail();             // ❌ Tắt (uncomment để bật)
    // createFloatingElements();      // ❌ Tắt (uncomment để bật)
}
```

### Thêm Cursor Trail (Dấu Chuột)
Uncomment dòng này:
```javascript
initCursorTrail(); // ← Bỏ // ở đầu
```

### Thêm Floating Shapes
Uncomment dòng này:
```javascript
createFloatingElements(); // ← Bỏ // ở đầu
```

---

## 🎨 Thay Đổi Màu Sắc

### Particles
File: **`css/animations.css`** (dòng 14)
```css
.particle {
    background: #ff0000;    /* ← Đổi màu ở đây */
    opacity: 0.3;
}
```

### Orbs (Glowing Balls)
File: **`css/animations.css`** (dòng 119-145)
```css
.orb1 {
    background: #ff0000;    /* ← Đổi màu orb 1 */
}

.orb2 {
    background: #dc143c;    /* ← Đổi màu orb 2 */
}

.orb3 {
    background: #8b0000;    /* ← Đổi màu orb 3 */
}
```

### Stars
File: **`css/animations.css`** (dòng 285)
```css
.star {
    background: #ff0000;    /* ← Đổi màu stars */
}
```

---

## ⚡ Thay Đổi Tốc Độ

### Particles Float Speed
File: **`css/animations.css`** (dòng 18-56)
```css
.particle:nth-child(1) {
    animation-duration: 15s;    /* ← Càng nhỏ càng nhanh */
}
```

### Orbs Movement Speed
File: **`css/animations.css`** (dòng 136-144)
```css
.orb1 {
    animation-duration: 25s;    /* ← Càng nhỏ càng nhanh */
}
```

### Grid Movement Speed
File: **`css/animations.css`** (dòng 227)
```css
@keyframes grid-move {
    /* 20s = chậm, 10s = nhanh */
}
```

---

## 🔧 Điều Chỉnh Intensity (Độ Mạnh)

### Particles Opacity (Độ Mờ)
```css
.particle {
    opacity: 0.3;    /* 0.1 = rất mờ, 0.8 = rõ */
}
```

### Orbs Blur (Độ Mờ Ảo)
```css
.orb {
    filter: blur(60px);    /* 20px = ít mờ, 100px = rất mờ */
    opacity: 0.15;         /* Độ trong suốt */
}
```

### Grid Visibility
```css
.grid-bg {
    background-image: 
        linear-gradient(rgba(255, 0, 0, 0.03) 1px, transparent 1px);
        /* 0.01 = rất mờ, 0.1 = rõ */
}
```

---

## 📱 Tối Ưu Mobile

Hiệu ứng tự động giảm trên mobile để:
- ✅ Tiết kiệm pin
- ✅ Tăng performance
- ✅ Load nhanh hơn

File: **`css/animations.css`** (dòng 308-321)

Nếu muốn tắt hoàn toàn trên mobile:
```css
@media (max-width: 768px) {
    .particles-bg,
    .geometric-lines,
    .orb,
    .grid-bg {
        display: none !important;
    }
}
```

---

## 🎯 Presets (Các Cài Đặt Sẵn)

### Preset 1: Minimal (Tối Giản)
Chỉ giữ:
- Grid background
- Gradient animation
- 1 orb

### Preset 2: Normal (Mặc Định)
Giữ nguyên như hiện tại

### Preset 3: Maximum (Tối Đa)
Bật thêm:
- Cursor trail
- Interactive particles
- Floating elements

---

## 🚀 Performance Tips

### Nếu Website Chạy Chậm:

1. **Giảm số lượng particles**
   - Từ 10 xuống 5
   - File: `index.html` (dòng 27-36)

2. **Giảm số stars**
   - File: `js/background-effects.js` (dòng 7)
   - Từ 50 xuống 20-30

3. **Tắt orbs**
   - Comment/xóa các `<div class="orb">` trong `index.html`

4. **Tắt grid animation**
   - Xóa `<div class="grid-bg"></div>` trong `index.html`

---

## 🎨 Ví Dụ Themes Khác

### Blue Theme
```css
.particle { background: #0080ff; }
.orb1 { background: #0080ff; }
.orb2 { background: #0066cc; }
.orb3 { background: #004d99; }
.star { background: #00bfff; }
```

### Purple Theme
```css
.particle { background: #8b5cf6; }
.orb1 { background: #8b5cf6; }
.orb2 { background: #7c3aed; }
.orb3 { background: #6d28d9; }
.star { background: #a78bfa; }
```

### Green Theme
```css
.particle { background: #10b981; }
.orb1 { background: #10b981; }
.orb2 { background: #059669; }
.orb3 { background: #047857; }
.star { background: #34d399; }
```

---

## 🗂️ File Structure

```
ProfileDHN/
├── css/
│   └── animations.css       ← Styles cho effects
│
├── js/
│   └── background-effects.js ← Logic cho effects
│
└── index.html              ← HTML elements
```

---

## ✅ Checklist Tùy Chỉnh

- [ ] Thử thay đổi màu particles
- [ ] Điều chỉnh tốc độ animations
- [ ] Bật/tắt các effects khác nhau
- [ ] Test trên mobile
- [ ] Check performance (không lag)
- [ ] Thử các presets khác nhau

---

## 🆘 Troubleshooting

### Hiệu ứng không hoạt động?
1. Check Console (F12) xem có lỗi không
2. Clear cache: Ctrl + Shift + R
3. Đảm bảo files đã được load đúng

### Website lag?
1. Giảm số particles và stars
2. Tắt orbs trên mobile
3. Disable cursor trail

### Muốn thêm hiệu ứng khác?
Uncomment các functions trong `js/background-effects.js`:
- `initCursorTrail()`
- `createFloatingElements()`
- `initInteractiveParticles()`

---

**Enjoy your animated background! 🎉**

Nếu cần tùy chỉnh thêm, hãy hỏi tôi!

