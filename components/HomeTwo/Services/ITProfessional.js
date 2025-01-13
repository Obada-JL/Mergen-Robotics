import React from "react";
import Link from "next/link";
import Image from "next/image";

const ITProfessional = () => {
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
            src="/images/3d-vector.png"
            alt="image"
            width={569}
            height={456}
          />
        </div>

        <div className="content">
          <p>
            Ürünlerimizin 3B tasarımlarını ve mekanik yapılarını özgün olarak
            tasarlıyor, prototip üretiminden seri üretime kadar olan tüm üretim
            sürecini biz yapıyoruz.
          </p>

          <Link href="/services/3D" className="btn btn-primary">
            Daha Fazlası
          </Link>
        </div>
      </div>
    </>
  );
};

export default ITProfessional;
