# 🎮 Hero Section - Pixel Effects Guide

## ✨ Hiệu Ứng Pixel Động Cho Hero Section

Hero section của bạn giờ có **8 hiệu ứng pixel tự động chạy**!

---

## 🎯 Các Hiệu Ứng Đã Thêm:

### 1. **📊 Animated Pixel Grid**
- Lưới pixel 20x20px
- Pulse animation (co giãn và mờ/đậm)
- Chu kỳ 8 giây

### 2. **🌊 Pixel Waves** (5 waves)
- 5 dải pixel di chuyển ngang
- Tốc độ khác nhau (15-22s)
- Độ mờ khác nhau

### 3. **☁️ Pixel Clouds** (4 clouds)
- Mây pixel bay từ trái sang phải
- Float lên xuống tự nhiên
- Tốc độ 40-55 giây

### 4. **💧 Pixel Rain** (30 drops)
- 30 hạt pixel rơi xuống
- Vị trí và thời gian ngẫu nhiên
- Tốc độ 2-5 giây/drop

### 5. **✨ Pixel Sparkles** (20 sparkles)
- 20 ngôi sao nhấp nháy
- Xoay và scale animation
- Tốc độ 1-3 giây

### 6. **📦 Floating Pixel Boxes** (8 boxes)
- 8 hộp vuông bay
- Di chuyển theo pattern
- Xoay 360 độ

### 7. **📡 Digital Scanline**
- Đường scan di chuyển từ trên xuống
- Glow effect màu đỏ
- Chu kỳ 3 giây

### 8. **🎨 Background Grid Pulse**
- Grid lớn ở background
- Pulse breathing effect
- Subtle và không làm mất tập trung

---

## 🎮 Demo Visual:

```
╔════════════════════════════════════════╗
║  ☁️  ☁️  Pixel Clouds Float          ║
║  ───  ───  Pixel Waves Move          ║
║  💧 💧 💧  Pixel Rain Falls           ║
║  ✨ ✨ ✨  Sparkles Twinkle           ║
║  📦 📦 📦  Boxes Rotate               ║
║  📡 ━━━━━  Scanline Sweep             ║
║  ▓▓▓▓▓▓▓▓  Grid Pulse                 ║
╚════════════════════════════════════════╝
```

---

## 🎨 Tùy Chỉnh Effects

### File: `css/hero.css`

### 1. Thay Đổi Màu Pixel

```css
/* Pixel Waves */
.pixel-wave {
    background: repeating-linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.1) /* ← Đổi màu */
    );
}

/* Pixel Rain */
.pixel-drop {
    background: #ff0000; /* ← Đổi màu */
}

/* Sparkles */
.pixel-sparkle {
    background: #ff0000; /* ← Đổi màu */
}

/* Boxes */
.pixel-box {
    border: 2px solid rgba(255, 0, 0, 0.3); /* ← Đổi màu */
}
```

### 2. Điều Chỉnh Tốc Độ

```css
/* Waves Speed */
.pixel-wave:nth-child(1) {
    animation-duration: 15s; /* Nhỏ hơn = nhanh hơn */
}

/* Clouds Speed */
.pixel-cloud:nth-child(1) {
    animation-duration: 40s; /* 20s = nhanh, 60s = chậm */
}

/* Scanline Speed */
.hero-scanline {
    animation-duration: 3s; /* 1s = nhanh, 5s = chậm */
}

/* Grid Pulse Speed */
.hero-pixel-grid {
    animation-duration: 8s; /* 4s = nhanh, 12s = chậm */
}
```

### 3. Thay Đổi Số Lượng Elements

File: `js/components/hero.js`

```javascript
// Pixel Rain
const dropCount = 30; // 15 = ít, 50 = nhiều

// Sparkles
const sparkleCount = 20; // 10 = ít, 30 = nhiều

// Boxes
const boxCount = 8; // 5 = ít, 12 = nhiều
```

### 4. Điều Chỉnh Kích Thước

```css
/* Pixel Drop Size */
.pixel-drop {
    width: 4px;  /* 2px = nhỏ, 8px = lớn */
    height: 4px;
}

/* Sparkle Size */
.pixel-sparkle {
    width: 6px;  /* 3px = nhỏ, 10px = lớn */
    height: 6px;
}

/* Box Size */
.pixel-box {
    width: 20px;  /* 10px = nhỏ, 40px = lớn */
    height: 20px;
}

/* Wave Height */
.pixel-wave {
    height: 100px; /* 50px = nhỏ, 200px = lớn */
}
```

### 5. Opacity (Độ Mờ)

```css
/* Waves Opacity */
.pixel-wave:nth-child(1) {
    opacity: 0.3; /* 0.1 = rất mờ, 0.6 = đậm */
}

/* Grid Opacity */
.hero-pixel-grid {
    background-image: 
        repeating-linear-gradient(
            rgba(255, 0, 0, 0.05) /* 0.02 = mờ, 0.1 = đậm */
        );
}

/* Boxes Opacity */
.pixel-box {
    opacity: 0.3; /* trong animation */
}
```

---

## 🎯 Presets (Cài Đặt Sẵn)

### Preset 1: Minimal
Chỉ giữ:
- Pixel Grid
- Scanline
- 10 Sparkles

### Preset 2: Medium (Mặc định)
Tất cả 8 effects với cường độ vừa

### Preset 3: Maximum
Tăng số lượng:
- 50 Pixel Rain drops
- 30 Sparkles  
- 12 Boxes
- Tốc độ nhanh hơn

### Preset 4: Waves Only
Chỉ giữ:
- Pixel Waves
- Pixel Clouds
- Grid

### Preset 5: Rain & Sparkles
Chỉ giữ:
- Pixel Rain
- Sparkles
- Scanline

---

## 🔧 Bật/Tắt Từng Effect

### Trong file `js/components/hero.js`:

Comment/Uncomment các dòng này:

```javascript
// Generate Pixel Rain
generateHeroPixelRain();      // ✅ Bật

// Generate Pixel Sparkles
// generateHeroPixelSparkles(); // ❌ Tắt (thêm //)

// Generate Pixel Boxes
generateHeroPixelBoxes();      // ✅ Bật
```

### Trong HTML (hero.innerHTML):

Comment các elements:

```javascript
// Tắt Waves
/* <div class="hero-pixel-waves">...</div> */

// Tắt Clouds
/* <div class="hero-pixel-clouds">...</div> */

// Tắt Scanline
/* <div class="hero-scanline"></div> */
```

---

## 🎨 Color Themes

### Blue Cyber Theme
```css
rgba(255, 0, 0, ...) → rgba(0, 191, 255, ...)
#ff0000 → #00bfff
```

### Green Matrix Theme
```css
rgba(255, 0, 0, ...) → rgba(0, 255, 0, ...)
#ff0000 → #00ff00
```

### Purple Neon Theme
```css
rgba(255, 0, 0, ...) → rgba(139, 92, 246, ...)
#ff0000 → #8b5cf6
```

### Pink Cyberpunk Theme
```css
rgba(255, 0, 0, ...) → rgba(236, 72, 153, ...)
#ff0000 → #ec4899
```

---

## 📱 Mobile Optimization

Effects tự động tối ưu trên mobile!

Nếu muốn tắt thêm trên mobile, thêm vào `css/hero.css`:

```css
@media (max-width: 768px) {
    .hero-pixel-clouds,
    .hero-pixel-boxes {
        display: none;
    }
    
    .pixel-drop,
    .pixel-sparkle {
        display: none;
    }
    
    .hero-pixel-waves {
        opacity: 0.5; /* Giảm opacity */
    }
}
```

---

## 🚀 Performance Tips

### Nếu Hero Section Lag:

1. **Giảm Pixel Rain**
   ```javascript
   const dropCount = 15; // từ 30 → 15
   ```

2. **Giảm Sparkles**
   ```javascript
   const sparkleCount = 10; // từ 20 → 10
   ```

3. **Tắt Boxes**
   ```javascript
   // generateHeroPixelBoxes(); // Comment dòng này
   ```

4. **Giảm Waves**
   Xóa 2-3 `<div class="pixel-wave"></div>` trong HTML

5. **Tắt Clouds**
   ```html
   <!-- <div class="hero-pixel-clouds">...</div> -->
   ```

---

## 🎮 Advanced Customization

### Custom Wave Pattern

```css
.pixel-wave {
    background: repeating-linear-gradient(
        45deg, /* Thay đổi góc */
        rgba(255, 0, 0, 0.1) 0px,
        rgba(255, 0, 0, 0.1) 8px,
        transparent 8px,
        transparent 16px
    );
}
```

### Custom Box Animation

```css
@keyframes box-float {
    0% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(100px, -50px) rotate(120deg); }
    66% { transform: translate(-100px, 50px) rotate(240deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
}
```

### Custom Sparkle Effect

```css
@keyframes sparkle-twinkle {
    0%, 100% { 
        opacity: 0;
        transform: scale(0) rotate(0deg);
        filter: hue-rotate(0deg);
    }
    50% { 
        opacity: 1;
        transform: scale(2) rotate(180deg);
        filter: hue-rotate(180deg);
    }
}
```

---

## 🔥 Pro Tips

1. **Layering**: Effects được xếp layer đúng để không che mất content
2. **Z-index**: Tất cả effects có `z-index: 0`, content có `z-index: 1`
3. **Performance**: Dùng `will-change: transform` cho smooth animation
4. **Blend Mode**: Thử `mix-blend-mode: screen` cho effects đẹp hơn

---

## ✅ Checklist

- [ ] Pixel Grid đang pulse
- [ ] Waves di chuyển ngang
- [ ] Clouds bay từ trái sang phải
- [ ] Rain drops rơi xuống
- [ ] Sparkles nhấp nháy
- [ ] Boxes xoay và bay
- [ ] Scanline di chuyển dọc
- [ ] Không che avatar
- [ ] Không che text
- [ ] Performance OK

---

## 🎯 Quick Commands

### Tắt Tất Cả Pixel Effects:
```javascript
// Trong hero.js, comment 3 dòng:
// generateHeroPixelRain();
// generateHeroPixelSparkles();
// generateHeroPixelBoxes();
```

### Chỉ Giữ Waves & Grid:
```javascript
// Comment trong hero.innerHTML:
/* <div class="hero-pixel-clouds">...</div> */
/* <div class="hero-pixel-rain">...</div> */
/* <div class="hero-pixel-sparkles">...</div> */
/* <div class="hero-pixel-boxes">...</div> */
/* <div class="hero-scanline"></div> */
```

---

**Hero Section của bạn giờ sống động với Pixel Magic! 🎮✨**

Refresh browser (F5) để xem!

Muốn tùy chỉnh thêm? Hỏi tôi! 😊

