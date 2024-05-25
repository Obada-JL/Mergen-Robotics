import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import Services from "../components/HomeTwo/Services";
import PartnerContent from "../components/Common/PartnerContent";
import Footer from "../components/Layouts/Footer";

export default function AboutUs() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Hakkımızda"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Hakkımızda"
        bgImg="/images/aboutus.jpg"
      />

      <AboutContact />

      <Services />

      <PartnerContent />

      <Footer />
    </>
  );
}
