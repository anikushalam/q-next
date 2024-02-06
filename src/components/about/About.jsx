import { lazy } from "react";
import PropTypes from "prop-types";
import style from "./About.module.css";
import Text from "./components/Text";

import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";

const AboutUs = lazy(() => import("../Responsive/components/about-us/AboutUs"));
const DownloadApp = lazy(() =>
  import("../Responsive/components/download-app/DownloadApp")
);

function About() {
  return (
    <>
      <div className={style.about}>
        <div className={style.imgContainer}>
          <LazyImg
            effect="blur"
            src={`${imageShowUrl2}/about-us.svg`}
            alt="not found"
            loading="lazy"
            className={style.overlayimg}
          />
        </div>

        <div className={style.textContainer}>
          <Text />
        </div>
        <div className={style.videocontainer}>
          <AboutUs />
          <DownloadApp />
        </div>
      </div>
    </>
  );
}

About.propTypes = {
  resStatus: PropTypes.bool,
};

export default About;
