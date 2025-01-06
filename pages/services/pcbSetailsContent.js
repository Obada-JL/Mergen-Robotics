import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function PcbDetailsContent() {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="w-50 m-5">
          <DotLottieReact
            src="https://lottie.host/b266d517-9843-4208-a0bf-72ff22f0137d/ZuIy9zepQZ.json"
            loop
            autoplay
          />
        </div>
        <h2 className="text-center">
          Bu Sayfa Yenileme Aşamasındadır. <br /> Lütfen daha sonra tekrar
          deneyiniz.
        </h2>
      </div>
      {/* <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Incredible Infrastructure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>

            <div className="services-details-image">
              <Image
                src="/images/services-details/service-details1.jpg"
                alt="image"
                width={660}
                height={530}
              />
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image mb-30">
              <Image
                src="/images/services-details/service-details2.jpg"
                alt="image"
                width={660}
                height={530}
              />
            </div>

            <div className="services-details-desc">
              <h3>Working Process</h3>
              <p>
                Theddddre are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable.
              </p>

              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo.
                </li>
                <li>But I must explain to you how all this mistaken idea of</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
