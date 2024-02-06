import { useState } from "react";
import styles from "./Navright.module.css";
import { imageShowUrl2, imagekitUrl } from "@/utils/BaseUrl";
import PropTypes from "prop-types";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Navmenu from "@/components/HeadSection/NavigationBar/Navmenu";

function Navright({ status }) {
  const [toggle, setToggle] = useState(false);
  const [clickMenu, setClickMenu] = useState(false);
  return (
    <>
      <div className={styles.navigationright}>
        <a className={styles.callIconImgcontainer} href="#getintouch">
          <LazyImg
            className={styles.callIconImg}
            effect="blur"
            src={`${imagekitUrl}/Qviple_Landing/phone-icon-black.png`}
            alt="call"
            loading="lazy"
          />
          <div className={styles.callText}>
            <p className={styles.callNumber}>+91-72761 47751</p>
            <p className={styles.callNumberText}>Call Now!</p>
          </div>
        </a>
        <a
          href="https://dashboard.qviple.com"
          rel="noreferrer"
          className={styles.logintab}
        >
          Sign In
        </a>
      </div>

      <div className={styles.menubarcontainerr}>
        <div className={clickMenu ? styles.menubarpadd : styles.menuclosed}>
          <a
            href="https://dashboard.qviple.com"
            rel="noreferrer"
            className={clickMenu ? styles.accesbtn : styles.accesbtnclose}
          >
            <span>Get Started</span>
            <LazyImg
              loading="lazy"
              effect="blur"
              alt=" not found"
              src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
            />
          </a>

          <div
            className={
              clickMenu
                ? `${styles.barwrapper} ${styles.barwrapperclose}`
                : `${styles.barwrapper} ${styles.barwrapperopen}`
            }
            onClick={() => {
              setClickMenu(!clickMenu);
            }}
          >
            <div
              className={
                clickMenu
                  ? `${styles.menuBar} ${styles.bar1clicked}`
                  : `${styles.menuBar} ${styles.bar1}`
              }
            />

            <div
              className={
                clickMenu
                  ? `${styles.menuBar} ${styles.bar2clicked}`
                  : `${styles.menuBar} ${styles.bar2}`
              }
            />

            <div
              className={
                clickMenu
                  ? `${styles.menuBar} ${styles.bar3clicked}`
                  : `${styles.menuBar} ${styles.bar3}`
              }
            />
          </div>
          <div className={styles.dumheight} />

          <Navmenu
            setClickMenu={setClickMenu}
            clickMenu={clickMenu}
            theme="light-theme"
            status={status}
          />
        </div>
      </div>
    </>
  );
}

Navright.propTypes = {
  toggleClick: PropTypes.func,
  getintouch: PropTypes.func,
};

export default Navright;
