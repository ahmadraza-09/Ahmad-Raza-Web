import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/navbar.css";
import Logo from "../assets/logo.png";
import MobileMenu from "./mobile-menu";
import Menu from "../assets/icons/menu.png";
import FormModal from "./form-modal";

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

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <header>
      {showForm && <FormModal onClose={handleCloseForm} />}
      <nav
        className={
          navbarsection ? "navbar-section activated" : "navbar-section"
        }
      >
        {/* Mobile Menu (conditionally rendered) */}
        {isOpen && <MobileMenu />}

        <div
          className="logo-section"
          onClick={() => {
            navigate("/");
          }}
        >
          {/* <h1>&lt;/&gt;</h1> */}
          <img src={Logo} alt="" />
          <h1>Raza Webs</h1>
        </div>
        <ul className="menu-section">
          <li
            className={isActive("/")}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className={isActive("/about")}
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </li>
          <li
            className={isActive("/services")}
            onClick={() => {
              navigate("/services");
            }}
          >
            Services
          </li>
          <li
            className={isActive("/portfolio")}
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            Portfolio
          </li>
          <li
            className={isActive("/contact")}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </li>
        </ul>
        <div className="buttons-section">
          <button onClick={handleShowForm}>Book Service</button>
          <div className="menu-bars" onClick={toggleMenu}>
            {isOpen ? (
              <label htmlFor="check">
                <i className="fa-solid fa-close"></i>
              </label>
            ) : (
              <label htmlFor="check">
                <img src={Menu} alt="" />
              </label>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
