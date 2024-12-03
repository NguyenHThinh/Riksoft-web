import Link from "next/link";
import Parser from "html-react-parser";

import { PATH_PAGE } from "@/routes/paths";
import { useLocales } from "@/locales";
import AppImage from "../AppImage";
import formatPostDate from "@/common/calculateDate";
import iBlog from "@/model/iBlog";

interface PopularPostsProps {
  data: iBlog[];
}

const PopularPosts: React.FC<PopularPostsProps> = ({ data }) => {
  const { t } = useLocales(["common, post"]);

  return (
    data?.length > 0 && (
      <section className="popular-posts pt-50 pb-100 border-bottom brd-gray">
        <div className="container">
          <h5 className="post-sc-title text-center text-uppercase mb-70">
            {t("common:title.popularPost")}
          </h5>
          <div className="row gx-5">
            {data.map((post, index) => {
              return (
                index < 3 && (
                  <div
                    className={`col-lg-${12 / (data.length < 3 ? data.length : 3)} ${index !== (data.length < 3 ? data.length : 3) - 1 ? "border-end brd-gray" : ""}`}
                    key={index}
                  >
                    <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
                      <div className="img radius-7 overflow-hidden img-cover">
                        <AppImage
                          src={
                            post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                          }
                          className="card-img-top"
                          alt="..."
                          width={1140}
                          height={500}
                          sizes="(max-width: 320px) 150px, (max-width: 480px) 300px, (max-width: 768px) 768px, 1000px"
                        />
                      </div>
                      <div className="card-body px-0">
                        <small className="d-block date mt-10 fs-10px fw-bold">
                          <span
                            className={`text-uppercase border-end brd-gray pe-3 me-3 color-main5`}
                          >
                            {post?.type || ""}
                          </span>
                          <i className="bi bi-clock me-1"></i>
                          <span className="op-8">
                            {t("post:header.timePost")}{" "}
                            {`${formatPostDate(post?.date)} ${typeof formatPostDate(post?.date) === 'number' ? t('common:timer') : ''}`}
                          </span>
                        </small>
                        <h5 className="fw-bold mt-10 title">
                          <Link href={`${PATH_PAGE.post}/${post?.slug || ''}`}>
                            {post?.title?.rendered || ''}
                          </Link>
                        </h5>
                        <div className="small mt-2 op-8 fs-10px">
                          {Parser(post?.excerpt?.rendered ?? "")}
                        </div>
                        {/* hidden author, view count and comment count */}
                        {/* <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                    <div className="l_side d-flex align-items-center">
                      <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                        {post.userImgLetter}
                      </span>
                      <a href="#" className="mt-1">
                        By {post.username}
                      </a>
                    </div>
                    <div className="r-side mt-1">
                      <i className="bi bi-chat-left-text me-1"></i>
                      <a href="#">{post.comments}</a>
                      <i className="bi bi-eye ms-4 me-1"></i>
                      <a href="#">{post.views}</a>
                    </div>
                  </div> */}
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>
    )
  );
};

export default PopularPosts;
