# 🎯 Hướng Dẫn Modal Banner Ảnh - Phần Sở Thích

## 📋 Mục Lục
1. [Giới Thiệu](#giới-thiệu)
2. [Cấu Trúc Thư Mục](#cấu-trúc-thư-mục)
3. [Thêm Ảnh Cho Từng Sở Thích](#thêm-ảnh-cho-từng-sở-thích)
4. [Cách Sử Dụng](#cách-sử-dụng)
5. [Tùy Chỉnh](#tùy-chỉnh)

---

## 🎬 Giới Thiệu

**Modal Banner Slider** - Khi click vào bất kỳ thẻ sở thích nào, sẽ mở popup fullscreen với album 5 ảnh tự động chạy!

### Tính Năng:
- ✅ **Click vào thẻ** → Mở popup với banner ảnh
- ✅ **5 ảnh riêng** cho mỗi sở thích
- ✅ **Auto-play** 3.5 giây/ảnh
- ✅ **Nút điều khiển** Prev/Next
- ✅ **Dots navigation**
- ✅ **Touch/Swipe** trên mobile
- ✅ **ESC để đóng** hoặc click ngoài modal
- ✅ **Smooth animations**
- ✅ **Fullscreen experience**

---

## 📁 Cấu Trúc Thư Mục

### Tạo Thư Mục Con:

```plaintext
ProfileDHN/
└── images/
    └── hobbies/               ⬅️ TẠO FOLDER NÀY
        ├── sports/            ⬅️ Thể thao
        │   ├── sport-1.jpg
        │   ├── sport-2.jpg
        │   ├── sport-3.jpg
        │   ├── sport-4.jpg
        │   └── sport-5.jpg
        │
        ├── reading/           ⬅️ Đọc sách
        │   ├── book-1.jpg
        │   ├── book-2.jpg
        │   ├── book-3.jpg
        │   ├── book-4.jpg
        │   └── book-5.jpg
        │
        ├── travel/            ⬅️ Du lịch
        │   ├── travel-1.jpg
        │   ├── travel-2.jpg
        │   ├── travel-3.jpg
        │   ├── travel-4.jpg
        │   └── travel-5.jpg
        │
        └── coding/            ⬅️ Coding
            ├── code-1.jpg
            ├── code-2.jpg
            ├── code-3.jpg
            ├── code-4.jpg
            └── code-5.jpg
```

### Hướng Dẫn Tạo Folder:

**Windows:**
1. Mở File Explorer
2. Vào `D:\ProfileDHN\images\`
3. Nhấn chuột phải → New → Folder
4. Đặt tên: `hobbies`
5. Vào trong `hobbies`, tạo 4 folders: `sports`, `reading`, `travel`, `coding`

---

## 🖼️ Thêm Ảnh Cho Từng Sở Thích

### 1. Thể Thao (Sports) ⚽

**Thư mục:** `images/hobbies/sports/`

**Gợi ý 5 ảnh:**
- `sport-1.jpg` - Ảnh chơi bóng đá
- `sport-2.jpg` - Ảnh tập gym
- `sport-3.jpg` - Ảnh chạy bộ
- `sport-4.jpg` - Ảnh bơi lội
- `sport-5.jpg` - Ảnh thể thao khác (yoga, boxing, ...)

**Kích thước đề xuất:** 800x500px (ngang)

---

### 2. Đọc Sách (Reading) 📚

**Thư mục:** `images/hobbies/reading/`

**Gợi ý 5 ảnh:**
- `book-1.jpg` - Ảnh đang đọc sách
- `book-2.jpg` - Thư viện/hiệu sách
- `book-3.jpg` - Bộ sưu tập sách yêu thích
- `book-4.jpg` - Đọc ở quán cafe
- `book-5.jpg` - Sách đang đọc hiện tại

**Kích thước đề xuất:** 800x500px (ngang)

---

### 3. Du Lịch (Travel) ✈️

**Thư mục:** `images/hobbies/travel/`

**Gợi ý 5 ảnh:**
- `travel-1.jpg` - Địa điểm du lịch 1 (biển, núi, thành phố)
- `travel-2.jpg` - Địa điểm du lịch 2
- `travel-3.jpg` - Ẩm thực địa phương
- `travel-4.jpg` - Phong cảnh đẹp
- `travel-5.jpg` - Văn hóa/lễ hội địa phương

**Kích thước đề xuất:** 800x500px (ngang)

---

### 4. Coding Projects 💻

**Thư mục:** `images/hobbies/coding/`

**Gợi ý 5 ảnh:**
- `code-1.jpg` - Workspace/setup bàn làm việc
- `code-2.jpg` - Hackathon/coding event
- `code-3.jpg` - Code review/pair programming
- `code-4.jpg` - Team work/meeting
- `code-5.jpg` - Demo dự án/presentation

**Kích thước đề xuất:** 800x500px (ngang)

---

## 🎯 Cách Sử Dụng

### Bước 1: Chuẩn Bị Ảnh

1. **Chọn 5 ảnh** cho mỗi sở thích (tổng 20 ảnh)
2. **Resize** về kích thước 800x500px
3. **Compress** để giảm dung lượng (< 300KB/ảnh)

**Tools đề xuất:**
- [ImageResizer](https://imageresizer.com/) - Resize ảnh
- [TinyPNG](https://tinypng.com/) - Compress ảnh
- [Canva](https://www.canva.com/) - Chỉnh sửa

### Bước 2: Đặt Ảnh Vào Folder

Copy ảnh vào đúng thư mục tương ứng:

```bash
📁 images/hobbies/sports/
   → Copy 5 ảnh thể thao

📁 images/hobbies/reading/
   → Copy 5 ảnh đọc sách

📁 images/hobbies/travel/
   → Copy 5 ảnh du lịch

📁 images/hobbies/coding/
   → Copy 5 ảnh coding
```

### Bước 3: Test Website

1. **Refresh** trình duyệt (Ctrl + F5)
2. Cuộn xuống phần **"Sở Thích"**
3. **Click vào bất kỳ thẻ nào**
4. Xem modal popup với slider!

---

## 🎮 Tính Năng Modal

### 1. Mở Modal
- **Click** vào thẻ sở thích
- Hoặc **Enter** khi focus vào thẻ

### 2. Điều Khiển Slider
- **◀ Prev** - Ảnh trước
- **▶ Next** - Ảnh sau
- **Dots** - Click để nhảy đến ảnh
- **Swipe** - Vuốt trái/phải (mobile)
- **Auto-play** - Tự động chuyển mỗi 3.5 giây

### 3. Đóng Modal
- **Click nút X** ở góc trên
- **Nhấn ESC** trên bàn phím
- **Click bên ngoài** modal
- **Swipe xuống** (mobile)

---

## ⚙️ Tùy Chỉnh

### 1. Đổi Tên File Ảnh

Nếu bạn đặt tên ảnh khác, mở `js/data.js` và sửa:

```javascript
hobbies: [
    {
        id: 1,
        name: "Thể thao",
        images: [
            "images/hobbies/sports/my-soccer.jpg",  // ← Đổi tên
            "images/hobbies/sports/my-gym.jpg",
            "images/hobbies/sports/my-running.jpg",
            "images/hobbies/sports/my-swimming.jpg",
            "images/hobbies/sports/my-sport.jpg"
        ]
    },
    // ...
]
```

### 2. Thay Đổi Thời Gian Auto-Play

Mở `js/components/hobbies.js`, tìm dòng:

```javascript
function startHobbyAutoPlay() {
    hobbyAutoPlayInterval = setInterval(hobbyNextSlide, 3500);
    //                                                    ^^^^
    //                                              Thay đổi ở đây
}
```

**Gợi ý:**
- `3000` = 3 giây (nhanh)
- `4000` = 4 giây (vừa)
- `5000` = 5 giây (chậm)

### 3. Thay Đổi Chiều Cao Modal

Mở `css/hobbies.css`, tìm:

```css
.hobby-slide {
    height: 500px;  /* Thay đổi chiều cao */
}
```

**Desktop:** 500px - 600px  
**Mobile:** 300px - 400px

### 4. Đổi Màu Modal

```css
.hobby-modal-content {
    border: 2px solid #00ff00;  /* Đổi màu viền */
}

.hobby-slider-btn {
    background: rgba(0, 255, 0, 0.8);  /* Đổi màu nút */
}

.hobby-dot.active {
    background: #00ff00;  /* Đổi màu dot */
}
```

### 5. Thêm/Bớt Số Ảnh

**Thêm ảnh thứ 6:**

```javascript
images: [
    "images/hobbies/sports/sport-1.jpg",
    "images/hobbies/sports/sport-2.jpg",
    "images/hobbies/sports/sport-3.jpg",
    "images/hobbies/sports/sport-4.jpg",
    "images/hobbies/sports/sport-5.jpg",
    "images/hobbies/sports/sport-6.jpg"  // ← Thêm
]
```

**Chỉ dùng 3 ảnh:**

```javascript
images: [
    "images/hobbies/sports/sport-1.jpg",
    "images/hobbies/sports/sport-2.jpg",
    "images/hobbies/sports/sport-3.jpg"
]
```

### 6. Tắt Auto-Play

Mở `js/components/hobbies.js`, comment dòng này:

```javascript
// startHobbyAutoPlay();  // ← Comment để tắt
```

---

## 💡 Tips & Tricks

### 1. Chọn Ảnh Đẹp
- ✅ **Chất lượng cao**, rõ nét
- ✅ **Ánh sáng tốt**, màu sắc đẹp
- ✅ **Thể hiện hoạt động** rõ ràng
- ✅ **Background đơn giản**, không lộn xộn
- ❌ Tránh ảnh mờ, tối, bị cắt

### 2. Tối Ưu Performance
```javascript
// Preload images khi hover vào thẻ
hobbyCard.addEventListener('mouseenter', () => {
    hobby.images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});
```

### 3. Dùng Ảnh Online
Nếu chưa có ảnh local, dùng URL:

```javascript
images: [
    "https://i.imgur.com/abc123.jpg",
    "https://i.imgur.com/def456.jpg",
    // ...
]
```

### 4. Thêm Caption
Thêm chú thích cho mỗi ảnh:

```javascript
images: [
    {
        src: "images/hobbies/sports/sport-1.jpg",
        caption: "Trận đấu cuối tuần"
    },
    {
        src: "images/hobbies/sports/sport-2.jpg",
        caption: "Tập gym buổi sáng"
    },
    // ...
]
```

### 5. Lazy Loading
Chỉ load ảnh khi mở modal (đã implement sẵn):

```javascript
// Ảnh chỉ được load khi click vào thẻ
function openHobbyModal(hobbyIndex) {
    // Tạo HTML cho ảnh tại đây
}
```

---

## 🎨 Hiệu Ứng Có Sẵn

### Modal:
- ✨ **Fade in/out** khi mở/đóng
- 🎯 **Slide up** animation
- 💫 **Backdrop blur** background
- 🌟 **Border glow** đỏ sáng

### Slider:
- 🌊 **Slide horizontal** - trượt ngang
- ✨ **Shine effect** khi chuyển ảnh
- 🎯 **Smooth cubic-bezier** transition
- 💫 **Button hover** phóng to

### Thẻ Hobby:
- 👆 **Click hint** xuất hiện khi hover
- 🎨 **Icon animation** bounce
- ✨ **Card lift** khi hover
- 💫 **Glow effect** viền đỏ

---

## 🐛 Troubleshooting

### Modal không mở?
```
Kiểm tra:
1. ✅ Console (F12) có lỗi JavaScript?
2. ✅ Function openHobbyModal() đã được định nghĩa?
3. ✅ Data có đầy đủ images array?
```

### Ảnh không hiển thị?
```
Kiểm tra:
1. ✅ File có trong thư mục images/hobbies/?
2. ✅ Đường dẫn trong js/data.js đúng?
3. ✅ Tên file đúng (phân biệt hoa/thường)?
4. ✅ Format ảnh: JPG, PNG, WEBP?
```

### Slider không chạy?
```
Kiểm tra:
1. ✅ Mảng images có đủ 5 ảnh?
2. ✅ Function startHobbyAutoPlay() được gọi?
3. ✅ Console có lỗi?
```

### Modal không đóng?
```
Thử:
1. ✅ Nhấn ESC
2. ✅ Click nút X
3. ✅ Click bên ngoài modal
4. ✅ Refresh trang
```

---

## 📊 Ví Dụ Thực Tế

### Setup 1: Developer Portfolio

**Thể thao:**
- Gym progress photos
- Running marathon
- Team sports

**Đọc sách:**
- Programming books
- Tech blogs screenshots
- Online courses

**Du lịch:**
- Conference photos
- Meetup events
- Tech cities

**Coding:**
- Workspace setup
- Hackathon moments
- Open source contributions

### Setup 2: Student Portfolio

**Thể thao:**
- School sports events
- Club activities
- Fitness journey

**Đọc sách:**
- Study notes
- Library photos
- Book collection

**Du lịch:**
- Field trips
- Cultural festivals
- City exploration

**Coding:**
- Class projects
- Study groups
- Competition awards

---

## 🔗 Resources

### Tìm Ảnh Miễn Phí:
- 🖼️ [Unsplash](https://unsplash.com/) - Ảnh HD miễn phí
- 📸 [Pexels](https://www.pexels.com/) - Stock photos
- 🎨 [Pixabay](https://pixabay.com/) - Ảnh & video

### Tools Chỉnh Sửa:
- ✂️ [Canva](https://www.canva.com/) - Design tool
- 📐 [Photopea](https://www.photopea.com/) - Photoshop online
- 🗜️ [Squoosh](https://squoosh.app/) - Compress ảnh

### Inspiration:
- 🎯 [Dribbble](https://dribbble.com/) - UI inspiration
- 💫 [Behance](https://www.behance.net/) - Portfolio ideas

---

## 📱 Demo Flow

```
1. User cuộn đến section "Sở Thích"
   ↓
2. Thấy 4 thẻ với hint "Click để xem ảnh"
   ↓
3. Click vào thẻ "Thể Thao"
   ↓
4. Modal mở ra với fade + slide animation
   ↓
5. Banner slider hiển thị 5 ảnh thể thao
   ↓
6. Ảnh tự động chuyển mỗi 3.5 giây
   ↓
7. User có thể:
   - Click prev/next
   - Click dots
   - Swipe (mobile)
   - Hover để pause
   ↓
8. Nhấn ESC hoặc click X để đóng
   ↓
9. Modal đóng với fade animation
```

---

**Happy Sliding! 🎢**

Nếu cần thêm trợ giúp, hãy hỏi tôi nhé! 🚀

