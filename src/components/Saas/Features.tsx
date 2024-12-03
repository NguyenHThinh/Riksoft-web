import React from "react";
import features from "@data/Saas/features.json";
import { useLocales } from "@/locales";
import Parser from "html-react-parser";
import iServices from "@/model/iServices";
import AppImage from "../AppImage";
import Link from "next/link";
import customLinkPage from "@/utils/customLinkPage";

interface FeaturesProps {
  isServices: Boolean;
  services: iServices[];
}

const Features: React.FC<FeaturesProps> = ({ isServices, services }) => {
  const { t } = useLocales(["services"]);

  return (
    <section
      className={`features section-padding style-5 ${isServices ? "pt-50" : "bg-gray5"}`}
      data-scroll-index="3"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {isServices ? (
              <div className="section-head text-center mb-60 style-5">
                <h2 className="mb-20">{t("services:title")}</h2>
                <p>{t("services:desc")}</p>
              </div>
            ) : (
              <div className="section-head text-center mb-60 style-5">
                <h2 className="mb-20">{Parser(t("services:otherFeatures"))}</h2>
                <p>{t("services:otherFeaturesDesc")}</p>
              </div>
            )}
          </div>
        </div>
        <div className="content">
          <div className="row rowgap-20">
            {services.map((service, i) => (
              <div className="col-lg-3 col-sm-6" key={i}>
                <Link
                  href={customLinkPage(service)}
                  className="features-card mb-30 style-5"
                >
                  <div className="icon">
                    <AppImage
                      src={service?.acf?.icon_service}
                      alt=""
                      quality={100}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="info">
                    <h5 className="card-title">
                      {Parser(service?.title?.rendered ?? "")}
                    </h5>
                    {Parser(service?.excerpt?.rendered ?? "")}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
