
# 💰 My Wallet

**My Wallet** là một ứng dụng web quản lý chi tiêu cá nhân đơn giản, chạy trên **Firebase Hosting** và sử dụng **Google Sheets** làm cơ sở dữ liệu No-Code thông qua Google Apps Script API.  
Dự án được viết hoàn toàn bằng **HTML + JavaScript** để dễ triển khai và mở rộng.

---

## 🚀 Tính năng

- 📊 **Theo dõi thu nhập và chi tiêu** theo ngày, tháng.
- 🔍 Lọc và tìm kiếm giao dịch nhanh.
- 📝 Thêm, chỉnh sửa, xóa giao dịch trực tiếp từ giao diện web.
- ☁ **Lưu trữ dữ liệu trên Google Sheets** – dễ xem, chỉnh sửa, chia sẻ.
- ⚡ Hosting bằng **Firebase** – tốc độ nhanh, miễn phí cho dự án nhỏ.
- 📱 Giao diện responsive – chạy tốt trên cả desktop và mobile.

---

## 🛠 Công nghệ sử dụng

| Thành phần       | Mô tả |
|------------------|-------|
| **Frontend**     | HTML, CSS, JavaScript thuần |
| **Hosting**      | Firebase Hosting |
| **Database**     | Google Sheets (No Code DB) |
| **API**          | Google Apps Script Web App API |

---

## 📂 Cấu trúc thư mục

```plaintext
my-wallet/
│
├── public/                  # Thư mục chứa mã nguồn web
│   ├── index.html            # Giao diện chính
│   ├── script.js             # Code xử lý logic
│   ├── style.css             # Giao diện
│
├── google-scripts/           # Code Google Apps Script kết nối Sheets
│   └── Code.gs
│
└── firebase.json             # Cấu hình Firebase Hosting
````

---

## ⚙️ Cài đặt & Triển khai

### 1. Chuẩn bị Google Sheet làm database

1. Tạo một Google Sheet mới với các cột ví dụ:
   `Date | Category | Description | Amount | Type`
2. Mở **Extensions > Apps Script**.
3. Thêm file `Code.gs` từ thư mục `google-scripts/` của dự án vào.
4. Deploy project dưới dạng **Web App** với quyền:

   * Execute as: **Me**
   * Who has access: **Anyone**
5. Lấy **Web App URL** để dùng trong `script.js`.

---

### 2. Triển khai Firebase Hosting

1. Cài đặt Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```
2. Đăng nhập:

   ```bash
   firebase login
   ```
3. Khởi tạo dự án:

   ```bash
   firebase init hosting
   ```
4. Chọn thư mục public → **public/**
5. Deploy:

   ```bash
   firebase deploy
   ```

---

## 🔗 Kết nối Google Sheets API

Trong `script.js`, cấu hình biến:

```javascript
const SHEET_API_URL = "https://script.google.com/macros/s/XXXXXXXXXXXX/exec";
```

Thay `XXXXXXXXXXXX` bằng URL từ Apps Script Web App.

---

## 📌 Lưu ý bảo mật

* Không lưu token hoặc dữ liệu nhạy cảm trực tiếp trong client-side code.
* Có thể thêm xác thực Google OAuth nếu cần bảo vệ dữ liệu.
* Đặt Sheet ở chế độ private nếu không muốn công khai dữ liệu.

---

## 📜 Giấy phép

Dự án này được phát hành dưới giấy phép **MIT License** – bạn có thể tự do sử dụng, chỉnh sửa, phân phối.

---

## 👨‍💻 Tác giả

* **Tên bạn** – *DANGO*
* **Liên hệ**: [Email](mailto:danglephd@gmail.com) | [GitHub](https://github.com/danglephd)

```

---

Bạn có muốn mình làm tiếp phần đó không?
```
