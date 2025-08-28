import React from "react";
import HotelsChainWebsite from "../assets/website-images/royal-collection-hotels.png";
import HotelWebsite from "../assets/website-images/hotel-aroma-nainital.png";
import TourPackageWebsite from "../assets/website-images/eco-retreat-odisha.png";
import ClinicWebsite from "../assets/website-images/clinic-website.png";
import HotelBooking from "../assets/website-images/hotel-booking.png";

const projects = [
  {
    id: 1,
    title: "Hotels Chain Website",
    description:
      "A fully functional Hotel Chain platform with hotels listings.",
    image: HotelsChainWebsite,
    link: "https://royalcollectionhotels.com",
  },
  {
    id: 2,
    title: "Hotel Website",
    description:
      "A Hotel Website for showcase hotel facilities rooms and services.",
    image: HotelWebsite,
    link: "https://hotelaromanainital.com",
  },
  {
    id: 3,
    title: "Tour Packages Website",
    description:
      "A Tour & Travel Packages Website to check packages and services.",
    image: TourPackageWebsite,
    link: "https://ecoretreatodisha.in",
  },
  {
    id: 4,
    title: "Clinic Appointment System",
    description: "A Clinic Website where pateints can book appointment online.",
    image: ClinicWebsite,
    link: "https://healthcare-app-one.vercel.app/",
  },
  {
    id: 5,
    title: "Hotel Booking Website",
    description:
      "A Hotel Website where user can book hotel online and manage booking on profile.",
    image: HotelBooking,
    link: "https://www.hotelwale.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-gray-800">
          Our Portfolio
        </h1>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Here are some of the websites we've created to help our clients grow.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 rounded-lg bg-blue-600 text-center text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
