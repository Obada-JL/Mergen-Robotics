import React from "react";
import Link from "next/link";
import Image from "next/image";

const SoftwareEngineers = () => {
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
Ürünlerimizde kullandığımız Elektronik Kartları biz tasarlıyor, biz üretiyoruz. PCB Kart tasarımı ve PCB dizgi ihtiyaçlarınız için de ayrıca sizelere çözüm ortağı oluyoruz.
          </p>

          <Link href="/services/details-pcb" className="btn btn-primary">
            Daha Fazlası
          </Link>
        </div>
      </div>
    </>
  );
};

export default SoftwareEngineers;
