import React from "react";
import { useNavigate } from "react-router-dom";
import ThanksImg from "../assets/icons/accept.png";

const Thanks = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <img
          src={ThanksImg}
          alt="Success"
          className="w-24 h-24 mx-auto mb-4 animate-bounce"
        />
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">Thank You!</h1>
        <h2 className="text-lg text-gray-600 mb-4">
          Form submitted successfully 🎉
        </h2>
        <p className="text-gray-500 mb-6">
          We’ve received your form and will get back to you soon.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200 shadow-sm"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 shadow-sm"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
