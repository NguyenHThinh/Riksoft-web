import Link from "next/link";

import { PATH_PAGE } from "@/routes/paths";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Parser from "html-react-parser";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppImage from "@components/AppImage";
import { useLocales } from "@/locales";
import iBlog from "@/model/iBlog";
import React from "react";
import formatPostDate from "@/common/calculateDate";

interface blogProps {
  blogs: iBlog[];
}

const Blog: React.FC<blogProps> = ({ blogs }) => {
  const { t } = useLocales(["common", "home"]);

  const showDetails = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const detailsEl =
      event.currentTarget.querySelector<HTMLDivElement>(".text");
    if (detailsEl) detailsEl.style.display = "block";
  };

  const hideDetails = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const detailsEl =
      event.currentTarget.querySelector<HTMLDivElement>(".text");
    if (detailsEl) detailsEl.style.display = "none";
  };

  return (
    <section
      className="blog section-padding bg-gray style-1"
      data-scroll-index="6"
    >
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60">
              <h6 className="color-main text-uppercase wow fadeInUp">
                {t("common:news")}
              </h6>
              <h2 className="wow fadeInUp">{Parser(t("home:newsSubTitle"))}</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="blog_slider">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              className="swiper-container"
              slidesPerView={3}
              spaceBetween={30}
              lazy={true}
              preloadImages={false}
              speed={1000}
              pagination={false}
              navigation={{
                nextEl: ".blog_slider .swiper-button-next",
                prevEl: ".blog_slider .swiper-button-prev",
              }}
              mousewheel={false}
              keyboard={true}
              autoplay={{
                delay: 4000,
              }}
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
                  slidesPerView: blogs.length < 3 ? 2 : 3,
                },
                1200: {
                  slidesPerView: blogs.length < 4 ? 2 : 4,
                },
              }}
            >
              {blogs.map((blog, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="blog_box"
                    onMouseMove={showDetails}
                    onMouseLeave={hideDetails}
                  >
                    <div className="tags">
                      <a href="#">{blog?.type ? t(`common:${blog.type}`) : ''}</a>
                    </div>
                    <Link href={`${PATH_PAGE.post}/${blog?.slug || ''}`} className="img img-cover">
                      <div className="img">
                        <AppImage
                          src={blog?._embedded["wp:featuredmedia"][0]?.source_url}
                          alt="..."
                          fill
                          sizes="(max-width: 320px) 150px, (max-width: 480px) 300px, (max-width: 768px) 768px, 1000px"
                        />
                      </div>
                      <div className="info">
                        <h6>
                          {Parser(blog?.title?.rendered ?? "")}
                        </h6>
                        <div className="auther">
                          {/* <span>
                          <AppImage
                          className="auther-img"
                          src={blog.userPic}
                          alt=""
                          width={15}
                          height={15}
                          />
                          <small>
                            <a href="#">By {blog.user}</a>
                          </small>
                        </span> */}
                          <span>
                            <i className="bi bi-calendar2"></i>
                            <small>
                              <span>{`${formatPostDate(blog?.date)} ${typeof formatPostDate(blog?.date) === 'number' ? t('common:timer') : ''}`}</span>
                            </small>
                          </span>
                        </div>

                        <div className="text">
                          {Parser(blog?.excerpt?.rendered ?? "")}
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
