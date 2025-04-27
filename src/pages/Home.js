import React from "react";
import Navbar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import KPISection from "../components/KPISection/KPISection";
import SplitSection from "../components/SplitSection/SplitSection";
import MissionVision from "../components/MissionVision/MissionVision";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return React.createElement(
    "div",
    { className: "home-page" },
    React.createElement(Navbar, null),
    React.createElement(HeroSection, null),
    React.createElement(KPISection, null),
    React.createElement(SplitSection, null),
    React.createElement(MissionVision, null),
    React.createElement(Footer, null)
  );
};

export default Home;
