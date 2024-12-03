import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";


import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import AppImage from "../AppImage";
import { useLocales } from "@/locales";
import { useEffect, useState } from "react";
import iTestimonials from "@/model/iTestimonials";
import Parser from "html-react-parser"

const Testimonials = ({testimonials}: {testimonials: iTestimonials[]}) => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const { t } = useLocales(['about'])

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section
      className="testimonials section-padding bg-gray5 style-5"
      data-scroll-index="5"
    >
      <div className="container">
        <div className="section-head text-center mb-60 style-5">
          <h2 className="mb-20">{t('about:testimonials.title')}</h2>
          <p>
            {t('about:testimonials.desc')}
          </p>
        </div>
      </div>
      <div className="content">
        <div className="testimonial-slider position-relative style-5">
          {loadSwiper &&
            <Swiper
              modules={[Pagination, Autoplay]}
              className="swiper-container pb-70"
              spaceBetween={0}
              slidesPerView={4}
              speed={1000}
              pagination={{
                el: ".testimonial-slider.style-5 .swiper-pagination",
                clickable: true,
              }}
              navigation={false}
              mousewheel={false}
              keyboard={true}
              autoplay={{
                delay: 4000,
              }}
              loop={testimonials.length > 4 ? true : false}
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
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {testimonials.map((testimonial, i) => (
                <SwiperSlide key={i} className="m-center">
                  <a href="#" className="testi-card style-5">
                    <div className="stars">
                      {Array(testimonial?.acf?.stars ?? 5)
                        .fill('')
                        .map((_, t) => (
                          <i className="fas fa-star" key={t}></i>
                        ))}
                    </div>
                    <div className="text">{Parser(testimonial?.acf?.content ?? "")}</div>
                    <div className="user mt-40 text-center">
                      {testimonial?.acf?.avatar && <div className="icon-80 rounded-circle img-cover overflow-hidden m-auto">
                        <AppImage fill quality={100} src={testimonial?.acf?.avatar} alt="" />
                      </div> }
                      <h6>{Parser(testimonial?.title?.rendered ?? "")}</h6>
                      <small>{Parser(testimonial?.acf?.job_title)}</small>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
