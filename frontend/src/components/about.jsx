import React from "react";

const About = () => {
  return (
    <div className="about-us-page font-poppins">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Welcome to <span className="text-yellow-300">Raza Softwares</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100 leading-relaxed">
            Delivering excellence in web development and digital transformation.
            We design, develop, and deploy solutions tailored to your business
            needs.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Who We Are
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-blue-600">Raza Softwares</span>,
            we are a team of passionate developers, designers, and strategists
            dedicated to helping businesses thrive in the digital world. With
            years of experience, we specialize in creating innovative solutions
            to meet diverse needs.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            What We Do
          </h2>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Custom Web Development",
              "Mobile App Development",
              "E-commerce Solutions",
              "SEO & Digital Marketing",
              "Creative UI/UX Design",
            ].map((service, i) => (
              <li
                key={i}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-8 px-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <p className="text-gray-600 italic">
                "Raza WebSoft Solution provided an exceptional service. They
                delivered a stunning website that exceeded all our
                expectations!"
              </p>
              <h4 className="mt-4 font-semibold text-blue-600">
                - John Doe, CEO of TechWorld
              </h4>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <p className="text-gray-600 italic">
                "Their team was professional, responsive, and incredibly
                talented. Our sales increased dramatically after their redesign
                of our e-commerce platform."
              </p>
              <h4 className="mt-4 font-semibold text-blue-600">
                - Jane Smith, Founder of CreativeHub
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
