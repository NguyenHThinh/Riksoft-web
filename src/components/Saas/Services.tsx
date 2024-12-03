import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { PATH_PAGE } from "@/routes/paths";
import services from "@data/Saas/services.json";
import { useLocales } from "@/locales";
import Parser from "html-react-parser";

import "swiper/css";
import "swiper/css/autoplay";

const Services = () => {
  const { t } = useLocales(['services'])

  return (
    <section className="services section-padding bg-white pb-50 style-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-head text-center mb-60 style-5">
              <h2 className="mb-20">{t('services:topServices')}</h2>
                {Parser(t('services:topServicesDesc'))}
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="services-slider position-relative style-6">
          <Swiper
            modules={[Autoplay]}
            className="swiper-container"
            slidesPerView={6}
            centeredSlides={true}
            spaceBetween={0}
            speed={1000}
            pagination={false}
            navigation={false}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              787: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={PATH_PAGE.services}
                  className="service-card style-6"
                >
                  <div className="icon">
                    <img loading="lazy" src={service.img} alt="" />
                  </div>
                  <div className="info">
                    <h5>{service.info}</h5>
                    <div className="text">{service.text}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
