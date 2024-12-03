import { useLocales } from "@/locales";
import AppImage from "../AppImage";
import teamMembers from "@data/Digital/team.json";
import Parser from "html-react-parser";
const Team = () => {
  const { t } = useLocales(['about'])

  return (
    <section className="team section-padding style-1 mb-30">
      <div className="content">
        <div className="container">
          <div className="section-head text-center mb-70 style-5">
            <h2 className="mb-20">{Parser(t('about:team.title'))}</h2>
            <p>{t('about:team.desc')}</p>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
                <div
                    className="team_box wow fadeInUp m-center"
                    data-wow-delay={index * 0.2 + "s"}
                    key={index}
                >
                  <div className="avatar position-relative">
                    <AppImage src={member.picture} alt="avatar" fill />
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
            {/*{teamMembers.map((member, index) => (*/}
            {/*  <div className="col-lg-3 col-sm-6 m-center" key={index}>*/}
            {/*    <div*/}
            {/*      className={`team-card ${index !== teamMembers.length - 1 ? "mb-30 mb-lg-0" : ""} style-6`}*/}
            {/*    >*/}
            {/*      <div className="img img-cover">*/}
            {/*        <AppImage src={member.picture} alt="" fill quality={100} />*/}
            {/*        <div className="social-icons">*/}
            {/*          <a href={member?.facebook} className={"me-1"}>*/}
            {/*            <i className="fab fa-facebook-f"></i>*/}
            {/*          </a>*/}
            {/*          <a href={member?.linkedin} className={"me-1"}>*/}
            {/*            <i className="fab fa-linkedin-in"></i>*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div className="info">*/}
            {/*        <a className="d-block" href="#">*/}
            {/*          <h6>{member.name}</h6>*/}
            {/*        </a>*/}
            {/*        <small>{member.position}</small>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*))}*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
