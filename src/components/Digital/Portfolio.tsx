import Link from "next/link";
import { useEffect, useState } from "react";
import { PATH_PAGE } from "@/routes/paths";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import Parser from 'html-react-parser'

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppImage from "@components/AppImage";
import { useLocales } from "@/locales";
import iProject from "@/model/iProject";
import customLinkPage from "@/utils/customLinkPage";

const Portfolio = ({ projects }: { projects: iProject[] }) => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const { t } = useLocales(["home"]);
  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section
      className="portfolio section-padding bg-gray style-1"
      data-scroll-index="4"
    >
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60">
              <h6 className="color-main text-uppercase wow fadeInUp">
                {t("home:portfolio")}
              </h6>
              <h2 className="wow fadeInUp">{t("home:portfolioSuccess")}</h2>
            </div>
          </div>
        </div>
        <div className="content wow fadeIn slow">
          <div className="portfolio-slider">
            {loadSwiper && (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                className="swiper-container"
                slidesPerView={3}
                spaceBetween={30}
                speed={1000}
                lazy={true}
                preloadImages={false}
                pagination={{
                  el: ".portfolio-slider .swiper-pagination",
                }}
                navigation={{
                  nextEl: ".portfolio-slider .swiper-button-next",
                  prevEl: ".portfolio-slider .swiper-button-prev",
                }}
                mousewheel={false}
                keyboard={true}
                autoplay={{
                  delay: 4000,
                }}
                loop={projects.length > 3 ? true : false}
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
                    slidesPerView: 3,
                  },
                }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <Link href={customLinkPage(project)} className="flex-card">
                      <div className="portfolio-card ">
                        <div className="img img-cover">
                          <AppImage
                            src={project?.acf?.thumbnail?.url}
                            alt={project?.acf?.thumbnail?.alt ?? ''}
                            fill
                            objectFit='cover'
                          />
                        </div>
                        <div className="info">
                          <h5>
                            {Parser(project?.title?.rendered ?? '')}
                          </h5>
                          <small className="d-block color-main text-uppercase">
                            {project?.project_categories.length > 0 && project.project_categories.map((cate, i) => (
                              <a href="#" className="me-1" key={i}>
                                {Parser(cate?.name ?? '')}
                              </a>
                            ))}
                          </small>
                          <div className="text">{Parser(project?.excerpt?.rendered ?? '')}</div>
                          <div className="tags">
                            {project?.tags.length > 0 && project.tags.map((tag, i) => (
                              <a href="#" className="me-1" key={i}>
                                {Parser(tag?.name ?? '')}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <div className="swiper-pagination"></div>

            {
              projects.length > 3 &&
              <>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </>
            }
          </div>
        </div>
      </div>
      <AppImage
        src="/assets/img/projects/prog/shap_r.png"
        alt=""
        width={500}
        height={400}
        className="shap_r"
      />
      <AppImage
        src="/assets/img/projects/prog/shap_l.png"
        alt=""
        width={500}
        height={400}
        className="shap_l"
      />
    </section >
  );
};

export default Portfolio;
