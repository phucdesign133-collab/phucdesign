// File: src/Carousel.jsx
import React, { useState } from 'react';
import { listImages } from './data'; // File này tự động vào data.js lấy ảnh, không phiền đến App.jsx nữa

function Carousel() {
  // Toàn bộ các const logic xử lý Slide được dồn hết về đây!
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === listImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? listImages.length - 1 : prev - 1));
  };

  return (
    <div className="carousel slide position-relative w-100 p-0 m-0">
      <div className="carousel-inner w-100">
        
        {/* VÙNG HIỂN THỊ ẢNH SLIDE */}
        <div className="carousel-item active">
          <img 
            src={listImages[currentSlide]} 
            className="d-block w-100" 
            alt={`Slide ${currentSlide + 1}`} 
            style={{ maxHeight: '600px', objectFit: 'cover' }}
          />
        </div>

        {/* NÚT BẤM PREV (QUAY LẠI) */}
        <button className="carousel-control-prev" type="button" onClick={handlePrev} style={{ background: 'none', border: 'none' }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>

        {/* NÚT BẤM NEXT (KẾ TIẾP) */}
        <button className="carousel-control-next" type="button" onClick={handleNext} style={{ background: 'none', border: 'none' }}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>

      </div>
    </div>
  );
}

export default Carousel;