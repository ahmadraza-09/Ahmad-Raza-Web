import React from "react";
import WebsiteDesign from "../assets/icons/web-design.png";
import DigitalMarketing from "../assets/icons/digital-marketing.png";
import Ecommerce from "../assets/icons/ecommerce.png";
import WebsiteDevelopment from "../assets/icons/web-development.png";
import AppDevelopment from "../assets/icons/app-development.png";
import ContentWriting from "../assets/icons/content-copywriting.png";
import GoogleAds from "../assets/icons/google-ads.png";
import "../css/services-section.css";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h1>Our Services</h1>
      <p>
        Flexible layouts, and instant results! Choose a pre-built header or
        create a custom layout that perfectly suits your needs.
      </p>
      <br />
      <div className="services-section-container">
        <div className="services-box">
          <img src={WebsiteDesign} alt="" />
          <h3>Website Design</h3>
        </div>
        <div className="services-box">
          <img src={WebsiteDevelopment} alt="" />
          <h3>Website Development</h3>
        </div>
        <div className="services-box">
          <img src={Ecommerce} alt="" />
          <h3>E-commerce Solution</h3>
        </div>
        <div className="services-box">
          <img src={DigitalMarketing} alt="" />
          <h3>Digital Marketing</h3>
        </div>
        <div className="services-box">
          <img src={AppDevelopment} alt="" />
          <h3>App Development</h3>
        </div>
        <div className="services-box">
          <img src={ContentWriting} alt="" />
          <h3>Content Writing</h3>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
