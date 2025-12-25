# 🖼️ Hướng Dẫn: Sửa Lỗi Ảnh Không Hiển Thị

## ❌ Vấn Đề

Ảnh không hiển thị vì:
- File ảnh local chưa tồn tại trong thư mục
- Đường dẫn: `images/hobbies/sports/sport-1.jpg` → File không có

## ✅ Giải Pháp

Tôi đã thay thế bằng **ảnh online từ Unsplash** để bạn test ngay!

### Ảnh Hiện Tại (Placeholder):

**🏃 Thể thao:**
- Gym/Fitness
- Running  
- Yoga/Sport
- Swimming
- Sports equipment

**🎮 Chơi Game:**
- Gaming setup
- Gaming laptop
- Streamer setup
- Esports
- Gaming room

**✈️ Du lịch:**
- Travel adventure
- Mountain/Lake
- Beach paradise
- Sunset landscape
- Tropical beach

---

## 🚀 Test Ngay

1. **Refresh** trình duyệt (Ctrl + F5)
2. Cuộn xuống **"Sở Thích"**
3. Bạn sẽ thấy **ảnh đẹp** từ Unsplash!
4. **Click vào thẻ** → Modal với slider 5 ảnh!

---

## 🔄 Thay Bằng Ảnh Của Bạn (Sau Này)

### Bước 1: Chuẩn bị ảnh

Tạo thư mục và thêm ảnh:

```
ProfileDHN/
└── images/
    └── hobbies/
        ├── sports/
        │   ├── sport-1.jpg
        │   ├── sport-2.jpg
        │   ├── sport-3.jpg
        │   ├── sport-4.jpg
        │   └── sport-5.jpg
        │
        ├── gaming/
        │   ├── game-1.jpg
        │   ├── game-2.jpg
        │   ├── game-3.jpg
        │   ├── game-4.jpg
        │   └── game-5.jpg
        │
        └── travel/
            ├── travel-1.jpg
            ├── travel-2.jpg
            ├── travel-3.jpg
            ├── travel-4.jpg
            └── travel-5.jpg
```

### Bước 2: Cập nhật đường dẫn

Mở `js/data.js` và thay URL Unsplash bằng đường dẫn local:

**Thay thế:**
```javascript
// TRƯỚC (Unsplash):
images: [
    "https://images.unsplash.com/photo-...",
    "https://images.unsplash.com/photo-...",
    ...
]

// SAU (Local):
images: [
    "images/hobbies/sports/sport-1.jpg",
    "images/hobbies/sports/sport-2.jpg",
    ...
]
```

---

## 💡 Lưu Ý

### Ưu điểm ảnh online (hiện tại):
- ✅ Hoạt động ngay lập tức
- ✅ Không cần tạo folder
- ✅ Ảnh chất lượng cao
- ✅ Miễn phí từ Unsplash

### Nhược điểm:
- ❌ Cần internet để load
- ❌ Không phải ảnh của bạn
- ❌ Link có thể hết hạn

### Nên thay bằng ảnh local khi:
- ✅ Bạn có ảnh cá nhân
- ✅ Website deploy production
- ✅ Muốn offline access
- ✅ Cần branding riêng

---

## 🎨 Kích Thước Ảnh Đề Xuất

- **Ảnh thẻ (preview)**: 800x600px (ảnh đầu tiên)
- **Ảnh slider**: 800x500px (các ảnh còn lại)
- **Format**: JPG, PNG, WEBP
- **Dung lượng**: < 300KB mỗi ảnh

---

## 🔧 Troubleshooting

### Ảnh vẫn không hiển thị?

**Kiểm tra:**
1. ✅ Đã refresh browser? (Ctrl + F5)
2. ✅ Internet connection OK?
3. ✅ Console (F12) có lỗi?
4. ✅ Đường dẫn trong js/data.js đúng?

### Ảnh load chậm?

- Unsplash có thể chậm lần đầu
- Chờ 2-3 giây
- Hoặc thay bằng ảnh local

### Muốn dùng ảnh khác từ Unsplash?

Tìm ảnh trên: https://unsplash.com/
Copy URL và thêm: `?w=800&h=500&fit=crop`

**Ví dụ:**
```
https://images.unsplash.com/photo-1234567890?w=800&h=500&fit=crop
```

---

## 📊 Tóm Tắt

| Aspect | Trước | Sau |
|--------|-------|-----|
| Ảnh | ❌ Không có | ✅ Unsplash |
| Hiển thị | ❌ Đen | ✅ Ảnh đẹp |
| Click thẻ | ❌ Lỗi | ✅ Modal OK |
| Slider | ❌ Không load | ✅ 5 ảnh chạy |

---

**Giờ thì mọi thứ hoạt động hoàn hảo rồi! 🎉**

Refresh và xem thử nhé! 🚀

