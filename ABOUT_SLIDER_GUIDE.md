# 🎨 Hướng Dẫn Thêm Banner Ảnh Slider - Phần "Về Tôi"

## 📋 Mục Lục
1. [Giới Thiệu](#giới-thiệu)
2. [Chuẩn Bị Ảnh](#chuẩn-bị-ảnh)
3. [Thêm Ảnh Vào Website](#thêm-ảnh-vào-website)
4. [Tùy Chỉnh Slider](#tùy-chỉnh-slider)
5. [Tips & Tricks](#tips--tricks)

---

## 🎬 Giới Thiệu

**Image Slider** là một banner ảnh tự động chạy với các tính năng:

✅ **5 ảnh** tự động thay đổi  
✅ **Auto-play** mỗi 3 giây  
✅ **Nút điều khiển** Prev/Next  
✅ **Dots navigation** - click để chuyển ảnh  
✅ **Pause on hover** - dừng khi di chuột vào  
✅ **Smooth transitions** - chuyển ảnh mượt mà  
✅ **Responsive** - tự động responsive trên mobile  

---

## 🖼️ Chuẩn Bị Ảnh

### Yêu Cầu Ảnh:
- **Số lượng**: 5 ảnh
- **Kích thước**: 600x400px (tỷ lệ 3:2) - khung ngang
- **Format**: JPG, PNG, WEBP
- **Dung lượng**: < 500KB mỗi ảnh (để load nhanh)

### Loại Ảnh Nên Dùng:
1. 📸 **Ảnh cá nhân** - Chân dung, ảnh làm việc
2. 💻 **Ảnh workspace** - Bàn làm việc, setup
3. 🎓 **Ảnh học tập** - Lớp học, dự án
4. 🏆 **Ảnh thành tích** - Giải thưởng, chứng chỉ
5. 🎯 **Ảnh hoạt động** - Workshop, sự kiện

### Cách Tối Ưu Ảnh:
1. **Resize ảnh về 600x400px**:
   - [ImageResizer](https://imageresizer.com/)
   - [Squoosh](https://squoosh.app/)

2. **Compress để giảm dung lượng**:
   - [TinyPNG](https://tinypng.com/)
   - [Compressor.io](https://compressor.io/)

3. **Crop ảnh thành khung ngang** (tỷ lệ 3:2):
   - Canva: https://www.canva.com/
   - Photopea: https://www.photopea.com/

---

## 📁 Thêm Ảnh Vào Website

### Bước 1: Đặt File Ảnh

Đặt **5 ảnh** vào thư mục `images/` với tên:

```plaintext
ProfileDHN/
├── images/
│   ├── avatar.jpg
│   ├── hutech-logo.png
│   ├── about-1.jpg     ⬅️ Ảnh 1
│   ├── about-2.jpg     ⬅️ Ảnh 2
│   ├── about-3.jpg     ⬅️ Ảnh 3
│   ├── about-4.jpg     ⬅️ Ảnh 4
│   └── about-5.jpg     ⬅️ Ảnh 5
```

**Lưu ý tên file:**
- Đặt tên rõ ràng, dễ nhớ
- Không dùng ký tự đặc biệt: `à, ả, ã, ...`
- Nên dùng: `about-1.jpg`, `about-2.jpg`, ...

### Bước 2: Cập Nhật Đường Dẫn

Mở file `js/data.js` và tìm phần **About Section**:

```javascript
about: {
    title: 'Về <span class="highlight">Tôi</span>',
    description: [...],
    info: [...],
    
    // ⬇️ THAY ĐỔI TẠI ĐÂY ⬇️
    images: [
        "images/about-1.jpg",  // Ảnh 1
        "images/about-2.jpg",  // Ảnh 2
        "images/about-3.jpg",  // Ảnh 3
        "images/about-4.jpg",  // Ảnh 4
        "images/about-5.jpg"   // Ảnh 5
    ]
}
```

**Nếu bạn đặt tên khác**, chỉnh lại:

```javascript
images: [
    "images/my-photo-1.jpg",
    "images/my-photo-2.jpg",
    "images/workspace.png",
    "images/coding.jpg",
    "images/award.jpg"
]
```

### Bước 3: Kiểm Tra Kết Quả

1. Mở trình duyệt
2. Vào trang web của bạn
3. Cuộn xuống phần **"Về Tôi"**
4. Xem slider tự động chạy!

---

## 🎮 Tính Năng Slider

### 1. Auto-Play (Tự động chạy)
- Ảnh tự động chuyển mỗi **3 giây**
- Dừng lại khi **hover chuột**
- Tiếp tục khi **rời chuột**

### 2. Nút Điều Khiển
- **Prev (◀)**: Quay lại ảnh trước
- **Next (▶)**: Chuyển sang ảnh tiếp theo
- Hiển thị khi **hover** vào slider

### 3. Dots Navigation
- **5 chấm tròn** ở dưới slider
- Click vào chấm để **nhảy đến ảnh** tương ứng
- Chấm **active** sẽ **dài ra** và **đỏ sáng**

### 4. Hiệu Ứng
- ✨ **Fade transition** - ảnh mờ dần
- 💫 **Glow effect** - phát sáng đỏ
- 🌊 **Shine animation** - ánh sáng chạy qua
- 🎯 **Hover effects** - nút phóng to

---

## ⚙️ Tùy Chỉnh Slider

### 1. Thay Đổi Thời Gian Auto-Play

Mở file `js/components/about.js` và tìm dòng:

```javascript
function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3000); 
    //                                        ^^^^
    //                                Thay đổi ở đây (milliseconds)
}
```

**Ví dụ:**
- `2000` = 2 giây
- `5000` = 5 giây
- `10000` = 10 giây

### 2. Thay Đổi Chiều Cao Slider

Mở file `css/about.css` và tìm:

```css
.about-slider {
    height: 400px;  /* Thay đổi chiều cao */
}
```

**Đề xuất:**
- Desktop: `400px` - `500px`
- Mobile: `300px` - `350px`

### 3. Thay Đổi Màu Sắc

Trong `css/about.css`:

```css
/* Border slider */
.about-slider-container {
    border: 3px solid #ff0000;  /* Màu đỏ */
}

/* Nút điều khiển */
.slider-btn {
    background: rgba(255, 0, 0, 0.8);  /* Background đỏ */
}

/* Dot active */
.slider-dot.active {
    background: #ff0000;  /* Dot màu đỏ */
}
```

### 4. Tắt Auto-Play

Nếu muốn **tắt tự động chạy**, comment dòng này trong `js/components/about.js`:

```javascript
// startAutoPlay();  // ← Comment dòng này
```

### 5. Thêm/Bớt Số Ảnh

**Thêm ảnh thứ 6:**

```javascript
images: [
    "images/about-1.jpg",
    "images/about-2.jpg",
    "images/about-3.jpg",
    "images/about-4.jpg",
    "images/about-5.jpg",
    "images/about-6.jpg"  // ← Thêm vào đây
]
```

**Chỉ dùng 3 ảnh:**

```javascript
images: [
    "images/about-1.jpg",
    "images/about-2.jpg",
    "images/about-3.jpg"
]
```

---

## 💡 Tips & Tricks

### 1. Chọn Ảnh Đẹp
- ✅ Ảnh **rõ nét**, ánh sáng tốt
- ✅ Background **đơn giản**, không lộn xộn
- ✅ Ảnh có **câu chuyện**, thể hiện cá tính
- ❌ Tránh ảnh **mờ**, tối, bị cắt xén

### 2. Sắp Xếp Thứ Tự
- **Ảnh 1**: Ảnh chân dung đẹp nhất
- **Ảnh 2-4**: Ảnh hoạt động, workspace
- **Ảnh 5**: Ảnh ấn tượng, đặc biệt

### 3. Tối Ưu Performance
```javascript
// Preload images để load nhanh hơn
images.forEach(src => {
    const img = new Image();
    img.src = src;
});
```

### 4. Thêm Caption Cho Ảnh
Có thể thêm chú thích cho mỗi ảnh trong `js/data.js`:

```javascript
images: [
    { 
        src: "images/about-1.jpg",
        caption: "Chân dung của tôi"
    },
    { 
        src: "images/about-2.jpg",
        caption: "Workspace setup"
    },
    // ...
]
```

### 5. Dùng Ảnh Từ URL Online
```javascript
images: [
    "https://i.imgur.com/abc123.jpg",
    "https://i.imgur.com/def456.jpg",
    // ...
]
```

---

## 🐛 Troubleshooting

### Slider không chạy?
```
Kiểm tra:
1. ✅ File ảnh có trong thư mục images/?
2. ✅ Đường dẫn trong js/data.js đúng?
3. ✅ Mở Console (F12) xem có lỗi?
4. ✅ Đã save lại file js/data.js?
```

### Ảnh bị méo/vỡ?
```
→ Đảm bảo ảnh có tỷ lệ 3:2 (600x400px)
→ Hoặc thay đổi object-fit trong CSS:
   object-fit: contain;  /* Giữ nguyên tỷ lệ */
   object-fit: cover;    /* Lấp đầy khung */
```

### Slider chạy quá nhanh/chậm?
```
→ Thay đổi thời gian trong js/components/about.js:
   setInterval(nextSlide, 3000);  // 3 giây
```

### Nút Prev/Next không hiện?
```
→ Di chuột vào slider
→ Hoặc thay đổi opacity trong CSS:
   .slider-controls {
       opacity: 1;  /* Luôn hiển thị */
   }
```

---

## 🎨 Ví Dụ Thực Tế

### Setup 1: Portfolio Cá Nhân
```javascript
images: [
    "images/portrait.jpg",        // Chân dung
    "images/workspace.jpg",       // Bàn làm việc
    "images/coding.jpg",          // Đang code
    "images/presentation.jpg",    // Thuyết trình
    "images/team.jpg"             // Làm việc nhóm
]
```

### Setup 2: Freelancer
```javascript
images: [
    "images/professional.jpg",    // Ảnh chuyên nghiệp
    "images/laptop-coffee.jpg",   // Laptop & coffee
    "images/client-meeting.jpg",  // Gặp khách hàng
    "images/project-work.jpg",    // Dự án
    "images/success.jpg"          // Thành công
]
```

### Setup 3: Student/Fresher
```javascript
images: [
    "images/graduation.jpg",      // Tốt nghiệp
    "images/study.jpg",           // Học tập
    "images/project-demo.jpg",    // Demo dự án
    "images/hackathon.jpg",       // Hackathon
    "images/certificate.jpg"      // Chứng chỉ
]
```

---

## 🔗 Resources

- 🖼️ [Unsplash](https://unsplash.com/) - Ảnh miễn phí chất lượng cao
- 🎨 [Canva](https://www.canva.com/) - Chỉnh sửa ảnh online
- 📐 [Squoosh](https://squoosh.app/) - Compress ảnh
- 🗜️ [TinyPNG](https://tinypng.com/) - Giảm dung lượng
- 📷 [Remove.bg](https://remove.bg/) - Xóa background

---

**Happy Sliding! 🎢**

Nếu bạn cần thêm trợ giúp, hãy hỏi tôi nhé!

