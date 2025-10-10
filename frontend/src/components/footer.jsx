import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo3.png";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const services = [
    "Website Development",
    "Software Development",
    "Digital Marketing",
    "Google & Meta Ads",
    "SEO Services",
    "Video Editing",
    "Website Maintenance",
    "Analytics & Reporting",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="w-fit flex items-start justify-start mb-4 p-2 bg-white rounded">
              <img src={Logo} alt="Raza Softwares Logo" className="h-14" />
            </div>
            <p className="text-sm mb-4">
              Leading software development and digital marketing agency in
              India, delivering innovative solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/razasoftwares/"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li
                onClick={() => navigate("/")}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                Home
              </li>
              <li
                onClick={() => navigate("/about")}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                About
              </li>
              <li
                onClick={() => navigate("/services")}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                Services
              </li>
              <li
                onClick={() => navigate("/blog")}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                Blog
              </li>
              <li
                onClick={() => navigate("/contact")}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                Contact
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-sm hover:text-blue-500 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@razasoftwares.in"
                  className="text-sm hover:text-blue-500 transition-colors"
                >
                  contact@razasoftwares.in
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+916201617895"
                  className="text-sm hover:text-blue-500 transition-colors"
                >
                  +91 6201617895
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Serving clients across India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Raza Softwares. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
