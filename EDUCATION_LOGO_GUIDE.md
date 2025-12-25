# 🎓 Hướng Dẫn Thêm Logo Trường Vào Phần Học Vấn

## 📋 Mục Lục
1. [Chuẩn Bị File Logo](#chuẩn-bị-file-logo)
2. [Thêm Logo Vào Website](#thêm-logo-vào-website)
3. [Thay Đổi Logo](#thay-đổi-logo)
4. [Tips & Tricks](#tips--tricks)

---

## 🖼️ Chuẩn Bị File Logo

### Yêu Cầu File:
- **Format khuyên dùng**: PNG với background trong suốt
- **Format khác**: JPG, JPEG, SVG, WEBP
- **Kích thước đề xuất**: 
  - Logo vuông: 200x200px đến 400x400px
  - Logo ngang: 300x200px đến 600x400px
- **Dung lượng**: < 500KB (tối ưu cho web)

### Cách Tối Ưu Logo:
1. **Nếu bạn có logo chất lượng cao:**
   - Sử dụng tool online: [TinyPNG](https://tinypng.com/) để giảm dung lượng
   - Hoặc [Squoosh](https://squoosh.app/) để compress

2. **Nếu bạn cần tìm logo:**
   - Tìm trên Google Images với từ khóa: "Hutech logo PNG"
   - Hoặc vào website chính thức của trường để download

---

## 📁 Thêm Logo Vào Website

### Bước 1: Đặt File Logo
```plaintext
ProfileDHN/
├── images/
│   ├── avatar.jpg          (ảnh avatar của bạn)
│   └── hutech-logo.png     ⬅️ ĐẶT FILE LOGO VÀO ĐÂY
```

**Hướng dẫn chi tiết:**
1. Mở thư mục `images/` trong project
2. Copy file logo của bạn vào đây
3. Đặt tên file (ví dụ: `hutech-logo.png`, `logo-truong.png`, ...)

### Bước 2: Cập Nhật Đường Dẫn

Mở file `js/data.js` và tìm phần **Education**:

```javascript
education: [
    {
        id: 1,
        school: "Đại học Công nghệ TP.HCM (HUTECH)",
        // ... các thông tin khác ...
        
        // ⬇️ THAY ĐỔI TẠI ĐÂY ⬇️
        logo: "images/hutech-logo.png"
        //           ^^^^^^^^^^^^^^^^
        //     Thay bằng tên file của bạn
    }
]
```

### Bước 3: Kiểm Tra Kết Quả

1. Mở trình duyệt và vào website của bạn
2. Cuộn xuống phần **"Học Vấn"**
3. Logo sẽ hiển thị bên trái với các hiệu ứng:
   - ✅ Border đỏ phát sáng
   - ✅ Hover để phóng to
   - ✅ Animation gradient khi hover

---

## 🔄 Thay Đổi Logo

### Nếu Muốn Đổi Logo Khác:
1. Xóa file logo cũ trong `images/`
2. Thêm file logo mới
3. Cập nhật tên file trong `js/data.js`

### Nếu Muốn Dùng Logo Online:
```javascript
logo: "https://example.com/logo.png"
```

### Nếu Không Muốn Hiển Thị Logo:
```javascript
logo: ""  // Để trống hoặc xóa dòng này
```
→ Sẽ hiển thị icon 🏛️ (university) thay thế

---

## 💡 Tips & Tricks

### 1. Logo Có Background Trắng/Màu?
Nếu logo của bạn có background màu (không trong suốt), CSS đã được tối ưu sẵn:
- Background gradient đỏ nhạt
- Khi hover sẽ có hiệu ứng phát sáng

### 2. Logo Quá Nhỏ/Lớn?
Chỉnh kích thước trong `css/education.css`:

```css
.education-logo {
    width: 150px;   /* Tăng kích thước */
    height: 150px;  /* Tăng kích thước */
}
```

### 3. Logo Bị Vỡ/Méo?
Đảm bảo bạn đang dùng `object-fit: contain` trong CSS:

```css
.education-logo img {
    object-fit: contain;  /* Giữ tỷ lệ gốc */
    /* hoặc */
    object-fit: cover;    /* Lấp đầy khung */
}
```

### 4. Thêm Nhiều Trường:
Nếu bạn học nhiều trường, thêm vào array:

```javascript
education: [
    {
        id: 1,
        school: "HUTECH",
        logo: "images/hutech-logo.png",
        // ...
    },
    {
        id: 2,
        school: "HCMUS",
        logo: "images/hcmus-logo.png",
        // ...
    }
]
```

### 5. Kiểm Tra Đường Dẫn Đúng:
Nếu logo không hiển thị, mở Developer Console (F12) và check lỗi:
- `404 Not Found` → Đường dẫn sai hoặc file không tồn tại
- `CORS Error` → Nếu dùng URL online, website đó có thể chặn

---

## 🎨 Hiệu Ứng Có Sẵn

Logo của bạn sẽ tự động có các hiệu ứng:

✅ **Border gradient** đỏ phát sáng  
✅ **Hover scale** - phóng to 105% khi di chuột  
✅ **Shine effect** - hiệu ứng ánh sáng chạy qua  
✅ **Box shadow** - đổ bóng đỏ khi hover  
✅ **Smooth transition** - chuyển động mượt mà  

---

## 📞 Troubleshooting

### Logo không hiển thị?
```
Kiểm tra:
1. ✅ File có trong thư mục images/?
2. ✅ Tên file đúng (phân biệt HOA/thường)?
3. ✅ Extension đúng (.png, .jpg, ...)?
4. ✅ Đường dẫn trong js/data.js đúng?
```

### Logo bị mờ/vỡ?
```
→ Sử dụng logo chất lượng cao hơn (ít nhất 200x200px)
→ Hoặc dùng format SVG (vector) cho chất lượng tốt nhất
```

### Logo load chậm?
```
→ Compress file xuống < 100KB
→ Sử dụng format WebP để giảm dung lượng
→ Hoặc dùng CDN để host logo
```

---

## 🔗 Resources

- 🖼️ [TinyPNG](https://tinypng.com/) - Compress ảnh
- 🎨 [Remove.bg](https://remove.bg/) - Xóa background
- 📐 [Squoosh](https://squoosh.app/) - Resize & compress
- 🔍 [Google Images](https://images.google.com/) - Tìm logo

---

**Happy Coding! 🚀**

Nếu bạn cần thêm trợ giúp, hãy hỏi tôi nhé!

