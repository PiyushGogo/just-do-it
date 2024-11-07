import React from "react";
import "./Services.css"; // Import a CSS file for styling
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaSearchDollar,
  FaHandshake,
  FaChartPie,
  FaRocket,
  FaCog,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    description: "Custom, responsive websites tailored to your needs.",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt />,
    description: "High-quality mobile applications for iOS and Android.",
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud />,
    description:
      "Scalable cloud infrastructure and services for modern businesses.",
  },
  {
    title: "Cybersecurity",
    icon: <FaShieldAlt />,
    description: "Robust security solutions to protect your digital assets.",
  },
  {
    title: "SEO and Marketing",
    icon: <FaSearchDollar />,
    description:
      "Boost your visibility with expert SEO and digital marketing strategies.",
  },
  {
    title: "Consulting Services",
    icon: <FaHandshake />,
    description: "Professional consulting to streamline your operations.",
  },
  {
    title: "Data Analytics",
    icon: <FaChartPie />,
    description: "Data-driven insights to help you make informed decisions.",
  },
  {
    title: "Product Launch",
    icon: <FaRocket />,
    description: "Comprehensive support for a successful product launch.",
  },
  {
    title: "Technical Support",
    icon: <FaCog />,
    description: "Reliable tech support to keep your systems running smoothly.",
  },
  {
    title: "Innovation and Ideation",
    icon: <FaLightbulb />,
    description: "Creative solutions and brainstorming for unique challenges.",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <h1>Services We Offer</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
