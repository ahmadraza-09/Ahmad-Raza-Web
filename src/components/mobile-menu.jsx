import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/mobile-menu.css";

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="mobile-menu-section">
      <div className="mobile-menu-header">
        <h1>Menu</h1>
      </div>
      <div className="mobile-menu-menus">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/services")}>Services</li>
          <li onClick={() => navigate("/portfolio")}>Portfolio</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Book Service
        </button>
      </div>
      <div className="mobile-menu-footer">
        <div className="mobile-menu-footer-contact">
          <a href="tel:+919297829642">
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:contact@razawebs.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
