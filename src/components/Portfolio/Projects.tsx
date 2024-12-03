import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { useLocales } from "@/locales";
import { PATH_PAGE } from "@/routes/paths";
import Parser from "html-react-parser";
import AppImage from "@components/AppImage";
import Pagination from "@components/Blog/AllNews/Pagination";
import { useRouter } from "next/router";
import iProject from "@/model/iProject";
import iProjectCate from "@/model/iProjectCate";
import WPAPI from "@/utils/WPAPI";
import customLinkPage from "@/utils/customLinkPage";

interface ProjectsProps {
  projectCate: iProjectCate[]
}

const Projects: React.FC<ProjectsProps> = ({ projectCate }) => {
  const [dataProjects, setDataProjects] = useState<iProject[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [dataPaging, setDataPaging] = useState<{
    total: number | string
    totalPages: number | string
    currentPage: number | string
  }>({
    total: 0,
    totalPages: 0,
    currentPage: 1
  })
  const { t } = useLocales(["common", "portfolio"]);

  const router = useRouter();
  const { cats, page } = router?.query

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await (
          cats
            ? WPAPI.projects().param('lang', router.locale).param('acf_format', 'standard').param('project_categories_slug', cats).page(page || 1).perPage(6).embed()
            : WPAPI.projects().param('lang', router.locale).param('acf_format', 'standard').page(page || 1).perPage(6).embed()
        );


        if (response && response.length > 0) {
          setDataProjects(response);
          setDataPaging({
            total: response._paging?.total || 0,
            totalPages: response._paging?.totalPages || 0,
            currentPage: page ? String(page) : 1
          });
        } else {
          setDataProjects([])
          setDataPaging({
            total: 0,
            totalPages: 0,
            currentPage: 1
          })
        }
        setIsSearching(false)
      } catch (error) {
        console.error('There was an error fetching data from WPAPI:', error);
        router.push(PATH_PAGE.home);
      }
    };

    fetchData();
  }, [router.query, router.locale]);

  const handleFilterClick = (filterSlug: string) => {
    setIsSearching(true)
    const newQuery = filterSlug === "all" ? {} : { cats: filterSlug };

    router.replace(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined, // asPath
      { scroll: false } // options
    );
  };

  const handlePageClick = (page: number) => {
    const newQuery = { ...router.query };

    if (page === 1) {
      delete newQuery.page;
    } else {
      newQuery.page = String(page);
    }

    page &&
      router.replace(
        {
          pathname: router.pathname,
          query: newQuery,
        },
        undefined, // asPath
        { scroll: false } // options
      );
  };

  return (
    <section className={`portfolio-projects section-padding style-1`}>
      <div className="container">
        <div className={`section-head text-center style-5 mb-60`}>
          <h2 className="mb-20">{Parser(t("portfolio:header.title"))}</h2>
          <p>{t("portfolio:header.desc")}</p>
        </div>
        <div className="controls">
          <button
            type="button"
            className={`control ${!cats && "active"}`}
            onClick={() => {
              handleFilterClick("all");
            }}
          >
            {t("common:all")}
          </button>
          {projectCate?.length > 0 &&
            projectCate.map((filter, i) => (
              <button
                key={i}
                type="button"
                className={`control ${filter?.slug === cats && "active"}`}
                onClick={() => {
                  handleFilterClick(filter?.slug);
                }}
              >
                {filter?.name || ""}
              </button>
            ))}
        </div>
        <section className="portfolio style-1">
          <div className="content">
            {isSearching
              ?
              <div className="loading_wrapper">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              :
              <div className="row mix-container rowgap-50">
                {dataProjects?.length > 0 &&
                  dataProjects.map((project, i) => (
                    <div
                      className={`col-lg-4 mix wow fadeInUp`}
                      data-wow-delay="0s"
                      key={i}
                    >
                      <div
                        className={`portfolio-card`}
                      >
                        <Link
                          href={customLinkPage(project)}
                          className="flex-card"
                        >
                          <div className="img img-cover">
                            <AppImage
                              src={project?.acf?.thumbnail?.url}
                              alt={project?.acf?.thumbnail?.alt ?? ""}
                              fill
                              quality={100}
                            />
                          </div>
                          <div className="info">
                            <h5>
                              {Parser(project?.title?.rendered ?? "")}
                            </h5>
                            <small className="d-block color-main text-uppercase">
                              {project?.project_categories.length > 0 &&
                                project.project_categories.map((cate, i) => (
                                  <a href="#" className="me-1" key={i}>
                                    {Parser(cate.name ?? "")}
                                  </a>
                                ))}
                            </small>
                            <div className="text">
                              {Parser(project?.excerpt?.rendered ?? "")}
                            </div>
                            <div className="tags">
                              {project.tags.length > 0 &&
                                project.tags.map((tag, i) => (
                                  <a key={i} href="#" className="me-1">
                                    {Parser(tag.name ?? "")}
                                  </a>
                                ))}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))
                }
              </div>
            }
          </div>
          <div className="text-center">
            {Number(dataPaging?.totalPages) > 1 && (
              <Pagination
                style="5"
                paging={dataPaging}
                onChangePage={handlePageClick}
              />
            )}
          </div>
        </section>
      </div >
    </section >
  );
};

export default Projects;
