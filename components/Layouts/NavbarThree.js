import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const NavbarThree = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-three">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/mergen logo.png"
                  className="optional-logo"
                  alt="logo"
                  width={250}
                  height={25}
                  style={{ height: "auto" }}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Anasayfa
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${
                        currentPath == "/about-us/" && "active"
                      }`}
                    >
                      Hakkımızda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/services/"
                      className={`nav-link ${
                        currentPath == "/services/" && "active"
                      }`}
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                    >
                      Hizmetler
                    </Link>
                    <div
                      className="dropdown-menu d-flex flex-column gap-1"
                      style={{ width: "275px" }}
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link
                        className={`p-1  rounded dropdown-item ${
                          currentPath == "/services/iot/" && "active text-light"
                        }`}
                        href="/services/iot/"
                      >
                        IoT ve Gömülü Sistem
                      </Link>
                      <Link
                        className={`p-1  rounded dropdown-item ${
                          currentPath == "/services/access-control/" &&
                          "active text-light"
                        }`}
                        href="/services/access-control/"
                      >
                        Geçiş Kontrol Sistemleri
                      </Link>
                      <Link
                        className={`p-1  rounded nav-link dropdown-item ${
                          currentPath == "/services/e-technology/" &&
                          "active text-light"
                        }`}
                        href="/services/e-technology/"
                      >
                        Eğitim Teknolojileri ve STEAM
                      </Link>
                      <Link
                        className={`p-1  rounded nav-link dropdown-item ${
                          currentPath == "/services/web/" && "active text-light"
                        }`}
                        href="/services/web"
                      >
                        Web, Mobil ve Gömülü Yazılım
                      </Link>
                      <Link
                        className={`p-1  rounded nav-link dropdown-item ${
                          currentPath == "/services/pcb/" && "active text-light"
                        }`}
                        href="/services/pcb/"
                      >
                        PCB Tasarım ve Üretim
                      </Link>
                      <Link
                        className={`p-1  rounded nav-link dropdown-item ${
                          currentPath == "/services/3D/" && "active text-light"
                        }`}
                        href="/services/3D/"
                      >
                        3B Tasarım ve Üretim
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/products/"
                      className={`nav-link ${
                        currentPath == "/products/" && "active"
                      }`}
                    >
                      Ürünler
                    </Link>
                    <div
                      className="dropdown-menu d-flex flex-column gap-1"
                      style={{ width: "249px" }}
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link
                        className={`p-1  rounded dropdown-item ${
                          currentPath == "/products/bigpass/" &&
                          "active text-light"
                        }`}
                        href="/products/bigpass/"
                      >
                        BigPass Geçiş Kontrol Sistemi
                      </Link>
                      <Link
                        className={`p-1  rounded nav-link dropdown-item ${
                          currentPath == "/products/automation/" &&
                          "active text-light"
                        }`}
                        href="/products/automation/"
                      >
                        Makine, Otomasyon ve <br />
                        Robotik Sistemler
                      </Link>
                      <Link
                        className={`p-1  rounded nav-link dropdown-item ${
                          currentPath == "/products/learning-robots/" &&
                          "active text-light"
                        }`}
                        href="/products/learning-robots/"
                      >
                        STEAM Eğitim Robotları
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/partner/"
                      className={`nav-link ${
                        currentPath == "/partner/" && "active"
                      }`}
                    >
                      Refernaslarımız
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarThree;
