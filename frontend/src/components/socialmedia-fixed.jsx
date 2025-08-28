// SocialMediaFixed.js
import React from "react";
import Call from "../assets/icons/phone-call.png";
import Whatsapp from "../assets/icons/whatsapp.png";

const SocialMediaFixed = () => {
  return (
    <>
      {/* Left Side Floating Social Media */}
      <div className="fixed bottom-10 left-5 z-50 flex flex-col gap-3">
        <a
          href="tel:+919297829642"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
        >
          <img src={Call} alt="Call" className="w-10 h-10" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919297829642&text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20web%20development%20services.%20Can%20you%20please%20share%20more%20details%3F"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
        >
          <img src={Whatsapp} alt="WhatsApp" className="w-10 h-10" />
        </a>
      </div>

      {/* Right Side (Optional - Uncomment to use) */}
      {/* 
      <div className="fixed top-1/3 right-4 z-50 flex flex-col gap-3">
        <a
          href="tel:+918743000120"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-100 transition-all duration-300"
        >
          <img src={Call} alt="Call" className="w-6 h-6" />
        </a>
        <a
          href="https://www.google.com/maps/place/Hotel+Aroma..."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-100 transition-all duration-300"
        >
          <img src={Map} alt="Map" className="w-6 h-6" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=918743000120&text=Hello!%20I%20have%20a%20query..."
          target="_blank"
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 hover:bg-green-100 transition-all duration-300"
        >
          <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6" />
        </a>
      </div>
      */}
    </>
  );
};

export default SocialMediaFixed;
