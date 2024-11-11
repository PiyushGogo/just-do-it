import React from "react";
import "./Services.css"; // Import a CSS file for styling

import {
  FaUserFriends,
  FaVideo,
  FaShareAlt,
  FaBullhorn,
  FaBullseye,
  FaCamera,
  FaPen,
  FaPaintBrush,
  FaFileAlt,
  FaBlog,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    title: "Influencer Marketing",
    icon: <FaUserFriends />,
    description:
      "Amplify your brand's reach through strategic collaborations with influencers.",
  },
  {
    title: "Video Editing",
    icon: <FaVideo />,
    description:
      "Professional editing that brings your vision to life with dynamic storytelling.",
  },
  {
    title: "Social Media Management",
    icon: <FaShareAlt />,
    description:
      "Building and managing your online presence across all major platforms.",
  },
  {
    title: "Digital Marketing Services",
    icon: <FaBullhorn />,
    description:
      "Comprehensive strategies to enhance your brand's visibility and growth.",
  },
  {
    title: "Ad Campaign Management",
    icon: <FaBullseye />,
    description:
      "Running targeted ad campaigns to maximize reach and drive results across digital platforms.",
  },
  {
    title: "Photographic Services",
    icon: <FaCamera />,
    description: "High-quality photography to capture your brand's essence.",
  },
  {
    title: "Content Writing",
    icon: <FaPen />,
    description:
      "Crafting engaging and compelling narratives tailored to your audience.",
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush />,
    description:
      "Creating stunning visuals, including logos, posters, and thumbnails.",
  },
  {
    title: "Copywriting",
    icon: <FaFileAlt />,
    description:
      "Persuasive copy that drives action and resonates with your audience.",
  },
  {
    title: "Blog Writing",
    icon: <FaBlog />,
    description:
      "Informative and engaging blog posts to enhance your content strategy.",
  },
  {
    title: "SEO Services",
    icon: <FaSearch />,
    description:
      "Optimizing your content and website to rank higher in search engines and increase organic traffic.",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="title_white">
        Services <span className="title_red"> We Offer</span>
      </h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container">{service.icon}</div>
            <h2 className="card_heading">{service.title}</h2>
            <p className="card_desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
