import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurFeaturedSolutions = () => {
  return (
    <>
      <div className="featured-solutions-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Faaliyet Alanlarımız</h2>
            <p>
              Yerli üretim çözümleri ile teknolojiye yön veriyor, sektörlerdeki
              verimliliği artırmak için özgün ve yenilikçi sistemler
              geliştiriyoruz.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="icon">
                  <Image
                    src="/images/icon1.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/projects/details">Geçiş Kontrol Sistemleri</Link>
                </h3>
                <p>
                  {/* Güvenliği en üst düzeye çıkaran kartlı geçiş sistemlerimiz,
                  işletmelerin ve kamu alanlarının giriş-çıkışlarını kolayca
                  yönetmelerini sağlar. Her işletmeye özel tasarlanabilen
                  çözümlerimizle, çalışanlar ve ziyaretçiler için güvenli, hızlı
                  ve etkili bir erişim kontrolü sunuyoruz. */}
                  Yerli üretim kartlı geçiş sistemlerimiz, güvenliği ön planda
                  tutarak işletmelerin ve kamu alanlarının erişim kontrollerini
                  en güvenli şekilde yönetmelerini sağlar. Kendi tasarımımız
                  olan bu sistemler, esnek ve ölçeklenebilir çözümler sunarak
                  her ihtiyaca uygun uyarlama imkânı sağlar.
                </p>
                <Link href="/projects/details" className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="icon">
                  <Image
                    src="/images/icon2.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/projects/details">Robotik Sistemler</Link>
                </h3>
                <p>
                  Küçük ölçekli üretim tesisleri ve endüstriyel projeler için
                  yenilikçi robotik çözümler sunuyoruz. Otomatikleştirilmiş
                  sistemlerimizle, işletmelerin daha hızlı, güvenilir ve düşük
                  maliyetle çalışmasını sağlıyoruz. Esnek robotik
                  teknolojilerimiz, her türlü üretim hattına uyum sağlayarak
                  verimliliği artırır.
                </p>
                <Link href="/projects/details" className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-featured-solutions-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="icon">
                  <Image
                    src="/images/icon3.png"
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <h3>
                  <Link href="/projects/details">Eğitim Teknolojileri</Link>
                </h3>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore. Ut enim ad minim veniam.
                </p>
                <Link href="/projects/details" className="learn-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={21}
            height={20}
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
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="dot-shape1">
          <Image
            src="/images/shape/dot1.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot3.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
      </div>
    </>
  );
};

export default OurFeaturedSolutions;
