import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { PATH_PAGE } from "@/routes/paths";
import CountTo from "../CountTo";
import {useTranslation} from "next-i18next";
// import aboutData from "@data/Digital/about.json";

const aboutData = {
  "logos": [
    "/assets/img/about/about_logos/1.png",
    "/assets/img/about/about_logos/2.png",
    "/assets/img/about/about_logos/3.png",
    "/assets/img/about/about_logos/4.png",
    "/assets/img/about/about_logos/5.png"
  ],
  "numbers": [
    {
      "number": 5,
      "info": "yearOfExperience",
      "operator": {
        "icon": "fas fa-plus"
      }
    },
    {
      "number": 70,
      "info": "projectsCompleted",
      "operator": {
        "icon": "fas fa-plus"
      }
    },
    {
      "number": 3,
      "info": "softwareProductBrand"
    },
    {
      "number": 5,
      "info": "globalExpertAdvisors",
      "operator": {
        "icon": "fas fa-plus"
      }
    }
  ]
}

const About = () => {
  const {t} = useTranslation(['home','about']);
  const numbersSectionRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ from: number; to: number }>({
    from: 300,
    to: 500,
  });

  useEffect(() => {
    if (!numbersSectionRef.current) return;

    const numbersSection = numbersSectionRef.current;
    const numbersSectionHeight = numbersSection.offsetHeight;
    const numbersSectionTop = numbersSection.offsetTop;

    const Position = {
      from: numbersSectionTop - numbersSectionHeight - 100,
      to: numbersSectionTop + numbersSectionHeight,
    };

    setPosition(Position);
  }, []);

  return (
    <section className="about style-1" data-scroll-index="1">
      <div className="container">
        <div className="content">
          {/*<div className="about-logos d-flex align-items-center justify-content-between border-bottom border-1 brd-light pb-20">*/}
          {/*  {aboutData.logos.map((logo, index) => (*/}
          {/*    <a*/}
          {/*      href="#"*/}
          {/*      className="logo wow fadeInUp"*/}
          {/*      data-wow-delay={index * 0.2 + "s"}*/}
          {/*      key={index}*/}
          {/*    >*/}
          {/*      <img loading="lazy" src={logo} alt="" />*/}
          {/*    </a>*/}
          {/*  ))}*/}
          {/*</div>*/}
          <div className="about-info">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="title">
                  <h3 className=" wow fadeInUp slow">
                    “{t("about:slogan")}”
                  </h3>
                  <small className="wow fadeInUp slow fw-bold">
                    CEO - Richard Phan
                  </small>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <h6 className=" wow fadeInUp slow">
                    {t("about:headingAbout")}
                  </h6>
                  <p className="wow fadeInUp slow">
                    {t("about:subHeadingAbout")}
                  </p>
                  <Link href={PATH_PAGE.about}>
                    <span className="btn btn-outline-light mt-5 sm-butn wow fadeInUp slow">
                     {t('home:moreAboutUs')}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="about-numbers" ref={numbersSectionRef}>
            <div className="row">
              {aboutData.numbers.map((item: any, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="num-item wow fadeInUp" data-wow-delay="0">
                    <div className="num">
                      <CountTo
                        className="counter"
                        from={0}
                        to={item.number}
                        speed={1500}
                        position={position}
                      />
                      {item.operator && (
                        <span>
                          {typeof item.operator === "string" ? (
                            item?.operator
                          ) : (
                            <i className="fas fa-plus"></i>
                          )}
                        </span>
                      )}
                    </div>
                    <div className="inf">{t(`about:${item.info}`)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/assets/img/about/num_shap.png"
            alt=""
            className="about_shap"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
