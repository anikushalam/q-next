import style from "./HeadSection.module.css";
import PropTypes from "prop-types";
import NavigationBar from "./NavigationBar/NavigationBar";
import { useState } from "react";
import Navbar from "../Navbars/Navbar/Navbar";

function HeadSection({ resStatus }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  // console.log(hasScrolled);
  return (
    <div className={style.newHeadContainer}>
      <div className={style.newHeadContainerOverlay}>
        {hasScrolled ? (
          <div id="navbar" className={style.lightnavbar}>
            <Navbar status="home" setHasScrolled={setHasScrolled} />
          </div>
        ) : (
          <NavigationBar
            status="home"
            hasScrolled={hasScrolled}
            setHasScrolled={setHasScrolled}
          />
        )}

        <div className={style.headingContentWrapper}>
          <div className={style.headingtext}>
            NEED OF EVERY EDUCATIONAL INSTITUTION
          </div>

          <p className={style.paratext}>
            Complete SchoolERP setup and installation at free of cost with zero
            Annual Maintenance Cost
          </p>

          <div className={style.headingtextbuttons}>
            <a href="/demo">
              <span className={style.invisibletext}>Book a Demo</span>
              <button className={style.headingtextbutton}>Book a Demo</button>
            </a>
            {/* <a
              href={
                resStatus
                  ? "https://play.google.com/store/search?q=qviple&c=apps"
                  : "https://dashboard.qviple.com"
              }
            >
              <span className={style.invisibletext}>Get Started</span>
              <button className={style.headingtextbutton}>Get started</button>
            </a> */}
          </div>
        </div>
        {!resStatus && (
          <p className={style.paratextsolution}>
            <span>
              <a
                href="https://play.google.com/store/search?q=qviple&c=apps"
                rel="noreferrer"
              >
                Mobile
              </a>
            </span>
            {"  "}|{" "}
            <span>
              <a href="https://dashboard.qviple.com" rel="noreferrer">
                Web
              </a>
            </span>
          </p>
        )}
      </div>

      <div className={style.custom_shape_divider_bottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={style.shape_fill}
          ></path>
        </svg>
      </div>
    </div>
  );
}

HeadSection.propTypes = {
  resStatus: PropTypes.bool,
};

export default HeadSection;
