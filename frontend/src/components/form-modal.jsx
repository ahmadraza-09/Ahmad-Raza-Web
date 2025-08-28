import React from "react";
import { X } from "lucide-react";

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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="relative bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl cursor-pointer"
        >
          <X size={30} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          GET IN TOUCH
        </h2>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
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

          {/* Inputs */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="Mobile Number"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            rows="4"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
