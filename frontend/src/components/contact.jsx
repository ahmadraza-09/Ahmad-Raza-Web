import React from "react";
import ContactImg from "../assets/illustrations/contact.jpg";
import { Phone, Mail } from "lucide-react";

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
    <section className="w-full flex flex-col items-center justify-center pb-10">
      {/* Container */}
      <div className="w-full flex items-center justify-center">
        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img src={ContactImg} alt="Contact Illustration" className="w-full" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 px-5 md:px-10">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
            className="w-full shadow-md p-5 flex flex-col items-center justify-center gap-5 rounded-lg bg-white"
          >
            <h2 className="text-2xl font-bold text-gray-800">GET IN TOUCH</h2>

            {/* Hidden Inputs */}
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
              className="w-full h-10 bg-[#E1E8F0] px-2 rounded-md text-sm outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Your Email"
              className="w-full h-10 bg-[#E1E8F0] px-2 rounded-md text-sm outline-none"
            />
            <input
              type="text"
              name="Mobile Number"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              required
              aria-label="Your Mobile Number"
              className="w-full h-10 bg-[#E1E8F0] px-2 rounded-md text-sm outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Your Message"
              className="w-full h-20 bg-[#E1E8F0] px-2 py-2 rounded-md text-sm outline-none resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-10 bg-[#0075FF] text-white font-semibold text-base rounded-md uppercase cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Details */}
      <div className="w-full flex flex-wrap items-center justify-center gap-5 mt-10">
        <div className="flex items-center gap-3 shadow-md px-5 py-3 text-lg rounded-lg">
          <Phone size={20} className="text-blue-800" />
          <a href="tel:9297829642" aria-label="Call Us">
            +91 9297829642
          </a>
        </div>
        <div className="flex items-center gap-3 shadow-md px-5 py-3 text-lg rounded-lg">
          <Mail size={20} className="text-blue-800" />
          <a href="mailto:contact@razawebs.com" aria-label="Email Us">
            contact@razawebs.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
