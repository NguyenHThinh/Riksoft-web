import Link from "next/link";

import { PATH_PAGE } from "@/routes/paths";
import chooseUsData from "@data/Saas/choose-us.json";
import AppImage from "../AppImage";
import { useLocales } from "@/locales";
import iServices from "@/model/iServices";
import React from "react";
import Parser from "html-react-parser";
import customLinkPage from "@/utils/customLinkPage";

interface ChooseUsProps {
  services: iServices[];
}

const ChooseUs: React.FC<ChooseUsProps> = ({ services }) => {
  const { t } = useLocales(["common", "about"]);
  return (
    <section className="choose-us style-6 section-padding">
      <div className="container">
        <div className="row justify-content-between gx-0">
          <div className="col-lg-6">
            <div className="img img-cover">
              <AppImage
                width={680}
                height={516}
                src="/assets/img/choose_us/man_arrow.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info">
              <div className="section-head mb-30 style-5">
                <h2>{t("common:title.services")}</h2>
              </div>
              <div className="text mb-50 fs-12px color-666">
                {t("about:choseUsServices")}
              </div>
              <ul>
                {services.map((service, index) => {
                  return index < 3 && (
                    <Link href={customLinkPage(service)}>
                      <li
                        className={`d-flex ${index !== chooseUsData.length - 1 ? "mb-40" : ""}`}
                        key={index}
                      >
                        <small className="icon-50 me-4 flex-shrink-0">
                          <AppImage
                            width={50}
                            height={50}
                            src={service?.acf?.icon_service}
                            alt=""
                            quality={100}
                          />
                        </small>
                        <div className="inf">
                          <h5>{Parser(service?.title?.rendered ?? "")}</h5>
                          <div className="fs-12px color-666 mt-2">
                            {Parser(service?.excerpt?.rendered ?? "")}
                          </div>
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
              <Link href={PATH_PAGE.services}>
                <p className="btn rounded-pill main5-3Dbutn hover-main2 sm-butn fw-bold mt-60 px-5">
                  <span>{t("common:showMore")}</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AppImage
        width={785}
        height={575}
        src="/assets/img/about/about_s6_bubbles.png"
        alt=""
        className="bubbles rotate-center"
      />
    </section>
  );
};

export default ChooseUs;
