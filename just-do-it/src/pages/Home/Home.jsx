import React from "react";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import "./Home.css";
import ContactUs from "../ContactUs/ContactUs";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <div className="home">
        <WhoWeAre />
        <WhyChooseUs />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
