import { useLocales } from "@/locales";
import React from "react";

interface ContentProps {
  links: string[];
}

const Content: React.FC<ContentProps> = ({ links }) => {
  const { t } = useLocales(['services'])

  return (
    <div className="content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 order-2 order-lg-0">
            <div className="section-head mb-30 style-5">
              <h2>{t('services:optimizedExperiences')}</h2>
            </div>
            <p>{t('services:optimizedExperiencesDesc')}</p>
            {/*<div className="line-links">*/}
            {/*  {links.map((link, index) => (*/}
            {/*    <a href="#" key={index}>*/}
            {/*      {link}*/}
            {/*    </a>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>
          <div className="col-lg-8 order-0 order-lg-2">
            <div className="img main-img1">
              <img
                src="/assets/img/about/about_s5_1_1.png"
                alt=""
                className="sm-circle"
              />
              <img
                src="/assets/img/about/about_s5_1_2.png"
                alt=""
                className="img-body"
              />
              <img
                src="/assets/img/about/about_s5_1_3.png"
                alt=""
                className="card1"
              />
              <img
                src="/assets/img/about/about_s5_1_4.png"
                alt=""
                className="card2"
              />
              <img
                src="/assets/img/about/about_s5_1_5.png"
                alt=""
                className="lg-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
