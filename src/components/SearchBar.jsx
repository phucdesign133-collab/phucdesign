import React, { useState, useEffect, useRef } from 'react';

// DANH SÁCH 30 ẢNH UNSPLASH ĐÃ PHÂN LOẠI THEO CATEGORY
const ALL_IMAGES = [
  // --- DESIGN NỔI BẬT (featured) - 10 ảnh ---
  { id: 1, category: 'featured', url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500', title: 'Mẫu decor thôi nôi phong cách Hoàng gia' },
  { id: 2, category: 'featured', url: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=500', title: 'Trang trí background thôi nôi bong bóng Basic' },
  { id: 3, category: 'featured', url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500', title: 'Sân khấu sự kiện đầy tháng rực rỡ' },
  { id: 4, category: 'featured', url: 'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?w=500', title: 'Mẫu thôi nôi tone màu pastel dịu nhẹ' },
  { id: 5, category: 'featured', url: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=500', title: 'Decor thôi nôi bé trai chủ đề phi hành gia' },
  { id: 6, category: 'featured', url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500', title: 'Trang trí đầy tháng bé gái tone hồng ngọt ngào' },
  { id: 7, category: 'featured', url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500', title: 'Background thôi nôi ngoài trời thoáng đãng' },
  { id: 8, category: 'featured', url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=500', title: 'Mẫu bong bóng nghệ thuật nổi bật sân khấu' },
  { id: 9, category: 'featured', url: 'https://images.unsplash.com/photo-1513201099495-a6697ee4743a?w=500', title: 'Mẫu trí đầy tháng phong cách tối giản mộc mạc' },
  { id: 10, category: 'featured', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500', title: 'Decor thôi nôi luxury với đèn LED neon' },

  // --- TIỆC SINH NHẬT (birthday) - 10 ảnh ---
  { id: 11, category: 'birthday', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500', title: 'Sinh nhật Công Chúa tone hồng gắn nơ cho bé gái' },
  { id: 12, category: 'birthday', url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500', title: 'Tiệc sinh nhật ngoài trời chủ đề Rừng Xanh' },
  { id: 13, category: 'birthday', url: 'https://images.unsplash.com/photo-1530349290561-a518075f7523?w=500', title: 'Sinh nhật người lớn tone đỏ luxury ấm cúng' },
  { id: 14, category: 'birthday', url: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=500', title: 'Sinh nhật bé trai chủ đề capybara tinh nghịch' },
  { id: 15, category: 'birthday', url: 'https://images.unsplash.com/photo-1558636508-e0dbd177155e?w=500', title: 'Sinh nhật bé trai tone xanh đơn giản' },
  { id: 16, category: 'birthday', url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500', title: 'Tiệc sinh nhật câu lạc bộ sôi động' },
  { id: 17, category: 'birthday', url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500', title: 'Trang trí sinh nhật bất ngờ tại nhà hàng' },
  { id: 18, category: 'birthday', url: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500', title: 'Mẫu sinh nhật thôi nôi kết hợp bánh kem 3 tầng' },
  { id: 19, category: 'birthday', url: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?w=500', title: 'Sinh nhật phong cách Hàn Quốc nhẹ nhàng' },
  { id: 20, category: 'birthday', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500', title: 'Không gian tiệc sinh nhật lung linh ánh nến' },

  // --- DỰ ÁN THIẾT KẾ (project) - 10 ảnh ---
  { id: 21, category: 'project', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500', title: 'Dự án thiết kế sảnh tiệc cưới cao cấp Grand Ballroom' },
  { id: 22, category: 'project', url: 'https://images.unsplash.com/photo-1507504038482-7621c51871fe?w=500', title: 'Thiết kế trọn gói khu vui chơi liên hoàn trẻ em' },
  { id: 23, category: 'project', url: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500', title: 'Dự án decor sân khấu 3D độc quyền doanh nghiệp' },
  { id: 24, category: 'project', url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500', title: 'Thiết kế tiệc cưới bãi biển lãng mạn' },
  { id: 25, category: 'project', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500', title: 'Dự án gala dinner ngoài trời cho 500 khách' },
  { id: 26, category: 'project', url: 'https://images.unsplash.com/photo-1486591978090-58e619d37fe7?w=500', title: 'Thiết kế booth sự kiện triển lãm hoành tráng' },
  { id: 27, category: 'project', url: 'https://images.unsplash.com/photo-1505232458627-410f7dd1438a?w=500', title: 'Decor sảnh đón khách check-in sang trọng' },
  { id: 28, category: 'project', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500', title: 'Thiết kế lễ đường đám cưới hoa tươi phủ kín' },
  { id: 29, category: 'project', url: 'https://images.unsplash.com/photo-1531058020387-3be344559be6?w=500', title: 'Dự án hội nghị khách hàng cao cấp' },
  { id: 30, category: 'project', url: 'https://images.unsplash.com/photo-1472653423608-899152e9cb95?w=500', title: 'Thiết kế backdrop sự kiện tất niên công ty' },
];

const SUGGESTED_KEYWORDS = [
  'Sinh nhật', 'Sinh nhật người lớn', 'Thôi nôi phong cách Hoàng gia', 'Thôi nôi bé trai', 'Thôi nôi bé gái', 'Tiệc cưới cao cấp', 'Sự kiện ngoài trời'
];

const HASHTAGS_BY_CATEGORY = {
  featured: ['#thoinoi', '#daythang', '#hoanggia', '#luxury'],
  birthday: ['#sinhnhat', '#ngoaitroi', '#congchua', '#capybara'],
  project: ['#sanhtieccuoi', '#galadinner', '#trienlam', '#hoatuoi']
};

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState('featured');
  const [searchInput, setSearchInput] = useState(''); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // 1. KHỞI TẠO BAN ĐẦU LÀ CỐ ĐỊNH 4 ẢNH
  const [visibleCount, setVisibleCount] = useState(4); 
  
  const dropdownRef = useRef(null);
  const isMobile = windowWidth < 768; 

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 2. ÉP HỆ THỐNG LUÔN ĐẶT LẠI VỀ 4 ẢNH KHI ĐỔI TAB HOẶC TÌM KIẾM
  useEffect(() => {
    setVisibleCount(4);
  }, [activeTab, searchQuery]);

  const triggerSearch = (value) => {
    setSearchQuery(value);
    setSearchInput(value);
    setShowSuggestions(false);
  };

  const handleHashtagClick = (tag) => {
    const cleanTag = tag.replace('#', '');
    triggerSearch(cleanTag);
  };

  // 3. MỖI LẦN BẤM "XEM THÊM" SẼ CỘNG DỒN ĐÚNG 4 ẢNH
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const filteredKeywords = SUGGESTED_KEYWORDS.filter(keyword => {
    return searchInput.trim() !== '' && keyword.toLowerCase().includes(searchInput.toLowerCase());
  });

  const filteredImages = ALL_IMAGES.filter(img => {
    const matchTab = img.category === activeTab;
    const matchText = img.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchText;
  });

  // 4. CẮT MẢNG THEO GIÁ TRỊ BIẾN VISIBLECOUNT (BẮT ĐẦU TỪ 0)
  const imagesToDisplay = filteredImages.slice(0, visibleCount);

  return (
    <div style={styles.container}>
      
      {/* Ô SEARCH CHÍNH */}
      <div style={styles.searchWrapper} ref={dropdownRef}>
        <div style={styles.searchRow}>
          <input 
            type="text" 
            placeholder="🔍 Nhập từ khóa tìm kiếm..." 
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setShowSuggestions(true);
              if (e.target.value === '') setSearchQuery('');
            }}
            onFocus={() => setShowSuggestions(true)}
            style={styles.searchInput}
          />
          {searchInput && (
            <button onClick={() => { setSearchInput(''); setSearchQuery(''); }} style={styles.clearBtn}>×</button>
          )}
          <button onClick={() => triggerSearch(searchInput)} style={styles.searchButton}>
            Tìm
          </button>
        </div>

        {showSuggestions && filteredKeywords.length > 0 && (
          <div style={styles.suggestionsDropdown}>
            {filteredKeywords.map((keyword, index) => (
              <div key={index} onClick={() => triggerSearch(keyword)} style={styles.suggestionItem}>
                {keyword}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* HASHTAG */}
      <div style={styles.hashtagContainer}>
        {HASHTAGS_BY_CATEGORY[activeTab].map((tag, index) => (
          <button key={index} onClick={() => handleHashtagClick(tag)} style={styles.hashtagBtn}>
            {tag}
          </button>
        ))}
      </div>

      {/* TABS DANH MỤC */}
      <div style={styles.tabContainer}>
        <button 
          onClick={() => { setActiveTab('featured'); setSearchInput(''); setSearchQuery(''); }} 
          style={{...styles.tabBtn, ...(activeTab === 'featured' ? styles.activeTabBtn : {})}}
        >
          Design Nổi Bật
        </button>
        <button 
          onClick={() => { setActiveTab('birthday'); setSearchInput(''); setSearchQuery(''); }} 
          style={{...styles.tabBtn, ...(activeTab === 'birthday' ? styles.activeTabBtn : {})}}
        >
          Tiệc Sinh Nhật
        </button>
        <button 
          onClick={() => { setActiveTab('project'); setSearchInput(''); setSearchQuery(''); }} 
          style={{...styles.tabBtn, ...(activeTab === 'project' ? styles.activeTabBtn : {})}}
        >
          Dự Án Thiết Kế
        </button>
      </div>

      {/* LƯỚI ẢNH CHIA ĐÔI 2 CỘT TRÊN MOBILE */}
      <div style={{
        ...styles.imageGrid,
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: isMobile ? '10px' : '20px'
      }}>
        {imagesToDisplay.map(img => (
          <div key={img.id} style={{
            ...styles.imageCard,
            height: isMobile ? '140px' : '220px'
          }}>
            <img src={img.url} alt={img.title} style={styles.imgStyle} />
            <div style={styles.imgOverlay}>
              <span style={{
                ...styles.imgTitle,
                fontSize: isMobile ? '11px' : '14px'
              }}>{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div style={{ textAlign: 'center', color: '#64748b', padding: '30px 0', fontSize: '13.5px' }}>
          Không tìm thấy mẫu nào phù hợp.
        </div>
      )}

      {visibleCount < filteredImages.length && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button onClick={handleLoadMore} style={styles.loadMoreBtn}>
            ✨ Xem thêm mẫu đẹp
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '10px 0' },
  searchWrapper: { maxWidth: '400px', margin: '0 auto 25px auto', position: 'relative' },
  searchRow: { position: 'relative', display: 'flex', alignItems: 'center' },
  // Đổi input sang viền tím nhạt đồng bộ với layout mẫu
  searchInput: { width: '100%', padding: '11px 80px 11px 16px', borderRadius: '4px', border: '1px solid #3b1c70', fontSize: '13px', outline: 'none', background: '#110426', color: '#fff', boxSizing: 'border-box' },
  clearBtn: { position: 'absolute', right: '65px', background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '16px', cursor: 'pointer' },
  searchButton: { position: 'absolute', right: '4px', top: '4px', bottom: '4px', background: 'transparent', color: '#a0aec0', border: 'none', padding: '0 14px', fontSize: '13px', cursor: 'pointer' },
  suggestionsDropdown: { position: 'absolute', top: '105%', left: 0, right: 0, background: '#1a0836', border: '1px solid #3b1c70', borderRadius: '4px', zIndex: 99, maxHeight: '200px', overflowY: 'auto' },
  suggestionItem: { padding: '10px 16px', fontSize: '13px', color: '#e2e8f0', cursor: 'pointer', borderBottom: '1px solid #2d1254', textAlign: 'left' },
  hashtagContainer: { display: 'none' }, // Ẩn bớt hashtag cho giống 100% bản mẫu tinh gọn
  tabContainer: { display: 'none' }, // Ẩn tab danh mục để ưu tiên hiển thị Archive bên trái như hình mẫu
  
  // LƯỚI ẢNH CHUẨN ĐẸP 4 ẢNH BAN ĐẦU - LOAD THÊM CỘNG 4
  imageGrid: { display: 'grid' }, 
  imageCard: { position: 'relative', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#110426' },
  imgStyle: { width: '100%', height: '100%', objectFit: 'cover' },
  imgOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,8,54,0.9) 15%, transparent)', padding: '15px 10px', display: 'flex', alignItems: 'flex-end' },
  imgTitle: { color: '#fff', fontWeight: '500', fontSize: '13px', textAlign: 'left', lineHeight: '1.4' },
  
  // NÚT CTA LOAD THÊM ẢNH ĐÚNG PHONG CÁCH
  loadMoreBtn: { background: '#6b46c1', color: '#fff', border: 'none', padding: '12px 35px', borderRadius: '4px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s' }
};