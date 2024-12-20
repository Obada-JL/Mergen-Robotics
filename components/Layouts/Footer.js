import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/mergen logo.png"
                      alt="image"
                      width={149}
                      height={37}
                      style={{ height: "auto" }}
                    />
                  </Link>
                  <p>
                    Yerli üretim odaklı teknoloji firmamız, mühendislik ve
                    yenilikçi çözümlerle iş süreçlerini daha verimli, güvenli ve
                    sürdürülebilir hale getirmektedir. Her projeye özel
                    geliştirdiğimiz sistemlerle, müşterilerimize katma değer
                    sağlayarak sektördeki ihtiyaçlara yön veriyoruz.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Services</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/services/details">Product Engineering</Link>
                  </li>
                  <li>
                    <Link href="/services/details">UX/UI Design</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Big Data Analysis</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Desktop Applications</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Mobile Applications</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about-us">Hakkımızda</Link>
                  </li>
                  <li>
                    <Link href="/contact">İletişim</Link>
                  </li>
                  <li>
                    <Link href="/services">Sektörler</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    ÇAMTEPE Mah. MAHMUT TEVFİK ATAY BULVAR [ 4 A / 1 ] ŞAHİNBEY
                    / GAZİANTEP
                  </li>
                  <li>
                    <span>Email:</span>
                    info@mergenrobotics.com
                  </li>
                  <li>
                    <span>Phone:</span>
                    +44 587 154756
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} Mergen Robotics. All Rights
                  Reserved .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <Image
            src="/images/circle-map.png"
            alt="image"
            width={370}
            height={292}
          />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
