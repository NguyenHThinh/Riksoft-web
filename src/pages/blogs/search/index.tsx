import { GetServerSideProps, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "@layouts/Main";
// import AllNews from "@components/Blog/AllNews";
import AllNews from "@components/SearchBlog/AllNews";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import AppHead from "@/components/Head";
import { useLocales } from "@/locales";
import WPAPI from "@/utils/WPAPI";
import { PATH_PAGE } from "@/routes/paths";
import { TIME_REVALIDATE } from "@/constants/revalidate";

const PagePosts = ({ sidebarData }: any) => {
    const { t } = useLocales(["common"]);

    return (
        <>
            <AppHead title={t("common:blog")} />

            <MainLayout scrollTopText>
                <TopNav />
                <Navbar />
                <main className="blog-page style-5 color-5">
                    {/* <AllNews isWide={false} leftSidebar={false} style="5" data={data} paging={paging} sidebarData={sidebarData} /> */}
                    <AllNews isWide={false} leftSidebar={false} style="5" sidebarData={sidebarData} />
                </main>
            </MainLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const wp = WPAPI;

    try {
        const tags = await wp.tags().param('lang', locale).orderby( 'count').order( 'desc' ).perPage(15).get()
        const categories = await wp.categories().param('lang', locale).orderby( 'count').order( 'desc' ).perPage(15).get()

        const sidebarData = {
            categories: categories,
            instagram: [],
            recentPosts: [],
            tags: tags,
        }

        return {
            props: {
                ...(await serverSideTranslations(locale ?? 'vi', ['common', 'services', 'post', 'footer', 'about'])),
                sidebarData
            },
            revalidate: TIME_REVALIDATE.TENMINUTE
        };
    } catch (error) {
        console.error('There was an error fetching data from WPAPI:', error);

        return {
            redirect: {
                destination: `/${locale}/${PATH_PAGE.home}`,
                permanent: false,
            },
        };
    }
};

export default PagePosts;
