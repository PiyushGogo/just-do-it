import React from "react";
import "./GoalSection.css"; // External CSS for styling

const GoalSection = () => {
  return (
    <section className="goal-section">
      <div className="goal-content">
        <div className="goal-image">
          <img src="/goal.png" alt="Goal" className="icon" />
        </div>
        <div className="goal-text">
          {/* <h2 className="goal-heading">OUR GOAL</h2> */}
          <p className="goal-description">
            TO <span className="highlight-text">BRING YOUR BRAND</span> TO LIFE
            THROUGH VISUALLY CAPTIVATING,{" "}
            <span className="highlight-text">HIGH-QUALITY CONTENT</span>{" "}
            TAILORED TO{" "}
            <span className="highlight-text">
              ENGAGE YOUR AUDIENCE ACROSS SOCIAL MEDIA PLATFORMS LIKE{" "}
            </span>
            INSTAGRAM, FACEBOOK, LINKEDIN, TWITTER, AND YOUTUBE .
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
