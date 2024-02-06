import style from "./Chart.module.css";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";

function Chart() {
  return (
    <div className={style.chart}>
      <LazyImg
        effect="blur"
        // src={`${imageShowUrl2}/career/flowchart.svg`}
        src={`/images/light-theme/career-flowchart.svg`}
        alt="career"
        loading="lazy"
      />
    </div>
  );
}

export default Chart;
