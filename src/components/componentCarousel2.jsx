import React, { useState, useEffect, useRef } from 'react';
import './componentCarousel1.css';
import { upcomingData } from '../data.js';

export default function Carousel2() {
  const originalEvents = upcomingData.events;
  const totalOriginal = originalEvents.length;

  // Số lượng item muốn hiển thị rõ trên màn hình (Component này là 3, component dưới anh đổi thành 4)
  const slidesToShow = 4; 

  // Tạo mảng trượt vô tận: Nhân bản một nhóm ảnh gốc ra trước và sau để làm vùng đệm trượt
  const clonedEvents = [
    ...originalEvents.slice(-slidesToShow),
    ...originalEvents,
    ...originalEvents.slice(0, slidesToShow)
  ];

  // Chỉ mục xuất phát thực tế nằm sau vùng đệm đầu tiên
  const [currentIndex, setCurrentIndex] = useState(slidesToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    // Khi chạm tới giới hạn vùng đệm, trả index về vị trí gốc NGẦM (tắt transition để không bị giật)
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalOriginal);
    } else if (currentIndex >= totalOriginal + slidesToShow) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalOriginal);
    }
  };

  // Bật lại transition sau khi dịch chuyển ngầm vị trí thành công
  useEffect(() => {
    if (!isTransitioning) {
      // Dùng requestAnimationFrame hoặc setTimeout siêu ngắn để trình duyệt không bắt kịp thao tác tắt hiệu ứng
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Tính số counter hiển thị chuẩn xác (1 / N) cho dù danh sách có bao nhiêu ảnh
  const getDisplayCounter = () => {
    let rawPos = currentIndex - slidesToShow;
    if (rawPos < 0) rawPos = totalOriginal - 1;
    if (rawPos >= totalOriginal) rawPos = 0;
    return rawPos + 1;
  };

  return (
    <section id="upcoming-section" className="upcoming-container">
      
      {/* KHỐI TIÊU ĐỀ BÊN TRÁI */}
      <div className="upcoming-info">
        <h2 className="upcoming-title">{upcomingData.title}</h2>
        <div className="title-underline"></div>
        <p className="upcoming-desc">{upcomingData.description}</p>
        
        <div className="timetable-wrapper">
          <a href={upcomingData.timetablePath} className="timetable-link">
            {upcomingData.timetableText}
          </a>
        </div>

        <div className="slider-navigation">
          <button className="arrow-btn" onClick={handlePrev}>‹</button>
          <span className="slider-counter">
            {getDisplayCounter()} / {totalOriginal}
          </span>
          <button className="arrow-btn" onClick={handleNext}>›</button>
        </div>
      </div>

      {/* KHỐI SLIDER BÊN PHẢI (CHỨA ĐÚNG 3 ẢNH) */}
      <div className="upcoming-slider-wrapper">
        <div 
          ref={sliderRef}
          className="upcoming-stage"
          onTransitionEnd={handleTransitionEnd}
          style={{
            // Dịch chuyển chuẩn theo tỷ lệ % của khung chứa + khoảng cách gap giữa các card
            transform: `translateX(calc(-${currentIndex} * (100% / ${slidesToShow})))`,
            transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
          }}
        >
          {clonedEvents.map((event, index) => {
            // Xác định xem ảnh này có nằm trong vùng đang hiển thị trên màn hình hay không
            const isVisible = index >= currentIndex && index < currentIndex + slidesToShow;

            return (
              <div 
                key={`${event.id}-clone-${index}`} 
                className="event-card"
                style={{
                  // Chia đều độ rộng dựa vào biến slidesToShow (Bằng 3 thì chiếm 1/3, bằng 4 chiếm 1/4)
                  flex: `0 0 calc(100% / ${slidesToShow})`,
                  // Ảnh nào đi qua hoặc chưa tới thì ẨN HẲN (opacity = 0), ảnh nào nằm trong khung thì HIỆN RÕ (opacity = 1)
                  opacity: isVisible ? 1 : 0,
                  visibility: isVisible ? 'visible' : 'hidden',
                  transition: 'opacity 0.4s ease, visibility 0.4s ease'
                }}
              >
                <div className="card-image-box">
                  <img src={event.image} alt={event.title} className="card-image" />
                  <div className="card-overlay"></div>
                </div>
                
                <div className="card-content">
                  <div className="card-meta">
                    <span className="card-date">{event.date}</span>
                    <span className="meta-separator">/</span>
                    <span className="card-views">{event.views}</span>
                  </div>
                  <h3 className="card-title">
                    <a href={event.path} className="card-title-link">{event.title}</a>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}