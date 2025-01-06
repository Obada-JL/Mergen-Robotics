import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";
import Footer from "../../components/Layouts/Footer";
import { useParams } from "next/navigation";
import IoTDetailsContent from "./IoTDetailsContent";
import Error from "../404";
import AccessControlContent from "./accessContolDetails";
import WebDetailsContent from "./webDetailsContent";
import PcbDetailsContent from "./pcbSetailsContent";
import DesignDetailsContent from "./designDetailsContent";
import SteamDetailsContent from "./steam";

const ServiceDetails = ({ service }) => {
  let ServiceContent;
  switch (service) {
    case "iot":
      ServiceContent = <IoTDetailsContent />;
      break;
    case "access-control":
      ServiceContent = <AccessControlContent />;
      break;
    case "e-technology":
      ServiceContent = <SteamDetailsContent />;
      break;
    case "web":
      ServiceContent = <WebDetailsContent />;
      break;
    case "pcb":
      ServiceContent = <PcbDetailsContent />;
      break;
    case "3D":
      ServiceContent = <DesignDetailsContent />;
      break;
    default:
      ServiceContent = <Error />;
  }

  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle={
          service === "iot"
            ? "IoT ve Gömülü Sistem"
            : service === "access-control"
            ? "Geçiş Kontrol Sistemleri"
            : service === "e-technology"
            ? "Eğitim Teknolojileri ve STEAM"
            : service === "web"
            ? "Web, Mobil ve Gömülü Yazılım"
            : service === "pcb"
            ? "PCB Tasarım ve Üretim"
            : service === "3D"
            ? "3B Tasarım ve Üretim"
            : "Service Not Found"
        }
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText={
          service === "iot"
            ? "IoT ve Gömülü Sistem"
            : service === "access-control"
            ? "Geçiş Kontrol Sistemleri"
            : service === "e-technology"
            ? "Eğitim Teknolojileri ve STEAM"
            : service === "web"
            ? "Web, Mobil ve Gömülü Yazılım"
            : service === "pcb"
            ? "PCB Tasarım ve Üretim"
            : service === "3D"
            ? "3B Tasarım ve Üretim"
            : "Service Not Found"
        }
        bgImg="/images/services.jpg"
      />
      {ServiceContent}

      <Footer />
    </>
  );
};
export async function getServerSideProps({ params }) {
  const { service } = params;

  return {
    props: {
      service,
    },
  };
}

export default ServiceDetails;
