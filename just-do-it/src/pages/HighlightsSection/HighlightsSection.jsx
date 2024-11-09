import React from "react";
import "./HighlightsSection.css";

const highlightsData = [
  {
    title: "VIDEO PODCAST",
    image: "/path/to/image1.jpg",
    description:
      "Engaging conversations that spark ideas and inspire audiences. Our video podcasts deliver insightful discussions tailored for your brand.",
  },
  {
    title: "OFFERS PROMOTING REELS",
    image: "/path/to/image2.jpg",
    description:
      "Captivating reels designed to highlight special offers and promotions, driving audience engagement and conversions.",
  },
  {
    title: "INTRODUCING NEW SERVICES",
    image: "/path/to/image3.jpg",
    description:
      "Showcasing your brand's new services with dynamic visuals and compelling narratives that capture attention and inform.",
  },
  {
    title: "CUSTOMER TESTIMONIALS",
    image: "/path/to/image4.jpg",
    description:
      "Authentic customer testimonials that build trust and credibility, showcasing the real impact of your brand on lives.",
  },
  {
    title: "FITNESS INFLUENCER WORKOUTS",
    image: "/path/to/image5.jpg",
    description:
      "Creative, high-energy workout videos featuring fitness influencers, designed to inspire and motivate audiences while promoting a healthy lifestyle.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="highlights-section">
      <h2 className="section-title">HIGHLIGHTS OF OUR PROJECTS</h2>
      <div className="highlights-container">
        {highlightsData.map((item, index) => (
          <div key={index} className="highlight-card">
            <div className="image-container">
              <img
                src={item.image}
                alt={item.title}
                className="highlight-image"
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
