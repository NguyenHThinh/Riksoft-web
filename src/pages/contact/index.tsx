import { GetStaticProps } from "next";

//= Components
import Map from "@components/Contact/Map";
import MainLayout from "@layouts/Main";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppHead from "@components/Head/AppHead";
import Contact from "@/components/Saas/Contact";
import Community from "@components/Contact/Comunity";

const PageContact5 = () => {
  return (
    <>
      <AppHead />

      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        <main className="contact-page style-5">
          <Community />
          <Contact />
          <Map />
        </main>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "vi", [
        "common",
        "contact",
        "services", 'footer', "about"
      ])),
    },
  };
};

export default PageContact5;
