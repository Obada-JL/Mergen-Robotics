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
                    Mergen Robotics, yenilikçi Ar-Ge projeleri ve yüksek katma değerli yerli 
                    teknolojik çözümleriyle faaliyet gösterdiği alanlarda, 
                    hızlı ve dinamik kadrosuyla ihtiyaçlara özel çözümler sunar.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/mergenrobotics" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/mergenrobotics" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mergenrobotics" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/mergenrobotics" target="_blank">
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
                <h3>Hizmetler</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/services/details">IoT ve Gömülü Sistem</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Geçiş Kontrol Sistemleri</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Eğitim Teknolojileri ve STEAM</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Web, Mobil ve Gömülü Yazılım</Link>
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
                    Gaziantep Teknopark - Çamtepe Mah. Mahmut Tevfik Atay Bulvarı, No: 4C/205                                      
                    Şahinbey/Gaziantep
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
                  Copyright &copy;{currentYear} Mergen Robotics. Tüm hakları saklıdır.
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
