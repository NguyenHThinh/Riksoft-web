import { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { PATH_PAGE } from "@/routes/paths";
import { useLocales } from "@/locales";
import AppImage from "@components/AppImage";
import navbarScrollEffect from "@common/navbarScrollEffect";
import {useRouter} from "next/router";
// import useBodyBlockScroll from "@common/useBodyBlockScroll";

const NavBar = () => {
  const { allLangs, currentLang, onChangeLang, t } = useLocales([
    "common",
    "services",
  ]);

  // const { isLock, toggle } = useBodyBlockScroll();

  const navbarRef = useRef(null);
  const outleyRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, outleyRef.current, false);
  }, [navbarRef]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const dropDownToggler = target.classList.contains("dropdown-toggle")
      ? target
      : target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList.add("show");
    dropDownMenu?.classList.add("show");
  };

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    const dropdown = target.classList.contains("dropdown")
      ? target
      : target.closest(".dropdown");

    if (dropdown) {
      const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
      const dropDownMenu = dropdown.querySelector(".dropdown-menu");

      if (dropDownToggler && dropDownMenu) {
        dropDownToggler.classList.remove("show");
        dropDownMenu.classList.remove("show");
      }
    }
  };

  return (
    <div className="nav-container">
      <div className="outley_nav" ref={outleyRef}></div>
      <nav
        className="navbar navbar-expand-lg navbar-light style-1"
        ref={navbarRef}
      >
        {/* <div className="block_layout" onTouchStart={toggle}></div> */}
        <div className="container">
          <div className="navbar_line">
            <Link
              className="navbar-brand"
              href={PATH_PAGE.home}
              // onClick={(e) => scrollToSection(e)}
            >
              <AppImage
                src="/assets/img/logo-riksoft-company.svg"
                data-scroll-nav="0"
                alt=""
                width={110}
                height={70}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              // onClick={toggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className={` collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  href={PATH_PAGE.about}
                  // onClick={(e) => scrollToSection(e)}
                >
                  <p className="nav-link">{t("about")}</p>
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                onClick={() => router.push(`${PATH_PAGE.services}/`)}
                onMouseMove={(e) => {
                  if (window.innerWidth > 991) {
                    handleMouseMove(e);
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth > 991) {
                    handleMouseLeave(e);
                  }
                }}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("services")}
                </a>
                <div
                  className="dropdown-menu multi-children"
                  aria-labelledby="navbarDropdown1"
                >
                  <ul>
                    <li>
                      <p className="list-title">
                        {t("service1.title", { ns: "services" })}
                      </p>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/website-webapp-development`}>
                        {t("service1.option1", { ns: "services" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/enterprise-software-development`}>
                        {t("service1.option2", { ns: "services" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/`}>
                        {t("service1.option3", { ns: "services" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/seo-and-optimize-ads`}>
                        {t("service1.option4", { ns: "services" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/`}>
                        {t("service1.option5", { ns: "services" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/it-remote-helpdesk`}>
                        {t("service1.itRemoteHelpDesk", { ns: "services" })}
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p className="list-title">
                        {t("service2.title", { ns: "services" })}
                      </p>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/it-consultation`}>
                        {t("service2.option1", { ns: "services" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/data-analytics`}>
                        {t("service2.option2", { ns: "services" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/cloud-service`}>
                        {t("service2.option3", { ns: "services" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/hosting-domain`}>
                        {t("service2.option4", { ns: "services" })}
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p className="list-title">
                        {t("service3.title", { ns: "services" })}
                      </p>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/`}>
                        {t("service3.option1", { ns: "services" })}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={`${PATH_PAGE.services}/`}>
                        {t("service3.option2", { ns: "services" })}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={PATH_PAGE.projects}>
                  {t("portfolio")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={PATH_PAGE.post}>
                  {t("blog")}
                </Link>
              </li>
            </ul>
            <div className="nav-side">
              <div className="hotline pe-4">
                <div className="icon me-3">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="cont">
                  <small className="text-muted m-0">Zalo/Viber 24/7</small>
                  <h6>0968 468 800</h6>
                </div>
              </div>
              <div className="qoute-nav ps-3">
                <div
                  className="dropdown language"
                  onMouseMove={(e) => {
                    window.innerWidth > 991 && handleMouseMove(e);
                  }}
                  onMouseLeave={(e) => {
                    window.innerWidth > 991 && handleMouseLeave(e);
                  }}
                >
                  <div
                    className="dropdown-toggle"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AppImage
                      className="me-1"
                      src={currentLang.icon}
                      width={15}
                      height={15}
                      alt=""
                    />{" "}
                    {currentLang.value}
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    {allLangs.map((item) => (
                      <li key={item.value}>
                        <span
                          className="dropdown-item"
                          role="button"
                          onClick={() => onChangeLang(item.value)}
                        >
                          <AppImage
                            className="me-1"
                            src={item.icon}
                            alt=""
                            width={15}
                            height={15}
                          />
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={PATH_PAGE.contact}
                  className="btn sm-butn butn-gard border-0 text-white"
                >
                  <span>{t("freeQuote")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
