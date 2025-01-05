import React from "react";
import "../css/services.css";

const services = [
  {
    id: 1,
    title: "Website Design",
    description:
      "Crafting modern, user-friendly, and responsive designs to create a perfect user experience.",
    image:
      "https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?semt=ais_hybrid", // Replace with your image URL
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "Building robust, scalable websites with the latest technologies to ensure top performance.",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
  },
  {
    id: 3,
    title: "E-commerce Solution",
    description:
      "Designing and developing seamless e-commerce platforms to boost online sales.",
    image:
      "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing services to grow your online presence and reach your target audience.",
    image:
      "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA=",
  },
  {
    id: 5,
    title: "App Development",
    description:
      "Creating powerful, cross-platform mobile apps tailored to your business needs.",
    image:
      "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
  },
  {
    id: 6,
    title: "Content Writing",
    description:
      "Professional content writing services to enhance your brand’s voice and engagement.",
    image:
      "https://media.istockphoto.com/id/976370312/photo/content-marketing-content-data-blogging-media-publication-information-vision-concept.jpg?s=612x612&w=0&k=20&c=93V95QsK40hmisFJuCj35GNLJKwB6Z4uuQ7ttLiVbHA=",
  },
];

const toolsAndTechnologies = [
  {
    name: "React.js",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
  },
  {
    name: "Node.js",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvCeq3uzcMcxdvC5F-gfZJpOaePBfpbcJpg&s",
  },
  {
    name: "Java",
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    name: "Express.js",
    icon: "https://www.manektech.com/storage/developer/1646733543.webp",
  },
  {
    name: "MongoDB",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMRzP2i8h_xIFrtbyJvXy29eTCtyUpwIrzg&s",
  },
  {
    name: "WordPress",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMrwRPskY3YbshjBj3yk2i56dZGpT1OsYnw&s",
  },
  {
    name: "Figma",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    name: "HTML5",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QP4wG2DnJ7gi_F4OjFWO6PsrZQ1sjOrX4A&s",
  },
  {
    name: "React Native",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
  },
  {
    name: "CSS3",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_ZipcBIWIfEe72_gnyTDkti0TUCN2RsdYA&s",
  },
  {
    name: "Tailwind CSS",
    icon: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
  },
  {
    name: "Bootstrap",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAmAZJkl49wqGmS0dWhlGo-CYpaAT-g_WCA&s",
  },
  {
    name: "JavaScript",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0he5ZG2l7IW_gKKY4dzVuCq-DV5YxXUCwjw&s",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        We provide a wide range of services to help you achieve your digital
        goals.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="tools-section">
        <h2 className="tools-title">Tools and Technologies</h2>
        <p className="tools-subtitle">
          We use cutting-edge tools and technologies to ensure the highest
          quality results.
        </p>
        <div className="tools-grid">
          {toolsAndTechnologies.map((tool, index) => (
            <div className="tool-card" key={index}>
              <img src={tool.icon} alt={tool.name} className="tool-icon" />
              <p className="tool-name">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
