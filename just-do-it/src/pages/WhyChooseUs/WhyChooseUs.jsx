import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h1>
        <span className="text_red">WHY</span> CHOOSE US ?
      </h1>
      <div className="bg">
        <div className="why-card">
          <h2 className="card_heading"> DRIVEN BY PASSION</h2>
          <p className="card_desc">
            We’re a young, dynamic team fueled by genuine enthusiasm for our
            work. Our passion ensures that every project is approached with
            creativity, energy, and commitment.
          </p>
        </div>
        <div className="why-card">
          <h2 className="card_heading">EAGER FOR CHALLENGES</h2>
          <p className="card_desc">
            We thrive on challenges and believe that each new project is an
            opportunity to push our boundaries and innovate. Our adaptability
            keeps us ready to embrace new ideas and deliver exceptional results.
          </p>
        </div>
        <div className="why-card">
          <h2 className="card_heading">DEDICATED TO EXCELLENCE</h2>
          <p className="card_desc">
            For us, this work is more than a job—it’s a calling. We give our all
            to each project, putting in 100% effort and ensuring that every
            detail aligns with your vision.
          </p>
        </div>
        <div className="why-card">
          <h2 className="card_heading">BUILT FOR YOUR SUCCESS</h2>
          <p className="card_desc">
            We’re here to make a difference for your brand, bringing our full
            dedication and fresh perspective to every challenge and opportunity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
