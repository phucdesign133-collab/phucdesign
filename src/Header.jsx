import React, { useState } from 'react';
import './Header.css';
import { headerData } from './data.js';
import Logo from './images/logo/v3.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="main-header" className="site-header">
      
      {/* Khối Logo */}
      <div id="header-logo-container" className="logo-box">
        <a href="/" id="logo-link" className="logo-anchor">
          <img src={Logo} alt={headerData.logoText} id="header-logo-img" className="logo-image" />
        </a>
      </div>

      {/* Nút Hamburger cho Mobile */}
      <button 
        id="mobile-hamburger-btn" 
        className={`hamburger-bar ${menuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* Khối Menu Điều Hướng */}
      <nav id="header-navigation" className={`nav-menu ${menuOpen ? 'mobile-open' : ''}`}>
        {headerData.menuItems.map((item) => {
          
          if (item.isDropdown) {
            return (
              <div key={item.id} id={`dropdown-${item.id}`} className="dropdown-container">
                <a href={item.path} className="menu-link dropdown-toggle">
                  {item.label}
                </a>
                
                <div className="dropdown-menu">
                  {/* Thêm index để lấy số đếm tự động tăng dần bắt đầu từ 1 */}
                  {item.children.map((subItem, index) => (
                    <a 
                      key={subItem.id} 
                      href={subItem.path} 
                      id={`sub-item-${subItem.id}`} 
                      className="dropdown-item"
                    >
                      {index + 1}. {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          }
          
          return (
            <a 
              key={item.id} 
              href={item.path} 
              id={`nav-item-${item.id}`} 
              className="menu-link"
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}