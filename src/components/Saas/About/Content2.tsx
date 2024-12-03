import React from "react";
import Link from "next/link";

import { PATH_PAGE } from "@/routes/paths";
import { useLocales } from "@/locales";

interface ContentProps {
  list: any[];
}

const Content: React.FC<ContentProps> = ({ list }) => {
  const { t } = useLocales(['services'])

  return (
    <div className="content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="img main-img2">
              <img loading="lazy" src="/assets/img/about/about_s5_2_1.png" alt="" />
              <img
                src="/assets/img/about/about_s5_2_2.png"
                alt=""
                className="img-body"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="section-head mb-30 style-5">
              <h2>{t('services:paymentGateways')}</h2>
            </div>
            <p>{t('services:paymentGatewaysDesc')}</p>
            <ul className="list-icon">
              {list.map((item, index) => (
                <li key={index}>
                  <span className="icon">
                    <i className={item.icon}></i>
                  </span>
                  <h6>{item.title}</h6>
                </li>
              ))}
            </ul>
            <Link href={PATH_PAGE.contact}>
              <p className="btn rounded-pill main5-3Dbutn hover-main2 sm-butn fw-bold mt-50">
                <span>Book A Free Demo</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
