import React from 'react';
import { Link } from 'react-router-dom';

export default function MissionSection() {
  return (
    <div style={styles.missionContainer}>
      <h3 style={styles.title}>🎉 XIN CHÀO THÀNH VIÊN MỚI 🎉</h3>
      <p style={styles.subtitle}>
        Vào ngay Vòng quay để nhận quà ngay nhé các bạn ơi!
      </p>

      {/* KHỐI CHỨA CÁC NÚT BẤM - Sau này anh muốn thêm nút cứ copy thêm thẻ bên dưới */}
      <div style={styles.buttonGroup}>
        
        {/* Nút 1: Dẫn vào vòng quay May mắn Party */}
        <Link to="/lucky-spin-party">
          <button style={{...styles.baseButton, ...styles.spinBtn}}>
            🔥 Vào Vòng Quay Nhận Quà Ngay
          </button>
        </Link>

        {/* Nút 2: Ví dụ nhiệm vụ Xem Album ảnh sự kiện (Anh có thể đổi link sau) */}
        {/* <Link to="/gallery">
          <button style={{...styles.baseButton, ...styles.galleryBtn}}>
            📸 Nhiệm vụ 2: Lướt Xem Mẫu Tiệc Đẹp (Thêm +1 Lượt)
          </button>
        </Link> */}

        {/* Nút 3: Ví dụ nhiệm vụ Đăng ký tư vấn nhanh */}
        {/* <button 
          onClick={() => alert("Hệ thống liên hệ tư vấn đang được kết nối!")} 
          style={{...styles.baseButton, ...styles.contactBtn}}
        >
          📞 Nhiệm vụ 3: Để Lại Thông Tin Tư Vấn (Thêm +1 Lượt)
        </button> */}

      </div>
    </div>
  );
}

// Gom toàn bộ style xuống dưới cùng để phần giao diện ở trên nhìn sạch nhất
const styles = {
  missionContainer: {
    textAlign: 'center',
    padding: '40px 20px',
    background: 'rgba(255, 255, 255, 0.04)',
    margin: '40px auto',
    borderRadius: '20px',
    maxWidth: '1000px',
    border: '1px dashed rgba(255, 255, 255, 0.15)',
    boxSizing: 'border-box'
  },
  title: {
    color: '#ff007f',
    marginBottom: '12px',
    fontSize: '22px',
    letterSpacing: '0.5px'
  },
  subtitle: {
    color: '#94a3b8',
    marginBottom: '30px',
    fontSize: '14px'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap' // Tự động xuống dòng mượt mà khi xem trên điện thoại di động
  },
  baseButton: {
    color: '#fff',
    border: 'none',
    padding: '14px 28px',
    fontSize: '15px',
    fontWeight: 'bold',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  // Màu sắc riêng cho từng nút để tăng tính rực rỡ phong cách Party
  spinBtn: {
    background: 'linear-gradient(45deg, #00f5d4, #7b2cbf)',
    boxShadow: '0 5px 15px rgba(0, 245, 212, 0.3)',
  },
  galleryBtn: {
    background: 'linear-gradient(45deg, #ff5400, #ff007f)',
    boxShadow: '0 5px 15px rgba(255, 0, 127, 0.3)',
  },
  contactBtn: {
    background: 'linear-gradient(45deg, #3a0ca3, #4361ee)',
    boxShadow: '0 5px 15px rgba(67, 97, 238, 0.3)',
  }
};