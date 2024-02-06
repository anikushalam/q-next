import styles from "./Navleft.module.css";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Link from "next/link";

function Navleft({ status }) {
  return (
    <div className={styles.navleft}>
      {/* <a href="/">
        <LazyImg
          loading="lazy"
          effect="blur"
          className={styles.logo_text_icon}
          src={`${imageShowUrl2}/newLogo-text-icon.svg`}
          alt="logo"
        />
      </a> */}

      <Link href="/">
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

      <div className={styles.navigationright}>
        <Link
          className={
            status === "home"
              ? `${styles.navitem} ${styles.naviterActive}`
              : styles.navitem
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            status === "chooseUs"
              ? `${styles.navitem} ${styles.naviterActive}`
              : styles.navitem
          }
          href="/features"
        >
          Features
        </Link>

        <Link
          className={
            status === "module"
              ? `${styles.navitem} ${styles.naviterActive}`
              : styles.navitem
          }
          href="/modules"
        >
          Modules
        </Link>

        <Link
          className={
            status === "pricing"
              ? `${styles.navitem} ${styles.naviterActive}`
              : styles.navitem
          }
          href="/pricing"
        >
          Pricing
        </Link>

        <a
          className={
            status === "career"
              ? `${styles.navitem} ${styles.naviterActive}`
              : styles.navitem
          }
          href="/career"
        >
          Career
        </a>

        <a
          className={styles.navitem}
          href="https://support.qviple.com/registerins"
          rel="noreferrer"
          target="_blank"
        >
          User Guide
        </a>
      </div>
    </div>
  );
}

export default Navleft;
