import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Hero,
  About,
  Themes,
  Timeline,
  Schedule,
  Rules,
  Prizes,
  FAQ,
  CTA,
} from "../components/sections";
import TimeCountDown from "../components/sections/TimeCountDown";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <TimeCountDown/>
      <Themes />
      <Timeline />
      <Schedule />
      <Rules />
      <Prizes />
      <FAQ />
      {/* <CTA /> */}
    </>
  );
};

export default Home;
