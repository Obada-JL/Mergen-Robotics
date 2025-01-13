import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import PartnerContent from "../components/Common/PartnerContent";
import Footer from "../components/Layouts/Footer";
import PartnerSlider from "../components/Common/PartnerSlider";

export default function Partner() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Refernaslarımız"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Refernaslarımız"
        bgImg="/images/references.jpg"
      />

      <PartnerContent />

      {/* <PartnerSlider /> */}

      <Footer />
    </>
  );
}
