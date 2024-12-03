import Link from "next/link";
import React from "react";
import Parser from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import { PATH_PAGE } from "@/routes/paths";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import iBlog from "@/model/iBlog";
import AppImage from "../AppImage";
import formatPostDate from "@/common/calculateDate";
import { useLocales } from "@/locales";

interface PopularPostsProps {
  relatedPosts: iBlog[]
}

const PopularPosts: React.FC<PopularPostsProps> = ({ relatedPosts }) => {
  const { t } = useLocales(["post"]);

  return relatedPosts?.length > 0 && (
    <section className="popular-posts related Posts section-padding pb-100 bg-gray5">
      <div className="container">
        <h5 className="fw-bold text-uppercase mb-50">{t("common:title.relatedPost")}</h5>
        <div className="related-postes-slider position-relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="swiper-container"
            slidesPerView={3}
            spaceBetween={80}
            centeredSlides={relatedPosts.length > 3 ? true : false}
            speed={1000}
            pagination={false}
            navigation={{
              nextEl: ".related-postes-slider .swiper-button-next",
              prevEl: ".related-postes-slider .swiper-button-prev",
            }}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000,
            }}
            loop={relatedPosts.length > 3 ? true : false}
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
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {relatedPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="card border-0 bg-transparent rounded-0 p-0  d-block">
                  <Link
                    href={`${PATH_PAGE.post}/${post?.slug || ''}`}
                    className="img radius-7 overflow-hidden img-cover"
                  >
                    <AppImage
                      src={post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                      alt="..."
                      className="card-img-top"
                      fill
                      objectFit='cover'
                      sizes="(max-width: 320px) 150px, (max-width: 480px) 300px, (max-width: 768px) 768px, 1000px"
                    />
                  </Link>
                  <div className="card-body px-0">
                    <small className="d-block date mt-10 fs-10px fw-bold">
                      <span
                        className={`text-uppercase border-end brd-gray pe-3 me-3 color-main5`}
                      >
                        {post.type || ''}
                      </span>
                      <i className="bi bi-clock me-1"></i>
                      <span className="op-8">
                        {`${formatPostDate(post?.date)} ${typeof formatPostDate(post?.date) === 'number' ? t('common:timer') : ''}`}
                      </span>
                    </small>
                    <h5 className="fw-bold mt-10 title">
                      <Link href={`${PATH_PAGE.post}/${post?.slug || ''}`}>
                        {Parser(post?.title?.rendered ?? '')}
                      </Link>
                    </h5>
                    <span className="small mt-2 op-8">{Parser(post.excerpt.rendered ?? '')}</span>
                    {/* <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                      <div className="l_side d-flex align-items-center">
                        <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                          {post.userImgLetter}
                        </span>
                        <a href="#" className="mt-1">
                          By {post.username}
                        </a>
                      </div>
                      <div className="r-side mt-1">
                        <i className="bi bi-chat-left-text me-1"></i>
                        <a href="#">{post.comments}</a>
                        <i className="bi bi-eye ms-4 me-1"></i>
                        <a href="#">{post.views}</a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default PopularPosts;
