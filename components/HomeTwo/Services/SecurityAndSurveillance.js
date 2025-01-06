import React from "react";
import Link from "next/link";
import Image from "next/image";

const SecurityAndSurveillance = () => {
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
            src="/images/services-img1.png"
            alt="image"
            width={569}
            height={456}
          />
        </div>

        <div className="content">
          <p>
            IoT tabanlı STEM mobil eğitim robotlarıyla teknoloji temelli
            eğitimde fark yaratıyoruz.
          </p>

          <Link href="/services/e-technology" className="btn btn-primary">
            Daha Fazlası
          </Link>
        </div>
      </div>
    </>
  );
};

export default SecurityAndSurveillance;
