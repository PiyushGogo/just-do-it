import React from "react";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import "./Home.css";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <div className="home">
        <WhoWeAre />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
