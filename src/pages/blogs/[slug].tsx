//= Layout
import MainLayout from "@layouts/Main";
//= Components
import TopNav from "@components/Navbars/DigitalNav/TopNav";
import Navbar from "@components/Navbars/DigitalNav";
import AllNews from "@components/SinglePost/AllNews";
import PopularPosts from "@components/SinglePost/PopularPosts";
import AppHead from "@/components/Head";
import { GetServerSideProps } from "next";
import WPAPI from "@/utils/WPAPI";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Page404 from "../404";
import React from "react";
import iBlog from "@/model/iBlog";
import { PATH_PAGE } from "@/routes/paths";
import Parser from "html-react-parser";
import { extractTextFromHtml } from "@/utils/getTextFromHtml";

interface detailPostProps {
  blog: iBlog;
  relatedPosts: any;
}

const detailPost: React.FC<detailPostProps> = ({ blog, relatedPosts }) => {
  const metaData = {
    title: Parser(blog?.title?.rendered ?? ""),
    description: extractTextFromHtml(blog?.excerpt?.rendered || ""),
    keywords: blog?.tags?.length > 0 ? blog.tags.map((tag) => Parser(tag.name ?? "")) : [],
    ogImage:
      blog?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.thumbnail?.source_url,
  };

  return blog.id ? (
    <>
      <AppHead
        title={String(metaData.title)}
        description={metaData.description}
        keywords={metaData.keywords.join(", ")}
        ogImage={metaData.ogImage}
      />

      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        <main className="blog-page style-5 color-5">
          <AllNews isWide={false} leftSidebar={false} style="5" blog={blog} />
          <PopularPosts relatedPosts={relatedPosts} />
        </main>
      </MainLayout>
    </>
  ) : (
    <Page404 />
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const wp = WPAPI;
  const slug = params?.slug;

  try {
    const response = await wp
      .posts()
      .param("lang", locale)
      .slug(slug)
      .embed()
      .get();
    const blog = response?.length ? response[0] : {};

    const slugCats = blog?.categories?.map(
      (category: { [key: string]: string | number }) => category.id
    );

    let relatedPosts =
      slugCats?.length > 0
        ? await wp
            .posts()
            .categories(slugCats.join(","))
            .param("lang", locale)
            .page(1)
            .perPage(10)
            .embed()
            .get()
        : [];

    // clear show this post on relatedPosts
    relatedPosts = relatedPosts.filter(
      (relatedPost: iBlog) => relatedPost.id !== blog.id
    );

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "vi", [
          "common",
          "services",
          "post",
          "footer",
          "about",
        ])),
        blog: blog,
        relatedPosts,
      },
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

export default detailPost;
