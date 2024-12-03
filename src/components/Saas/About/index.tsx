import React from "react";
import aboutData from "@data/Saas/about.json";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

interface AboutProps {
  noPaddingTop?: boolean;
}

const About: React.FC<AboutProps> = ({ noPaddingTop }) => {
  return (
    <section
      className={`about ${noPaddingTop ? "pt-0 pb-150" : "section-padding"} style-5`}
      data-scroll-index="1"
    >
      <Content1 links={aboutData.lineLinks} />
      {/*<Content2 list={aboutData.list} />*/}
      {/*<Content3 texts={aboutData.texts} number={aboutData.number} />*/}
    </section>
  );
};

export default About;
