// File: src/data.js


// 2. Mảng chứa danh sách ảnh Slide (Bây giờ xài ảnh offline siêu nhẹ)
// export const listImages = [slide1, slide2, slide3];

// 3. Mảng dữ liệu mẫu của anh
export const mockData = [
  {
    id: 1,
    name: "Sinh nhật người lớn",
    category: "sinh nhat",
    isVisible: true,
  },
  {
    id: 2,
    name: "Sinh nhật bé gái tone hồng gắn nơ",
    category: "sinh nhat",
    isVisible: true,
  },
  {
    id: 3,
    name: "Sinh nhật bé trai chủ đề capybara",
    category: "sinh nhat",
    isVisible: true,
  },
  {
    id: 4,
    name: "Cổng cưới hoa hồng luxury",
    category: "cuoi hoi",
    isVisible: false,
  }, // Đã ẩn đi bằng thuộc tính isVisible: false
  {
    id: 5,
    name: "Phông gia tiên ăn hỏi truyền thống",
    category: "gia tien",
    isVisible: true,
  },
  {
    id: 6,
    name: "Background sự kiện cuối năm công ty",
    category: "event",
    isVisible: true,
  },
  // Sau này anh muốn thêm mẫu mới, cứ việc xuống hàng ném vào đây, tự tăng ID lên:
  // { id: 7, name: "Mẫu thiết kế mới của anh Dustin", category: "event", isVisible: true },
];

// 4. Thêm logo đối tác
export const initialPartners = [
  {
    id: 1,
    name: "Đơn vị đối tác A",
    img: "/src/assets/images/logo-partner-1.png",
  },
  {
    id: 2,
    name: "Đơn vị đối tác B",
    img: "/src/assets/images/logo-partner-2.png",
  },
  {
    id: 3,
    name: "Đơn vị đối tác C",
    img: "/src/assets/images/logo-partner-3.png",
  },
  {
    id: 4,
    name: "Đơn vị đối tác D",
    img: "/src/assets/images/logo-partner-4.png",
  },
];

// đây là dữ liệu của Header
export const headerData = {
  logoText: "PHUCS DESIGN",
  menuItems: [
    { id: "home", label: "Home", path: "/" },
    { 
      id: "event", 
      label: "Event", 
      path: "/event",
      isDropdown: true, 
      children: [
        { id: "upcoming", label: "Upcoming Events", path: "/events/upcoming" },
        { id: "recent", label: "Recent Events", path: "/events/recent" },
        { id: "all", label: "All Events", path: "/events/all" }
      ]
    },
    { 
      id: "design", 
      label: "Design", 
      path: "/design",
      isDropdown: true, 
      children: [
        { id: "upcoming", label: "Upcoming Events", path: "/events/upcoming" },
        { id: "recent", label: "Recent Events", path: "/events/recent" },
        { id: "all", label: "All Events", path: "/events/all" }
      ]
    },
    { 
      id: "taxi", 
      label: "Taxi", 
      path: "/taxi",
      isDropdown: true, 
      children: [
        { id: "upcoming", label: "Upcoming Events", path: "/events/upcoming" },
        { id: "recent", label: "Recent Events", path: "/events/recent" },
        { id: "all", label: "All Events", path: "/events/all" }
      ]
    },
    // { id: "design", label: "Design", path: "/design" },
    // { id: "taxi", label: "Taxi", path: "/taxi" },
    { id: "contact", label: "Contact", path: "/contact" },
    { id: "gift", label: "Gift", path: "/lucky-spin-party" }
  ]
};
//đây là dữ liệu của Background Home Page
import img1 from './assets/images/event1.jpg';
import img2 from './assets/images/event2.jpg';
import img3 from './assets/images/event3.jpg';
import img4 from './assets/images/event1.jpg';
import img5 from './assets/images/event2.jpg';
import img6 from './assets/images/event3.jpg';

export const upcomingData = {
  title: "UPCOMING STAGES 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  timetableText: "View Full Timetable",
  timetablePath: "#",
  events: [
    { id: 1, date: "OCT 16, 2025", views: "15K VIEWS", title: "Stage Performance One", image: "https://picsum.photos/400/500?random=1", path: "#" },
    { id: 2, date: "NOV 12, 2025", views: "22K VIEWS", title: "Stage Performance Two", image: "https://picsum.photos/400/500?random=2", path: "#" },
    { id: 3, date: "DEC 05, 2025", views: "18K VIEWS", title: "Stage Performance Three", image: "https://picsum.photos/400/500?random=3", path: "#" },
    { id: 4, date: "JAN 20, 2026", views: "30K VIEWS", title: "Stage Performance Four", image: "https://picsum.photos/400/500?random=4", path: "#" },
    { id: 5, date: "FEB 14, 2026", views: "12K VIEWS", title: "Stage Performance Five", image: "https://picsum.photos/400/500?random=5", path: "#" },
    { id: 6, date: "MAR 08, 2026", views: "25K VIEWS", title: "Stage Performance Six", image: "https://picsum.photos/400/500?random=6", path: "#" }
  ]
};
