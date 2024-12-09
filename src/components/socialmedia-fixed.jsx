// SocialMediaFixed.js
import React from "react";
import "../css/socialmedia-fixed.css";
import Call from "../assets/icons/phone-call.png";
import Whatsapp from "../assets/icons/whatsapp.png";


const SocialMediaFixed = () => {
  return (
    <>
      {/* Left side icons */}
      <div className="social-media-fixed-section-left">
        <div className="social-media-icons">
          
          <a href="tel:+919958866101" target="_blank" rel="noopener noreferrer">
            <img src={Call} alt="Call" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919958866101&text=Hello!%20I%20have%20a%20query%20regarding%20Corbett%20Aroma%20Park."
            target="_blank"
          >
            <img src={Whatsapp} alt="Call" />
          </a>
        </div>
      </div>

      {/* Right side icons */}
      {/* <div className="social-media-fixed-section-right">
        <div className="social-media-icons">
          <a href="tel:+918743000120" target="_blank" rel="noopener noreferrer">
            <img src={Call} alt="Call" />
          </a>
          <a
            href="https://www.google.com/maps/place/Hotel+Aroma+by+Royal+Collection+Hotels/@29.391339,79.449716,13z/data=!4m10!3m9!1s0x39a0a1eadffc5b9f:0x647683880e88f0a9!5m3!1s2024-10-02!4m1!1i2!8m2!3d29.3913389!4d79.449716!16s%2Fg%2F1tfq7n1h?hl=en&entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Map} alt="Map" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=918743000120&text=Hello!%20I%20have%20a%20query%20regarding%20Hotel%20Aroma%20Nainital."
            target="_blank"
          >
            <img src={Whatsapp} alt="Call" />
          </a>
        </div>
      </div> */}
    </>
  );
};

export default SocialMediaFixed;
