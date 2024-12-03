import Head from "next/head";
import { GetServerSideProps, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "@layouts/Main";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import AboutHeader from "@components/Saas/AboutHeader";
import Community from "@components/Saas/Community";
// import Philosophy from "@components/Saas/Philosophy";
import ChooseUs from "@components/Saas/ChooseUs";
import Clients from "@components/Saas/Clients";
import Numbers from "@components/Saas/Numbers";
import Culture from "@components/Saas/Culture";
import Team from "@components/Saas/Team";
import Contact from "@components/Saas/Contact";
import Testimonials from "@components/Saas/Testimonials";
import AppHead from "@components/Head";
import { useLocales } from "@/locales";
import WPAPI from "@/utils/WPAPI";
import iServices from "@/model/iServices";
import { PAGE_REVALIDATE } from "@/constants/revalidate";
import React from "react";
import iCustomer from "@/model/iCustomer";
import iTestimonials from "@/model/iTestimonials";
import Header from "@components/Style2/Header";

interface IAboutProps {
  services: iServices[]
  customer: iCustomer[]
  testimonials: iTestimonials[]
}


const AboutPage: React.FC<IAboutProps> = ({ services, testimonials, customer }) => {
  const { t } = useLocales(["common"]);
  return (
    <>
      <AppHead title={t("common:about")} />

      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        {/*<Header page="about" title="About Our Company" />*/}
        <main className="about-page style-5">
          <AboutHeader paddingTop />
          <Community />
          {/* <Philosophy /> */}
          {services.length > 0 &&
            <ChooseUs services={services} />
          }
          {
            customer.length > 0 &&
            <Clients padding customer={customer} />
          }
          <Numbers />
          <Team />
          {testimonials.length > 0 &&
            <Testimonials testimonials={testimonials} />
          }
          <Culture />
          <Contact />
        </main>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const wp = WPAPI;

  try {
    const servicesApi = wp.services().param('lang', locale).param('acf_format', 'standard').page(1).perPage(3).get()
    const customerApi = wp.customers().param('lang', locale).param('acf_format', 'standard').page(1).perPage(12).get()
    const testimonialsApi = wp.testimonials().param('lang', locale).param('acf_format', 'standard').page(1).perPage(10).get()

    const [services, customer, testimonials] = await Promise.all([servicesApi, customerApi, testimonialsApi])

    return {
      props: {
        services,
        customer,
        testimonials,
        ...(await serverSideTranslations(locale ?? "vi", [
          "common",
          "services",
          "contact",
          "home",
          "about", 'footer'
        ])),
      },
      revalidate: PAGE_REVALIDATE.ABOUT
    };
  }
  catch (error) {
    console.error('There was an error fetching data from WPAPI:', error);

    return {
      props: {
        services: [],
        customer: [],
        testimonials: [],
        ...(await serverSideTranslations(locale ?? "vi", [
          "common",
          "services",
          "contact",
          "home",
          "about", 'footer'
        ])),
      },
      revalidate: PAGE_REVALIDATE.ABOUT
    };
  }
};

export default AboutPage;
