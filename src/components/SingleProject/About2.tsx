interface AboutProps {
  style: string;
}

const About: React.FC<AboutProps> = ({ style = "4" }) => {
  return (
    <section className="about-app style-5">
      <div className="container">
        <div className="content text-center">
          <div className="img-content pt-70 pb-100 border-bottom brd-gray">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="info mt-30">
                  <h5 className="lh-4">
                    <>
                      “The team at{" "}
                      <a href="#" className={`color-main${style}`}>
                        @iteck
                      </a>{" "}
                      is incredibly dedicated, knowledgeable, and helpful. The
                      finished product was beautiful, and worth every penny. I
                      would absolutely recommend Moonex Labs.”
                    </>
                  </h5>
                  <a
                    href="#"
                    className="mt-60 color-666 fs-12px text-uppercase"
                  >
                    - <strong className="color-000">Jhon henry </strong>, ceo at
                    notero jsc -{" "}
                  </a>
                  <div className="share mt-100">
                    <span className="color-999 fs-12px text-uppercase d-block">
                      share this project
                    </span>
                    <a
                      href="#"
                      className={`social-icon hover-main${style} me-2`}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className={`social-icon hover-main${style} me-2`}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className={`social-icon hover-main${style} me-2`}
                    >
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a
                      href="#"
                      className={`social-icon hover-main${style} me-2`}
                    >
                      <i className="fab fa-goodreads-g"></i>
                    </a>
                    <a href="#" className={`social-icon hover-main${style}`}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="next-prog section-padding">
            <h5 className="color-999 text-uppercase fw-light">next project</h5>
            <a href="#" className="color-000 fs-1 fw-bold mt-20">
              Criftocy Landing Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
