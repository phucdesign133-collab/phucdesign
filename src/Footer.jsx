// File: src/Footer.jsx
import React from 'react';
import logoPhucDesign from './images/logo.png'; // Đường dẫn ảnh logo của anh
// File: src/main.jsx
import './cssCustom.css'; // Dẫn file CSS tổng vào đây là toàn bộ ngóc ngách dự án đều ăn theo!

function Footer() {
  // Định nghĩa style chung cho các thẻ chữ để không bị hiệu ứng hover mặc định của Bootstrap làm phiền
  const textStyle = {
    color: '#333',
    textDecoration: 'none',
    fontWeight: 'normal',
    fontSize: '0.95rem'
  };

  return (
    <footer className="bg-light pt-5 pb-3 border-top" style={{ color: '#333' }}>
      <div className="container">
        <div className="row text-left">
          
          {/* CỘT 1: THÔNG TIN CÔNG TY */}
<div className="col-md-3 mb-4">
  {/* Logo Công ty */}
  <img src={logoPhucDesign} alt="Phuc Design Logo" className="img-fluid mb-3" style={{ maxHeight: '70px' }} />
  
  {/* Chia thành 4 hàng chữ nhỏ, thanh mảnh và gọn gàng */}
  <div className="small text-muted" style={{ lineHeight: '1.8' }}>
    <p className="mb-1">🔹 Cung cấp nhân sự</p>
    <p className="mb-1">🔹 Xây dựng thương hiệu</p>
    <p className="mb-1">🔹 An tâm di chuyển</p>
    <p className="mb-0 font-italic text-secondary" style={{ marginTop: '8px' }}>
      "Tất cả chỉ trong 1 cuộc gọi!"
    </p>
  </div>
</div>

          {/* CỘT 2: TÀI NGUYÊN */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3" style={{ fontSize: '1.1rem', letterSpacing: '0.5px', color: '#000', fontWeight: '600' }}>TÀI NGUYÊN</h5>
            <ul className="list-unstyled" style={{ lineHeight: '2' }}>
              <li><a href="#" style={textStyle}>Sinh Nhật Bé Trai</a></li>
              <li><a href="#" style={textStyle}>Cổng Cưới Wedding</a></li>
              <li><a href="#" style={textStyle}>File In Gia Tiên</a></li>
              <li><a href="#" style={textStyle}>Background Event</a></li>
            </ul>
          </div>

          {/* CỘT 3: CHÍNH SÁCH */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3" style={{ fontSize: '1.1rem', letterSpacing: '0.5px', color: '#000', fontWeight: '600' }}>CHÍNH SÁCH</h5>
            <ul className="list-unstyled" style={{ lineHeight: '2' }}>
              <li><a href="#" style={textStyle}>Điều khoản sử dụng</a></li>
              <li><a href="#" style={textStyle}>Chính sách bảo mật</a></li>
              <li><a href="#" style={textStyle}>Hướng dẫn tải file</a></li>
              <li><a href="#" style={textStyle}>Liên hệ hỗ trợ</a></li>
            </ul>
          </div>

          {/* CỘT 4: LIÊN HỆ */}
         {/* CỘT 4: LIÊN HỆ CHUẨN KẾT NỐI THÔNG MINH */}
<div className="col-md-3 mb-4">
  <h5 className="mb-3" style={{ fontSize: '1.1rem', letterSpacing: '0.5px', color: '#000', fontWeight: '600' }}>LIÊN HỆ</h5>
  <ul className="list-unstyled small" style={{ lineHeight: '2.2', color: '#333', fontWeight: 'normal', fontSize: '0.95rem' }}>
    
    {/* 1. ĐỊNH VỊ ĐỊA CHỈ: Bấm một phát mở ngay Google Maps đến thẳng công ty */}
    <li className="mb-1">
      <a 
        href="https://www.google.com/maps/place/C%C3%B4ng+ty+TNHH+Qu%E1%BA%A3ng+C%C3%A1o+Ph%C3%BAc+Design/@10.7575846,106.6224333,17z/data=!3m1!4b1!4m6!3m5!1s0x31752db0382a5be9:0xd367b1680f80fb22!8m2!3d10.7575846!4d106.6250082!16s%2Fg%2F11w7910_603?entry=ttu" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#333', textDecoration: 'none' }}
      >
        📍 242/99A Bà Hom, Phú Lâm, Q.6, TP.HCM
      </a>
    </li>

    {/* 2. EMAIL: Bấm tự động mở ứng dụng Outlook/Gmail để gửi mail */}
    <li className="mb-1">
      <a href="mailto:phucdesign133@gmail.com" style={{ color: '#333', textDecoration: 'none' }}>
        ✉️ phucdesign133@gmail.com
      </a>
    </li>

    {/* 3. SỐ ĐIỆN THOẠI HOTLINE 1: Số công việc chính của anh */}
    <li className="mb-1">
      <a href="tel:0799910603" style={{ color: '#333', textDecoration: 'none' }}>
        📞 Hotline : 079.991.0603
      </a>
    </li>

    {/* 4. SỐ ĐIỆN THOẠI HOTLINE 2: Số phụ ở nhà
    <li className="mb-1">
      <a href="tel:0704130399" style={{ color: '#333', textDecoration: 'none' }}>
        ☎️ Hotline 2: 0704.130.399
      </a>
    </li> */}

    {/* 5. THỜI GIAN LÀM VIỆC
    <li className="mb-2">
      ⏰ 08:00 AM - 10:00 PM
    </li> */}

    {/* KÊNH CHAT NHANH: Tích hợp Zalo và WhatsApp đón đầu tương lai */}
    <li className="mt-3 d-flex gap-2 align-items-center" style={{ gap: '10px' }}>
      
      {/* Nút chat Zalo: Tự động kết nối thẳng qua số của anh */}
      <a 
        href="https://zalo.me/0799910603" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-sm btn-primary px-3 rounded-pill font-weight-bold"
        style={{ fontSize: '0.8rem', color: '#fff !important' }}
      >
        Zalo
      </a>

      {/* Nút chat WhatsApp: Sẵn sàng cho khách hàng quốc tế hoặc tương lai */}
      <a 
        href="https://wa.me/84799910603" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-sm btn-success px-3 rounded-pill font-weight-bold"
        style={{ fontSize: '0.8rem',color: '#fff !important' }}
      >
        WhatsApp
      </a>

    </li>
  </ul>
</div>

        </div>

        <hr className="my-4" />

        {/* DÒNG COPYRIGHT ĐÃ ĐƯỢC ĐẨY VÀO GIỮA CHUẨN KHÍT */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="small text-muted mb-0">
              © 2026 Copyright thuộc về <span style={{ color: '#333', fontWeight: '600' }}>PhucDesignCo., Ltd.</span> All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;