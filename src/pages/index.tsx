import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import Header from "@components/Digital/Header";
import About from "@components/Software/About";
import AboutDigital from "@components/Digital/About";
import Services from "@components/Digital/Services";
import ChooseUs from "@components/Digital/ChooseUs";
import Portfolio from "@components/Digital/Portfolio";
import Testimonials from "@components/Digital/Testimonials";
import Team from "@components/Digital/Team";
import Blog from "@components/Digital/Blog";
import Contact from "@components/Digital/Contact";
import AppHead from "@components/Head";
import PreLoader from "@components/PreLoader";
import Clients from "@components/Saas/Clients";
import React from "react";
import WPAPI from "@/utils/WPAPI";
import iBlog from "@/model/iBlog";
import iServices from "@/model/iServices";
import iProject from "@/model/iProject";
import { PAGE_REVALIDATE } from "@/constants/revalidate";
import iCustomer from "@/model/iCustomer";

interface HomeProps {
  blogs: iBlog[];
  services: iServices[];
  projects: iProject[];
  customer: iCustomer[]
}

const HomeDigitalAgency: React.FC<HomeProps> = ({ blogs, services, projects, customer }) => {
  return (
    <>
      <AppHead />
      <PreLoader />
      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        <main>
          <Header />
          {/* all services */}
          {services.length > 0 &&
            <Services services={services} />
          }
          <AboutDigital />
          {/* mission & vision & coreValue */}
          {/*<About />*/}
          {/* show technology */}
          <ChooseUs />
          {
            projects.length > 0 &&
            <Portfolio projects={projects} />
          }
          {
            customer.length > 0 &&
            <Clients padding customer={customer} />
          }
          {/*<Testimonials />*/}
          {/*<Team />*/}
          {blogs?.length > 0 &&
            <Blog blogs={blogs} />
          }

          <Contact />
        </main>
      </MainLayout>
    </>
  );
};


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const wp = WPAPI;

  try {
    const responseApi = wp.posts().param('lang', locale).embed().page(1).perPage(20).get()
    const servicesApi = wp.services().param('lang', locale).param('acf_format', 'standard').page(1).perPage(6).get()
    const projectsApi = wp.projects().param('lang', locale).param('acf_format', 'standard').page(1).perPage(15).get()
    const customerApi = wp.customers().param('lang', locale).param('acf_format', 'standard').page(1).perPage(12).get()

    const [response, services, projects, customer] = await Promise.all([responseApi, servicesApi, projectsApi, customerApi])

    return {
      props: {
        blogs: response,
        services,
        projects,
        customer,
        ...(await serverSideTranslations(locale ?? "vi", [
          "common",
          "contact",
          "about",
          "services",
          "home",
          "footer"
        ])),
      },
      revalidate: PAGE_REVALIDATE.HOME
    };
  }
  catch (error) {
    console.error('There was an error fetching data from WPAPI:', error);

    return {
      props: {
        blogs: [],
        services: [],
        projects: [],
        customer: [],
        ...(await serverSideTranslations(locale ?? "vi", [
          "common",
          "contact",
          "about",
          "services",
          "home",
          "footer"
        ])),
      },
      revalidate: PAGE_REVALIDATE.HOME
    };
  }
};

export default HomeDigitalAgency;
