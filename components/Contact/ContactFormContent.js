import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const ContactFormContent = () => {
  return (
    <>
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>Bize Ulaşın</span>
            <h2>İstekleriniz için Bize Mesaj Gönderin</h2>
            <p>
             İstek, proje ve işbirlikleriniz için bize aşağıdaki formu kullanarak ulaşabilirsiniz.
            </p>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  {/* <Image
                    src="/images/contact.png"
                    alt="image"
                    width={395}
                    height={480}
                  /> */}
                  <script src="https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js"></script>
                  <iframe
                    src="https://lottie.host/embed/66126a9b-43a7-4083-887e-be5eb3c28e66/FgAi5puGGZ.json"
                    background="##FFFFFF"
                    speed="1"
                    style={{ width: "450px", height: "450px" }}
                    loop
                    controls
                    autoplay
                    direction="1"
                    mode="normal"
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <h3>Telefon veya Eposta ile bize ulaşabilirsiniz.</h3>
              <h2>
                <span className="number">+90 539 931 4439</span>
                <span className="or">VEYA</span>
                <span className="email">info@mergenrobotics.com</span>
              </h2>

              <ul className="social">
                <li>
                  <a
                    href="https://twitter.com/mergenrobotics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/mergenrobotics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/mergenrobotics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/mergenrobotics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mergenrobotics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
