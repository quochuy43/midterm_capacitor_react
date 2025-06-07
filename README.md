Mô tả về đề tài: Mã nguồn ở nhánh Master. Cấu trúc codebase của em bao gồm là: src/ ├── components/ │ ├── BirthdayCountdown.jsx
│ ├── InputField.jsx
│ ├── BatteryStatus.jsx
│ └── ResultDisplay.jsx
├── services/ │ └── capacitorService.js
├── App.css
├── App.jsx Em chia ra như vậy để dễ quản lí và tái sử dụng. Codebase React + Capacitor tính thời gian đến sinh nhật với các components (InputField, BirthdayCountdown, ResultDisplay, BatteryStatus), logic trong capacitorService.js, giao diện từ App.css, và App.jsx quản lý chính. Trước khi chạy máy chủ ở Android Studio thì em test ở web trước bằng npm start. Sau đó em dùng câu lệnh npm run build tạo bản build tối ưu của ứng dụng React, npx cap open android để mở android studio, sau đó là npx cap sync đồng bộ bản build với Capacitor để chạy trên native. Cuối cùng là ấn nút Run ở Android studio để chạy máy ảo. Link ảnh app chi tiết: https://docs.google.com/document/d/14zXm2lWW263Q7NSO1twgTTO7AHKY_nTvXkt6MpNAAsM/edit?usp=drive_link
