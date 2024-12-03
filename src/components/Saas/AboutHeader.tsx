import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

import Parser from 'html-react-parser'
import { useLocales } from "@/locales";
import Link from "next/link";
import { PATH_PAGE } from "@/routes/paths";
import AppImage from "@components/AppImage";

interface AboutHeaderProps {
  paddingTop?: boolean;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ paddingTop }) => {
  const { t } = useLocales(['common', 'about'])
  const [isOpen, setOpen] = useState<boolean>(false);

  const openVideo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <header className={`about-page-sec style-5 ${paddingTop ? "pt-100" : ""}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="info">
              <h1>
                {Parser(t('about:header'))}
              </h1>
               {/*{Parser(t('about:description'))}*/}
              <p>{Parser(t("about:subHeader"))}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="section-head mb-60">
            </div>
            {/* <div className="main-vid">
              <img loading="lazy" src="/assets/img/vid_banner5.png" alt="" />
              <a
                href="https://youtu.be/pGbIOC83-So?t=21"
                onClick={openVideo}
                className="play-icon"
              >
                <i className="fas fa-play"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-8 m-center mb-50">
            <div className="section-head long-shape mb-20 style-3 text-center">
              <h3>
                <span>
                  {t("mission", { ns: "common" })}
                </span>
              </h3>
            </div>
            <h6 className=" mb-10">
              {t("mission.title", { ns: "about" })}
            </h6>
            <h6 className="  ">{t("mission.desc", { ns: "about" })}</h6>
          </div>
          <div className="col-lg-4 col-sm-8 m-center mb-30">
            <div className="section-head long-shape mb-20 style-3 text-center">
              <h3>
                <span>
                  {t("vision", { ns: "common" })}
                </span>
              </h3>
            </div>
            <h6 className=" mb-10">
              {t("vision.title", { ns: "about" })}
            </h6>
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
          </div>
          <div className="col-lg-4 col-sm-8 m-center mb-30">
            <div className="section-head long-shape mb-20 style-3 text-center">
              <h3>
                <span>
                  {t("about:coreValue.title")}
                </span>
              </h3>
            </div>
            <ul className="mb-30 text-center">
              <li>
                <p><span className="h2">R</span>esilience, <span className="h3">R</span>eliable</p>
              </li>
              <li>
                <p><span className="h2">I</span>nnovate</p>
              </li>
              <li>
                <p><span className="h2">K</span>nowledgeable</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AppImage
        src="/assets/img/header/hand_megaphone.png"
        alt=""
        width={255}
        height={430}
        quality={100}
        className="hand-mega slide_up_down"
      />
      <AppImage
        src="/assets/img/header/head6_rating.png"
        alt=""
        width={273}
        height={205}
        quality={100}
        className="head6-rating scale_up_down"
      />
      <AppImage
        src="/assets/img/header/header5_linechart.png"
        alt=""
        width={215}
        height={195}
        quality={100}
        className="head6-charts scale_up_down"
      />
      <AppImage
        src="/assets/img/header/rocket.png"
        alt=""
        width={305}
        height={370}
        quality={100}
        className="head6-rocket"
      />
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          // autoplay
          isOpen={isOpen}
          videoId="pGbIOC83-So"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default AboutHeader;
