import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to Raza WebSoft Solution</h1>
          <p>
            Delivering excellence in web development and digital transformation.
            We design, develop, and deploy solutions tailored to your business
            needs.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            At Raza WebSoft Solution, we are a team of passionate developers,
            designers, and strategists dedicated to helping businesses thrive in
            the digital world. With years of experience, we specialize in
            creating innovative solutions to meet diverse needs.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do">
        <div className="container">
          <h2>What We Do</h2>
          <ul>
            <li>Custom Web Development</li>
            <li>Mobile App Development</li>
            <li>E-commerce Solutions</li>
            <li>SEO & Digital Marketing</li>
            <li>Creative UI/UX Design</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-card">
            <p>
              "Raza WebSoft Solution provided an exceptional service. They
              delivered a stunning website that exceeded all our expectations!"
            </p>
            <h4>- John Doe, CEO of TechWorld</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "Their team was professional, responsive, and incredibly talented.
              Our sales increased dramatically after their redesign of our
              e-commerce platform."
            </p>
            <h4>- Jane Smith, Founder of CreativeHub</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
