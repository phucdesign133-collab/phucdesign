import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import đầy đủ bộ 3 điều hướng
import "./index.css";
import App from "./App.jsx";
import LuckySpinParty from "./components/LuckySpinParty.jsx";
import Event from "./components/Event.jsx";
import Design from "./components/Design.jsx";
import Taxi from "./components/Taxi.jsx";
import TimeTable from './components/TimeTable.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 1. Trang chủ chính (File App.jsx hiện tại của anh) */}
        <Route path="/" element={<App />} />
        {/* 2. Trang vòng quay Lucky Spin phong cách Party */}
        <Route path="/lucky-spin-party" element={<LuckySpinParty />} />
        {/* 3. Trang Sự kiện */}
        <Route path="/event" element={<Event />} />
        {/* 3. Trang Thiết kế */}
        <Route path="/design" element={<Design />} />
        {/* 3. Trang Taxi */}
        <Route path="/taxi" element={<Taxi />} />
        {/* 4. Trang Time Table */}
        <Route path="/timetable" element={<TimeTable />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
