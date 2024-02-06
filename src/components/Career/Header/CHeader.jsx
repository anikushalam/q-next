import style from "./CHeader.module.css";
// import { imageShowUrl2 } from "@/utils/BaseUrl";
// import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";

function CHeader() {
  return (
    <div className={`${style.newHeadContainerOverlay} ${style.whyQviplebg}`}>
      <div className={style.cheader}>
        <h3>Careers</h3>
        <h6>Join us and be part of an innovative team!</h6>

        <h6>
          We are committed to fostering a culture of creativity, collaboration,
          and excellence.
        </h6>

        {/* <LazyImg
        loading="lazy"
        effect="blur"
        src={`${imageShowUrl2}/career/joinlegacy.svg`}
        alt=""
      /> */}
      </div>
    </div>
  );
}

export default CHeader;
