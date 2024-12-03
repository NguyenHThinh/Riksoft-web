import MainLayout from '@layouts/Main';
//= Components
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import Header from '@components/Style2/Header';
import Details from '@components/Style2/ServicesDetails/Details';
import Contact from '@components/Saas/Contact';
import AppHead from '@/components/Head';
import { GetServerSideProps } from 'next';
import WPAPI from '@/utils/WPAPI';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PATH_PAGE } from '@/routes/paths';
import iServices from '@/model/iServices';
import React from 'react';
import { extractTextFromHtml } from '@/utils/getTextFromHtml';
import Parser from "html-react-parser"

interface ServicesDetailsProps {
  services: iServices
  allServices: iServices[]
}

const ServicesDetails: React.FC<ServicesDetailsProps> = ({ services, allServices }) => {
  const metaData = {
    title: Parser(services?.title?.rendered ?? ""),
    description: extractTextFromHtml(services?.excerpt?.rendered || ""),
    keywords: services?.tags?.length > 0 ? services.tags.map((tag) => Parser(tag.name)) : [],
    // ogImage: services?.acf?.thumbnail?.url,
  };

  return (
    <>
      <AppHead
        title={String(metaData.title)}
        description={metaData.description}
        keywords={metaData.keywords.join(", ")}
      // ogImage={metaData.ogImage} 
      />

      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        <Header page={"services"} title={services?.title?.rendered ?? ""} />
        <main className="services-details-page style-5">
          <Details services={services} allServices={allServices} />
          <Contact />
        </main>
      </MainLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const wp = WPAPI;
  const slug = params?.slug || "";

  try {
    const allServices = await wp
      .services()
      .param("lang", locale)
      .param("acf_format", "standard")
      .get();

    const response = await wp
      .services()
      .param("lang", locale)
      .param("acf_format", "standard")
      .slug(slug)
      .get();

    const services: iServices = response?.length ? response[0] : {};

    if(services?.content?.rendered) {
    return {
      props: {
        ...(await serverSideTranslations(locale ?? "vi", [
          "common",
          "contact",
          "services",
          "footer",
        ])),
        services,
        allServices,
      },
    };
    }else {
      console.error("There was not have services content");

      return {
        redirect: {
          destination: `/${locale}/${PATH_PAGE.services}`,
          permanent: false,
        },
      };
    }

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

export default ServicesDetails;