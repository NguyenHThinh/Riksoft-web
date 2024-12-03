import { useLocales } from "@/locales";
import React from "react";

interface Texts {
  text1: string;
  text2: string;
}

interface ContentProps {
  texts: Texts;
  number: string;
}

const Content: React.FC<ContentProps> = ({ texts, number }) => {
  const { t } = useLocales(['services'])

  return (
    <div className="content pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 order-2 order-lg-0">
            <div className="section-head mb-30 style-5">
              <h2>{t('services:easyCustom')}</h2>
            </div>
            <p>{texts.text1}</p>
            <p className="mt-20">{texts.text2}</p>
            <div className="d-flex align-items-center mt-70">
              <div className="img me-2 flex-shrink-0">
                <img loading="lazy" src="/assets/img/about/owners.png" alt="" />
              </div>
              <div className="inf">
                <h4 className="color-main5 mb-0 lh-1">{number}</h4>
                <p>{t('services:easyCustomDesc')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 order-0 order-lg-2">
            <div className="img main-img3">
              <img
                src="/assets/img/about/about_s5_3_1.png"
                alt=""
                className="img-body"
              />
              <img loading="lazy" src="/assets/img/about/about_s5_3_2.png" alt="" />
              <img loading="lazy" src="/assets/img/about/about_s5_3_3.png" alt="" />
              <img loading="lazy" src="/assets/img/about/about_s5_3_4.png" alt="" />
              <img loading="lazy" src="/assets/img/about/about_s5_3_5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
