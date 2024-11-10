import React from "react";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import "./Home.css";
import ContactUs from "../ContactUs/ContactUs";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import WorkFlowPage from "../WorkFlowPage/WorkFlowPage";
import Services from "../Serivces/Services";
import ClientsSection from "../ClientsSection/ClientsSection";
import GoalSection from "../GoalSection/GoalSection";
import TeamSection from "../TeamSection/TeamSection";
import HighlightsSection from "../HighlightsSection/HighlightsSection";

const Home = () => {
  return (
    <>
      <div className="home">
        <WhoWeAre />
        <ClientsSection />
        <GoalSection />
        <TeamSection />
        <HighlightsSection />
        <Services />
        <WorkFlowPage />
        <WhyChooseUs />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
