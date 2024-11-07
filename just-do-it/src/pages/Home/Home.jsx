import React from "react";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import "./Home.css";
import ContactUs from "../ContactUs/ContactUs";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import WorkFlowPage from "../WorkFlowPage/WorkFlowPage";

const Home = () => {
  return (
    <>
      <div className="home">
        <WhoWeAre />
        <WhyChooseUs />
        <ContactUs />
        <WorkFlowPage />
      </div>
    </>
  );
};

export default Home;
