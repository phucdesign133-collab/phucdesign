import React, { useState } from 'react';

// 1. MẢNG DỮ LIỆU SẢN PHẨM/ẢNH CỦA CAROUSEL
const CAROUSEL_DATA = [
  { id: 1, url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800', title: 'Mẫu Hoàng Gia Luxury', desc: 'Trang trí thôi nôi phong cách hoàng gia sang trọng cho bé.' },
  { id: 2, url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800', title: 'Sân Khấu Bóng Bay Basic', desc: 'Background bong bóng nghệ thuật tone màu pastel dịu nhẹ.' },
  { id: 3, url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800', title: 'Sinh Nhật Công Chúa', desc: 'Trang trí tiệc sinh nhật bé gái dễ thương với nơ hồng.' },
  { id: 4, url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', title: 'Gala Dinner Doanh Nghiệp', desc: 'Thiết kế sân khấu sự kiện hoành tráng ngoài trời.' }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hàm xử lý khi bấm mũi tên sang trái
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? CAROUSEL_DATA.length - 1 : prevIndex - 1
    );
  };

  // Hàm xử lý khi bấm mũi tên sang phải
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === CAROUSEL_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = CAROUSEL_DATA[currentIndex];

  return (
    <div style={styles.carouselContainer}>
      {/* 2. KHUNG CHỨA ẢNH & CHỮ (KHÔNG TRÀN HẾT WIDTH) */}
      <div style={styles.cardWrapper}>
        <img 
          src={currentItem.url} 
          alt={currentItem.title} 
          style={styles.carouselImage} 
        />
        
        {/* NỘI DUNG CHỮ PHỦ LÊN TRÊN ẢNH */}
        <div style={styles.infoOverlay}>
          <h3 style={styles.infoTitle}>{currentItem.title}</h3>
          <p style={styles.infoDesc}>{currentItem.desc}</p>
        </div>
      </div>

      {/* 3. ĐIỀU HƯỚNG MŨI TÊN (MOBILE & DESKTOP ĐỀU BẤM ĐƯỢC CHẠY CHẠY) */}
      <button onClick={handlePrev} style={{ ...styles.navButton, left: '15px' }}>
        ❮
      </button>
      <button onClick={handleNext} style={{ ...styles.navButton, right: '15px' }}>
        ❯
      </button>

      {/* CÁC CHẤM TRÒN NHỎ ĐỂ BIẾT ĐANG Ở SLIDE NÀO */}
      <div style={styles.dotContainer}>
        {CAROUSEL_DATA.map((_, index) => (
          <div 
            key={index} 
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'
            }}
          />
        ))}
      </div>
    </div>
  );
}

// 4. BỘ HỆ THỐNG STYLES INLINE (TỰ ĐỘNG CO GIÃN THEO KHUNG ĐƯỢC ĐẶT)
const styles = {
  carouselContainer: {
    position: 'relative',
    maxWidth: '800px', // Không chạy hết width 100%, giới hạn khung nhìn rất sang
    margin: '20px auto',
    padding: '0 10px',
    boxSizing: 'border-box',
  },
  cardWrapper: {
    position: 'relative',
    width: '100%',
    height: '400px', // Chiều cao mặc định đẹp cho cả desktop lẫn mobile
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    backgroundColor: '#1e293b',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  infoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(15, 23, 42, 0.9))', // Gradient tối làm nổi bật chữ
    padding: '30px 20px 25px 20px',
    color: '#ffffff',
    textAlign: 'left',
  },
  infoTitle: {
    margin: '0 0 8px 0',
    fontSize: '22px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  infoDesc: {
    margin: 0,
    fontSize: '14px',
    color: '#cbd5e1',
    lineHeight: '1.5',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(4px)', // Hiệu ứng mờ kính sang trọng
    color: '#ffffff',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    zIndex: 10,
    outline: 'none',
  },
  dotContainer: {
    position: 'absolute',
    bottom: '25px',
    right: '25px', // Đẩy các chấm nhỏ sang góc phải cho gọn giống mẫu Pinterest
    display: 'flex',
    gap: '6px',
    zIndex: 10,
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  }
};