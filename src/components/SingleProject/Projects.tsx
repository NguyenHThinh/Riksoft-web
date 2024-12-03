import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import Parser from "html-react-parser";

import { PATH_PAGE } from "@/routes/paths";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import iProject from "@/model/iProject";
import AppImage from "../AppImage";
import { useLocales } from "@/locales";
import customLinkPage from "@/utils/customLinkPage";

interface ProjectsProps {
  style: string;
  relatedProjects: iProject[];
}

const Projects: React.FC<ProjectsProps> = ({
  style = "4",
  relatedProjects,
}) => {
  const { t } = useLocales(["portfolio"]);

  return (
    <section className="projects style-6 p-0">
      <div className="content section-padding rounded-0">
        <div className="container">
          <div className={`section-head text-center mb-60 style-${style}`}>
            <h2 className="mb-20">{t("portfolio:relatedProject")}</h2>
            <p>{t("portfolio:relatedProjectDesc")}</p>
          </div>
          <div className="slider-3items slider-style-6">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              className="swiper-container pb-0"
              slidesPerView={3}
              spaceBetween={0}
              speed={1000}
              pagination={{
                el: ".slider-3items .swiper-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".slider-3items .swiper-button-next",
                prevEl: ".slider-3items .swiper-button-prev",
              }}
              mousewheel={false}
              keyboard={true}
              autoplay={{
                delay: 4000,
              }}
              loop={relatedProjects.length > 3 ? true : false}
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
                  slidesPerView: relatedProjects.length < 3 ? 2 : 3,
                },
                1200: {
                  slidesPerView: relatedProjects.length < 4 ? 2 : 3,
                },
              }}
            >
              {relatedProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="project-card style-6"
                    style={{ direction: "ltr" }}
                  >
                    <div className="img">
                      {/* <img loading="lazy" src={project.image} alt="" /> */}
                      <AppImage
                        src={project?.acf?.thumbnail?.url}
                        alt={project?.acf?.thumbnail?.alt}
                        width={project?.acf?.thumbnail?.width}
                        height={project?.acf?.thumbnail?.height}
                      />
                    </div>
                    <div className="info">
                      <h3 className="title">
                        <Link href={customLinkPage(project)}>
                          {Parser(project?.title?.rendered ?? "")}
                        </Link>
                      </h3>
                      <small className="color-main6">
                        {project.project_categories.map((cats, i) => (
                          <span key={i}>
                            <a href="#">{Parser(cats?.name ?? "")}</a>
                            {i !== project.project_categories.length - 1 && (
                              <> &&nbsp;</>
                            )}
                          </span>
                        ))}
                      </small>
                      <div className="text">
                        {Parser(project?.excerpt?.rendered ?? "")}
                      </div>
                      <div className="tags">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="me-1">
                            <a href="#">{Parser(tag?.name ?? "")}</a>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
