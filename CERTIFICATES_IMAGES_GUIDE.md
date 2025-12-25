# 📸 Hướng Dẫn Thêm Ảnh Cho Chứng Chỉ & Khóa Học

## 📍 Vị Trí Thêm Ảnh

Ảnh được thêm vào file: **`js/data.js`** trong phần `certificates`

## 🖼️ Cách Thêm Ảnh

### Cách 1: Dùng ảnh từ thư mục local (Khuyên dùng)

1. **Copy ảnh vào thư mục `images/`**
   - Đặt tên file theo gợi ý:
     - `ielts.jpg` - cho chứng chỉ IELTS
     - `tin-hoc.jpg` - cho chứng chỉ Tin học văn phòng
     - `js-essentials-1.jpg` - cho khóa học JavaScript Essentials 1
     - `js-essentials-2.jpg` - cho khóa học JavaScript Essentials 2
     - `networking-basics.jpg` - cho khóa học Networking Basics

2. **Mở file `js/data.js`** và tìm phần `certificates`

3. **Thay đổi đường dẫn ảnh** trong mỗi certificate:
   ```javascript
   image: "images/ielts.jpg",  // Thay bằng tên file ảnh của bạn
   ```

### Cách 2: Dùng URL online

1. **Upload ảnh lên imgur.com** hoặc hosting khác
2. **Copy link ảnh**
3. **Paste vào file `js/data.js`**:
   ```javascript
   image: "https://i.imgur.com/xxxxx.jpg",
   ```

## 📐 Kích Thước Ảnh Đề Xuất

- **Tỷ lệ**: 3:2 hoặc 4:3 (ngang)
- **Kích thước**: 
  - Tối thiểu: 600x400px
  - Khuyên dùng: 800x600px hoặc 1200x800px
- **Format**: JPG, PNG (khuyên dùng JPG để file nhỏ hơn)

## 📝 Ví Dụ Cấu Trúc

```javascript
certificates: [
    {
        id: 1,
        name: "IELTS",
        // ... các thông tin khác ...
        image: "images/ielts.jpg",  // ⬅️ Đây là nơi thêm ảnh
        description: "..."
    },
    {
        id: 2,
        name: "Tin Học Văn Phòng",
        // ... các thông tin khác ...
        image: "images/tin-hoc.jpg",  // ⬅️ Đây là nơi thêm ảnh
        description: "..."
    }
    // ... các certificate khác ...
]
```

## ✅ Sau Khi Thêm Ảnh

1. Lưu file `js/data.js`
2. Refresh trang web
3. Ảnh sẽ hiển thị trên certificate cards
4. Khi click vào card, ảnh sẽ hiển thị trong modal chi tiết

## 💡 Lưu Ý

- Tên file ảnh không nên có khoảng trắng, dùng dấu gạch ngang `-` thay thế
- Đảm bảo đường dẫn đúng: `images/tên-file.jpg` (chữ thường)
- Nếu ảnh không hiển thị, kiểm tra:
  - Tên file có đúng không?
  - File có trong thư mục `images/` không?
  - Đường dẫn trong code có đúng không?

