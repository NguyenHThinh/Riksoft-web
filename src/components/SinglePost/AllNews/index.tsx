import Details from "./Details";
import Metadata from "./Metadata";
import Content from "./Content";
import Comments from "./Comments";
import Sidebar from "@/components/Blog/AllNews/Sidebar";

import iBlog from "@/model/iBlog";
import Parser from 'html-react-parser'
import React, {useEffect, useState} from "react";
import WPAPI from "@/utils/WPAPI";
import {useLocales} from "@/locales";
import {useRouter} from "next/router";

// import '@/styles/scss/common/_wordpress.scss'


interface SidebarData {
  recentPosts: { title: string; image: string }[];
  categories: { title: string; count: number }[];
  instagram: string[];
  tags: string[];
}

interface AllNewsProps {
  isWide: boolean;
  leftSidebar: boolean;
  style: string;
  blog: iBlog;
}


const AllNews: React.FC<AllNewsProps> = ({
  isWide,
  leftSidebar,
  style = "4",
  blog,
}) => {

  const router = useRouter();
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  const addressUrl = origin+router.asPath;

  const {currentLang} = useLocales();

  const [sidebarData, setSidebarData] = useState({
    categories: [],
    instagram: [],
    recentPosts: [],
    tags: [],
  });

  useEffect(() => {
    const initialize = async () => {
      try {
        const tags = await WPAPI.tags().param('lang', currentLang?.value??'vi').orderby( 'count').order( 'desc' ).perPage(10).get();
        const categories = await WPAPI.categories().param('lang', currentLang?.value??'vi').orderby( 'count').order( 'desc' ).perPage(10).get();
        setSidebarData({
          categories: categories,
          instagram: [],
          recentPosts: [],
          tags: tags,
        });
      } catch (e) {
        console.log(e);
      }

    }

    initialize();
  }, [])

  return (
    <section className="all-news section-padding pt-50 blog bg-transparent style-3">
      <div className="container">
        <Details
          details={blog}
          style={style}
        />
        <div className="row gx-4 gx-lg-5">
          {/* {!isWide && leftSidebar && (
            <Sidebar data={news.sidebar} style={style} />
          )} */}
          <div className={isWide ? "col-lg-12" : "col-lg-8"}>
            {/* // show author, view count, comment count
            <Metadata
              metadata={{
                user: news.user,
                commentsCount: news.commentsCount,
                viewsCount: news.viewsCount,
              }}
            /> */}
            <div className="blog-content-info">
              <div className="wordpress-content">
                {Parser(blog?.content?.rendered ?? "")}
                <div className="blog-share mt-80">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="side-tags">
                        <div className="content">
                          {
                            blog?.tags?.map(tag => ( <a href="#" className="me-1">
                              {tag?.name}
                            </a>))
                          }
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="share-icons d-flex justify-content-lg-end mt-3 mt-lg-0">
                        <h6 className="fw-bold me-3 flex-shrink-0 text-uppercase">
                          Share on
                        </h6>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${addressUrl}`}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        {/*<a href="#">*/}
                        {/*  <i className="fab fa-twitter"></i>*/}
                        {/*</a>*/}
                        {/*<a href="#">*/}
                        {/*  <i className="fab fa-tumblr"></i>*/}
                        {/*</a>*/}
                        {/*<a href="#">*/}
                        {/*  <i className="fas fa-rss"></i>*/}
                        {/*</a>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               {/*<Content style={style} /> */}
              {/* <Comments
                comments={news.comments}
                commentCard={news.commentCard}
                style={style}
              /> */}
            </div>
          </div>
           {!isWide && !leftSidebar && (
              <Sidebar data={sidebarData} style={style} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AllNews;
