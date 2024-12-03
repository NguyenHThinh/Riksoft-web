import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useLocales } from "@/locales";

import AppImage from "@components/AppImage";
import slides from "@data/Saas/culture.json";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Culture = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const { t } = useLocales(['common', 'about'])

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="culture section-padding style-5">
      <div className="section-head text-center mb-70 style-5">
        <h2 className="mb-20">{t("common:culture")}</h2>
        <p>{t('about:descCulture')}</p>
      </div>
      <div className="content">
        <div className="culture-slider position-relative pb-80 style-5">
          {loadSwiper &&
            <Swiper
              modules={[Pagination, Autoplay]}
              className="swiper-container"
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={true}
              speed={1000}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
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
                  slidesPerView: 2,
                },
                787: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="culture-card d-block">
                    <AppImage width={357} height={486} quality={100} src={slide} alt="" />
                    <span className="overlay"></span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
