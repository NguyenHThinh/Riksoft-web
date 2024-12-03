import Link from "next/link";

import { PATH_PAGE } from "@/routes/paths";
import teamMembers from "@data/Digital/team.json";
import {useLocales} from "@/locales";
import Parser from "html-react-parser";

const Team = () => {
  const {t} = useLocales(['home']);
  return (
    <section className="team section-padding pt-0 style-1">
      <div className="container">
        <div className="section-head mb-60 text-center">
          <h6 className="color-main text-uppercase wow fadeInUp">
            {t("home:meetOurExpert")}
          </h6>
          <h2 className="wow fadeInUp">
            {Parser(t("home:teamSubTitle"))}
          </h2>
        </div>
        <div className="content">
          {teamMembers.map((member, index) => (
            <div
              className="team_box wow fadeInUp"
              data-wow-delay={index * 0.2 + "s"}
              key={index}
            >
              <div className="avatar">
                <img loading="lazy" src={member.picture} alt="" />
              </div>
              <div className="info">
                <h6>
                  <a href="#">{member.name}</a>
                </h6>
                <small>{member.position}</small>
                <div className="social_icons">
                  <a href={member?.facebook}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={member?.linkedin}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bttns mt-4 text-center">
          <Link href={PATH_PAGE.about}>
            <p className="btn btn-dark wow zoomIn me-2">
              <span>See All Team</span>
            </p>
          </Link>
          <Link href={PATH_PAGE.contact}>
            <p className="btn butn-gard border-0 text-white wow zoomIn">
              <span>Join Our Team</span>
            </p>
          </Link>
        </div>
      </div>
      <img loading="lazy" src="/assets/img/team/team_shap.png" alt="" className="team_shap" />
    </section>
  );
};

export default Team;
