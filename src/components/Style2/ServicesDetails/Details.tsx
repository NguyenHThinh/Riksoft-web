import iServices from "@/model/iServices";
import React from "react";
import Parser from "html-react-parser";
import { useLocales } from "@/locales";
import Link from "next/link";
import { PATH_PAGE } from "@/routes/paths";
import AppImage from "@/components/AppImage";
import customLinkPage from "@/utils/customLinkPage";

interface DetailsProps {
  services: iServices;
  allServices: iServices[];
}

const Details: React.FC<DetailsProps> = ({ services, allServices }) => {
  const { t } = useLocales(["services"]);
  const currentIndex = allServices.findIndex(
    (service) => service?.id === services?.id
  );

  return (
    <section className="ser-details pt-100 overflow-hidden">
      <div className="container">
        <div className="content">
          <div className="row gx-5">
            <div className="col-lg-8">
              <div className="main-info">
                <div className="wordpress-content">
                  {Parser(services?.content?.rendered ?? "")}
                </div>
                <div className="last-next-serv d-flex align-items-center justify-content-between mt-60">
                  <Link href={customLinkPage(allServices?.[currentIndex - 1])} className="item">
                    {currentIndex > 0 && (
                      <>
                        <p> {t("services:prevService")} </p>
                        <h5 className="fw-bold">
                          {Parser(allServices?.[currentIndex - 1]?.title?.rendered ?? "")}
                        </h5>
                      </>
                    )}
                  </Link>
                  <Link href={customLinkPage(allServices?.[currentIndex + 1])} className="item text-end">
                    {currentIndex < allServices.length - 1 && (
                      <>
                        <p> {t("services:nextService")} </p>
                        <h5 className="fw-bold">
                          {Parser(allServices?.[currentIndex + 1]?.title?.rendered ?? "")}
                        </h5>
                      </>)
                    }
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="side-links mt-5 mt-lg-0">
                {allServices?.length > 0 && (
                  <div className="links-card mb-40">
                    <h5> {t("services:servicesCats")} </h5>
                    <ul>
                      {allServices.map((service, index) => (
                        <li key={index}>
                          <Link href={customLinkPage(service)}>
                            <i className="far fa-angle-right icon"></i>{" "}
                            {Parser(service?.title?.rendered ?? "")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="banner1">
                  <div className="title">
                    <h6> {t("services:callToAction")} </h6>
                    <h3> {t("services:makeRequest")} </h3>
                  </div>
                  <Link
                    href={PATH_PAGE.contact}
                    className="butn bg-white rounded-pill hover-main5"
                  >
                    <span>
                      {" "}
                      {t("services:getQuote")}{" "}
                      <i className="far fa-long-arrow-right ms-2"></i>{" "}
                    </span>
                  </Link>
                  <AppImage width={255} height={350} src="/assets/img/mob1.png" alt="" className="mob" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
