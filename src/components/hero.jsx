import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../css/hero.css";
import HeroGif from "../assets/illustrations/hero.gif";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={HeroGif} alt="" />
      <div className="hero-content">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
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
          style={{
            fontSize: "2em",
            display: "inline-block",
            fontWeight: "700",
          }}
          repeat={Infinity}
        />
        <br />
        <p>
          Raza Webs is a comprehensive web solutions agency. Our skilled team of
          web developers, creative designers, UX/UI experts, and digital
          strategists excel in creating tailored websites, dynamic web
          applications, and engaging user experiences. Whether it's a
          custom-built website, a feature-rich WordPress site, or innovative app
          development, we ensure seamless functionality and outstanding design.
        </p>
        <br />
        <p>
          We also specialize in social media management, running impactful
          Google Ads campaigns, and crafting strategies that drive results. At
          Raza Webs, our focus is to provide cutting-edge solutions that align
          with your business objectives and help you grow effectively in the
          digital space.
        </p>
        <br />
        <button>Hire Us</button>
      </div>
    </section>
  );
};

export default Hero;
