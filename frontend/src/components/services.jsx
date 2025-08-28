import React from "react";

const services = [
  {
    id: 1,
    title: "Website Design",
    description:
      "Crafting modern, user-friendly, and responsive designs to create a perfect user experience.",
    image:
      "https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?semt=ais_hybrid",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
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
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Our Services
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We provide a wide range of services to help you achieve your digital
        goals.
      </p>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Tools and Technologies
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          We use cutting-edge tools and technologies to ensure the highest
          quality results.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {toolsAndTechnologies.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-3" />
              <p className="text-gray-700 font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
