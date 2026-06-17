import React, { useState, useEffect, useRef } from 'react';
import './componentCarousel1.css';
import { upcomingData } from '../data.js';

export default function UpcomingEvents({ title, description, data }) {
  const originalEvents = upcomingData.events || [];
  const totalOriginal = originalEvents.length;

  // Số lượng item làm vùng đệm để tạo hiệu ứng lướt vô tận mượt mà
  const bufferItems = 3; 

  // Tạo mảng ảo nhân bản: Copy 3 item cuối nối lên đầu, và 3 item đầu nối vào cuối
  const clonedEvents = [
    ...originalEvents.slice(-bufferItems),
    ...originalEvents,
    ...originalEvents.slice(0, bufferItems)
  ];

  // Bắt đầu từ chỉ mục của phần tử gốc đầu tiên (sau khi bỏ qua vùng đệm đầu)
  const [currentIndex, setCurrentIndex] = useState(bufferItems);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    // Xử lý dịch chuyển ngầm không dùng hiệu ứng khi chạm rìa danh sách ảo
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalOriginal);
    } else if (currentIndex >= totalOriginal + bufferItems) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalOriginal);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Chờ một nhịp nhỏ để trình duyệt cập nhật lại tọa độ rồi bật lại transition
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Bộ đếm số hiển thị: Luôn trả về giá trị chuẩn xác từ 1 đến totalOriginal (Ví dụ: 1/6, 2/6...)
  const getDisplayCounter = () => {
    if (totalOriginal === 0) return 0;
    let rawPos = (currentIndex - bufferItems) % totalOriginal;
    if (rawPos < 0) rawPos += totalOriginal;
    return rawPos + 1;
  };

  return (
    <section id="upcoming-section" className="upcoming-container">
      
      {/* KHỐI NỘI DUNG & ĐIỀU HƯỚNG BÊN TRÁI */}
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

      {/* KHỐI HIỂN THỊ DANH SÁCH ẢNH TRƯỢT MỜ BÊN PHẢI */}
      <div className="upcoming-slider-wrapper">
        <div 
          ref={sliderRef}
          className="upcoming-stage"
          onTransitionEnd={handleTransitionEnd}
          style={{
            // Dịch chuyển chuẩn xác theo tỉ lệ card + gap khoảng cách
            transform: `translateX(calc(-${currentIndex} * (38% + 30px)))`,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.35, 1)' : 'none'
          }}
        >
          {clonedEvents.map((event, index) => {
            // Thuật toán gán Class hiệu ứng mờ dựa vào currentIndex
            const isActive = index === currentIndex;       // Ảnh 1 (Ảnh hiện tại)
            const isNext1 = index === currentIndex + 1;    // Ảnh 2 (Nằm kế tiếp)
            const isNext2 = index === currentIndex + 2;    // Ảnh 3 (Nằm ngoài cùng phải)
            
            let focusClass = 'blur-out'; // Mặc định các ảnh còn lại nằm ngoài vùng nhìn sẽ ẩn hẳn
            if (isActive) focusClass = 'focus-active';    // Ảnh hiện tại: Rõ nét 100%
            if (isNext1) focusClass = 'focus-next-75';    // Ảnh 2: Mờ vừa (75% opacity)
            if (isNext2) focusClass = 'focus-next-50';    // Ảnh 3: Mờ nhiều (50% opacity)

            return (
              <div 
                key={`${event.id}-card-${index}`} 
                className={`event-card ${focusClass}`}
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