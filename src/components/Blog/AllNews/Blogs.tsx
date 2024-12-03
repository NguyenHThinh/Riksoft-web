import { useLocales } from "@/locales";
import { PATH_PAGE } from "@/routes/paths";
import Link from "next/link";
import React from "react";
import Parser from "html-react-parser";

import formatPostDate from "@/common/calculateDate";
import AppImage from "@/components/AppImage";
import iBlog from "@/model/iBlog";
import Pagination from "./Pagination";
import { useRouter } from "next/router";

interface BlogsProps {
  blogs: iBlog[];
  isWide: boolean;
  style: string;
  paging: {
    total: number | string;
    totalPages: number | string;
    currentPage: number;
  };
}

const Blogs: React.FC<BlogsProps> = ({ blogs, isWide, style, paging }) => {
  const router = useRouter()
  const { t } = useLocales(["common", "post"]);

  const handlePageClick = (page: number) => {
    const newQuery = { ...router.query };

    if (page === 1) {
      delete newQuery.page;
    } else {
      newQuery.page = String(page);
    }

    page &&
      router.push({
        pathname: router.pathname,
        query: newQuery,
      });
  };

  return (
    <div className={isWide ? "col-lg-10" : "col-lg-8"}>
      {blogs?.length > 0 ? (
        blogs.map((blog, index) => (
          <div
            className={`card border-0 bg-transparent rounded-0 ${index !== blogs.length - 1 ? "border-bottom brd-gray" : "mb-lg-0 pb-lg-0"} pb-30 mb-30`}
            key={index}
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="img img-cover">
                  <AppImage
                    src={blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                    className="radius-7"
                    alt="..."
                    fill
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card-body p-0">
                  <small className="d-block date text mouse_default">
                    <span
                      className={`text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold `}
                    >
                      {blog?.type ? t(`common:${blog.type}`) : ""}
                    </span>
                    <i className="bi bi-clock me-1"></i>
                    <span className="op-8">{`${formatPostDate(blog?.date)} ${typeof formatPostDate(blog?.date) === "number" ? t("common:timer") : ""}`}</span>
                  </small>
                  <Link
                    href={`${PATH_PAGE.post}/${blog?.slug || ''}`}
                    className="card-title mb-10"
                  >
                    {Parser(blog?.title?.rendered ?? "")}
                  </Link>
                  <div className="fs-13px color-666">
                    {Parser(blog?.excerpt?.rendered ?? "")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="not_found">
          <i className="fas fa-times"></i>
          <h3>{t("post:notFoundPost")}</h3>
        </div>
      )}
      {Number(paging?.totalPages) > 1 && (
        <Pagination style={style} paging={paging} onChangePage={handlePageClick} />
      )}
    </div>
  );
};

export default Blogs;
