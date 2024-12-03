import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

import Parser from "html-react-parser";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { PATH_PAGE } from "@/routes/paths";
import { useLocales } from "@/locales";
import AppImage from "../AppImage";
import React from "react";
import formatPostDate from "@/common/calculateDate";
import iBlog from "@/model/iBlog";

interface BlogSliderProps {
  data: iBlog[];
}

const BlogSlider: React.FC<BlogSliderProps> = ({ data }) => {
  const { t } = useLocales(["common", "post"]);

  return data?.length > 0 && (
    <section className="blog-slider pt-50 pb-50 style-1">
      <div className="container">
        <div className={`section-head text-center mb-60 style-5`}>
          <h2 className="mb-20">
            {t("common:our")} <span> {t("common:journal")} </span>
          </h2>
          <div className="text color-666">{t("post:header.desc")}</div>
        </div>
        <div className="blog-details-slider">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade, Navigation]}
            className="swiper-container"
            slidesPerView={1}
            spaceBetween={0}
            effect="fade"
            speed={1000}
            pagination={{
              el: ".blog-details-slider .swiper-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".blog-details-slider .swiper-button-next",
              prevEl: ".blog-details-slider .swiper-button-prev",
            }}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
          >
            {data.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="content-card">
                  <div className="img overlay">
                    <AppImage
                      src={slide?._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                      alt="..."
                      width={1140} height={500}
                      quality={100}
                      sizes="(max-width: 320px) 150px, (max-width: 480px) 300px, (max-width: 768px) 768px, 1000px"
                    />
                  </div>
                  <div className="info">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="cont">
                          <small className="date small mb-20">
                            <span
                              className="text-uppercase border-end brd-gray pe-3 me-3"
                            >
                              {slide?.type || ""}
                            </span>
                            <i className="far fa-clock me-2"></i>
                            {formatPostDate(slide?.date)} {typeof formatPostDate(slide?.date) === 'number' ? t('common:timer') : ''}
                          </small>
                          <h2 className="title">
                            <Link href={`${PATH_PAGE.post}/${slide?.slug || ""}`}>
                              {Parser(slide?.title?.rendered ?? "")}
                            </Link>
                          </h2>
                          <span className="fs-13px mt-10 text-light text-info">
                            {Parser(slide.excerpt.rendered ?? "")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination"></div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
