import React from 'react';
// Tải ảnh về máy và import trực tiếp để không bao giờ lo bị nhà mạng chặn link anh nhé!
import backgroundImage from '../assets/images/coming-soon.jpg'; 

export default function Taxi() {
  const handleGoHome = () => {
    window.location.href = '/'; 
  };

  return (
    <div style={styles.pageWrapper}>
      {/* ẢNH NỀN THUẦN WIDTH 100% - KHÔNG LO BỊ TRÀN MÀN HÌNH */}
      <img 
        src={backgroundImage} 
        alt="Coming Soon Background" 
        style={styles.bgImage} 
      />

      {/* NÚT CTA ĐƯỢC GHIM CHẶT PHÍA TRÊN ẢNH, ĐÚNG VÙNG DƯỚI CHỮ */}
      <button onClick={handleGoHome} style={styles.ctaButton}>
        ✨ Quay về Trang Chủ
      </button>
    </div>
  );
}

const styles = {
  pageWrapper: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: '#3b3e47', // Màu nền xám tiệp với màu ảnh gốc nếu ảnh chưa kịp load
    overflow: 'hidden', // Triệt tiêu hoàn toàn mọi thanh trượt dọc ngang
  },
  bgImage: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'contain', // Đảm bảo ảnh giữ nguyên tỷ lệ gốc không bị méo
  },
  ctaButton: {
    position: 'absolute',
    // Định vị nút nằm ở khoảng 75% từ trên đỉnh màn hình xuống (vùng trống dưới chữ)
    top: '75%', 
    left: '50%',
    transform: 'translate(-50%, -50%)', // Căn giữa nút chính xác 100%
    background: '#ffffff',
    color: '#0f172a',
    border: 'none',
    padding: '14px 36px',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
    zIndex: 10,
    outline: 'none',
    whiteSpace: 'nowrap', // Không cho chữ trong nút bị rớt dòng
  },
};