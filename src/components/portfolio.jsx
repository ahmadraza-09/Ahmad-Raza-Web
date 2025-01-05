import React from "react";
import "../css/portfolio.css";
import HotelsChainWebsite from "../assets/website-images/royal-collection-hotels.png";
import HotelWebsite from "../assets/website-images/hotel-aroma-nainital.png";
import TourPackageWebsite from "../assets/website-images/eco-retreat-odisha.png";

const projects = [
  {
    id: 1,
    title: "Hotels Chain Website",
    description:
      "A fully functional Hotel Chain platform with hotels listings.",
    image: HotelsChainWebsite, // Replace with your project image
    link: "https://royalcollectionhotels.com",
  },
  {
    id: 2,
    title: "Hotel Website",
    description:
      "A Hotel Website for showcase hotel facilities rooms and services",
    image: HotelWebsite,
    link: "https://hotelaromanainital.com",
  },
  {
    id: 3,
    title: "Tour Packages Website",
    description:
      "A tour & Travel Packages Website to check packages and services",
    image: TourPackageWebsite,
    link: "https://ecoretreatodisha.in",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Our Portfolio</h1>
      <p className="portfolio-subtitle">
        Here are some of the websites we've created to help our clients grow.
      </p>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <h2 className="portfolio-card-title">{project.title}</h2>
            <p className="portfolio-card-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              Live Preview
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
