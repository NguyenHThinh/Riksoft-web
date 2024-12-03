import Link from "next/link";

import { useLocales } from "@/locales";
import { PATH_PAGE } from "@/routes/paths";
import Parser from 'html-react-parser'

const Download = () => {
  const { t } = useLocales(["portfolio"]);

  return (
    <section className={`download section-padding style-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="content text-center">
              <div className={`section-head text-center`}>
                <h2 className="mb-20">
                  {Parser(t('portfolio:biggerSuccess'))}
                </h2>
              </div>
              <div className="butns mt-70">
                <Link
                  href={PATH_PAGE.contact}
                  className={`btn rounded-pill fw-bold main5-3Dbutn hover-main2 sm-butn mx-1`}
                >
                  <small>{t("portfolio:startProject")}</small>
                </Link>
                <Link
                  href={PATH_PAGE.about}
                  className={`btn rounded-pill fw-bold main5-3Dbutn hover-main2 sm-butn mx-1`}
                >
                  <small>{t("portfolio:showPrice")}</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/contact_globe.svg"
        alt=""
        className="contact_globe"
      />
    </section>
  );
};

export default Download;
