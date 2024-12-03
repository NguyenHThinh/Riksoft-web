const Philosophy = () => {
  return (
    <section className="about section-padding style-5 style-6">
      <div className="content border-0 p-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 order-2 order-lg-0">
              <div className="section-head mb-30 style-5">
                <h2>
                  {" "}
                  <span>Philosophy</span>{" "}
                </h2>
              </div>
              <p>
                Like any great agency, we are only as good as the result we
                deliver of our recent work. Our developers are committed to
                maintaining the highest web standards so that your site.
              </p>
              <div className="line-links">
                <a href="#">Become 1st in the IT industrial</a>
                <a href="#">Competitive Price</a>
                <a href="#">Enhance the quality of life</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img loading="lazy" src="/assets/img/about/superman_3d.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s6_bubbles.png"
        alt=""
        className="bubbles rotate-center"
      />
    </section>
  );
};

export default Philosophy;
