import React from "react";
import Link from "next/link";
import Image from "next/image";

const DataAnalysis = () => {
  return (
    <>
      <div
        className="tabs-item"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div className="image">
          <Image
            src="/images/iot.png"
            alt="image"
            width={700}
            height={456}
            style={{ height: "auto" }}
          />
        </div>

        <div className="content">
          <p>
          Akıllı cihazlardan endüstriyel otomasyona 
          kadar geniş bir yelpazede IoT ve gömülü sistem projeleri geliştiriyoruz.
          </p>
          <Link href="/services/details-iot" className="btn btn-primary">
            Daha Fazlası
          </Link>
        </div>
      </div>
    </>
  );
};

export default DataAnalysis;
