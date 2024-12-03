import React, { MouseEvent } from "react";
import { useLocales } from "@/locales";
import AppImage from "@components/AppImage";

const TopNav = () => {
  const { allLangs, currentLang, onChangeLang } = useLocales();
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
    <div className="top-navbar style-1">
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="top-links">
                <div className="text text-white">
                  <i className="fas fa-bullhorn"></i>
                  <strong>RIKSOFT:</strong>
                  <span>
                    Premium Web Design &{" "}
                    <a href="#" className="p-0">
                      <u>Digital Transformation Solutions</u>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="r-side">
                <div className="socail-icons">
                  <a
                    href="https://www.facebook.com/riksoft.official"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/riksoftware"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <div
                  className="dropdown"
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
                      alt=""
                      width={15}
                      height={15}
                    />{" "}
                    {currentLang.label}
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    {allLangs.map((item) => (
                      <li key={item.value}>
                        <span
                          role="button"
                          className="dropdown-item"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
