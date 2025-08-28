import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroGif from "../assets/illustrations/hero.gif";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#5184FF] flex items-center justify-between px-5 py-5 mt-5 max-md:flex-col max-md:px-3 max-md:py-10">
      {/* Image Section */}
      <img
        src={HeroGif}
        alt="Hero Illustration"
        className="w-1/2 max-md:w-full"
      />

      {/* Content Section */}
      <div className="w-1/2 h-full flex flex-col items-start justify-center text-white max-md:w-full">
        <TypeAnimation
          sequence={[
            "WEB DEVELOPMENT",
            2000,
            "WEB DESINING",
            2000,
            "WORDPRESS WEBSITE",
            2000,
            "WEB APPLICATION",
            2000,
            "APP DEVELOPMENT",
            2000,
            "UI & UX DESINING",
            2000,
            "SOCIAL MEDIA MANAGEMENT",
            2000,
            "GOOGLE ADS RUN",
            2000,
          ]}
          wrapper="span"
          speed={10}
          className="text-[1.8em] font-bold drop-shadow-md"
          repeat={Infinity}
        />
        <br />
        <p className="max-md:text-xs">
          Raza Softwares is a comprehensive web solutions agency. Our skilled
          team of web developers, creative designers, UX/UI experts, and digital
          strategists excel in creating tailored websites, dynamic web
          applications, and engaging user experiences. Whether it's a
          custom-built website, a feature-rich WordPress site, or innovative app
          development, we ensure seamless functionality and outstanding design.
        </p>
        <br />
        <p className="max-md:text-xs">
          We also specialize in social media management, running impactful
          Google Ads campaigns, and crafting strategies that drive results. At
          Raza Softwares, our focus is to provide cutting-edge solutions that
          align with your business objectives and help you grow effectively in
          the digital space.
        </p>
        <br />
        <button
          className="uppercase bg-white text-[#5184FF] shadow-[0_8px_32px_rgba(31,38,135,0.37)] 
          backdrop-blur-md border border-white rounded-[55px] px-5 py-2 
          font-semibold text-lg cursor-pointer transition-all duration-300 
          hover:bg-white hover:text-[#5184FF]"
          onClick={() => navigate("/contact")}
        >
          Hire Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
