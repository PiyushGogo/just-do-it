import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <div className="card">
        <div className="text_h1">
          <h1>
            {" "}
            <span className="text_red">Who</span> We Are ?
          </h1>
        </div>
        <div>
          <p>
            We’re a passionate team of{" "}
            <span className="text_red">
              {" "}
              Digital Marketing & Creative Strategist, Video editors, Graphic
              designers, content writers , influencer marketers, photographers
            </span>{" "}
            and a{" "}
            <span className="text_red">
              content script specialist each of us bringing unique skills to the
              table.
            </span>
          </p>
          <p>
            Together, we specialize in creating dynamic, high-impact content
            that helps brands make a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
