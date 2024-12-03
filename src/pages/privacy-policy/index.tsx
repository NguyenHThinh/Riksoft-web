import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "@layouts/Main";
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import AppHead from "@components/Head";
import Policy from "@components/Policy";
import { useLocales } from "@/locales";

const privacyPolicy = () => {
    const { t } = useLocales(["common"]);
    return (
        <>
            <AppHead title={t("common:blog")} />

            <MainLayout scrollTopText>
                <TopNav />
                <Navbar />
                <main>
                    <Policy />
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
                "services",
                "policy", 'footer', "about"
            ])),
        },
    };
};

export default privacyPolicy;
