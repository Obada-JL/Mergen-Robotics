import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="about-area pt-0 ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Image
                  src="/images/about/about3.png"
                  alt="image"
                  width={460}
                  height={493}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <h2>Biz Kimiz?</h2>
                <p>
                  Mergen Robotics’in vizyonunu, değerlerini ve sahip olduğu yetenekleriyle müşterilerine olan katkılarını daha yakından inceleyin.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> ARGE - ÜRGE Gücü
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Hızlı ve Dinamik Ekip
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Yenilikçi, Üstün Teknoloji
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Güvenilir ve Kullanıcı Dostu Ürünler
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Endüstriyel Tasarım ve Üretim Yetkinliği
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-tick"></i> Danışmanlık ve Eğitim Hizmetleri
                    </span>
                  </li>
                </ul>

                <Link href="/about-us" className="btn btn-primary">
                  Bizi Tanıyın.
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={523}
            height={586}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
