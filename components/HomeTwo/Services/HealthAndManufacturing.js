import React from "react";
import Link from "next/link";
import Image from "next/image";

const HealthAndManufacturing = () => {
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
            Üretmiş olduğumuz her türlü ürün ve hizmette kendi yazılımlarımızı
            kullanıyoruz. İhtiyacınıza özel web yazılım, mobil uygulama ve
            gömülü yazılım projelerini birlikte geliştiriyoruz.
          </p>

          <Link href="/services/web" className="btn btn-primary">
            Daha Fazlası
          </Link>
        </div>
      </div>
    </>
  );
};

export default HealthAndManufacturing;
