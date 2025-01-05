import React from "react";
import "../css/form-modal.css";

const FormModal = ({ onClose }) => {
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
          alert("There was an error submitting the form.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form.");
      });
  };

  return (
    <div className="form-modal-container">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="swipe-left"
        onSubmit={handleSubmit}
      >
        <div className="hide-modal" onClick={onClose}>
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <h2>GET IN TOUCH</h2>
        <input type="hidden" name="subject" value="Query Raza Webs Solution" />
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
        <input type="text" name="name" placeholder="NAME" required />
        <input type="email" name="email" placeholder="E-MAIL" required />
        <input
          type="text"
          name="Mobile Number"
          placeholder="MOBILE NUMBER"
          pattern="[0-9]{10}"
          required
        />
        <textarea name="message" placeholder="MESSAGE" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default FormModal;
