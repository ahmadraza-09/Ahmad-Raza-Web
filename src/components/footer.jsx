import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer-section">
      <div className="footer-column">
        <h2>Raza Webs</h2>
        <ul>
          <li>
            <i class="fa-solid fa-phone"></i> +91 9297829642
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i> contact@razawebs.com
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Menu</h3>
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              navigate("/services");
            }}
          >
            Services
          </li>
          <li
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            Portfolio
          </li>
          <li
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Get Help</h3>
        <ul>
          <li>FAQ's</li>
          <li>Term & Conditions</li>
          <li>Privacy Policy</li>
          <li>Cancellation Policy</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Services</h3>
        <ul>
          <li>Web Development</li>
          <li>Web Desining</li>
          <li>Wordpress Website</li>
          <li>Web Application</li>
          <li>Mobile Application</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <div className="social-icons">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-square-x-twitter"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
