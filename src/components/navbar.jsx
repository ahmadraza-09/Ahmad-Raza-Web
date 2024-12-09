import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const [navbarsection, setNavbarSection] = useState(false);

  const navbarFixed = () => {
    if (window.scrollY >= 100) {
      setNavbarSection(true);
    } else {
      setNavbarSection(false);
    }
  };

  window.addEventListener("scroll", navbarFixed);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={navbarsection ? "navbar-section activated" : "navbar-section"}
    >
      <div className="logo-section">
        {/* <h1>&lt;/&gt;</h1> */}
        <img src={Logo} alt="" />
        {/* <h1>Raza Webs</h1> */}
      </div>
      <ul className="menu-section">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="buttons-section">
        <button>Book Service</button>
        <div className="menu-bars" onClick={toggleMenu}>
          {isOpen ? (
            <label htmlFor="check">
              <i className="fa-solid fa-close"></i>
            </label>
          ) : (
            <label htmlFor="check">
              <i className="fa-solid fa-bars"></i>
            </label>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
