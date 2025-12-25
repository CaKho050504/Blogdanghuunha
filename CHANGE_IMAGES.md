# 🖼️ Hướng Dẫn Thay Đổi Ảnh Avatar

## ⚡ Cách Nhanh Nhất (3 Bước)

### Bước 1: Copy Ảnh Vào Thư Mục `images`

Đặt ảnh của bạn vào thư mục `images/`, ví dụ:
```
D:\ProfileDHN\images\avatar.jpg
```

### Bước 2: Mở File `js/data.js`

Tìm dòng này (khoảng dòng 9-10):

```javascript
image: "https://via.placeholder.com/350"
```

### Bước 3: Thay Thế Bằng Đường Dẫn File

```javascript
image: "images/avatar.jpg"    // ← Thay bằng tên file của bạn
```

**XONG!** Refresh browser (F5) để xem kết quả.

---

## 📁 Cấu Trúc Thư Mục

```
ProfileDHN/
├── images/               ← Thư mục chứa ảnh
│   ├── avatar.jpg       ← ẢNH AVATAR CỦA BẠN (350x350px)
│   ├── about.jpg        ← Ảnh About section (nếu muốn)
│   └── project1.jpg     ← Ảnh dự án
│
└── js/
    └── data.js          ← FILE CẦN SỬA
```

---

## 🎯 Ví Dụ Cụ Thể

### Ví dụ 1: Ảnh tên `my-photo.png`

1. Copy `my-photo.png` vào `images/`
2. Sửa `js/data.js`:

```javascript
personal: {
    name: "Nguyễn Văn A",
    // ... các thông tin khác
    image: "images/my-photo.png"    // ← Thêm dòng này
}
```

### Ví dụ 2: Ảnh tên `profile.jpg`

```javascript
image: "images/profile.jpg"
```

### Ví dụ 3: Dùng URL online (Imgur)

```javascript
image: "https://i.imgur.com/abc123.jpg"
```

---

## 📐 Kích Thước Ảnh Đề Xuất

| Vị Trí | Kích Thước | Tỉ Lệ |
|--------|------------|-------|
| **Avatar** (Hero) | 350x350px - 500x500px | Vuông 1:1 |
| About Image | 400x500px | Dọc 4:5 |
| Project Image | 800x600px | Ngang 4:3 |

---

## 🔧 Công Cụ Hữu Ích

### Tạo Ảnh Vuông (1:1)
1. Mở ảnh trong Paint / Photoshop
2. Crop thành vuông (width = height)
3. Resize về 350x350px hoặc 500x500px
4. Save as JPG

### Optimize Ảnh (Giảm Dung Lượng)
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **Online**: https://compressor.io

### Upload Ảnh Online
- **Imgur**: https://imgur.com (Dễ nhất)
- **ImgBB**: https://imgbb.com
- **Cloudinary**: https://cloudinary.com

---

## 🚨 Các Lỗi Thường Gặp & Cách Fix

### ❌ Lỗi: Ảnh không hiển thị

**Nguyên nhân & Giải pháp:**

1. **Đường dẫn sai**
   ```javascript
   ❌ image: "avatar.jpg"              // Thiếu "images/"
   ✅ image: "images/avatar.jpg"       // Đúng
   ```

2. **Tên file sai**
   - Check lại tên file trong thư mục `images/`
   - Phân biệt HOA/thường: `Avatar.jpg` ≠ `avatar.jpg`

3. **File không tồn tại**
   - Đảm bảo đã copy ảnh vào `images/`
   - Check đúng thư mục: `D:\ProfileDHN\images\`

### ❌ Lỗi: Ảnh bị méo, không tròn

**Giải pháp:**
- Dùng ảnh vuông (width = height)
- Tốt nhất: 350x350px, 500x500px, 1000x1000px

### ❌ Lỗi: Ảnh load chậm

**Giải pháp:**
- Giảm dung lượng ảnh xuống < 500KB
- Dùng TinyPNG để optimize
- Đổi format sang WEBP (nhỏ hơn JPG)

---

## 📝 Code Hoàn Chỉnh

Mở `js/data.js` và sửa phần này:

```javascript
const portfolioData = {
    // Personal Information
    personal: {
        name: "Tên Của Bạn",                    // ← Sửa tên
        title: "Web Developer",
        subtitle: "Full Stack Developer",
        description: "Mô tả về bạn...",
        email: "your@email.com",                // ← Sửa email
        phone: "+84 123 456 789",               // ← Sửa SĐT
        location: "Hà Nội, Việt Nam",
        image: "images/avatar.jpg"              // ← SỬA DÒNG NÀY
    },
    
    // ... phần còn lại giữ nguyên
};
```

---

## ✅ Checklist

Sau khi thay ảnh, kiểm tra:

- [ ] Ảnh đã copy vào thư mục `images/`
- [ ] Tên file không có dấu, không có khoảng trắng
- [ ] Đã sửa đường dẫn trong `js/data.js`
- [ ] Đường dẫn đúng format: `images/ten-file.jpg`
- [ ] Đã refresh browser (F5 hoặc Ctrl+Shift+R)
- [ ] Ảnh hiển thị đúng và tròn

---

## 💡 Tips Pro

1. **Dùng WEBP** thay vì JPG (nhẹ hơn 30%)
2. **Ảnh nền trong suốt** (PNG) cho avatar chuyên nghiệp hơn
3. **Backup ảnh** trước khi optimize
4. **Đặt tên có ý nghĩa**: `avatar.jpg`, `profile-photo.png`

---

## 🆘 Cần Giúp Đỡ?

Nếu vẫn không được, check:

1. **Console trong browser** (F12):
   - Có lỗi 404 Not Found → Đường dẫn sai
   - Có lỗi CORS → Dùng local path thay vì URL

2. **Đường dẫn file**:
   ```bash
   # Mở terminal và check
   dir images       # Windows
   ls images        # Mac/Linux
   ```

3. **Hard Refresh**:
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

---

**Chúc bạn thành công! 🎉**

Nếu cần hỗ trợ thêm, hãy hỏi tôi!

