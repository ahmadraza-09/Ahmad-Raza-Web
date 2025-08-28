import React from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import Instagram from "../assets/icons/instagram.png";
import LinkedIn from "../assets/icons/linkedin-img.png";
import Facebook from "../assets/icons/facebook.png";
import Twitter from "../assets/icons/twitter-img.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full h-fit bg-white flex sm:flex-row flex-col items-start justify-between text-black border-blue-800 border-t-2 sm:p-10 p-5 gap-8">
      {/* Column 1 */}
      <div className="flex flex-col items-start gap-5 sm:w-[20%] w-full">
        <h2 className="font-bold uppercase text-xl">Raza Softwares</h2>
        <ul className="flex flex-col gap-2 items-start">
          <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform">
            <Phone size={20} /> +91 9297829642
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform">
            <Mail size={20} /> contact@razawebs.com
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-start gap-5 sm:w-[20%] w-full">
        <h3 className="uppercase font-semibold">Menu</h3>
        <ul className="flex flex-col gap-2 items-start">
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold"
          >
            About
          </li>
          <li
            onClick={() => navigate("/services")}
            className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold"
          >
            Services
          </li>
          <li
            onClick={() => navigate("/portfolio")}
            className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold"
          >
            Portfolio
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold"
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-start gap-5 sm:w-[20%] w-full">
        <h3 className="uppercase font-semibold">Get Help</h3>
        <ul className="flex flex-col gap-2 items-start">
          <li className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold">
            FAQ's
          </li>
          <li className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold">
            Term & Conditions
          </li>
          <li className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold">
            Privacy Policy
          </li>
          <li className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold">
            Cancellation Policy
          </li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col items-start gap-5 sm:w-[20%] w-full">
        <h3 className="uppercase font-semibold">Services</h3>
        <ul className="flex flex-col gap-2 items-start">
          <li className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold">
            Web Development
          </li>
          <li className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold">
            Web Designing
          </li>
          <li className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold">
            Wordpress Website
          </li>
          <li className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold">
            Web Application
          </li>
          <li className="cursor-pointer hover:translate-x-2 transition-transform hover:text-blue-800 hover:font-bold">
            Mobile Application
          </li>
        </ul>
      </div>

      {/* Column 5 */}
      <div className="flex flex-col items-start gap-5 sm:w-[20%] w-full">
        <h3 className="uppercase font-semibold">Contact</h3>
        <div className="flex items-center gap-5 text-2xl">
          <a href="#">
            <img
              src={Instagram}
              alt="Instagram"
              className="w-8 hover:scale-125 transition-transform cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src={Facebook}
              alt="Facebook"
              className="w-8 hover:scale-125 transition-transform cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="w-8 hover:scale-125 transition-transform cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src={Twitter}
              alt="Twitter"
              className="w-8 hover:scale-125 transition-transform cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
