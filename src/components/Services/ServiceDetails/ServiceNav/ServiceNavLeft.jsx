import styles from "./ServiceNav.module.css";
import { LazyImg } from "../../../../../dynamiclib/Lazy/LazyImage";
import { Link } from "react-router-dom";

function ServiceNavLeft() {
  return (
    <div className={styles.navleft}>
      <Link to="/">
        <div className={styles.navigationleft}>
          <LazyImg
            loading="lazy"
            effect="blur"
            src={`/images/newLogo.svg`}
            alt="qviple"
            title="qviple erp"
          />
          <h5>QVIPLE</h5>
        </div>
      </Link>
    </div>
  );
}

export default ServiceNavLeft;
