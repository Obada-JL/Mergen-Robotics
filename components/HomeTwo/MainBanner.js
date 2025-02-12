import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  İleri Teknoloji,
                  Akıllı Çözümler
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {/* Yerli üretim odaklı teknoloji firmamız, mühendislik ve
                  yenilikçi çözümlerle iş süreçlerini daha verimli, güvenli ve
                  sürdürülebilir hale getirmektedir. Her projeye özel
                  geliştirdiğimiz sistemlerle, müşterilerimize katma değer
                  sağlayarak sektördeki ihtiyaçlara yön veriyoruz. */}
                  Mergen Robotics, yenilikçi Ar-Ge projeleri ve yüksek katma değerli teknolojik çözümleriyle; IoT,
                  gömülü sistemler, robotik sistemler ve eğitim teknolojileri alanlarında,
                  hızlı, dinamik ve kullanıcı dostu yaklaşımıyla bireysel ve kurumsal ihtiyaçlara özel çözümler sunuyor.
                </p>

                {/* <div
                  className="btn-box"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <Link href="/contact" className="btn btn-primary">
                    Schedule a Demo
                  </Link>
                  <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-image">
                <Image
                  src="/images/banner-2/banner-2-shape1.png"
                  alt="image"
                  width={120}
                  height={120}
                />

                <Image
                  src="/images/banner-2/banner-2-shape2.png"
                  alt="image"
                  width={180}
                  height={132}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="50"
                />

                <Image
                  src="/images/banner-2/banner-2-shape3.png"
                  alt="image"
                  width={249}
                  height={239}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                />

                <Image
                  src="/images/banner-2/banner-2-shape4.png"
                  alt="image"
                  width={180}
                  height={114}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="150"
                />

                <Image
                  src="/images/banner-2/banner-2-shape5.png"
                  alt="image"
                  width={279}
                  height={233}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                />

                <Image
                  src="/images/banner-2/banner-2-shape6.png"
                  alt="image"
                  width={180}
                  height={170}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="250"
                />

                <Image
                  src="/images/banner-2/banner-2-shape7.png"
                  alt="image"
                  width={190}
                  height={309}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                />

                <Image
                  src="/images/banner-2/banner-2-shape8.png"
                  alt="image"
                  width={390}
                  height={188}
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                />

                <Image
                  src="/images/banner-image.png"
                  alt="image"
                  width={924}
                  height={530}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="450"
                />
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
            width={12}
            height={11}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
