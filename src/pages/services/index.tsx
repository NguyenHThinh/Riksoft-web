import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Features from "@components/Saas/Features";
import Services from "@components/Saas/Services";
import About from "@components/Saas/About";
import Testimonials from "@components/Saas/Testimonials";
import Pricing from "@components/Saas/Pricing";
import MainLayout from "@/layouts/Main";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import AppHead from "@/components/Head";
import { useLocales } from "@/locales";
import WPAPI from "@/utils/WPAPI";
import { PATH_PAGE } from "@/routes/paths";
import iServices from "@/model/iServices";
import { PAGE_REVALIDATE } from "@/constants/revalidate";
import Contact from "@components/Saas/Contact";
import ScreenShots from "@components/HelpDesk/ScreenShots";
import ScreenShotApp from "@components/App/Screenshots";

interface ServicesProps {
  services: iServices[];
}

const PageServices: React.FC<ServicesProps> = ({ services }) => {
  const { t } = useLocales(["common", "services"]);

  return (
    <>
      <AppHead title={t("common:services")} />

      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        <main className="services-page style-5">
          <Features isServices services={services} />
          {/*<ScreenShots />*/}
          {/*<Services />*/}
          <About noPaddingTop />
          <ScreenShotApp />

          {/*<Testimonials />*/}
          {/*<Pricing />*/}
          <Contact />
        </main>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const wp = WPAPI;
  try {
    const services = await wp
      .services()
      .param("lang", locale)
      .param("acf_format", "standard")
      .page(1)
      .perPage(12)
      .get();

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "vi", [
          "common",
          "services",
          "footer",
          "about",
          "contact",
        ])),
        services,
      },
      revalidate: PAGE_REVALIDATE.SERVICES,
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

export default PageServices;
