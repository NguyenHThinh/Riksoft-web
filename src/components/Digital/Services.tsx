import Link from "next/link";

import { PATH_PAGE } from "@/routes/paths";
import AppImage from "@components/AppImage";
import { useLocales } from "@/locales";
import { useRouter } from "next/router";
import Parser from 'html-react-parser'
import iServices from "@/model/iServices";
import customLinkPage from "@/utils/customLinkPage";

const Services: React.FC<{ services: iServices[] }> = ({ services }) => {
  const router = useRouter()
  const { t } = useLocales(["common"]);

  return (
    <section className="services section-padding style-1" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <div className="section-head mb-60">
              <h6 className="color-main text-uppercase wow fadeInUp">
                {t("common:ourServices")}
              </h6>
              <h2 className="wow fadeInUp">
                {t("home:perfectItSolutions")}{" "}
                <span className="fw-normal"> {t("home:forYourBusiness")}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row rowgap-20">
            {services.length > 0 && services.map((service, index) => { return index < 6 && (
              <div className="col-lg-4" key={index}>
                <div
                  className="service-box wow fadeInUp"
                  data-wow-delay={index * 0.2 + "s"}
                >
                  <Link href={customLinkPage(service)} className="flex-card">
                    <h5>
                      <p>{Parser(service?.title?.rendered ?? '')}</p>
                      <span className="num">{index + 1 < 10 ? `0${index + 1}` : index}</span>
                    </h5>
                    <div className="icon">
                      <AppImage
                        src={service?.acf?.icon_service}
                        alt=""
                        quality={100}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="info">
                      <div className="text">{Parser(service?.excerpt?.rendered ?? '')}</div>
                      <div className="tags">
                        {service?.tags.length > 0 && service.tags.map((tag, index) => (
                          <span onClick={e => { e.preventDefault(); router.push('#') }} className="me-1" key={index}>
                            {Parser(tag?.name ?? '')}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
            )}
          </div>
            <div className={"text-center"}>
                <Link href={PATH_PAGE.services}>
                    <p className="btn rounded-pill main5-3Dbutn hover-main2 sm-butn fw-bold mt-60 px-5">
                        <span>{t('common:seeAll')}</span>
                    </p>
                </Link>
            </div>
        </div>
      </div>
      <AppImage
        src="/assets/img/services/ser_shap_l.png"
        alt=""
        width={325}
        height={1000}
        className="ser_shap_l"
      />
      <AppImage
        src="/assets/img/services/ser_shap_r.png"
        alt=""
        className="ser_shap_r"
        width={217}
        height={875}
      />
    </section>
  );
};

export default Services;
