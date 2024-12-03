import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import testimonials from "@data/Software/testimonials.json";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="testimonials style-3" data-scroll-index="1">
      <div className="container">
        <div className="content section-padding">
          <div className="section-head style-3">
            <h3>
              Loved By Thousand <span>Clients</span>
            </h3>
          </div>
          <div className="testimonial-slider style-3">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
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
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {testimonials.map((testimonial, i) => (
                <SwiperSlide key={i}>
                  <a href="#" className="testi-card style-5">
                    <div className="stars">
                      {Array(testimonial.stars)
                        .fill(null)
                        .map((_, t) => (
                          <i className="fas fa-star" key={t}></i>
                        ))}
                    </div>
                    <div className="text">{testimonial.comment}</div>
                    <div className="user mt-40 text-center">
                      <div className="icon-80 rounded-circle img-cover overflow-hidden m-auto">
                        <img loading="lazy" src={testimonial.author.image} alt="" />
                      </div>
                      <h6>{testimonial.author.name}</h6>
                      <small>{testimonial.author.position}</small>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
        <img
          src="/assets/img/testimonials/testi3_lines.png"
          alt=""
          className="testi_lines w-100"
        />
      </div>
    </section>
  );
};

export default Testimonials;
