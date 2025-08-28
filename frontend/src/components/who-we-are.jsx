import React from "react";
import bg1 from "../assets/backgrounds/bg1.avif";

const WhoWeAre = () => {
  return (
    <section
      className="w-full min-h-fit flex flex-col items-center justify-center gap-10 px-5 py-16 bg-white bg-no-repeat bg-cover bg-right-top"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <h1 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
        Who We Are 💡
      </h1>
      <p className="max-w-4xl text-center text-base md:text-lg text-gray-700 leading-relaxed">
        At <span className="font-semibold text-blue-600">Raza Softwares</span>,
        we are passionate about creating websites that are more than just
        digital spaces – they are powerful tools for growth. Our mission is to
        deliver innovative, user-friendly, and visually stunning web solutions
        at competitive prices without ever compromising on quality. We believe
        in turning big dreams into reality, empowering businesses and
        individuals to thrive online. With a strong focus on excellence and
        customer satisfaction, we ensure every project reflects our commitment
        to <span className="font-semibold text-green-600">innovation</span>,
        <span className="font-semibold text-green-600"> reliability</span>, and
        <span className="font-semibold text-green-600"> success</span>. Let us
        bring your vision to life with our expertise and dedication.
      </p>
    </section>
  );
};

export default WhoWeAre;
