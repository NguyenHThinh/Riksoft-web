import React from "react";
import { useLocales } from "@/locales";
import { PATH_PAGE } from "@/routes/paths";
import Link from "next/link";

const NotFound = () => {
  const { t } = useLocales(["common"]);

  return (
    <section className="erorr-page style-5">
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="info">
                <div className="icon">
                  <img loading="lazy" src="/assets/img/icons/rocket.png" alt="" />
                </div>
                <h2 className="mb-30"> {t("404.title")} </h2>
                <p className="color-777">{t("404.message")}</p>
                <Link
                  href={PATH_PAGE.home}
                  className="btn back_home rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-40"
                >
                  <span>
                    {" "}
                    <i className="fas fa-long-arrow-left me-2"></i>{" "}
                    {t("404.backHome")}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="img">
                <img loading="lazy" src="/assets/img/404_1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
