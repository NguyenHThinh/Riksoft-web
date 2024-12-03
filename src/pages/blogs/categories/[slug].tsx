import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "@layouts/Main";
import AllNews from "@components/Blog/AllNews";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import AppHead from "@/components/Head";
import { useLocales } from "@/locales";
import WPAPI from "@/utils/WPAPI";
import iBlog from "@/model/iBlog";
import { PATH_PAGE } from "@/routes/paths";

interface PageCategoriesProps {
    data: iBlog[],
    paging: {
        total: number
        totalPages: number
        currentPage: number
    }
    sidebarData: any
}

const PageCategories = ({ data, paging, sidebarData }: any) => {
    const { t } = useLocales(["common"]);

    return (
        <>
            <AppHead title={t("common:blog")} />

            <MainLayout scrollTopText>
                <TopNav />
                <Navbar />
                <main className="blog-page style-5 color-5">
                    <AllNews isWide={false} leftSidebar={false} style="5" data={data} paging={paging} sidebarData={sidebarData} />
                    {/* <AllNews isWide={false} leftSidebar={false} style="5" sidebarData={sidebarData} /> */}
                </main>
            </MainLayout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, params, query }) => {
    const wp = WPAPI;

    const cateSlug = params?.slug

    try {
        const tags = await wp.tags().param('lang', locale).orderby( 'count').order( 'desc' ).perPage(15).get()
        const categories = await wp.categories().param('lang', locale).orderby( 'count').order( 'desc' ).perPage(15).get()
        const response = cateSlug ? await wp.categories().slug(cateSlug)
            .then(function (cate: any) {
                // .slug() queries will always return as an array
                const cateId = cate?.[0]?.id;
                return wp.posts().categories(cateId).param('lang', locale).embed().page(query?.page || 1).perPage(30).get();
            })
            :
            await wp.posts().param('lang', locale).embed().page(query?.page || 1).perPage(30).get()

        const paging = { total: response?._paging?.total || 0, totalPages: response?._paging?.totalPages || 0, currentPage: query?.page || 1 }

        const sidebarData = {
            categories: categories,
            instagram: [],
            recentPosts: [],
            tags: tags,
        }

        return {
            props: {
                ...(await serverSideTranslations(locale ?? 'vi', ['common', 'services', 'post', 'footer', 'about'])),
                data: response,
                paging,
                sidebarData
            }
        }
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

export default PageCategories;
