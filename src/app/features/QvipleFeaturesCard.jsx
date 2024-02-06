import style from "./QvipleFeatures.module.css";
import PropTypes from "prop-types";

function QvipleFeaturesCard({ module }) {
  const { icon, heading, text, alt } = module;
  return (
    <div className={style.modulesCard}>
      <div className={style.modulesCardHead}>
        <img src={icon} alt={alt} />
        <h6>{heading}</h6>
      </div>
      <div className={style.modulesCardContent}>{text}</div>
    </div>
  );
}

QvipleFeaturesCard.propTypes = {
  module: PropTypes.object,
};

export default QvipleFeaturesCard;
