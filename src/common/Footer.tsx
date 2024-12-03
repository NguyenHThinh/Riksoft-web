import { useLocales } from "@/locales";
import AppImage from "@components/AppImage";
import Link from "next/link";
import { PATH_PAGE } from "@/routes/paths";

const Footer = () => {
  const { t } = useLocales(["common", "footer", "about"]);

  return (
    <footer className="style-1">
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="foot_info">
                <a href="#" className="logo mb-3">
                  <AppImage
                    src="/assets/img/logo_riksoft_white_right.png"
                    alt=""
                    width={180}
                    height={120}
                  />
                </a>
                <p>{t("common:riksoftCompany")}</p>
                <ul className="mb-4">
                  <li className="d-flex">
                    <i className="bi bi-house me-3"></i>

                    <a href="https://maps.app.goo.gl/gTfWFjAe9Aiz9AMS9" target="_blank">
                      <span>{t("common:officeHaNoi")}</span>
                    </a>
                  </li>

                  <li className="d-flex">
                    <i className="bi bi-house me-3"></i>

                    <a href="https://maps.app.goo.gl/BXC585BDP3gwU1uo8" target="_blank">
                      <span>{t("common:mainOffice")}</span>
                    </a>
                  </li>
                  <li className="d-flex">
                    <i className="bi bi-building me-3"></i>
                    <a href="#">
                      <span>{t("common:taxCode")}: 0202233864</span>
                    </a>
                  </li>
                  <li className="d-flex">
                    <i className="bi bi-envelope me-3"></i>
                    <a href="#">
                      <span>contact@riksoft.vn</span>
                    </a>
                  </li>
                  <li className="d-flex">
                    <i className="bi bi-phone me-3"></i>
                    <a href="#">
                      <span>(+84) 968.468.800</span>
                    </a>
                  </li>
                </ul>
                <div className="social_icons">
                  <a href="https://www.facebook.com/riksoft.official">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/riksoftware/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-2">
              <div className="links">
                <div className="cont">
                  <h6 className="link_title">{t("common:services")}</h6>
                  <ul>
                    <li>
                      <a href="#">{t('footer:services.ITConslutations')}</a>
                    </li>
                    <li>
                      <a href="#">{t('footer:services.dataSecurity')}</a>
                    </li>
                    <li>
                      <a href="#">{t('footer:services.websiteDevelopment')}</a>
                    </li>
                    <li>
                      <a href="#">{t('footer:services.UIUX')}</a>
                    </li>
                    <li>
                      <a href="#">{t('footer:services.cloudServices')}</a>
                    </li>
                    <li>
                      <a href="#">{t('footer:services.gameDevelopment')}</a>
                    </li>
                    <li>
                      <a href="#">{t('footer:services.CRMSoftware')}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-lg-2">
              <div className="links">
                <div className="cont">
                  <h6 className="link_title">{t("common:infomation")}</h6>
                  <ul>
                    <li>
                      <Link href={PATH_PAGE.about}>{t('footer:inform.about')}</Link>
                    </li>
                    <li>
                      <Link href={PATH_PAGE.services}>{t('common:services')}</Link>
                    </li>

                    <li>
                      <Link href={PATH_PAGE.projects}>{t('common:portfolio')}</Link>
                    </li>
                    <li>
                      <Link href={PATH_PAGE.contact}>{t('footer:inform.contact')}</Link>
                    </li>
                    <li>
                      <Link href={PATH_PAGE.post}>{t('footer:inform.blog')}</Link>
                    </li>
                    {/* <li>
                      <Link href={""}>{t('footer:inform.affiliateProgram')}</Link>
                    </li>
                    <li>
                      <Link href={""}>{t('footer:inform.howItWorks')}</Link>
                    </li>
                    <li>
                      <Link href={""}>{t('footer:inform.pricingPlan')}</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="foot_subscribe">
                <h6 className="link_title">{t("common:newLetter")}</h6>
                <p>{t("footer:newLetterText")}</p>
                <div className="input-group my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn butn-gard border-0 text-white px-3"
                    type="button"
                    id="button-addon2"
                  >
                    <span>{t("common:subscribe")}</span>
                  </button>
                </div>
                <p className="fst-italic">
                  {`${t("footer:checkSubscribe")} `}
                  <Link href={PATH_PAGE.policy} className="text-decoration-underline">
                    {" "}
                    {t('common:policy')}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="foot">
              <p>
                © 2023 - {new Date().getFullYear()} Copyrights by{" "}
                <a href="#" className="text-white text-decoration-underline">
                  RikSoft Co., Ltd
                </a>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      <AppImage src="/assets/img/footer/foot_l.png" alt="" className="foot_l" width={310} height={340} />
      <AppImage src="/assets/img/footer/foot_r.png" alt="" className="foot_r" width={310} height={340} />
    </footer>
  );
};

export default Footer;
