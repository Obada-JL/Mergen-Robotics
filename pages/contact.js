import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Footer from "../components/Layouts/Footer";

export default function Contact() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImg="/images/contact-us3.jpg"
      />

      <ContactFormContent />

      <Footer />
    </>
  );
}
