import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ServicesContent from "../../components/Services/ServicesContent";
import Footer from "../../components/Layouts/Footer";

const Services = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Hizmetlerimiz"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Hizmetlerimiz"
        bgImg="/images/services.jpeg"
      />

      <ServicesContent />

      <Footer />
    </>
  );
};

export default Services;
