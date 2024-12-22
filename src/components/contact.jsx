import React from "react";
import "../css/contact.css";
import ContactImg from "../assets/illustrations/contact.jpg";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-container-left">
          <img src={ContactImg} alt="" />
        </div>
        <div className="contact-container-right">
          <input
            type="hidden"
            name="redirect"
            value="https://razawebs.com/thanks"
          />
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="swipe-left"
          >
            <h2>GET IN TOUCH</h2>
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
            ></input>
            <input type="text" name="name" placeholder="NAME" required />
            <input type="email" name="email" placeholder="E-MAIL" required />
            <input
              type="text"
              name="Mobile Number"
              placeholder="MOBILE NUMBER"
              pattern="[0-9]{10}"
              required
            />

            {/* Message Textarea */}
            <textarea name="message" placeholder="MESSAGE" />

            {/* Submit Button */}
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-details-box">
          <i class="fa-solid fa-phone"></i>
          <a href="tel:9297829642">+91 9297829642</a>
        </div>
        <div className="contact-details-box">
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:contact@razawebs.com">contact@razawebs.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
