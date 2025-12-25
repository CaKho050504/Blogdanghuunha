# 🧪 Kiểm Tra Mouse Effects

## ✅ Checklist Test

Sau khi reload trang, hãy kiểm tra từng hiệu ứng:

### 1. ✨ Custom Cursor (Con Trỏ)
- [ ] Con trỏ chuột đã thay đổi thành vòng tròn đỏ?
- [ ] Có điểm sáng nhỏ ở giữa?
- [ ] Có vòng tròn lớn hơn bên ngoài?

**Test:** Di chuyển chuột xung quanh trang

---

### 2. 🎯 Hover Effect
- [ ] Khi hover qua button, cursor có phóng to?
- [ ] Khi hover qua card, cursor có phóng to?
- [ ] Khi hover qua link, cursor có phóng to?

**Test:** 
1. Hover qua menu navigation
2. Hover qua hobby cards
3. Hover qua certificate cards
4. Hover qua buttons trong sliders

---

### 3. ⭐ Particle Trail (Vệt Hạt)
- [ ] Có hạt nhỏ màu đỏ xuất hiện khi di chuyển chuột?
- [ ] Hạt có biến mất sau vài giây?
- [ ] Hạt có hiệu ứng fade out?

**Test:** Di chuyển chuột nhanh xung quanh trang

---

### 4. 🌊 Click Ripple (Gợn Sóng)
- [ ] Khi click vào trang, có vòng tròn lan rộng?
- [ ] Vòng tròn có màu đỏ?
- [ ] Vòng tròn có biến mất sau khi lan rộng?

**Test:** Click vào nhiều vị trí khác nhau trên trang

---

### 5. ✨ Sparkle Effect (Tia Sáng)
- [ ] Khi click, có 8 tia sáng bắn ra?
- [ ] Các tia sáng có màu đỏ?
- [ ] Tia sáng có biến mất nhanh?

**Test:** Click nhiều lần liên tiếp

---

### 6. 🧲 Magnetic Effect (Từ Tính)
- [ ] Khi hover gần button, button có bị "kéo" về phía cursor?
- [ ] Khi hover gần card, card có di chuyển nhẹ?
- [ ] Khi rời khỏi, element có quay về vị trí cũ?

**Test:** 
1. Di chuyển chuột gần buttons (không cần hover trực tiếp)
2. Di chuyển chuột gần hobby cards
3. Quan sát chuyển động

---

### 7. 🎴 Card Tilt (Nghiêng 3D)
- [ ] Khi hover qua card, card có nghiêng theo hướng chuột?
- [ ] Card có hiệu ứng 3D?
- [ ] Khi rời chuột, card có quay về phẳng?

**Test:**
1. Hover qua hobby card
2. Di chuyển chuột theo vòng tròn trên card
3. Quan sát card nghiêng theo

---

### 8. 💡 Mouse Light (Ánh Sáng)
- [ ] Có vùng sáng mờ theo chuột?
- [ ] Ánh sáng có màu đỏ?
- [ ] Ánh sáng có di chuyển mượt?

**Test:** Di chuyển chuột chậm để thấy rõ ánh sáng

---

### 9. 🎨 Hover Trail (Đường Vệt)
- [ ] Có các chấm nhỏ xuất hiện khi di chuyển?
- [ ] Chấm nhỏ hơn particle trail?
- [ ] Chấm có fade out?

**Test:** Di chuyển chuột với tốc độ trung bình

---

### 10. 🎪 Gradient Follow
- [ ] Có gradient đỏ mờ theo sau chuột?
- [ ] Gradient có độ trễ so với cursor?
- [ ] Gradient có blur?

**Test:** Di chuyển chuột, quan sát gradient ở phía sau

---

## 🔍 Debug Mode

### Mở Console (F12) và kiểm tra:

```javascript
// Bạn sẽ thấy message này:
🖱️ Mouse effects initialized!
```

Nếu **KHÔNG** thấy message này:
1. Check file `js/mouse-effects.js` đã được load
2. Check Console có báo lỗi không
3. Hard refresh: `Ctrl + Shift + R`

---

## 📊 Performance Test

### Test 1: CPU Usage
1. Mở Task Manager (Ctrl + Shift + Esc)
2. Di chuyển chuột liên tục trong 30 giây
3. CPU usage nên < 30%

**Nếu CPU cao:**
- Giảm tần suất particle trong `js/mouse-effects.js`
- Tắt một số hiệu ứng không cần thiết

### Test 2: Animation Smoothness
1. Di chuyển chuột nhanh
2. Cursor có bị giật không?
3. Animation có mượt không?

**Nếu giật:**
- Kiểm tra xem có quá nhiều particles không
- Tắt một số effects

---

## 🎮 Interactive Test

### Test Combo Effects:

1. **Di chuyển + Click:**
   - Di chuyển chuột → thấy particles
   - Click → thấy ripple + sparkles
   
2. **Hover + Click:**
   - Hover qua card → cursor phóng to + card nghiêng
   - Click → sparkles bắn ra
   
3. **Fast Movement:**
   - Di chuyển chuột rất nhanh
   - Kiểm tra xem cursor có bị tụt lại sau không

---

## 📱 Mobile Test

1. Mở trang trên điện thoại
2. Các mouse effects phải **TỰ ĐỘNG TẮT**
3. Không có cursor tùy chỉnh
4. Không có particles

**Kiểm tra:**
- Touch vẫn hoạt động bình thường
- Không có lag khi scroll
- Hover effects được thay bằng active states

---

## 🐛 Common Issues & Solutions

### Issue 1: Cursor không hiện
**Solution:**
```html
<!-- Check index.html có dòng này: -->
<link rel="stylesheet" href="css/mouse-effects.css">
<script src="js/mouse-effects.js"></script>
```

### Issue 2: Quá nhiều particles
**Solution:**
```javascript
// Trong js/mouse-effects.js, tìm:
if (Math.random() > 0.7) {
// Đổi thành:
if (Math.random() > 0.9) {  // Giảm xuống 10%
```

### Issue 3: Cursor bị lag
**Solution:**
```css
/* Trong css/mouse-effects.css, tăng transition: */
.custom-cursor {
    transition: all 0.05s ease;  /* Từ 0.1s xuống 0.05s */
}
```

### Issue 4: Card tilt quá mạnh
**Solution:**
```javascript
// Trong tiltEffect(), giảm số:
const rotateX = ((y - centerY) / centerY) * -5;  // Từ -10 xuống -5
const rotateY = ((x - centerX) / centerX) * 5;   // Từ 10 xuống 5
```

---

## 🎯 Final Test Score

Đếm số hiệu ứng hoạt động:

- ✅ 10/10 = Perfect! 🎉
- ✅ 8-9/10 = Excellent! 👍
- ✅ 6-7/10 = Good, cần adjust thêm 🔧
- ❌ <6/10 = Cần check lại code 🐛

---

## 💾 Backup & Restore

### Nếu muốn tắt tất cả mouse effects:

**Method 1: Comment out trong index.html**
```html
<!-- <link rel="stylesheet" href="css/mouse-effects.css"> -->
<!-- <script src="js/mouse-effects.js"></script> -->
```

**Method 2: Disable trong CSS**
```css
/* Thêm vào đầu mouse-effects.css: */
body { cursor: auto !important; }
.custom-cursor,
.cursor-outer,
.mouse-particle,
.click-ripple,
.hover-trail,
.sparkle,
.mouse-light,
.gradient-follow {
    display: none !important;
}
```

---

## 📝 Report Template

Nếu tìm thấy bug, ghi lại theo format:

```
🐛 Bug Report
─────────────
Effect: [Tên hiệu ứng]
Issue: [Mô tả vấn đề]
Browser: [Chrome/Firefox/Safari]
Device: [Desktop/Mobile]
Steps to reproduce:
1. ...
2. ...
3. ...
Expected: [Kết quả mong đợi]
Actual: [Kết quả thực tế]
```

---

**Happy Testing! 🚀✨**

