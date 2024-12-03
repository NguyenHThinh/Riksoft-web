import aboutMetadata from "@data/SingleProject/about.json";
import React from "react";

interface AboutProps {
  style: string;
}

const About: React.FC<AboutProps> = ({ style = "4" }) => {
  return (
    <section className="about-app style-5">
      <div className="container">
        <div className="content text-center">
          <h1 className="color-000 mb-50">Notero - Easy Notes App</h1>
          <div className="about-cards border-bottom brd-gray">
            <div className="row">
              {aboutMetadata.map((item, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="about-card mb-30 mb-lg-0">
                    <small className="d-block">{item.title}</small>
                    <h6>
                      {typeof item.description === "string" ? (
                        item.description
                      ) : (
                        <>
                          {item.description.part1} <br />{" "}
                          {item.description.part2}
                        </>
                      )}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="img-content pt-70 pb-70 border-bottom brd-gray overflow-hidden">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="img text-center">
                  <img
                    src="/assets/img/single_project/2mobs.png"
                    alt=""
                    className="main-img"
                  />
                  <img
                    src="/assets/img/single_project/bubbls.png"
                    alt=""
                    className="bubbls"
                  />
                  <img
                    src="/assets/img/single_project/circle.png"
                    alt=""
                    className="circle"
                  />
                </div>
                <div className="info mt-30">
                  <h5 className="lh-4">
                    Stay focused and productive with a clean and clutter-free
                    note space. The flexible ways to organize your notes:
                    hashtags, nested notebooks, pinning notes to the top of the
                    note list, etc
                  </h5>
                  <a href="#" className={`color-main${style} mt-60`}>
                    https://example.domain
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
