import React from "react";
import "../css/footer.css";

const Footer = () => {
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
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
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
