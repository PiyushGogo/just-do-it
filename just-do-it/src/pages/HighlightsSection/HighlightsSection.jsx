import React from "react";
import "./HighlightsSection.css";

const highlightsData = [
  {
    title: "VIDEO PODCAST",
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video URL
    description:
      "Engaging conversations that spark ideas and inspire audiences. Our video podcasts deliver insightful discussions tailored for your brand.",
  },
  {
    title: "OFFERS PROMOTING REELS",
    video: "https://www.w3schools.com/html/movie.mp4", // Replace with your video URL
    description:
      "Captivating reels designed to highlight special offers and promotions, driving audience engagement and conversions.",
  },
  {
    title: "INTRODUCING NEW SERVICES",
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video URL
    description:
      "Showcasing your brand's new services with dynamic visuals and compelling narratives that capture attention and inform.",
  },
  {
    title: "CUSTOMER TESTIMONIALS",
    video: "https://www.w3schools.com/html/movie.mp4", // Replace with your video URL
    description:
      "Authentic customer testimonials that build trust and credibility, showcasing the real impact of your brand on lives.",
  },
  {
    title: "FITNESS INFLUENCER WORKOUTS",
    video: "/Vinay.mp4", // Replace with your video URL
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
            <div className="video-container">
              <video
                src={item.video}
                className="highlight-video"
                controls
                loop
                muted
              ></video>
            </div>
            <div className="card-content">
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
