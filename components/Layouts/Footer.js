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
                      width={180}
                      height={37}
                      style={{ height: "auto" }}
                    />
                  </Link>
                  <p>
                    Mergen Robotics, yenilikçi Ar-Ge projeleri ve yüksek katma
                    değerli yerli teknolojik çözümleriyle faaliyet gösterdiği
                    alanlarda, hızlı ve dinamik kadrosuyla ihtiyaçlara özel
                    çözümler sunar.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a
                      href="https://www.facebook.com/mergenrobotics"
                      target="_blank"
                    >
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/mergenrobotics"
                      target="_blank"
                    >
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mergenrobotics"
                      target="_blank"
                    >
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/mergenrobotics/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        class="bi bi-linkedin text-light"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
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
                <h3>Hizmetler</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/services/details">IoT ve Gömülü Sistem</Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      Geçiş Kontrol Sistemleri
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      Eğitim Teknolojileri ve STEAM
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">
                      Web, Mobil ve Gömülü Yazılım
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">PCB Tasarım ve Üretim</Link>
                  </li>
                  <li>
                    <Link href="/services/details">3B Tasarım ve Üretim</Link>
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
                <h3>Bağlantılar</h3>

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
                <h3>İletişim</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Adres:</span>
                    Gaziantep Teknopark - Çamtepe Mah. Mahmut Tevfik Atay
                    Bulvarı, No: 4C/205 Şahinbey/Gaziantep
                  </li>
                  <li>
                    <span>Email:</span>
                    info@mergenrobotics.com
                  </li>
                  <li>
                    <span>Telefon:</span>
                    +90 539 9314439
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
                  Copyright &copy;{currentYear} Mergen Robotics. Tüm hakları
                  saklıdır.
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
