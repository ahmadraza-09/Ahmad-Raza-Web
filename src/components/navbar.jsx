import React, { useState } from "react";
import "../css/navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [navbarsection, setNavbarSection] = useState(false);

  const navbarFixed = () => {
    if (window.scrollY >= 100) {
      setNavbarSection(true);
    } else {
      setNavbarSection(false);
    }
  };

  window.addEventListener("scroll", navbarFixed);

  return (
    <nav
      className={navbarsection ? "navbar-section activated" : "navbar-section"}
    >
      <div className="logo-section">
        {/* <h1>&lt;/&gt;</h1> */}
        <img src={Logo} alt="" />
        <h1>Raza Webs</h1>
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
      </div>
    </nav>
  );
};

export default Navbar;
