import { useLocales } from "@/locales";
import Parser from 'html-react-parser'
import AppImage from "../AppImage";

const community = [
  {
    "img": "/assets/img/icons/code3d.png",
    "title": "highQuantitySoftware"
  },
  {
    "img": "/assets/img/icons/price3d.png",
    "title": "affordablePrice"
  },
  {
    "img": "/assets/img/icons/message3d.png",
    "title": "latestTechnology"
  }
]

const Community = () => {
  const { t } = useLocales(['about'])

  return (
    <section className="community pt-40 style-5">
      <div className="container">
        <div className="section-head text-center mb-20 style-5">
          <h2 className="mb-20">
            {Parser(t('about:topReasons'))}
          </h2>
          {/*<p>{t('about:descTopReasons')}</p>*/}
          <p>{t("home:headerSubTitle")}</p>
        </div>
        <div className="content rounded-pill">
          {community.map((item, index) => (
            <div className="commun-card" key={index}>
              <div className="icon">
                <AppImage width={52} height={47} quality={100} src={item.img} alt="" />
              </div>
              <div className="inf">
                <h5>{t(item.title)}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
