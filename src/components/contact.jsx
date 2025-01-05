import React from "react";
import "../css/contact.css";
import ContactImg from "../assets/illustrations/contact.jpg";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "https://razawebs.com/thanks";
        } else {
          alert("There was an issue submitting the form. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("An error occurred while submitting the form.");
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Section: Contact Image */}
        <div className="contact-container-left">
          <img src={ContactImg} alt="Contact Illustration" />
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-container-right">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="swipe-left"
            onSubmit={handleSubmit}
          >
            <h2>GET IN TOUCH</h2>

            {/* Hidden Input Fields */}
            <input
              type="hidden"
              name="subject"
              value="Query Raza Webs Solution"
            />
            <input
              type="hidden"
              name="from_name"
              value="Query Raza Webs Solution"
            />
            <input
              type="hidden"
              name="access_key"
              value="ac18f110-8548-4859-aa68-b7b13bdbd1b2"
            />

            {/* Input Fields */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Your Email"
            />
            <input
              type="text"
              name="Mobile Number"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              required
              aria-label="Your Mobile Number"
            />
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Your Message"
            ></textarea>

            {/* Submit Button */}
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="contact-details-box">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:9297829642" aria-label="Call Us">
            +91 9297829642
          </a>
        </div>
        <div className="contact-details-box">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:contact@razawebs.com" aria-label="Email Us">
            contact@razawebs.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
