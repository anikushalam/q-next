import "../../responsive.css";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";

const DownloadApp = () => {
  return (
    <div className="download-app">
      <div className="title downloadtitle">Download App Now</div>
      <div className="download-playStore">
        <a href="https://play.google.com/store/apps/details?id=com.mithakalminds.institute&pli=1">
          <span className="invisibletext">Get Started</span>
          <LazyImg
            loading="lazy"
            src={`${imageShowUrl2}/assets/playstor button- institute.svg`}
            alt="download our app"
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple">
          <span className="invisibletext">Get Started</span>
          <LazyImg
            loading="lazy"
            src={`${imageShowUrl2}/assets/playstor button-business.svg`}
            alt="download our app"
          />
        </a>
      </div>
      <div className="download-app__features"></div>
    </div>
  );
};

export default DownloadApp;
