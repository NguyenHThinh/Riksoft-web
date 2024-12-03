import Link from "next/link";

import { PATH_PAGE } from "@/routes/paths";
import { useLocales } from "@/locales";
import AppImage from "@components/AppImage";

const About = () => {
  const { allLangs, currentLang, onChangeLang, t } = useLocales([
    "common",
    "about",
    "home",
  ]);

  return (
    <section className="about section-padding style-3" data-scroll-index="3">
      <div className="top-content">
        <div className="img img-left">
          <AppImage
            src="/assets/img/about/style_3_1.png"
            width={640}
            height={410}
            alt=""
            className='bg_img'
          />
          <div className="info-circle">
            <div className="cont">
              <h3>{t("about:coreValue.title")}</h3>
              <b>R, I, K</b>
            </div>
          </div>
          <div className="info-circle">
            <div className="cont">
              <h3>R</h3>
              <p>{t("about:coreValue.R")}</p>
            </div>
          </div>
          <div className="info-circle">
            <div className="cont">
              <h2>I</h2>
              <p>{t("about:coreValue.I")}</p>
            </div>
          </div>
          <div className="info-circle">
            <div className="cont">
              <h2>K</h2>
              <p>{t("about:coreValue.K")}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row gx-0 justify-content-end fadeInUp wow"
            data-wow-delay={"0.2s"}
          >
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head long-shape mb-40 style-3 ">
                  <h3>
                    RIKSOFT{" "}
                    <span>
                      {t("mission", { ns: "common" })} &{" "}
                      {t("vision", { ns: "common" })}
                    </span>
                  </h3>
                </div>
                <h5 className="h5 mb-10">
                  “{t("mission.title", { ns: "about" })}”
                </h5>
                <h5 className="h5  ">“{t("mission.desc", { ns: "about" })}”</h5>

                {/* <div className="text mb-70">
                  {t("mission.desc", { ns: "about" })}
                </div> */}

                <h4 className="h4 mb-10 color-main">
                  {t("vision", { ns: "common" })}
                </h4>

                <h5 className=" mb-10 h5">
                  {t("vision.title", { ns: "about" })}
                </h5>
                {/* <div className="text mb-30 fw-bold">
                  {t("vision.desc", { ns: "about" })}
                </div> */}
                <ul className="mb-30">
                  <li>
                    <i className="bi bi-star-fill me-2"></i>{" "}
                    {t("vision.point1", { ns: "about" })}
                  </li>
                  <li>
                    <i className="bi bi-star-fill me-2"></i>{" "}
                    {t("vision.point2", { ns: "about" })}
                  </li>
                  <li>
                    <i className="bi bi-star-fill me-2"></i>{" "}
                    {t("vision.point3", { ns: "about" })}
                  </li>
                </ul>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <Link href={PATH_PAGE.about}>
                    <p className="btn rounded-pill hover-main4 bg-main  sm-butn text-white">
                      <span>{t("home:moreAboutUs")}</span>
                    </p>
                  </Link>
                  <Link href={PATH_PAGE.about}>
                    <p className="btn rounded-pill border-main2 hover-main2  sm-butn">
                      <span>{t("home:howWeWork")}</span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="btm-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="info pe-lg-3">
                <div className="section-head mb-40 style-3 wow fadeInUp">
                  <h3>
                    RikSoft’s <span> {t("common:vision")}</span>
                  </h3>
                </div>
                <div className="text mb-10">{t("about:vision.title")}</div>
                <div className="text mb-30">{t("about:vision.desc")}</div>
                <ul className="wow fadeInUp">
                  <li>
                    <i className="bi bi-star-fill me-2"></i>{" "}
                    {t("about:vision.point1")}
                  </li>
                  <li>
                    <i className="bi bi-star-fill me-2"></i>{" "}
                    {t("about:vision.point2")}
                  </li>
                  <li>
                    <i className="bi bi-star-fill me-2"></i>{" "}
                    {t("about:vision.point3")}
                  </li>
                </ul>
                <Link href={PATH_PAGE.about}>
                  <p className="btn rounded-pill border-main2 hover-main2 mt-60 sm-butn wow fadeInUp">
                    <span>How We Works</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="img img-right">
          <AppImage
            src="/assets/img/about/style_3_2.png"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </div> */}
    </section>
  );
};

export default About;
