import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Services from "../../components/HomeTwo/Services";
import Footer from "../../components/Layouts/Footer";
import OurFeaturedSolutions from "../../components/HomeTwo/OurFeaturedSolutions";

const ServicesTwo = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Ürünler"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Ürünler"
        bgImg="/images/services.jpg"
      />
      <OurFeaturedSolutions />

      <Footer />
    </>
  );
};

export default ServicesTwo;
