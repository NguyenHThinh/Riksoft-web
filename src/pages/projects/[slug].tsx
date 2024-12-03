//= Layout
import MainLayout from "@layouts/Main";
//= Components
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import About from "@components/SingleProject/About";
import Challenge from "@components/SingleProject/Challenge";
import Screenshots from "@components/App/Screenshots";
import About2 from "@components/SingleProject/About2";
import Projects from "@components/SingleProject/Projects";
import AppHead from "@/components/Head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import WPAPI from "@/utils/WPAPI";
import iProject from "@/model/iProject";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Parser from "html-react-parser";
import { PATH_PAGE } from "@/routes/paths";
import { PAGE_REVALIDATE } from "@/constants/revalidate";
import formatPostDate from "@/common/calculateDate";
import { useLocales } from "@/locales";
import { extractTextFromHtml } from "@/utils/getTextFromHtml";
import Page404 from "../404";

interface DetailProjectProps {
  project: iProject;
  relatedProjects: iProject[];
}

const DetailProject: React.FC<DetailProjectProps> = ({
  project,
  relatedProjects,
}) => {
  const { t } = useLocales(["common"]);

  const metaData = {
    title: Parser(project?.title?.rendered ?? ""),
    description: extractTextFromHtml(project?.excerpt?.rendered || ""),
    keywords:
      project?.tags?.length > 0
        ? project?.tags.map((tag) => Parser(tag.name ?? ""))
        : [],
    ogImage: project?.acf?.thumbnail?.url,
  };

  return project?.id ? (
    <>
      <AppHead
        title={String(metaData.title)}
        description={metaData.description}
        keywords={metaData.keywords.join(", ")}
        ogImage={metaData.ogImage}
      />

      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        <main className="single-project style-5">
          <section className="all-news pt-50 blog bg-transparent style-3">
            <div className="container">
              {/* <About style="5" />
              <Challenge style="5" />
              <Screenshots />
              <About2 style="5" /> */}
              <div className="section-head text-center mb-60 style-5">
                <h2 className="mb-20 color-000">
                  {Parser(project?.title?.rendered ?? "")}
                </h2>
                <small className="d-block date text">
                  <span
                    className={`text-uppercase border-end brd-gray pe-3 me-3 color-main5 fw-bold`}
                  >
                    {project?.type ? t(`common:${project?.type}`) : ""}
                  </span>
                  <i className="bi bi-clock me-1"></i>
                  <span className="op-8 ms-1">{`${formatPostDate(project?.date)} ${typeof formatPostDate(project?.date) === "number" ? t("common:timer") : ""}`}</span>
                </small>
              </div>
              <div className="wordpress-content">
                {Parser(project?.content?.rendered ?? "")}
              </div>
            </div>
            {relatedProjects?.length > 0 && (
              <Projects style="5" relatedProjects={relatedProjects} />
            )}
          </section>
        </main>
      </MainLayout>
    </>
  ) : (
    <Page404 />
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const wp = WPAPI;
  const slug = params?.slug || "";

  try {
    const response = await wp
      .projects()
      .param("lang", locale)
      .param("acf_format", "standard")
      .slug(slug)
      .embed()
      .get();
    const project = response?.length ? response[0] : {};

    const slugCats = project?.project_categories?.map(
      (category: { [key: string]: string | number }) => category.slug
    );

    let relatedProjects =
      slugCats?.length > 0
        ? await wp
            .projects()
            .param("lang", locale)
            .param("project_categories_slug", slugCats.join(","))
            .param("acf_format", "standard")
            .page(1)
            .perPage(20)
            .embed()
            .get()
        : await wp
            .projects()
            .param("lang", locale)
            .param("acf_format", "standard")
            .page(1)
            .perPage(20)
            .embed()
            .get();

    // clear show this post on relatedPosts
    relatedProjects = relatedProjects.filter((relatedPost: iProject) => relatedPost.id !== project.id);

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "vi", [
          "common",
          "portfolio",
          "services",
          "footer",
        ])),
        project,
        relatedProjects,
      },
    };
  } catch (error) {
    console.error("There was an error fetching data from WPAPI:", error);

    return {
      redirect: {
        destination: `/${locale}${PATH_PAGE.home}`,
        permanent: false,
      },
    };
  }
};

export default DetailProject;
