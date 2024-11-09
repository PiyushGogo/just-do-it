import React from "react";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import "./Home.css";
import ContactUs from "../ContactUs/ContactUs";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import WorkFlowPage from "../WorkFlowPage/WorkFlowPage";
import Services from "../Serivces/Services";
import ClientsSection from "../ClientsSection/ClientsSection";

const Home = () => {
  return (
    <>
      <div className="home">
        <WhoWeAre />
        <WhyChooseUs />
        <ContactUs />
        <WorkFlowPage />
        <Services />
        <ClientsSection />
      </div>
    </>
  );
};

export default Home;
