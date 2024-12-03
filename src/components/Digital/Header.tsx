import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

import { PATH_PAGE } from "@/routes/paths";
import { useLocales } from "@/locales";
import AppImage from "@components/AppImage";
import Parser from 'html-react-parser';

const Header = () => {
  const { t } = useLocales(["common", "home"]);
  const [isOpen, setOpen] = useState<boolean>(false);

  const openVideo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <header className="section-padding style-1" data-scroll-index="0">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="info col-lg-6">
              <div className="section-head mb-60">
                <h6 className="color-main text-uppercase">
                  {t("title.company")}
                </h6>
                <h2 className="text-capitalize">
                  {/* {t("common:title.techAndIT")} <span className="fw-normal">{t('common:solutions')}</span> */}
                  {Parser(t('home:heroTitle'))}
                </h2>
              </div>
              <div className="text">{t("home:headerSubTitle")}</div>
              <div className="bttns mt-5">
                <Link href={PATH_PAGE.services}>
                  <span className="btn btn-dark">{t("title.services")}</span>
                </Link>
                {/* <a
                  href="https://youtu.be/pGbIOC83-So?t=21"
                  className="vid-btn"
                  onClick={openVideo}
                >
                  <i className="bi bi-play wow heartBeat infinite slow"></i>
                  <span>
                    RikSoft’s <br /> {t("home:showreels")}
                  </span>
                </a> */}
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 ">
              <div className={"img-hero"}>
                <AppImage
                  src="/assets/img/header/header_hero.png"
                  width={750}
                  height={570}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<img*/}
      {/*  src="/assets/img/header/head_shape_r.png"*/}
      {/*  alt=""*/}
      {/*  className="head-shape-r wow"*/}
      {/*/>*/}
      <AppImage
        src="/assets/img/header/head_shape_l.png"
        alt=""
        className="head-shape-l wow"
        width={266}
        height={344}
      />
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="pGbIOC83-So"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
