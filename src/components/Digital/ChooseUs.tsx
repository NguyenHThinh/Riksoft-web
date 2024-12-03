import Link from "next/link";
import { PATH_PAGE } from "@/routes/paths";
import AppImage from "@components/AppImage";
import { useLocales } from "@/locales";

const ChooseUs = () => {
  const { t } = useLocales(["home"]);
  return (
    <section
      className="choose-us section-padding style-1"
      data-scroll-index="3"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head mb-60">
                <h6 className="color-main text-uppercase wow fadeInUp">
                  {t("home:whyChooseUs")}
                </h6>
                <h2 className="wow fadeInUp">
                  {t("home:boostYourBusiness")}{" "}
                  <span className="fw-normal">{t("home:withNewTech")}</span>
                </h2>
              </div>
              <div className="text">{t("home:whyChooseUsDes")}</div>
              <ul>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <li className="wow fadeInUp" key={index}>
                    <span className="icon">
                      <i className="bi bi-check2"></i>
                    </span>
                    <h6>{t(`home:whyChooseUsList.item${item}`)}</h6>
                  </li>
                ))}
                {/* {chooseUsData.map((item, index) => (
                  <li className="wow fadeInUp" key={index}>
                    <span className="icon">
                      <i className="bi bi-check2"></i>
                    </span>
                    <h6>{item}</h6>
                  </li>
                ))} */}
              </ul>

              <Link href={PATH_PAGE.about}>
                <p className="btn butn-gard border-0 text-white wow fadeInUp">
                  <span>{t("home:howWeWork")}</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AppImage
        src="/assets/img/choose_us/choose_lines.svg"
        alt=""
        width={950}
        height={950}
        className="choose-us-img"
      />
      <AppImage
        src="/assets/img/choose_us/choose_brands.png"
        alt=""
        width={640}
        height={648}
        className="choose-us-brands"
      />
      <AppImage
        src="/assets/img/choose_us/choose_bubbles.png"
        alt=""
        width={640}
        height={648}
        className="choose-us-bubbles"
      />
    </section>
  );
};

export default ChooseUs;
