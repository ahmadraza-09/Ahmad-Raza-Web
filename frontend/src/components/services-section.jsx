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
    <section className="flex flex-col items-center justify-center py-10 px-5 bg-[#f9f8f5]">
      <h1 className="uppercase sm:text-3xl font-bold text-2xl">Our Services</h1>
      <p className="max-w-[600px] text-center sm:text-sm text-xs">
        Flexible layouts, and instant results! Choose a pre-built header or
        create a custom layout that perfectly suits your needs.
      </p>
      <br />
      <div className="flex items-center justify-center flex-wrap gap-5 max-w-[800px]">
        <div className="w-[240px] flex items-center justify-center bg-[#FAEBD7] p-[10px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg gap-[10px] rounded-lg">
          <img src={WebsiteDesign} alt="" />
          <h3>Website Design</h3>
        </div>
        <div className="w-[240px] flex items-center justify-center bg-[#FAEBD7] p-[10px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg gap-[10px] rounded-lg">
          <img src={WebsiteDevelopment} alt="" />
          <h3>Website Development</h3>
        </div>
        <div className="w-[240px] flex items-center justify-center bg-[#FAEBD7] p-[10px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg gap-[10px] rounded-lg">
          <img src={Ecommerce} alt="" />
          <h3>E-commerce Solution</h3>
        </div>
        <div className="w-[240px] flex items-center justify-center bg-[#FAEBD7] p-[10px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg gap-[10px] rounded-lg">
          <img src={DigitalMarketing} alt="" />
          <h3>Digital Marketing</h3>
        </div>
        <div className="w-[240px] flex items-center justify-center bg-[#FAEBD7] p-[10px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg gap-[10px] rounded-lg">
          <img src={AppDevelopment} alt="" />
          <h3>App Development</h3>
        </div>
        <div className="w-[240px] flex items-center justify-center bg-[#FAEBD7] p-[10px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg gap-[10px] rounded-lg">
          <img src={ContentWriting} alt="" />
          <h3>Content Writing</h3>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
