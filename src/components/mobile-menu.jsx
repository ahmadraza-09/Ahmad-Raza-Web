import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/mobile-menu.css";
import HomeIcon from "../assets/icons/home.png";
import AboutIcon from "../assets/icons/information-button.png";
import ServicesIcon from "../assets/icons/repair-tool.png";
import PortfolioIcon from "../assets/icons/portfolio.png";
import ContactIcon from "../assets/icons/chat.png";

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="mobile-menu-section">
      <div className="mobile-menu-menus">
        <ul>
          <li>
            <img src={HomeIcon} alt="" />
            Home
          </li>
          <li>
            <img src={AboutIcon} alt="" />
            About
          </li>
          <li>
            <img src={ServicesIcon} alt="" />
            Services
          </li>
          <li>
            <img src={PortfolioIcon} alt="" />
            Portfolio
          </li>
          <li>
            <img src={ContactIcon} alt="" />
            Contact
          </li>
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
        <div className="mobile-menu-footer-socialmedia">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-x-twitter"></i>
        </div>
        <div className="mobile-menu-footer-contact">
          <a href="tel:+919297829642">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:contact@razawebs.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
