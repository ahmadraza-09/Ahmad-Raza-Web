import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo3.png";
import Menu from "../assets/icons/menu.png";
import FormModal from "./form-modal";
import { X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path ? "bg-[#0075FF] text-white rounded-md" : "";

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="w-full h-fit">
      {showForm && <FormModal onClose={() => setShowForm(false)} />}

      {/* Navbar */}
      <nav
        className={`w-[90%] h-[60px] bg-white/45 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
          backdrop-blur-[10.5px] border border-white/20 mx-auto mt-[10px] rounded-[55px] 
          px-[20px] flex items-center justify-between transition-all duration-500 ease-in-out
          ${
            isSticky
              ? "fixed top-0 left-1/2 -translate-x-1/2 bg-white z-[98]"
              : "relative"
          }`}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={Logo}
            alt="Logo"
            className="sm:w-[150px] w-[100px] sm:h-[150px] h-[100px]"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="flex items-center justify-center gap-2 text-black max-md:hidden">
          <li
            className={`cursor-pointer font-medium px-[5px] ${isActive("/")}`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer font-medium px-[5px] ${isActive(
              "/about"
            )}`}
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className={`cursor-pointer font-medium px-[5px] ${isActive(
              "/services"
            )}`}
            onClick={() => navigate("/services")}
          >
            Services
          </li>
          <li
            className={`cursor-pointer font-medium px-[5px] ${isActive(
              "/portfolio"
            )}`}
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
          </li>
          <li
            className={`cursor-pointer font-medium px-[5px] ${isActive(
              "/contact"
            )}`}
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="rounded-[32px] bg-[#0075FF] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            backdrop-blur-lg border border-white/20 cursor-pointer text-white border-0 outline-0
            px-4 py-1 font-semibold text-[16px] uppercase transition duration-300 hover:bg-[#005bbb]
            max-md:hidden"
          >
            Book Service
          </button>

          {/* Mobile Menu Icon */}
          <div
            className="hidden max-md:flex ml-3 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-[30px]" />
            ) : (
              <img src={Menu} alt="Menu" className="w-[35px]" />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[99] flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-black/60"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="w-72 bg-white h-full shadow-2xl flex flex-col animate-slideIn">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h1 className="text-lg font-semibold text-gray-800">Menu</h1>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-red-500 text-2xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium flex-1">
              <li
                onClick={() => handleNavigate("/")}
                className="cursor-pointer hover:text-blue-600"
              >
                Home
              </li>
              <li
                onClick={() => handleNavigate("/about")}
                className="cursor-pointer hover:text-blue-600"
              >
                About
              </li>
              <li
                onClick={() => handleNavigate("/services")}
                className="cursor-pointer hover:text-blue-600"
              >
                Services
              </li>
              <li
                onClick={() => handleNavigate("/portfolio")}
                className="cursor-pointer hover:text-blue-600"
              >
                Portfolio
              </li>
              <li
                onClick={() => handleNavigate("/contact")}
                className="cursor-pointer hover:text-blue-600"
              >
                Contact
              </li>
            </ul>

            {/* CTA */}
            <div className="px-6 pb-6">
              <button
                onClick={() => handleNavigate("/contact")}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Book Service
              </button>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-6 py-4 border-t">
              <a
                href="tel:+919297829642"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
              <a
                href="mailto:contact@razawebs.com"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
