import React from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import MainBanner from "../components/HomeTwo/MainBanner";
import OurFeaturedSolutions from "../components/HomeTwo/OurFeaturedSolutions";
import AboutUs from "../components/HomeTwo/AboutUs";
import Services from "../components/HomeTwo/Services";
import FunFacts from "../components/HomeTwo/FunFacts";
import PartnerSlider from "../components/Common/PartnerSlider";
import Footer from "../components/Layouts/Footer";

export default function HomeTwo() {
  return (
    <>
      <NavbarThree />

      <MainBanner />



      <OurFeaturedSolutions />
      <AboutUs />

      <Services />

      <FunFacts />

      <PartnerSlider />

      <Footer />
    </>
  );
}
