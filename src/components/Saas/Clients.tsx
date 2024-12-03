import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Parser from "html-react-parser";

import "swiper/css";
import "swiper/css/autoplay";
import AppImage from "../AppImage";
import { useLocales } from "@/locales";
import iCustomer from "@/model/iCustomer";

interface ClientsProps {
  padding: boolean;
  customer: iCustomer[]
}

const Clients: React.FC<ClientsProps> = ({ padding, customer }) => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const { t } = useLocales(["home"]);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section
      className={`clients style-5 ${padding ? "section-padding" : "pb-100"}`}
      data-scroll-index="2"
    >
      <div className="section-head text-center mb-40 style-5">
        <h2 className="mb-20">{Parser(t("home:trustedByManyBusiness"))}</h2>
        <p>{t("home:clientsSubtitle")}</p>
      </div>
      <div className="content">
        <div className="clients-slider5">
          {loadSwiper && (
            <Swiper
              modules={[Autoplay]}
              className="swiper-container"
              spaceBetween={0}
              centeredSlides={true}
              slidesPerView={5}
              speed={6000}
              lazy={true}
              preloadImages={false}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
              loop={true}
              allowTouchMove={false}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 2,
                },
                787: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              {customer.slice(0, Math.ceil(customer.length/2)).map((client, i) =>  (
                  <SwiperSlide key={i}>
                    <a href={client?.acf?.website_url || ""} target="_blank" className="img">
                      <AppImage
                        src={client?.acf?.thumbnail ?? ""}
                        alt={""}
                        width={232}
                        height={90}
                        className="AppImage"
                        style={{
                          minHeight: "30px",
                          width: "auto",
                        }}
                        quality={100}
                      />
                    </a>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>

        <div className="clients-slider5">
          {loadSwiper && (
            <Swiper
              modules={[Autoplay]}
              direction="horizontal"
              className="swiper-container"
              spaceBetween={0}
              centeredSlides={true}
              slidesPerView={5}
              lazy={true}
              preloadImages={false}
              speed={6000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
                reverseDirection: true,
              }}
              loop={true}
              allowTouchMove={false}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 2,
                },
                787: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              {customer.slice(Math.ceil(customer.length/2), customer.length).map((client, i) => (
                  <SwiperSlide key={i}>
                    <a href={client?.acf?.website_url || ""} target="_blank" className="img">
                      <AppImage
                        width={232}
                        height={90}
                        src={client?.acf?.thumbnail ?? ""}
                        alt=""
                        className="AppImage"
                        style={{
                          minHeight: "30px",
                          width: "auto",
                        }}
                        quality={100}
                      />
                    </a>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
