import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import Services from "../../../components/HomeTwo/Services";
import Footer from "../../../components/Layouts/Footer";

const ServicesTwo = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Sektörler"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sektörler"
        bgImg="/images/services.jpg"
      />
      <Services />

      <Footer />
    </>
  );
};

export default ServicesTwo;
