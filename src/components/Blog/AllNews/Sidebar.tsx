import React, { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import { useLocales } from "@/locales";
import { PATH_PAGE } from "@/routes/paths";
import Parser from "html-react-parser";
import AppImage from "@/components/AppImage";
import { useRouter } from "next/router";

interface categoriesData {
  id: number;
  name: string;
  count: number;
  slug: string
}

interface tagsData {
  name: string;
}

interface recentPostsData {
  // title: string;
  // image: string;
}

interface SidebarProps {
  data: {
    categories: categoriesData[];
    instagram: string[];
    recentPosts: recentPostsData[];
    tags: tagsData[];
  };
  style: string;
}

const Sidebar: React.FC<SidebarProps> = ({ data, style }) => {
  const router = useRouter();
  const { t } = useLocales(["common", "post"]);
  const [searchValue, setSearchValue] = useState(router?.query?.search || '');

  useEffect(() => {
    const lg = document.querySelector(".lg-react-element");
    if (lg) lg.className = "d-flex justify-content-between flex-wrap";
  }, []);

  const submitSearch = (e: FormEvent) => {
    e.preventDefault()
    searchValue &&
      router.push({
        pathname: PATH_PAGE.searchBlog,
        query: { search: searchValue }
      });
  }

  return (
    <div className="col-lg-4">
      <div className="side-blog style-5 ps-lg-5 mt-5 mt-lg-0">
        <form onSubmit={submitSearch} className="search-form mb-50">
          <h6 className="title mb-20 text-uppercase fw-normal">
            {t("common:search")}
          </h6>
          <div className="form-group position-relative">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder={t('common:search')}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="search-btn border-0 bg-transparent">
              {" "}
              <i className="fas fa-search"></i>{" "}
            </button>
          </div>
        </form>

        {/* <div className="side-recent-post mb-50">
          <h6 className="title mb-20 text-uppercase fw-normal">
            {t("common:title.recentPost")}
          </h6>
          {data.recentPosts.map((post, index) => (
            <Link
              href={`${PATH_PAGE.projects}/${post.title}`}
              key={index}
              className={`post-card ${index !== data.recentPosts.length - 1 ? "pb-3 mb-3 border-bottom brd-gray" : ""}`}
            >
              <div className="img me-3">
                <img loading="lazy" src={post.image} alt="" />
              </div>
              <div className="inf">
                <h6>{post.title}</h6>
                <p>If there’s one way that wireless technology has [...]</p>
              </div>
            </Link>
          ))}
        </div> */}

        <div className="side-categories mb-50">
          <h6 className="title mb-20 text-uppercase fw-normal">
            {t("common:title.categories")}
          </h6>
          <div className="side-links mt-5 mt-lg-0">
            {data?.categories?.length > 0 && (
              <div className="links-card mb-40">
                <ul>
                  {data?.categories.map((category, index) => (
                    <li key={index}>
                      <Link href={`${PATH_PAGE.post}/categories/${category?.slug || ''}`}>
                        <i className="far fa-angle-right icon"></i>{" "}
                        <p>{Parser(category?.name ?? "")}</p>
                        <span>{category?.count ?? 0}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* <div className="side-newsletter mb-50">
          <h6 className="title mb-10 text-uppercase fw-normal">
            {t("post:newLetter.newLetter")}
          </h6>
          <div className="text">{t("post:newLetter.desc")}</div>
          <form action="contact.php" className="form-subscribe" method="post">
            <div className="email-input d-flex align-items-center py-3 px-3 bg-white mt-3 radius-5">
              <span className="icon me-2 flex-shrink-0">
                <i className="far fa-envelope"></i>
              </span>
              <input
                type="text"
                placeholder="Email Address"
                className="border-0 bg-transparent fs-12px"
              />
            </div>
            <button
              className={`btn bg-main${style} sm-butn text-white hover-orange1 w-100 mt-3 radius-5 py-3`}
            >
              <span>{t("common:subscribe")}</span>
            </button>
          </form>
        </div> */}

        <div className="side-share mb-50">
          <h6 className="title mb-20 text-uppercase fw-normal">
            {t("common:title.social")}
          </h6>
          <a href="https://www.facebook.com/riksoft.official" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/company/riksoftware/" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* <div className="side-insta mb-50">
          <h6 className="title mb-20 text-uppercase fw-normal">
            {t("common:title.ourInsta")}
          </h6>
          <LightGallery speed={500} backdropDuration={500}>
            {data?.instagram?.length > 0 &&
              data.instagram.map((image, index) => (
                <a
                  href={image}
                  className="insta-img img-cover"
                  data-fancybox="gallery"
                  key={index}
                >
                  <AppImage src={image} alt="" width={30} height={30} />
                  <i className="fab fa-instagram icon"></i>
                </a>
              ))}
          </LightGallery>
        </div> */}

        <div className="side-tags">
          <h6 className="title mb-20 text-uppercase fw-normal">
            {t("common:title.popularTag")}
          </h6>
          <div className="content">
            {data?.tags?.length > 0 &&
              data.tags.map((tag, index) => (
                <a href="#" key={index} className="me-1">
                  {Parser(tag?.name ?? '')}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
