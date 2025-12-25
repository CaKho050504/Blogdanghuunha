# 🚀 Quick Start - Bắt Đầu Trong 5 Phút

## Bước 1: Mở Website
- Double click vào file `index.html`
- Website sẽ mở trong trình duyệt mặc định

## Bước 2: Tùy Chỉnh Thông Tin (Quan Trọng!)

Mở file **`js/data.js`** và thay đổi:

```javascript
// Thông tin cá nhân
name: "Đặng Hữu Nhã",           // ← Thay tên
title: "Web Developer",         // ← Thay chức danh
email: "danghuunha333@gmail.com",        // ← Thay email
phone: "0823535484",       // ← Thay số điện thoại

// Social media
github: "https://github.com/CaKho050504",      // ← Thay link
linkedin: "https://linkedin.com/in/user",   // ← Thay link
```

## Bước 3: Thêm Ảnh Của Bạn

Có 2 cách:

**Cách 1: Dùng URL online** (Dễ nhất)
```javascript
image: "https://i.imgur.com/your-image.jpg"
```
Upload ảnh lên [Imgur](https://imgur.com) và copy link

**Cách 2: Lưu trong project**
1. Tạo thư mục `images/`
2. Copy ảnh vào
3. Dùng: `image: "images/profile.jpg"`

## Bước 4: Thêm Dự Án

Trong `js/data.js`, phần `projects`:

```javascript
{
    title: "Tên Dự Án",
    description: "Mô tả ngắn",
    technologies: ["React", "Node.js"],
    category: "web",  // "web" hoặc "app"
    links: {
        demo: "https://...",
        github: "https://github.com/..."
    }
}
```

## Bước 5: Thay Đổi Màu (Tùy Chọn)

Mở `css/variables.css`:

```css
--primary-color: #6366f1;    /* Thay màu này */
```

Gợi ý màu:
- Blue: `#3b82f6`
- Green: `#10b981`
- Purple: `#8b5cf6`
- Orange: `#f97316`

## Bước 6: Test & Deploy

**Test:**
- Mở trên nhiều browsers (Chrome, Firefox, Safari)
- Test trên mobile (F12 → Toggle device)

**Deploy FREE:**

### Option 1: GitHub Pages (Recommended)
```bash
git init
git add .
git commit -m "Portfolio website"
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```
→ Enable GitHub Pages trong repo Settings

### Option 2: Netlify
1. Vào [netlify.com](https://netlify.com)
2. Kéo thả folder vào
3. Done!

---

## ✅ Checklist 5 Phút

- [ ] Thay tên, email, phone
- [ ] Thay links social media
- [ ] Upload ảnh profile
- [ ] Thêm 2-3 projects
- [ ] Test trên browser
- [ ] Deploy!

---

## 📚 Cần Thêm Hướng Dẫn?

- **Chi tiết**: Đọc [README.md](README.md)
- **Tùy chỉnh nâng cao**: Đọc [CUSTOMIZE.md](CUSTOMIZE.md)

## 🆘 Cần Giúp Đỡ?

**Ảnh không hiển thị?**
→ Check đường dẫn trong `data.js`

**CSS không đúng?**
→ Hard refresh: `Ctrl + Shift + R`

**JavaScript lỗi?**
→ Mở Console (F12) xem lỗi

---

**Chúc bạn thành công! 🎉**

Website của bạn đã sẵn sàng để chia sẻ với thế giới!

