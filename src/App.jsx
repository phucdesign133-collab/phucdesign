import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Carousel1 from './components/componentCarousel1';
import Carousel2 from './components/componentCarousel2';

export default function HomePage() {
 // Trong HomePage.jsx
<Carousel1 
    title="Upcoming Events 12" 
    description="Hế lô" 
    data={Carousel1} 
/>
  return (
    <div style={styles.pageWrapper}>
      <Header/>
      

      {/* 2. BODY CHỨA CÁC KHỐI SỰ KIỆN LỚN */}
      <main style={styles.bodySection}>

        {/* SECTION 1: UPCOMING EVENTS */}
        <Carousel1/>

        {/* SECTION 2: RECENT EVENTS */}
        <Carousel2/>

        {/* SECTION 3: ALL EVENT */}
        <section style={styles.sectionRow}>
          <div style={styles.leftColumn}>
            <h1 style={styles.mainHeading}>All Event</h1>
            <p style={styles.subParagraph}>It is a long established fact that a reader will be looking.</p>
          </div>
          <div style={styles.rightColumn}>
            <div style={styles.gridBox}>
              <h3 style={styles.boxInsideText}>[ Vùng hiển thị Lưới ô vuông của All Event ]</h3>
            </div>
          </div>
        </section>

      </main>

      <Footer/>

    </div>
  );
}

// ========================================================
// HỆ THỐNG CSS ĐÃ ĐƯỢC PHÓNG TO CHUẨN ĐỘ PHÂN GIẢI 100% WEB
// ========================================================
const styles = {
  pageWrapper: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1a0836', 
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  
  // KÍCH THƯỚC HEADER ĐÃ ĐƯỢC TĂNG MẠNH
  headerSection: {
    width: '100%',
    padding: '40px 6%', // Tăng khoảng cách đệm cho thoáng
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    boxSizing: 'border-box'
  },
  logo: {
    fontSize: '36px',          // Logo cực to và đậm nét
    fontWeight: '900',
    letterSpacing: '2px'
  },
  navLinks: {
    display: 'flex',
    gap: '45px'
  },
  navItem: {
    fontSize: '22px',          // Chữ menu to rõ ràng ở mức zoom 100%
    fontWeight: '700',
    cursor: 'pointer'
  },

  // KÍCH THƯỚC CÁC KHỐI CHỮ TRONG THÂN TRANG
  bodySection: {
    flex: 1,
    width: '100%',
    padding: '100px 6%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '160px' 
  },
  sectionRow: {
    display: 'flex',
    width: '100%',
    gap: '6%',
    alignItems: 'flex-start'
  },
  leftColumn: {
    width: '28%', 
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  mainHeading: {
    fontSize: '64px',          // Tiêu đề Section to khổng lồ, chuẩn đét
    fontWeight: '800',
    lineHeight: '1.1',
    margin: 0,
    color: '#ffffff',
    letterSpacing: '-1px'
  },
  subParagraph: {
    fontSize: '20px',          // Chữ mô tả tăng lên 20px để nhìn từ xa vẫn rõ
    lineHeight: '1.6',
    color: '#a493c3',
    margin: 0
  },
  timetableBtn: {
    fontSize: '18px',          // Chữ nút timetable to dễ bấm
    fontWeight: '700',
    color: '#ffffff',
    textDecoration: 'underline',
    cursor: 'pointer',
    alignSelf: 'flex-start'
  },

  // KHU VỰC KHUNG CHỨA BÊN PHẢI
  rightColumn: {
    width: '66%', 
    display: 'flex',
    flexDirection: 'column'
  },
  sliderBox: {
    width: '100%',
    height: '450px',
    border: '2px dashed rgba(255,255,255,0.2)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.02)'
  },
  gridBox: {
    width: '100%',
    height: '550px',
    border: '2px dashed rgba(255,255,255,0.2)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.02)'
  },
  boxInsideText: {
    fontSize: '22px',          // Chữ thông báo bên trong hộp to rõ
    color: 'rgba(255,255,255,0.4)',
    margin: 0
  },

  // CHÂN TRANG FOOTER
  footerSection: {
    width: '100%',
    padding: '50px 6%',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  footerText: {
    fontSize: '18px',
    margin: 0,
    color: 'rgba(255,255,255,0.5)'
  }
};