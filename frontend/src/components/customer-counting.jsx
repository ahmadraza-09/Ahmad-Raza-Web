import React from "react";
import CountUp from "react-countup";

const CustomerCounting = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {/* Websites Developed */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl font-bold">
            <CountUp start={0} end={10} duration={5} />+
          </h2>
          <h4 className="mt-2 text-lg font-medium text-white/90">
            Websites <br /> Developed
          </h4>
        </div>

        {/* Happy Clients */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl font-bold">
            <CountUp start={0} end={5} duration={5} />+
          </h2>
          <h4 className="mt-2 text-lg font-medium text-white/90">
            Happy <br /> Clients
          </h4>
        </div>

        {/* Satisfied Clients */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl font-bold">
            <CountUp start={0} end={100} duration={5} />%
          </h2>
          <h4 className="mt-2 text-lg font-medium text-white/90">
            Satisfied <br /> Clients
          </h4>
        </div>
      </div>
    </section>
  );
};

export default CustomerCounting;
