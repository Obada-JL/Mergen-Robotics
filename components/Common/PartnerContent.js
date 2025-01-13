import React from "react";
import Image from "next/image";

const PartnerContent = () => {
  return (
    <>
      <div className="partner-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>Referanslarımız</h2>
            <p>
              Faaliyet gösterdiğimiz alanlarda çözüm ortağı olduğumuz müşteri ve
              partnerlerimiz
            </p>
          </div>

          <div className="customers-partner-list justify-content-center">
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/sahinbey belediyesi.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/sehitkamil belediyesi.svg"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/tubitak.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/teknopark.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/fablab.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/kosgeb.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/iskur.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerContent;
