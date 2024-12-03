import React from "react";

const Content: React.FC<{ style: string }> = ({ style }) => {
  return (
    <>
      <h4 className="fw-bold color-000 lh-4 mb-30">
        To mark the first UK show of artist Henri Barande, developer{" "}
        <a href="#" className={`color-main${style}`}>
          Moussa
        </a>{" "}
        and German studio Schultzschultz have created The Lodge Wooden at Berlin
        City
      </h4>
      <div className="text mb-10 color-666">
        Today most people get on average 4 to 6 hours of exercise every day, and
        make sure that everything they put in their mouths is not filled with
        sugars or preservatives, but they pay no attention to their mental
        health, no vacations, not even the occasional long weekend. All of this
        for hopes of one day getting that big promotion.
      </div>
      <div className="text color-666 mb-20">
        Coventry is a city with a thousand years of history that has plenty to
        offer the visiting tourist. <br /> Located in the heart of Warwickshire.
      </div>
      <div className="info-imgs">
        <div className="row">
          <div className="col-lg-6">
            <div className="img text-center mt-30">
              <img loading="lazy" src="/assets/img/blog/13.png" alt="" />
              <span className="color-999 fs-12px mt-20">
                Images by"{" "}
                <a href="#" className="color-000">
                  @sample
                </a>{" "}
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img text-center mt-30">
              <img loading="lazy" src="/assets/img/blog/14.png" alt="" />
              <span className="color-999 fs-12px mt-20">
                Images by"{" "}
                <a href="#" className="color-000">
                  @sample
                </a>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text mt-50 color-666">
        The short answer is yes. According to Kross, when you think of yourself
        as another person, it allows you lorem ispum lorem suo give yourself
        more. Notre dame at sume lorem objective, helpful feedback.
      </div>
      <div className="twitter-info mt-60">
        <div className="twitter-card">
          <div className="twitter-header d-flex align-items-center justify-content-between">
            <div className="twitter-user d-flex align-items-center">
              <div className="icon-50 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                <img loading="lazy" src="/assets/img/team/3.jpeg" alt="" />
              </div>
              <div className="inf">
                <h6 className="fw-bold">Russel B.</h6>
                <small className="color-999"> @russelb - 15 Dec, 2022 </small>
              </div>
            </div>
            <div className="twitter-icon">
              <i className="fab fa-twitter"></i>
            </div>
          </div>
          <div className="twitter-info mt-40">
            <h5>
              “The team at{" "}
              <a href="#" className={`color-main${style}`}>
                @iteckagency
              </a>{" "}
              is incredibly dedicated, knowledgeable, and helpful. The finished
              product was beautiful, and worth every penny. I would absolutely
              recommend Iteck WP Theme.”
            </h5>
          </div>
        </div>
        <h4>Defaulting to Mindfulness</h4>
        <div className="text color-666 mt-30">
          Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before
          they sold out blog photo booth Marfa semio tics Truffaut. Mustache
          Schlitz next level blog Williamsburg, deep v typewriter tote bag
        </div>
        <ul className="ps-1 ps-lg-5 my-4 color-666 fs-14px lh-7">
          <li className="d-flex">
            <i className="bi bi-dot me-2 fs-3 lh-2 pt-1"></i>
            Welsh novelist Sarah Waters sums it up eloquently
          </li>
          <li className="d-flex">
            <i className="bi bi-dot me-2 fs-3 lh-2 pt-1"></i>n their classic
            book, Creativity in Business, based on a popular course they
            co-taught
          </li>
          <li className="d-flex">
            <i className="bi bi-dot me-2 fs-3 lh-2 pt-1"></i>
            Novelist and screenwriter Steven Pressfield
          </li>
        </ul>
        <div className="text color-666 mt-30">
          That immediately brought to mind one of{" "}
          <a
            href="#"
            className={`text-decoration-underline color-main${style}`}
          >
            my fondest
          </a>{" "}
          memories, involving my daughter when she was just a toddler of one.
        </div>

        <div className="blog-share mt-80">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="side-tags">
                <div className="content">
                  <a href="#" className="me-1">
                    WordPress
                  </a>
                  <a href="#" className="me-1">
                    PHP
                  </a>
                  <a href="#" className="me-1">
                    HTML/CSS
                  </a>
                  <a href="#">Figma</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="share-icons d-flex justify-content-lg-end mt-3 mt-lg-0">
                <h6 className="fw-bold me-3 flex-shrink-0 text-uppercase">
                  Share on
                </h6>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-tumblr"></i>
                </a>
                <a href="#">
                  <i className="fas fa-rss"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
