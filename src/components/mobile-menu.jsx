import React from "react";
import "../css/mobile-menu.css";
import Logo from "../assets/logo1.png";

const MobileMenu = () => {
  return (
    <div className="mobile-menu-section">
      <div className="mobile-menu-header">
        <img src={Logo} alt="" />
        <h1>Raza Webs</h1>
      </div>
      <div className="mobile-menu-menus">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <button>Book Service</button>
      </div>
      <div className="mobile-menu-footer">
        <div className="mobile-menu-footer-socialmedia">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-square-x-twitter"></i>
        </div>
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
