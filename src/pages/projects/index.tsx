import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "@layouts/Main";
import Projects from "@components/Portfolio/Projects";
import Download from "@components/Portfolio/Download";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import { useLocales } from "@/locales";
import AppHead from "@/components/Head";
import WPAPI from "@/utils/WPAPI";
import React from "react";
import iProjectCate from "@/model/iProjectCate";
import { PATH_PAGE } from "@/routes/paths";
import { PAGE_REVALIDATE } from "@/constants/revalidate";
import { ParsedUrlQuery } from "querystring";

interface ProjectsPageProps {
  projectCate: iProjectCate[]
}

const PageProject: React.FC<ProjectsPageProps> = ({ projectCate }) => {
  const { t } = useLocales(["common"]);

  return (
    <>
      <AppHead title={t("common:portfolio")} />

      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        <main className="portfolio-page style-1">
          <Projects projectCate={projectCate} />
          <Download />
        </main>
      </MainLayout>
    </>
  );
};


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const wp = WPAPI;

  try {
    const projectCate = await wp.projectCate().param('lang', locale).param('acf_format', 'standard').embed().get()

    return {
      props: {
        projectCate,
        ...(await serverSideTranslations(locale ?? "vi", [
          "common",
          "services",
          "portfolio", 
          "footer",
        ])),
      },
      revalidate: PAGE_REVALIDATE.PROJECTS
    };
  }
  catch (error) {
    console.error('There was an error fetching data from WPAPI:', error);

    return {
      redirect: {
        destination: `/${locale}${PATH_PAGE.home}`,
        permanent: false,
      },
    };
  }
};

export default PageProject;
