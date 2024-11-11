import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import TeamSection from "./pages/TeamSection/TeamSection";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import GoalSection from "./pages/GoalSection/GoalSection";
import Services from "./pages/Serivces/Services";
import WorkFlowPage from "./pages/WorkFlowPage/WorkFlowPage";
import ContactUs from "./pages/ContactUs/ContactUs";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-goal" element={<GoalSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/workflow" element={<WorkFlowPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
