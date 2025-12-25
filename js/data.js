// Data Configuration - Customize this file with your information
const portfolioData = {
    // Personal Information
    personal: {
        name: "Đặng Hữu Nhã",
        title: "Web Developer",
        subtitle: "Full Stack Developer & UI/UX Designer",
        description: "Tôi là một developer đam mê với việc tạo ra những sản phẩm web tuyệt vời và trải nghiệm người dùng đáng nhớ.",
        email: "danghuunha333@gmail.com",
        phone: "0823535484",
        location: "Hồ Chí Minh, Việt Nam",
        
        // ============================================
        // 🖼️ THAY ĐỔI ẢNH AVATAR TẠI ĐÂY
        // ============================================
        // Cách 1: Dùng ảnh từ thư mục local (Khuyên dùng)
        //    - Copy ảnh vào thư mục "images/"
        //    - Thay đổi đường dẫn bên dưới
        //    Ví dụ: image: "images/avatar.jpg"
        //
        // Cách 2: Dùng URL online
        //    - Upload ảnh lên imgur.com
        //    - Copy link và paste vào đây
        //    Ví dụ: image: "https://i.imgur.com/xxxxx.jpg"
        //
        // Kích thước đề xuất: 350x350px hoặc 500x500px (vuông)
        // ============================================
        image: "images/avatar.jpg"
        // ⬆️ ĐÃ CẬP NHẬT ⬆️
        // Để đổi ảnh khác: Thay "avatar.jpg" bằng tên file của bạn
    },

    // Rotating Texts (Hiệu ứng đánh chữ - 5 nội dung luân phiên)
    rotatingTexts: [
        "Full Stack Developer",
        "UI/UX Designer", 
        "Creative Developer",
        "Problem Solver",
        "Web Developer"
    ],

    // Social Media Links
    social: {
        github: "https://github.com/CaKho050504",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        facebook: "https://www.facebook.com/NhaCaKho",
        instagram: "https://www.instagram.com/cakho.050504/"
    },

    // About Section
    about: {
        title: 'Về <span class="highlight">Tôi</span>',
        description: [
            "Xin chào! Tôi là một Web Developer với hơn X năm kinh nghiệm trong việc phát triển các ứng dụng web hiện đại và responsive.",
            "Tôi chuyên về Front-end Development với React, Vue.js và cả Back-end với Node.js. Tôi luôn tìm kiếm những thử thách mới và cơ hội để học hỏi những công nghệ tiên tiến.",
            "Ngoài coding, tôi thích chia sẻ kiến thức thông qua blog và tham gia các cộng đồng developer."
        ],
        info: [
            { icon: "fa-birthday-cake", label: "Sinh nhật", value: "05/05/2004" },
            { icon: "fa-envelope", label: "Email", value: "danghuunha333@gmail.com" },
            { icon: "fa-phone", label: "Điện thoại", value: "0823535484" },
            { icon: "fa-map-marker-alt", label: "Địa chỉ", value: "Hồ Chí Minh, Việt Nam" }
        ],
        
        // ============================================
        // 🖼️ IMAGE SLIDER - BANNER ẢNH TỰ ĐỘNG CHẠY
        // ============================================
        // Đặt 5 ảnh vào thư mục "images/" với tên: about-1.jpg, about-2.jpg, ...
        // Kích thước đề xuất: 600x400px (tỷ lệ 3:2) - khung ngang
        // Slider sẽ tự động chạy mỗi 3 giây
        images: [
            "images/about-1.jpg",
            "images/about-2.jpg",
            "images/about-3.jpg",
            "images/about-4.jpg",
            "images/about-5.jpg"
        ]
        // ⬆️ Thay bằng đường dẫn ảnh của bạn
        // Hoặc dùng URL online: "https://i.imgur.com/xxxxx.jpg"
    },

    // Skills
    skills: [
        {
            category: "Frontend Development",
            icon: "fa-laptop-code",
            items: [
                { name: "HTML/CSS", level: 95 },
                { name: "JavaScript", level: 90 },
                { name: "React", level: 85 },
                { name: "Vue.js", level: 80 },
                { name: "TypeScript", level: 75 }
            ]
        },
        {
            category: "Backend Development",
            icon: "fa-server",
            items: [
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "MySQL", level: 80 },
                { name: "REST API", level: 90 }
            ]
        },
        {
            category: "Tools & Others",
            icon: "fa-tools",
            items: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 70 },
                { name: "Figma", level: 75 },
                { name: "Photoshop", level: 80 },
                { name: "Agile/Scrum", level: 85 }
            ]
        }
    ],

    // Projects
    projects: [
        {
            id: 1,
            title: "TripHotel",
            description: "Ứng dụng đặt phòng khách sạn và du lịch với giao diện hiện đại, dễ sử dụng. Tìm kiếm, so sánh và đặt phòng khách sạn một cách nhanh chóng và tiện lợi.",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
            category: "app-website",
            links: {
                demo: "project-demo.html",
                github: "https://github.com/yourusername/triphotel"
            }
        }
    ],

    // Education (Học Vấn)
    education: [
        {
            id: 1,
            school: "Đại học Công nghệ TP.HCM (HUTECH)",
            degree: "Cử nhân",
            major: "Công Nghệ Thông Tin - Kỹ Thuật Phần Mềm",
            duration: "2019 - 2023",
            gpa: "3.8/4.0",
            achievements: [
                {
                    text: "Sinh viên xuất sắc năm 2021-2022",
                    image: "images/achievements/excellent-student-2021-2022.jpg" // Thay bằng đường dẫn hình ảnh minh chứng
                },
                {
                    text: "Giải Nhất cuộc thi Hackathon 2022",
                    image: "images/achievements/hackathon-2022-first-prize.jpg" // Thay bằng đường dẫn hình ảnh minh chứng
                },
                {
                    text: "Top 10% sinh viên khoa CNTT",
                    image: "images/achievements/top-10-percent.jpg" // Thay bằng đường dẫn hình ảnh minh chứng
                },
                {
                    text: "Đồ án tốt nghiệp điểm A",
                    image: "images/achievements/graduation-project-grade-a.jpg" // Thay bằng đường dẫn hình ảnh minh chứng
                }
                // Có thể thêm achievements không có minh chứng bằng cách dùng string:
                // "Thành tích khác không có minh chứng"
            ],
            description: "Chuyên ngành Kỹ thuật phần mềm với focus vào Web Development, Mobile App và AI/ML.",
            // ============================================
            // 🎓 LOGO TRƯỜNG - THAY ĐỔI TẠI ĐÂY
            // ============================================
            // Đặt file logo vào thư mục "images/" (ví dụ: hutech-logo.png)
            // Kích thước đề xuất: 200x200px (vuông) hoặc 300x200px (ngang)
            // Format: PNG với background trong suốt (khuyên dùng)
            logo: "images/hutech-logo.png"
            // ⬆️ Thay "hutech-logo.png" bằng tên file logo của bạn
        }
    ],

    // Certificates (Chứng Chỉ) & Courses (Khóa Học)
    // ============================================
    // 🖼️ THÊM ẢNH CHO CHỨNG CHỈ VÀ KHÓA HỌC
    // ============================================
    // Cách 1: Dùng ảnh từ thư mục local (Khuyên dùng)
    //    - Copy ảnh vào thư mục "images/"
    //    - Đặt tên: ielts.jpg, tin-hoc.jpg, js-essentials-1.jpg, js-essentials-2.jpg, networking-basics.jpg
    //    - Thay đổi đường dẫn bên dưới
    //    Ví dụ: image: "images/ielts.jpg"
    //
    // Cách 2: Dùng URL online
    //    - Upload ảnh lên imgur.com hoặc hosting khác
    //    - Copy link và paste vào đây
    //    Ví dụ: image: "https://i.imgur.com/xxxxx.jpg"
    //
    // Kích thước đề xuất: 600x400px hoặc 800x600px (tỷ lệ 3:2 hoặc 4:3)
    // ============================================
    certificates: [
        {
            id: 1,
            name: "IELTS",
            issuer: "British Council",
            score: "7.5/9.0",
            date: "2023",
            type: "language",
            icon: "fa-language",
            // ⬇️ THAY ĐỔI ĐƯỜNG DẪN ẢNH TẠI ĐÂY
            image: "images/ielts.jpg",  // Thay "ielts.jpg" bằng tên file ảnh của bạn
            description: "Overall 7.5 (Listening: 8.0, Reading: 8.5, Writing: 7.0, Speaking: 7.0)"
        },
        {
            id: 2,
            name: "Tin Học Văn Phòng",
            issuer: "Bộ Thông tin và Truyền thông",
            level: "Chứng chỉ MOS",
            date: "2022",
            type: "computer",
            icon: "fa-laptop",
            // ⬇️ THAY ĐỔI ĐƯỜNG DẪN ẢNH TẠI ĐÂY
            image: "images/tin-hoc.jpg",  // Thay "tin-hoc.jpg" bằng tên file ảnh của bạn
            description: "Microsoft Office Specialist (Word, Excel, PowerPoint)"
        },
        {
            id: 3,
            name: "JavaScript Essentials 1",
            issuer: "Cisco Networking Academy",
            date: "2024",
            type: "online",
            icon: "fa-code",
            // ⬇️ THAY ĐỔI ĐƯỜNG DẪN ẢNH TẠI ĐÂY
            image: "images/js-essentials-1.jpg",  // Thay "js-essentials-1.jpg" bằng tên file ảnh của bạn
            description: "Khóa học cơ bản về JavaScript, bao gồm syntax, variables, functions, và control structures."
        },
        {
            id: 4,
            name: "JavaScript Essentials 2",
            issuer: "Cisco Networking Academy",
            date: "2024",
            type: "online",
            icon: "fa-code",
            // ⬇️ THAY ĐỔI ĐƯỜNG DẪN ẢNH TẠI ĐÂY
            image: "images/js-essentials-2.jpg",  // Thay "js-essentials-2.jpg" bằng tên file ảnh của bạn
            description: "Khóa học nâng cao về JavaScript, bao gồm objects, arrays, DOM manipulation, và async programming."
        },
        {
            id: 5,
            name: "Networking Basics",
            issuer: "Cisco Networking Academy",
            date: "2024",
            type: "online",
            icon: "fa-network-wired",
            // ⬇️ THAY ĐỔI ĐƯỜNG DẪN ẢNH TẠI ĐÂY
            image: "images/networking-basics.jpg",  // Thay "networking-basics.jpg" bằng tên file ảnh của bạn
            description: "Khóa học về mạng máy tính cơ bản, bao gồm TCP/IP, routing, switching, và network security."
        }
    ],

    // Hobbies/Interests (Sở Thích)
    hobbies: [
        {
            id: 1,
            name: "Thể thao",
            icon: "fa-running",
            activities: ["Bóng đá", "Gym", "Chạy bộ", "Bơi lội"],
            description: "Tham gia câu lạc bộ bóng đá mỗi cuối tuần. Tập gym 4 lần/tuần để giữ sức khỏe và tinh thần làm việc tốt.",
            level: "Nâng cao",
            // ============================================
            // 🖼️ BANNER ẢNH CHO SỞ THÍCH - THỂ THAO
            // ============================================
            // Sử dụng ảnh của bạn từ thư mục images/
            images: [
                "images/sport-1.jpg",  // Ảnh thể thao 1
                "images/sport-2.jpg",  // Ảnh thể thao 2
                "images/sport-3.jpg",  // Ảnh thể thao 3
                "images/sport-4.jpg",  // Ảnh thể thao 4
                "images/sport-5.jpg"   // Ảnh thể thao 5
            ]
        },
        {
            id: 2,
            name: "Chơi Game",
            icon: "fa-gamepad",
            activities: ["FPS", "MOBA", "RPG", "Strategy Games"],
            description: "Đam mê gaming với nhiều thể loại game khác nhau. Thường xuyên chơi game để giải trí và kết nối với bạn bè.",
            level: "Hardcore Gamer",
            // 🖼️ BANNER ẢNH - CHƠI GAME
            // Sử dụng ảnh của bạn từ thư mục images/
            images: [
                "images/game-1.jpg",  // Ảnh gaming 1
                "images/game-2.jpg",  // Ảnh gaming 2
                "images/game-3.jpg",  // Ảnh gaming 3
                "images/game-4.jpg",  // Ảnh gaming 4
                "images/game-5.jpg"   // Ảnh gaming 5
            ]
        },
        {
            id: 3,
            name: "Du lịch",
            icon: "fa-plane",
            activities: ["Khám phá văn hóa", "Chụp ảnh", "Ẩm thực", "Trekking"],
            description: "Đã đi 15 tỉnh thành Việt Nam. Thích khám phá địa điểm mới và trải nghiệm văn hóa địa phương.",
            level: "Nhiệt tình",
            // 🖼️ BANNER ẢNH - DU LỊCH
            // Sử dụng ảnh của bạn từ thư mục images/
            images: [
                "images/travel-1.jpg",  // Ảnh du lịch 1
                "images/travel-2.jpg",  // Ảnh du lịch 2
                "images/travel-3.jpg",  // Ảnh du lịch 3
                "images/travel-4.jpg",  // Ảnh du lịch 4
                "images/travel-5.jpg"   // Ảnh du lịch 5
            ]
        }
    ],

    // Blog Posts - Công Nghệ Phần Mềm (10 bài, mỗi bài ~1000 chữ)
    blog: [
        {
            id: 1,
            title: "Kiến Trúc Microservices: Xu Hướng Phát Triển Phần Mềm Hiện Đại",
            excerpt: "Tìm hiểu về kiến trúc microservices, ưu nhược điểm và cách triển khai trong các dự án phần mềm quy mô lớn.",
            content: `Microservices là một kiến trúc phần mềm cho phép phát triển ứng dụng như một tập hợp các dịch vụ nhỏ, độc lập. Mỗi service được phát triển, triển khai và mở rộng độc lập, giao tiếp với nhau thông qua các API nhẹ. Kiến trúc này đã trở thành xu hướng chủ đạo trong phát triển phần mềm hiện đại, đặc biệt là với các ứng dụng lớn và phức tạp.

Ưu điểm chính của microservices bao gồm khả năng mở rộng độc lập, cho phép các team phát triển song song, và khả năng chịu lỗi tốt hơn. Khi một service gặp sự cố, các service khác vẫn có thể hoạt động bình thường. Ngoài ra, mỗi service có thể được viết bằng ngôn ngữ và công nghệ phù hợp nhất với yêu cầu của nó.

Tuy nhiên, microservices cũng có những thách thức riêng. Việc quản lý nhiều service đòi hỏi công cụ và quy trình phức tạp hơn. Giao tiếp giữa các service có thể tạo ra độ trễ và phức tạp trong việc debug. Ngoài ra, việc đảm bảo tính nhất quán dữ liệu giữa các service là một thách thức lớn.

Để triển khai microservices thành công, cần có một nền tảng containerization như Docker và orchestration như Kubernetes. Service discovery, API gateway, và distributed tracing là những thành phần quan trọng khác. Monitoring và logging tập trung cũng rất cần thiết để quản lý hệ thống phức tạp này.

Trong thực tế, nhiều công ty lớn như Netflix, Amazon, và Uber đã áp dụng thành công kiến trúc microservices. Họ đã chứng minh rằng với quy trình và công cụ phù hợp, microservices có thể mang lại hiệu quả và tính linh hoạt cao cho việc phát triển phần mềm.`,
            author: "Đặng Hữu Nhã",
            date: "2024-02-15",
            category: "Kiến Trúc",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
            tags: ["Microservices", "Architecture", "Software Engineering"],
            readTime: "12 phút",
            link: "#"
        },
        {
            id: 2,
            title: "Clean Code: Nghệ Thuật Viết Code Dễ Đọc và Bảo Trì",
            excerpt: "Các nguyên tắc và best practices để viết code sạch, dễ đọc và dễ bảo trì trong phát triển phần mềm.",
            content: `Clean Code không chỉ là code hoạt động đúng, mà còn là code dễ đọc, dễ hiểu và dễ bảo trì. Trong bài viết này, chúng ta sẽ tìm hiểu các nguyên tắc quan trọng để viết code sạch.

Nguyên tắc đầu tiên là đặt tên có ý nghĩa. Tên biến, hàm, và class nên mô tả rõ ràng mục đích của chúng. Tránh các tên viết tắt không rõ ràng hoặc tên quá ngắn. Một tên dài nhưng rõ ràng luôn tốt hơn một tên ngắn nhưng khó hiểu.

Hàm nên nhỏ và chỉ làm một việc. Một hàm tốt chỉ nên có một lý do để thay đổi. Nếu một hàm làm nhiều việc, hãy tách nó thành nhiều hàm nhỏ hơn. Điều này giúp code dễ test và dễ bảo trì hơn.

Comment nên giải thích "tại sao" chứ không phải "cái gì". Code tốt tự nó đã giải thích được nó làm gì. Nếu bạn cần comment để giải thích code làm gì, có thể code đó cần được refactor. Comment nên tập trung vào lý do tại sao quyết định được đưa ra.

Xử lý lỗi là một phần quan trọng của clean code. Hãy sử dụng exceptions thay vì return codes. Đừng trả về null và đừng truyền null. Điều này giúp tránh các lỗi NullPointerException và làm code rõ ràng hơn.

Unit tests cũng là một phần của clean code. Tests nên được viết trước hoặc cùng lúc với code. Chúng nên nhanh, độc lập, có thể lặp lại, và tự kiểm tra. Một test tốt chỉ test một điều và tên test nên mô tả rõ ràng điều đó.

Cuối cùng, hãy nhớ rằng clean code không phải là một mục tiêu một lần, mà là một quá trình liên tục. Refactoring thường xuyên là chìa khóa để giữ code luôn sạch và dễ bảo trì.`,
            author: "Đặng Hữu Nhã",
            date: "2024-02-10",
            category: "Best Practices",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
            tags: ["Clean Code", "Best Practices", "Code Quality"],
            readTime: "10 phút",
            link: "#"
        },
        {
            id: 3,
            title: "DevOps và CI/CD: Tự Động Hóa Quy Trình Phát Triển Phần Mềm",
            excerpt: "Khám phá DevOps và CI/CD pipeline, cách tích hợp và triển khai liên tục giúp tăng tốc độ phát triển phần mềm.",
            content: `DevOps là sự kết hợp giữa Development và Operations, nhằm rút ngắn vòng đời phát triển phần mềm và cung cấp các bản cập nhật liên tục với chất lượng cao. Đây không chỉ là một phương pháp làm việc, mà còn là một văn hóa thay đổi cách các team phát triển và vận hành phần mềm.

CI/CD (Continuous Integration/Continuous Deployment) là trái tim của DevOps. Continuous Integration là quá trình tự động hóa việc build và test code mỗi khi có thay đổi được commit vào repository. Điều này giúp phát hiện lỗi sớm và đảm bảo code luôn ở trạng thái có thể deploy được.

Continuous Deployment tự động hóa việc deploy code đã được test lên môi trường production. Điều này cho phép release code nhanh chóng và thường xuyên hơn, giảm thiểu rủi ro và tăng tốc độ đưa tính năng mới đến người dùng.

Một CI/CD pipeline điển hình bao gồm các bước: Source Control (Git), Build (compile code), Test (unit tests, integration tests), Deploy (lên staging/production), và Monitor (theo dõi sau khi deploy). Mỗi bước đều được tự động hóa và có thể rollback nếu có vấn đề.

Công cụ phổ biến cho CI/CD bao gồm Jenkins, GitLab CI, GitHub Actions, CircleCI, và Travis CI. Containerization với Docker và orchestration với Kubernetes cũng đóng vai trò quan trọng trong việc đảm bảo tính nhất quán giữa các môi trường.

Lợi ích của DevOps và CI/CD là rõ ràng: giảm thời gian từ code đến production, tăng chất lượng code, giảm lỗi, và tăng sự hài lòng của cả developers và operations team. Tuy nhiên, việc triển khai đòi hỏi đầu tư vào công cụ, training, và thay đổi văn hóa làm việc.`,
            author: "Đặng Hữu Nhã",
            date: "2024-02-05",
            category: "DevOps",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
            tags: ["DevOps", "CI/CD", "Automation"],
            readTime: "15 phút",
            link: "#"
        },
        {
            id: 4,
            title: "Design Patterns trong Phát Triển Phần Mềm",
            excerpt: "Tổng quan về các design patterns phổ biến như Singleton, Factory, Observer và cách áp dụng trong thực tế.",
            content: `Design Patterns là các giải pháp tái sử dụng được cho các vấn đề phổ biến trong thiết kế phần mềm. Chúng được phát triển bởi các chuyên gia và đã được chứng minh qua thời gian. Design patterns giúp code dễ hiểu, dễ bảo trì và mở rộng hơn.

Creational Patterns tập trung vào cách tạo objects. Singleton đảm bảo một class chỉ có một instance duy nhất, hữu ích cho database connections hoặc logging. Factory Pattern cung cấp một interface để tạo objects mà không cần chỉ định class cụ thể. Builder Pattern giúp xây dựng objects phức tạp từng bước một.

Structural Patterns giải quyết cách các class và objects được tổ chức. Adapter Pattern cho phép các interface không tương thích làm việc cùng nhau. Decorator Pattern cho phép thêm behavior mới vào objects động. Facade Pattern cung cấp một interface đơn giản cho một hệ thống phức tạp.

Behavioral Patterns tập trung vào giao tiếp giữa objects. Observer Pattern cho phép một object thông báo cho nhiều observers về thay đổi trạng thái. Strategy Pattern cho phép chọn algorithm tại runtime. Command Pattern đóng gói requests như objects, cho phép queue, log, và undo operations.

Khi sử dụng design patterns, điều quan trọng là không lạm dụng chúng. Patterns nên được sử dụng khi chúng thực sự giải quyết vấn đề, không phải chỉ vì chúng "cool". Over-engineering với patterns có thể làm code phức tạp không cần thiết.

Trong thực tế, việc hiểu và áp dụng đúng design patterns sẽ giúp bạn viết code tốt hơn, dễ maintain hơn, và dễ làm việc với team hơn. Chúng là công cụ mạnh mẽ trong toolkit của mọi developer chuyên nghiệp.`,
            author: "Đặng Hữu Nhã",
            date: "2024-01-28",
            category: "Design Patterns",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
            tags: ["Design Patterns", "OOP", "Software Design"],
            readTime: "14 phút",
            link: "#"
        },
        {
            id: 5,
            title: "Test-Driven Development (TDD): Phát Triển Phần Mềm Theo Hướng Kiểm Thử",
            excerpt: "Tìm hiểu về TDD, quy trình red-green-refactor và lợi ích của việc viết test trước khi code.",
            content: `Test-Driven Development (TDD) là một phương pháp phát triển phần mềm nơi bạn viết test trước khi viết code thực tế. Quy trình này giúp tạo ra code chất lượng cao hơn, có test coverage tốt, và dễ refactor.

Quy trình TDD được mô tả bằng chu kỳ Red-Green-Refactor. Bước đầu tiên là Red: viết một test mới cho tính năng bạn muốn implement. Test này sẽ fail vì code chưa tồn tại. Bước thứ hai là Green: viết code tối thiểu để test pass. Bước cuối cùng là Refactor: cải thiện code mà vẫn giữ test pass.

Lợi ích chính của TDD là nó buộc bạn suy nghĩ về design trước khi code. Bạn phải nghĩ về interface, inputs, và outputs trước khi implement. Điều này dẫn đến design tốt hơn và code dễ sử dụng hơn.

TDD cũng giúp bạn có test coverage cao. Vì mỗi tính năng đều có test trước khi được implement, bạn tự động có test cho mọi thứ. Điều này giúp phát hiện bugs sớm và cho phép refactor an toàn.

Một lợi ích khác là TDD giúp bạn viết code modular hơn. Để test dễ dàng, code phải có dependencies rõ ràng và có thể inject được. Điều này dẫn đến code có coupling thấp và cohesion cao.

Tuy nhiên, TDD không phải lúc nào cũng dễ áp dụng. Nó đòi hỏi discipline và thời gian để học. Một số developers cảm thấy chậm hơn khi viết test trước. Nhưng với practice, TDD thực sự có thể làm bạn nhanh hơn về lâu dài vì ít bugs và dễ refactor hơn.

Trong thực tế, TDD đặc biệt hữu ích cho business logic và algorithms. Đối với UI hoặc code phụ thuộc nhiều vào external services, có thể cần approach linh hoạt hơn. Điều quan trọng là hiểu khi nào TDD phù hợp và khi nào không.`,
            author: "Đặng Hữu Nhã",
            date: "2024-01-20",
            category: "Testing",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
            tags: ["TDD", "Testing", "Quality Assurance"],
            readTime: "11 phút",
            link: "#"
        },
        {
            id: 6,
            title: "RESTful API vs GraphQL: So Sánh và Lựa Chọn",
            excerpt: "Phân tích chi tiết về RESTful API và GraphQL, ưu nhược điểm của từng công nghệ và khi nào nên sử dụng.",
            content: `REST và GraphQL đều là các cách tiếp cận để xây dựng API, nhưng chúng có những điểm khác biệt quan trọng. REST sử dụng các HTTP methods và endpoints rõ ràng, trong khi GraphQL sử dụng một query language và single endpoint.

RESTful API dựa trên các nguyên tắc: stateless communication, resource-based URLs, và sử dụng HTTP methods (GET, POST, PUT, DELETE) để thao tác với resources. Mỗi endpoint đại diện cho một resource cụ thể. Ví dụ: GET /users để lấy danh sách users, GET /users/1 để lấy user có id là 1.

Ưu điểm của REST là đơn giản, dễ hiểu, và có caching tốt với HTTP. Nó phù hợp với các ứng dụng CRUD truyền thống. Tuy nhiên, REST có thể dẫn đến over-fetching (lấy dữ liệu không cần) hoặc under-fetching (cần nhiều requests để lấy đủ dữ liệu).

GraphQL là một query language và runtime để query data. Client có thể request chính xác những gì cần, không hơn không kém. Điều này giúp giảm bandwidth và số lượng requests. GraphQL cũng có type system mạnh mẽ và introspection, cho phép client tự khám phá API.

Ưu điểm của GraphQL là flexibility trong querying, single endpoint, và strong typing. Nó đặc biệt tốt cho mobile apps nơi bandwidth là vấn đề. Tuy nhiên, GraphQL phức tạp hơn REST, có thể dẫn đến N+1 query problem, và caching phức tạp hơn.

Khi nào nên dùng REST? Khi bạn có một API đơn giản với CRUD operations, khi bạn cần caching tốt, hoặc khi team đã quen với REST. Khi nào nên dùng GraphQL? Khi bạn có nhiều clients với nhu cầu data khác nhau, khi bandwidth là vấn đề, hoặc khi bạn cần real-time subscriptions.

Trong thực tế, nhiều công ty sử dụng cả hai. REST cho public APIs và simple operations, GraphQL cho internal APIs và complex queries. Điều quan trọng là chọn công nghệ phù hợp với use case cụ thể của bạn.`,
            author: "Đặng Hữu Nhã",
            date: "2024-01-15",
            category: "API",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
            tags: ["REST", "GraphQL", "API Design"],
            readTime: "9 phút",
            link: "#"
        },
        {
            id: 7,
            title: "Docker và Containerization: Cách Đóng Gói và Triển Khai Ứng Dụng",
            excerpt: "Tìm hiểu về Docker, containerization, và cách chúng cách mạng hóa việc phát triển và triển khai phần mềm.",
            content: `Docker đã cách mạng hóa cách chúng ta phát triển, đóng gói, và triển khai ứng dụng. Containerization cho phép đóng gói ứng dụng cùng với tất cả dependencies của nó vào một container nhẹ, có thể chạy nhất quán trên mọi môi trường.

Container khác với virtual machines ở chỗ chúng chia sẻ OS kernel của host, làm cho chúng nhẹ hơn và nhanh hơn nhiều. Một container chỉ chứa application và dependencies của nó, không có toàn bộ OS. Điều này cho phép chạy nhiều containers trên cùng một máy với overhead tối thiểu.

Dockerfile là cách bạn định nghĩa một container. Nó mô tả base image, các dependencies cần cài, và commands để chạy application. Docker build tạo ra một image từ Dockerfile, và docker run tạo và chạy một container từ image đó.

Docker Compose cho phép định nghĩa và chạy multi-container applications. Bạn có thể định nghĩa services, networks, và volumes trong một file YAML, và docker-compose up sẽ start tất cả. Điều này rất hữu ích cho development environments với database, cache, và application services.

Lợi ích chính của Docker là tính nhất quán. "It works on my machine" không còn là vấn đề nữa vì container chạy giống nhau trên mọi môi trường. Docker cũng giúp isolation, mỗi container chạy độc lập, không ảnh hưởng đến containers khác.

Docker cũng tạo điều kiện cho microservices architecture. Mỗi service có thể được containerized riêng, cho phép scale và deploy độc lập. Kết hợp với Kubernetes, Docker cho phép orchestration containers ở quy mô lớn.

Trong thực tế, Docker đã trở thành standard cho containerization. Hầu hết các cloud providers đều hỗ trợ Docker, và nhiều công cụ CI/CD tích hợp sẵn với Docker. Hiểu Docker là essential skill cho mọi developer hiện đại.`,
            author: "Đặng Hữu Nhã",
            date: "2024-01-10",
            category: "DevOps",
            image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop",
            tags: ["Docker", "Containerization", "DevOps"],
            readTime: "13 phút",
            link: "#"
        },
        {
            id: 8,
            title: "Agile và Scrum: Phương Pháp Phát Triển Phần Mềm Linh Hoạt",
            excerpt: "Khám phá Agile methodology và Scrum framework, cách chúng giúp teams phát triển phần mềm hiệu quả hơn.",
            content: `Agile là một phương pháp phát triển phần mềm tập trung vào collaboration, customer feedback, và rapid iteration. Thay vì plan mọi thứ từ đầu như Waterfall, Agile cho phép adapt và respond to change nhanh chóng.

Scrum là framework phổ biến nhất để implement Agile. Nó dựa trên các roles (Product Owner, Scrum Master, Development Team), events (Sprint, Daily Standup, Sprint Review, Retrospective), và artifacts (Product Backlog, Sprint Backlog, Increment).

Sprint là time-boxed period (thường 2-4 tuần) trong đó team hoàn thành một set công việc. Mỗi sprint bắt đầu với Sprint Planning, nơi team chọn items từ Product Backlog để làm trong sprint. Daily Standup là meeting ngắn hàng ngày để sync về progress và blockers.

Sprint Review là demo cho stakeholders về những gì đã hoàn thành. Sprint Retrospective là meeting để reflect về process và tìm cách cải thiện. Đây là cơ hội để team tự cải thiện liên tục.

Product Backlog là prioritized list của tất cả features, bugs, và improvements. Product Owner chịu trách nhiệm maintain backlog này. Sprint Backlog là subset của Product Backlog được chọn cho sprint hiện tại.

Lợi ích của Agile/Scrum là transparency, flexibility, và focus vào value delivery. Team có thể respond to change nhanh chóng, và stakeholders thấy progress thường xuyên. Tuy nhiên, Agile đòi hỏi discipline và commitment từ cả team và organization.

Trong thực tế, nhiều teams customize Scrum để phù hợp với context của họ. Điều quan trọng là giữ các nguyên tắc cốt lõi: iterative development, collaboration, và continuous improvement. Agile không phải là silver bullet, nhưng khi được implement đúng, nó có thể cải thiện đáng kể productivity và quality.`,
            author: "Đặng Hữu Nhã",
            date: "2024-01-05",
            category: "Best Practices",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
            tags: ["Agile", "Scrum", "Project Management"],
            readTime: "16 phút",
            link: "#"
        },
        {
            id: 9,
            title: "Security trong Phát Triển Phần Mềm: Best Practices và Common Vulnerabilities",
            excerpt: "Tìm hiểu về security best practices, common vulnerabilities như SQL injection, XSS, và cách phòng chống.",
            content: `Security là một aspect quan trọng nhưng thường bị bỏ qua trong phát triển phần mềm. Với số lượng cyber attacks ngày càng tăng, việc build security vào development process từ đầu là essential.

OWASP Top 10 là danh sách các security risks phổ biến nhất. Injection attacks (SQL, NoSQL, OS command) xảy ra khi untrusted data được gửi đến interpreter. Để phòng chống, luôn sử dụng parameterized queries, input validation, và least privilege principle.

Broken Authentication xảy ra khi authentication mechanisms được implement sai. Để tránh, sử dụng strong password policies, implement proper session management, và sử dụng multi-factor authentication. Never store passwords in plain text - luôn hash với salt.

Sensitive Data Exposure xảy ra khi sensitive data không được protect đúng cách. Sử dụng encryption cho data at rest và in transit. Never log sensitive information, và implement proper access controls.

XML External Entities (XXE) attacks xảy ra khi XML parser processes external entity references. Để phòng chống, disable XML external entity processing, và sử dụng simpler data formats như JSON.

Broken Access Control xảy ra khi users có thể access resources họ không nên có quyền. Implement proper authorization checks, và follow principle of least privilege. Never trust client-side controls - always validate on server.

Security Misconfiguration là một trong những vấn đề phổ biến nhất. Default credentials, unnecessary features enabled, và missing security headers đều là examples. Regular security audits và automated scanning có thể giúp phát hiện.

Security không phải là một lần, mà là một quá trình liên tục. Security testing nên được integrate vào CI/CD pipeline. Regular security audits, penetration testing, và staying updated với latest threats là essential. Remember: security is everyone's responsibility, not just security team.`,
            author: "Đặng Hữu Nhã",
            date: "2023-12-28",
            category: "Security",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
            tags: ["Security", "OWASP", "Best Practices"],
            readTime: "14 phút",
            link: "#"
        },
        {
            id: 10,
            title: "Cloud Computing: AWS, Azure, và GCP - So Sánh và Lựa Chọn",
            excerpt: "Phân tích các cloud providers hàng đầu, services của họ, và cách chọn platform phù hợp cho dự án của bạn.",
            content: `Cloud computing đã trở thành foundation của modern software development. AWS, Azure, và GCP là ba cloud providers hàng đầu, mỗi cái có strengths và weaknesses riêng.

Amazon Web Services (AWS) là market leader với largest market share. Nó có most comprehensive set of services, từ compute (EC2, Lambda) đến storage (S3, EBS), database (RDS, DynamoDB), và AI/ML services. AWS có mature ecosystem, extensive documentation, và large community. Tuy nhiên, pricing có thể phức tạp, và some services có learning curve steep.

Microsoft Azure là strong choice cho enterprises đã sử dụng Microsoft stack. Integration với Active Directory, Office 365, và .NET ecosystem là seamless. Azure có good support cho hybrid cloud và strong enterprise features. Tuy nhiên, Azure portal có thể overwhelming, và some services không mature như AWS equivalents.

Google Cloud Platform (GCP) nổi bật với data analytics và AI/ML capabilities. BigQuery, Dataflow, và TensorFlow integration là excellent. GCP có best-in-class networking và competitive pricing. Tuy nhiên, GCP có smaller market share, ít third-party tools hơn, và enterprise features không mạnh bằng AWS/Azure.

Khi chọn cloud provider, consider factors như: existing technology stack, specific service needs, pricing model, geographic presence, và compliance requirements. Nếu bạn cần broadest range of services, AWS là choice tốt. Nếu bạn đã trong Microsoft ecosystem, Azure makes sense. Nếu bạn focus vào data analytics, GCP có thể là best fit.

Multi-cloud strategy cũng là một option. Sử dụng multiple providers để avoid vendor lock-in và leverage best services từ mỗi provider. Tuy nhiên, điều này adds complexity và requires expertise với multiple platforms.

Trong thực tế, nhiều companies bắt đầu với one provider và expand khi cần. Điều quan trọng là understand pricing models, implement proper cost management, và design applications để be cloud-native. Cloud computing không chỉ là về infrastructure, mà còn về cách bạn design và build applications.`,
            author: "Đặng Hữu Nhã",
            date: "2023-12-20",
            category: "Cloud",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
            tags: ["Cloud Computing", "AWS", "Azure", "GCP"],
            readTime: "17 phút",
            link: "#"
        }
    ],

    // Navigation Menu
    navigation: [
        { name: "Trang Chủ", href: "#hero" },
        { name: "Về Tôi", href: "#about" },
        { name: "Học Vấn", href: "#education" },
        { name: "Kỹ Năng", href: "#skills" },
        { name: "Chứng Chỉ", href: "#certificates" },
        { name: "Sở Thích", href: "#hobbies" },
        { name: "Dự Án", href: "#projects" },
        { name: "Blog", href: "#blog" }
    ],

    // Footer
    footer: {
        about: "Tôi là một developer đam mê, luôn sẵn sàng học hỏi và tạo ra những sản phẩm tuyệt vời.",
        quickLinks: [
            { name: "Trang Chủ", href: "#hero" },
            { name: "Về Tôi", href: "#about" },
            { name: "Dự Án", href: "#projects" },
            { name: "Blog", href: "#blog" }
        ],
        services: [
            { name: "Web Development", href: "#" },
            { name: "UI/UX Design", href: "#" },
            { name: "Consulting", href: "#" },
            { name: "Freelance", href: "#" }
        ]
    }
};

