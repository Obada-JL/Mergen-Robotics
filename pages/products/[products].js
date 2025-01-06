import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import Error from "../404";
import AutomationDetailsContent from "./AutomationDetailsContent";
import BigpassDetailsContent from "./BigpassDetailsPage";
import LearningRobotsDetails from "./LearningRobotsDetails";

const productsDetails = ({ products }) => {
  let productsContent;
  console.log(products);
  switch (products) {
    case "bigpass":
      productsContent = <BigpassDetailsContent />;
      break;
    case "automation":
      productsContent = <AutomationDetailsContent />;
      break;
    case "learning-robots":
      productsContent = <LearningRobotsDetails />;
      break;
    default:
      productsContent = <Error />;
  }

  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle={
          products === "bigpass"
            ? "BigPass Geçiş Kontrol Sistemi"
            : products === "automation"
            ? " Makine, Otomasyon ve Robotik Sistemler"
            : products === "learning-robots"
            ? "STEAM Eğitim Robotları"
            : "Product Not Found"
        }
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText={
          products === "bigpass"
            ? "BigPass Geçiş Kontrol Sistemi"
            : products === "automation"
            ? " Makine, Otomasyon ve Robotik Sistemler"
            : products === "learning-robots"
            ? "STEAM Eğitim Robotları"
            : "Product Not Found"
        }
        bgImg="/images/productss.jpg"
      />
      {productsContent}

      <Footer />
    </>
  );
};
export async function getServerSideProps({ params }) {
  const { products } = params;

  return {
    props: {
      products,
    },
  };
}

export default productsDetails;
