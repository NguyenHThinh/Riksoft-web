import communityData from '@/data/Contact/community.json';
import {useLocales} from "@/locales";
import Parser from "html-react-parser";

const Community = () => {
    const {t} = useLocales(['about']);
    return (
        <section className="community section-padding style-5 pb-0 pt-50">
            <div className="container">
                <div className="section-head text-center style-4 mb-40">
                    {/*<small className="title_small">{t("common:contact")}</small>*/}
                    <h2 className="mb-20">{Parser(t('about:getInTouch'))}</h2>
                    {/*<p>We will contact again after receive your request in 24h</p>*/}
                </div>
                <div className="content rounded-pill">
                    {
                        communityData.map((card, i) => (
                            <div className="commun-card" key={i}>
                                <div className="icon icon-45">
                                    <img loading="lazy" src={card.icon} alt="" />
                                </div>
                                <div className="inf">
                                    <h5>{ card.info }</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Community
