import { useState, useEffect } from "react";
import Link from "next/link";

import { PATH_PAGE } from "@/routes/paths";
import plans from "@data/Saas/plans.json";
import { useLocales } from "@/locales";

const Pricing: React.FC = () => {
  const { t } = useLocales(['common', 'services'])

  const [features, setFeatures] = useState<
    { title: string; data: (string | boolean)[] }[]
  >([]);

  useEffect(() => {
    let formattedFeatures: { title: string; data: (string | boolean)[] }[] = [];

    plans[0].features.forEach((feature) =>
      formattedFeatures.push({ title: feature.title, data: [] })
    );

    plans.forEach((plan, i: number) => {
      plan.features.forEach((feature, x: number) => {
        formattedFeatures[x].data[i] =
          feature.checked !== undefined ? feature.checked : feature.content;
      });
    });

    setFeatures(formattedFeatures);
  }, [plans]);

  const togglePlanDuration = (duration: string) => {
    let monthly = document.querySelectorAll(".monthly_price");
    let yearly = document.querySelectorAll(".yearly_price");

    if (duration === "monthly") {
      monthly.forEach((price) => price.classList.add("d-block"));
      monthly.forEach((price) => price.classList.remove("d-none"));
      yearly.forEach((price) => price.classList.add("d-none"));
      yearly.forEach((price) => price.classList.remove("d-block"));
    } else {
      monthly.forEach((price) => price.classList.add("d-none"));
      monthly.forEach((price) => price.classList.remove("d-block"));
      yearly.forEach((price) => price.classList.add("d-block"));
      yearly.forEach((price) => price.classList.remove("d-none"));
    }
  };

  return (
    <section className="pricing section-padding style-5" data-scroll-index="4">
      <div className="container">
        <div className="section-head text-center mb-60 style-5">
          <h2 className="mb-20">{t('services:pricing.choosePlan')}</h2>
          <p>
            {t('services:pricing.desc')}
          </p>
        </div>
        <div className="pricing-tabsHead text-center">
          <div className="price-radios">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="monthly-input"
                value="option1"
                onChange={(e) => togglePlanDuration("monthly")}
              />
              <label className="form-check-label" htmlFor="monthly-input">
                {t('services:pricing.billMonth')}
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="yearly-input"
                value="option2"
                defaultChecked
                onChange={(e) => togglePlanDuration("yearly")}
              />
              <label className="form-check-label" htmlFor="yearly-input">
                {t('services:pricing.billYear')}
                <small className="alert-danger text-danger rounded-pill ms-1">
                  -15%
                  {/* discount */}
                </small>
              </label>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <div className="content">
            <div className="price-head">
              <div className="price-headTitle">
                <img loading="lazy" src="/assets/img/icons/price_s5.png" alt="" />
              </div>
              {plans.map((plan, i: number) => (
                <div
                  className={`price-headItem ${plan.bestChoice && "bg-gray5"}`}
                  key={i}
                >
                  <h6>{plan.title}</h6>
                  <h2
                    className={`monthly_price ${plan.bestChoice && "color-main5"}`}
                  >
                    {plan.price.monthly} <span>{t('services:pricing.mo')}</span>
                  </h2>
                  <h2
                    className={`yearly_price ${plan.bestChoice && "color-main5"}`}
                  >
                    {plan.price.yearly} <span>{t('services:pricing.yr')}</span>
                  </h2>
                  <small>{plan.short_description}</small>
                  <small>{plan.description}</small>
                  {plan.bestChoice && <div className="label">{t('services:bestChoice')}</div>}
                </div>
              ))}
            </div>

            <div className="price-body">
              {features.map((feature, i: number) => (
                <div className="price-bodyItems" key={i}>
                  <div className="price-bodyTitle">{feature.title}</div>
                  <div className="price-item">
                    {typeof feature.data[0] === "boolean" ? (
                      feature.data[0] && <i className="bi bi-check2"></i>
                    ) : (
                      <span>{feature.data[0]}</span>
                    )}
                  </div>
                  <div className="price-item bg-gray5">
                    {typeof feature.data[1] === "boolean" ? (
                      feature.data[1] && <i className="bi bi-check2"></i>
                    ) : (
                      <span>{feature.data[1]}</span>
                    )}
                  </div>
                  <div className="price-item">
                    {typeof feature.data[2] === "boolean" ? (
                      feature.data[2] && <i className="bi bi-check2"></i>
                    ) : (
                      <span>{feature.data[2]}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="price-foot">
              <div className="price-footTitle"></div>
              <div className="price-footItem">
                <Link href={PATH_PAGE.contact}>
                  <p className="btn rounded-pill main5-3Dbutn hover-main2 sm-butn fw-bold">
                    <span>{t('common:getStart')}</span>
                  </p>
                </Link>
              </div>
              <div className="price-footItem bg-gray5">
                <Link href={PATH_PAGE.contact}>
                  <p className="btn rounded-pill main5-3Dbutn hover-main2 sm-butn fw-bold">
                    <span>{t('common:getStart')}</span>
                  </p>
                </Link>
              </div>
              <div className="price-footItem">
                <Link href={PATH_PAGE.contact}>
                  <p className="btn rounded-pill main5-3Dbutn hover-main2 sm-butn fw-bold">
                    <span>{t('common:getStart')}</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
