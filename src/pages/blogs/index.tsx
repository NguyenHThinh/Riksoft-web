import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "@layouts/Main";
import AllNews from "@components/Blog/AllNews";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import AppHead from "@/components/Head";
import { useLocales } from "@/locales";
import WPAPI from "@/utils/WPAPI";
import { PATH_PAGE } from "@/routes/paths";

const PagePosts = ({ data, paging, sidebarData }: any) => {
  const { t } = useLocales(["common"]);

  return (
    <>
      <AppHead title={t("common:blog")} />

      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        <main className="blog-page style-5 color-5">
          {/* <BlogSlider data={data} />
          <PopularPosts data={data} /> */}
          <AllNews isWide={false} leftSidebar={false} style="5" data={data} paging={paging} sidebarData={sidebarData} />
        </main>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
  const wp = WPAPI;

  try {
    const tags = await wp.tags().param('lang', locale).orderby( 'count').order( 'desc' ).perPage(15).get()
    const categories = await wp.categories().param('lang', locale).orderby( 'count').order( 'desc' ).perPage(15).get()
    const response = await wp.posts().param('lang', locale).embed().page(query.page || 1).perPage(30).get()

    const sidebarData = {
      categories: categories,
      instagram: [],
      recentPosts: [],
      tags: tags,
    }
    // const paging = { total: response?._paging?.total || 0, totalPages: 20, currentPage: 15 }
    const paging = { total: response?._paging?.total || 0, totalPages: response?._paging?.totalPages || 0, currentPage: query?.page || 1 }

    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'vi', ['common', 'services', 'post', 'footer', 'about'])),
        data: response,
        paging,
        sidebarData
      }
    };
  } catch (error) {
    console.error('There was an error fetching data from WPAPI:', error);

    return {
      redirect: {
        destination: `/${locale}${PATH_PAGE.home}`,
        permanent: false,
      },
    };
  }
};

export default PagePosts;
