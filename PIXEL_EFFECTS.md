# 🎮 Hướng Dẫn Pixel Effects

## ✨ Hiệu Ứng Pixel Đã Thêm

Website của bạn giờ có phong cách **Retro/Cyberpunk Pixel Art**!

### 1. **🟥 Pixel Grid Overlay**
- Lưới pixel nhỏ trên toàn bộ màn hình
- Di chuyển liên tục tạo hiệu ứng động
- Màu đỏ mờ, tạo cảm giác retro

### 2. **📺 CRT Scanlines**
- Hiệu ứng màn hình CRT cổ điển
- Các đường ngang di chuyển
- Tạo cảm giác như màn hình cũ

### 3. **⚡ Glitch Effect**
- 4 glitch blocks ngẫu nhiên
- Xuất hiện bất ngờ tạo hiệu ứng lỗi
- Cyberpunk style

### 4. **🎯 Pixel Borders**
- 4 viền pixel animation
- Di chuyển theo chiều kim đồng hồ
- Pattern màu đỏ

### 5. **💻 Matrix Digital Rain**
- Canvas với số 0 và 1 rơi xuống
- Giống phim Matrix
- Màu đỏ thay vì xanh

### 6. **⬛ Pixel Particles** (15 hạt)
- Hình vuông pixel bay lên
- 8x8px kích thước
- Xoay và di chuyển

### 7. **🔴 Pixelated Circles** (5 circles)
- Hình tròn pixel art
- Float và xoay
- Kích thước ngẫu nhiên

### 8. **✨ Text Glitch Effect**
- Titles có hiệu ứng glitch
- RGB split effect
- Xuất hiện ngẫu nhiên

### 9. **🎨 Pixel Vignette**
- Viền tối xung quanh màn hình
- Tạo focus vào center
- Subtle red glow

### 10. **🖱️ Pixel Cursor** (Tùy chọn)
- Con trỏ chuột pixel 12x12px
- Màu đỏ với glow effect
- Uncomment để bật

---

## 🎮 Demo Preview:

```
╔════════════════════════════════════════╗
║ ▓▒░ RETRO PIXEL PORTFOLIO ░▒▓       ║
║                                        ║
║  [01010101]  Matrix Rain               ║
║  ████  Pixel Particles                 ║
║  ▓▓▓▓  Glitch Effects                 ║
║  ◆◆◆◆  Scanlines                      ║
║  ████  Animated Borders                ║
║                                        ║
╚════════════════════════════════════════╝
```

---

## 🔧 Tùy Chỉnh Pixel Effects

### 1. Thay Đổi Màu Pixel

#### Pixel Grid
File: `css/animations.css` (dòng ~323)
```css
.pixel-grid {
    background-image: 
        repeating-linear-gradient(
            0deg,
            rgba(255, 0, 0, 0.03),  /* ← Đổi màu */
            /* ... */
        );
}
```

#### Matrix Rain
File: `js/background-effects.js` (dòng ~205)
```javascript
ctx.fillStyle = '#ff0000';  // ← Đổi màu Matrix
```

#### Pixel Particles
File: `css/animations.css` (dòng ~414)
```css
.pixel-particle {
    background: #ff0000;  /* ← Đổi màu particles */
}
```

#### Glitch Blocks
File: `css/animations.css` (dòng ~385)
```css
.glitch-block {
    background: rgba(255, 0, 0, 0.8);  /* ← Đổi màu glitch */
}
```

---

### 2. Điều Chỉnh Kích Thước Pixel

#### Pixel Grid Size
```css
.pixel-grid {
    background-size: 4px 4px;  /* 2px = nhỏ hơn, 8px = lớn hơn */
}
```

#### Scanline Height
```css
.scanlines {
    background-size: 100% 4px;  /* 2px = mịn hơn, 8px = rõ hơn */
}
```

#### Pixel Particle Size
```css
.pixel-particle {
    width: 8px;   /* Kích thước ngang */
    height: 8px;  /* Kích thước dọc */
}
```

---

### 3. Thay Đổi Tốc Độ

#### Pixel Grid Speed
```css
@keyframes pixel-shift {
    /* animation-duration: 8s; */
    /* 4s = nhanh, 16s = chậm */
}
```

#### Scanline Speed
```css
@keyframes scanline-move {
    /* animation-duration: 8s; */
}
```

#### Glitch Frequency
File: `js/background-effects.js` (dòng ~278)
```javascript
setInterval(() => {
    if (Math.random() > 0.95) {  // 0.95 = ít, 0.9 = nhiều
        // glitch code
    }
}, 3000);  // 1000 = nhanh, 5000 = chậm
```

#### Matrix Rain Speed
File: `js/background-effects.js` (dòng ~231)
```javascript
setInterval(draw, 50);  // 30 = nhanh, 100 = chậm
```

---

### 4. Điều Chỉnh Intensity (Độ Mạnh)

#### Grid Opacity
```css
.pixel-grid {
    background-image: 
        repeating-linear-gradient(
            rgba(255, 0, 0, 0.03)  /* 0.01 = mờ, 0.1 = đậm */
        );
}
```

#### Scanline Opacity
```css
.scanlines {
    background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(255, 0, 0, 0.02) 51%  /* 0.01 = mờ, 0.05 = đậm */
    );
}
```

#### Matrix Canvas Opacity
File: `css/animations.css` (dòng ~445)
```css
.matrix-canvas {
    opacity: 0.3;  /* 0.1 = mờ, 0.6 = đậm */
}
```

---

## 🎨 Bật/Tắt Các Hiệu Ứng

### Trong File `js/background-effects.js` (dòng ~297-308):

```javascript
function initBackgroundEffects() {
    // Original effects
    createStars();             // ✅ Stars
    initParallax();            // ✅ Parallax
    initScrollGlow();          // ✅ Scroll glow
    
    // PIXEL EFFECTS
    initMatrixRain();          // ✅ Matrix rain
    createPixelParticles();    // ✅ Pixel particles
    createPixelCircles();      // ✅ Pixel circles
    addPixelGlitchToTitles();  // ✅ Text glitch
    initRandomGlitch();        // ✅ Random glitch
    // initPixelCursor();      // ❌ Pixel cursor (uncomment để bật)
}
```

### Tắt Hiệu Ứng Trong HTML:

Mở `index.html` và comment/xóa các dòng:

```html
<!-- Tắt Pixel Grid -->
<!-- <div class="pixel-grid"></div> -->

<!-- Tắt Scanlines -->
<!-- <div class="scanlines"></div> -->

<!-- Tắt Glitch -->
<!-- <div class="glitch-overlay">...</div> -->

<!-- Tắt Pixel Borders -->
<!-- <div class="pixel-border top"></div> -->
```

---

## 🎮 Presets (Cài Đặt Sẵn)

### Preset 1: Minimal Pixel
Chỉ giữ:
- Pixel Grid
- Scanlines
- Text Glitch

### Preset 2: Medium Pixel (Mặc định)
Tất cả trừ Pixel Cursor

### Preset 3: Maximum Pixel
Bật tất cả:
```javascript
initPixelCursor();     // Uncomment line này
```

### Preset 4: Matrix Style
Chỉ giữ:
- Matrix Rain
- Scanlines
- Glitch Effect

### Preset 5: Cyberpunk
Chỉ giữ:
- Glitch Effect
- Pixel Borders
- Text Glitch
- Matrix Rain

---

## 🎨 Color Themes

### Blue Pixel Theme
```css
/* Đổi tất cả #ff0000 thành #00bfff */
```

### Green Matrix Theme
```css
/* Đổi tất cả #ff0000 thành #00ff00 */
```

### Purple Cyber Theme
```css
/* Đổi tất cả #ff0000 thành #8b5cf6 */
```

### Orange Retro Theme
```css
/* Đổi tất cả #ff0000 thành #ff6b00 */
```

---

## 📱 Mobile Optimization

Tự động giảm hiệu ứng trên mobile:

File: `css/animations.css` (dòng ~571-584)

```css
@media (max-width: 768px) {
    .pixel-grid {
        background-size: 2px 2px;  /* Nhỏ hơn */
    }
    
    .glitch-overlay,
    .pixel-border {
        display: none;  /* Tắt hoàn toàn */
    }
}
```

---

## 🚀 Performance Tips

### Nếu Website Lag:

1. **Giảm Matrix Rain columns**
   - File: `js/background-effects.js` (dòng ~206)
   - Tăng `fontSize` từ 10 lên 15-20

2. **Giảm Pixel Particles**
   - File: `js/background-effects.js` (dòng ~240)
   - Giảm `particleCount` từ 15 xuống 5-8

3. **Tắt Scanlines**
   - Comment trong `index.html`

4. **Giảm Glitch frequency**
   - File: `js/background-effects.js` (dòng ~278)
   - Tăng interval từ 3000 lên 10000

---

## 🎯 Hiệu Ứng Bổ Sung (Optional)

### Bật Pixel Cursor:
```javascript
initPixelCursor(); // Uncomment dòng này
```

### Thêm CRT Flicker:
Thêm class vào body:
```html
<body class="crt-flicker">
```

---

## 📊 Summary

✅ **Đã Bật:**
- Pixel Grid
- CRT Scanlines
- Glitch Effects
- Pixel Borders
- Matrix Digital Rain
- Pixel Particles
- Pixel Circles
- Text Glitch
- Pixel Vignette

❌ **Chưa Bật (Optional):**
- Pixel Cursor
- CRT Flicker on body

---

## 🎨 Examples

### Matrix Style Code:
```css
/* Tắt tất cả trừ: */
- Matrix Canvas
- Scanlines
- Green color (#00ff00)
```

### Retro Gaming:
```css
/* Giữ: */
- Pixel Grid (bigger 8px)
- Pixel Particles
- Pixel Borders
- Orange color (#ff6b00)
```

### Cyberpunk:
```css
/* Giữ tất cả */
/* Màu: #ff0066 (pink) + #00ffff (cyan) */
```

---

## 🗂️ File Structure

```
ProfileDHN/
├── css/
│   └── animations.css       ← Pixel effects CSS
│
├── js/
│   └── background-effects.js ← Pixel effects logic
│
└── index.html              ← Pixel HTML elements
```

---

## ✅ Checklist

- [ ] Pixel Grid đang chạy
- [ ] Matrix rain xuất hiện
- [ ] Scanlines di chuyển
- [ ] Glitch effects ngẫu nhiên
- [ ] Pixel borders animated
- [ ] Text có glitch effect
- [ ] Test trên mobile
- [ ] Performance OK (không lag)

---

**Enjoy your Pixel/Retro style! 🎮✨**

Muốn thay đổi gì thêm? Hãy hỏi tôi!

