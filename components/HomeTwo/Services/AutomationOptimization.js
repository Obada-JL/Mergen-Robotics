import React from "react";
import Link from "next/link";
import Image from "next/image";

const AutomationOptimization = () => {
  return (
    <>
      <div
        className="tabs-item"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div className="image">
          <Image src="/images/acs.jpg" alt="image" width={569} height={456} />
        </div>

        <div className="content">
          <p>
            Güvenli, hızlı ve akıllı geçiş kontrol çözümleriyle işletmelerinizin
            güvenlik ihtiyaçlarını karşılıyoruz.
          </p>

          <Link href="/services/access-control" className="btn btn-primary">
            Daha Fazlası
          </Link>
        </div>
      </div>
    </>
  );
};

export default AutomationOptimization;
