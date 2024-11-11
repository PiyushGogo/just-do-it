import React from "react";
import "./HighlightsSection.css";

const highlightsData = [
  {
    title: "VIDEO PODCAST",
    image: "path/to/your/image1.jpg", // Replace with the path to your image
    videoUrl:
      "https://drive.google.com/file/d/1T_dQkbbXdQn4m4q-Yylr1x6pgpm0fZrl/view?usp=sharing",
    description:
      "Engaging conversations that spark ideas and inspire audiences. Our video podcasts deliver insightful discussions tailored for your brand.",
  },
  {
    title: "OFFERS PROMOTING REELS",
    image: "path/to/your/image2.jpg", // Replace with the path to your image
    videoUrl:
      "https://drive.google.com/file/d/1T_dQkbbXdQn4m4q-Yylr1x6pgpm0fZrl/view?usp=sharing",
    description:
      "Captivating reels designed to highlight special offers and promotions, driving audience engagement and conversions.",
  },
  {
    title: "INTRODUCING NEW SERVICES",
    image: "path/to/your/image3.jpg", // Replace with the path to your image
    videoUrl:
      "https://drive.google.com/file/d/1T_dQkbbXdQn4m4q-Yylr1x6pgpm0fZrl/view?usp=sharing",
    description:
      "Showcasing your brand's new services with dynamic visuals and compelling narratives that capture attention and inform.",
  },
  {
    title: "CUSTOMER TESTIMONIALS",
    image: "path/to/your/image4.jpg", // Replace with the path to your image
    videoUrl:
      "https://drive.google.com/file/d/1T_dQkbbXdQn4m4q-Yylr1x6pgpm0fZrl/view?usp=sharing",
    description:
      "Authentic customer testimonials that build trust and credibility, showcasing the real impact of your brand on lives.",
  },
  {
    title: "FITNESS INFLUENCER WORKOUTS",
    image: "/fit-inf.webp", // Replace with the path to your image
    videoUrl:
      "https://drive.google.com/file/d/1_cYWYndnWXhczxCyRLg0xYw6W_1rG7R0/view",
    description:
      "Creative, high-energy workout videos featuring fitness influencers, designed to inspire and motivate audiences while promoting a healthy lifestyle.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="highlights-section">
      <h2 className="section-title">
        HIGHLIGHTS OF <span className="team-highlight"> OUR PROJECTS </span>
      </h2>
      <div className="highlights-container">
        {highlightsData.map((item, index) => (
          <div key={index} className="highlight-card">
            <img
              src={item.image}
              alt={item.title}
              className="highlight-thumbnail"
              onClick={() => window.open(item.videoUrl, "_blank")}
            />
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
