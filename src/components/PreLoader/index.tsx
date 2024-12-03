import { useEffect } from "react";
import loadingPace from "@common/loadingPace";

const PreLoader = () => {
  useEffect(() => {
    setTimeout(() => loadingPace(), 100);
  }, []);

  return (
    <div id="preloader">
      <div id="loading-wrapper" className="show">
        <div id="loading-text">
          <img loading="lazy" src="/assets/img/logo_loading.png" alt="" />
        </div>
        <div id="loading-content"></div>
      </div>
    </div>
  );
};

export default PreLoader;
