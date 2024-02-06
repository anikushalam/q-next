import styles from "./GetInTouch.module.css";
import Imagee from "./components/Imagee";
import Formm from "./components/Formm";

function GetInTouch() {
  return (
    <div className={styles.getInTouch}>
      <Formm />
      <div className={styles.imagee}>
        <Imagee />
      </div>
    </div>
  );
}

export default GetInTouch;
