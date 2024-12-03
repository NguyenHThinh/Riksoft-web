import challengeData from "@data/SingleProject/challenge.json";

interface ChallengeProps {
  style: string;
}

const Challenge: React.FC<ChallengeProps> = ({ style = "4" }) => {
  return (
    <div className="challenge section-padding style-5 overflow-hidden">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4">
            <div className={`section-head style-${style}`}>
              <h2>Our Challenge</h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="inf">
              <div className="text color-666 mb-20">
                Create an unconventional yet user-friendly website - innovative,
                with a clean & simple design that communicates and showcases
                multi-media content. Site that spreads the message: ”It's
                stories your love.”
              </div>
              <ul className="color-000">
                {challengeData.challenge.map((item, index) => (
                  <li className="d-flex mb-10" key={index}>
                    <i className="bi bi-dot fs-6 me-2"></i> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="imgs mt-60 mb-100">
          <div className="row">
            <div className="col-lg-6">
              <div className="img img-cover rounded-3 overflow-hidden mb-30 mb-lg-0">
                <img loading="lazy" src="/assets/img/single_project/ch_1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img img-cover rounded-3 overflow-hidden">
                <img loading="lazy" src="/assets/img/single_project/ch_2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-lg-4">
            <div className={`section-head style-${style}`}>
              <h2>
                Solution & <br /> Result
              </h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="inf">
              <div className="text color-666 mb-10">
                Our approach was to present the site as a visual editorial
                platform with quarterly features based on events and occasions
                the brand was focused on. Each quarterly focus would be marked
                by the hero and custom tags that filter content.
              </div>
              <div className="text color-666 mb-20">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </div>
              <div className="color-000 mt-50">
                <div className="row">
                  {challengeData.feats.map((item, index) => (
                    <div className="col-lg-6" key={index}>
                      <div
                        className={`d-flex ${index !== challengeData.challenge.length - 1 ? "mb-20" : ""} fw-bold`}
                      >
                        <div
                          className={`icon-20 d-inline-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-main${style} text-white flex-shrink-0 me-3`}
                        >
                          <i className="bi bi-check"></i>
                        </div>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
