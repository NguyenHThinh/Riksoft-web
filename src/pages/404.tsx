import Head from "next/head";
//= Components
import NotFound from "@components/404";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page404 = () => {
  return (
    <>
      <Head>
        <title>RikSoft - Not Found</title>
      </Head>
      <main className="erorr-404-page style-5">
        <NotFound />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "vi", ["common"])),
    },
  };
};

export default Page404;
