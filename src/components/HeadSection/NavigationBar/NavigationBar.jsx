"use client";

import PropTypes from "prop-types";
import Link from "next/link";
import style from "./NavigationBar.module.css";
import { imageShowUrl2, imagekitUrl } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import { lazy, useState } from "react";

const Navmenu = lazy(() => import("./Navmenu"));

function NavigationBar({ status, hasScrolled, setHasScrolled }) {
  const [clickMenu, setClickMenu] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= viewportHeight) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
  }

  return (
    <>
      <div
        className={
          hasScrolled || status === "home"
            ? `${style.navigationbar} ${style.navigationbarActive}`
            : style.navigationbar
        }
      >
        <div className={style.navigationleftcontainert}>
          <Link href="/">
            <div className={style.navigationleft}>
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

          <div className={style.navigationright}>
            {!status && (
              <a className={style.navitem} href="#about">
                About Us
              </a>
            )}

            <Link
              className={
                status === "chooseUs"
                  ? `${style.navitem} ${style.naviterActive}`
                  : style.navitem
              }
              href="/features"
            >
              Features
            </Link>

            <Link
              className={
                status === "module"
                  ? `${style.navitem} ${style.naviterActive}`
                  : style.navitem
              }
              href="/modules"
            >
              Modules
            </Link>

            <Link
              className={
                status === "pricing"
                  ? `${style.navitem} ${style.naviterActive}`
                  : style.navitem
              }
              href="/pricing"
            >
              Pricing
            </Link>

            <a className={style.navitem} href="/career">
              Career
            </a>

            <a
              className={style.navitem}
              href="https://support.qviple.com/registerins"
              rel="noreferrer"
              target="_blank"
            >
              User Guide
            </a>
          </div>
        </div>

        <div className={style.navigationright}>
          <a className={style.callIconImgcontainer} href="#getintouch">
            <LazyImg
              className={style.callIconImg}
              effect="blur"
              src={
                // document.body.className === "light-theme"
                //   ? `${imagekitUrl}/Qviple_Landing/phone-icon-black.png`
                //   :
                `${imagekitUrl}/Qviple_Landing/phone-icon-white.png`
              }
              alt="call"
              loading="lazy"
            />
            <div className={style.callText}>
              <p className={style.callNumber}>+91-72761 47751</p>
              <p className={style.callNumberText}>Call Now!</p>
            </div>
          </a>
          <a
            href="https://dashboard.qviple.com"
            rel="noreferrer"
            className={style.logintab}
          >
            Sign In
          </a>
        </div>

        <div className={style.menubarcontainerr}>
          <div className={clickMenu ? style.menubarpadd : style.menuclosed}>
            <a
              href="https://dashboard.qviple.com"
              rel="noreferrer"
              className={clickMenu ? style.accesbtn : style.accesbtnclose}
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
                  ? `${style.barwrapper} ${style.barwrapperclose}`
                  : `${style.barwrapper} ${style.barwrapperopen}`
              }
              onClick={() => {
                setClickMenu(!clickMenu);
              }}
            >
              <div
                className={
                  clickMenu
                    ? `${style.menuBar} ${style.bar1clicked}`
                    : `${style.menuBar} ${style.bar1}`
                }
              />

              <div
                className={
                  clickMenu
                    ? `${style.menuBar} ${style.bar2clicked}`
                    : `${style.menuBar} ${style.bar2}`
                }
              />

              <div
                className={
                  clickMenu
                    ? `${style.menuBar} ${style.bar3clicked}`
                    : `${style.menuBar} ${style.bar3}`
                }
              />
            </div>
            <div className={style.dumheight} />

            <Navmenu
              setClickMenu={setClickMenu}
              clickMenu={clickMenu}
              status={status}
            />

            {/* <div
              className={
                clickMenu ? style.menucolumns : style.menucolumnsdisable
              }
            >
              <a
                href="https://dashboard.qviple.com"
                rel="noreferrer"
                className={`${style.menucolumn} ${style.regetstarted}`}
              >
                <span>Get Started</span>
                <img
                  src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
                  alt=""
                />
              </a>
              {status === "home" ? (
                <a
                  href="https://dashboard.qviple.com"
                  rel="noreferrer"
                  className={style.menucolumn}
                  onClick={() => setClickMenu(false)}
                >
                  <span>Login</span>

                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    alt=" login"
                    src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
                  />
                </a>
              ) : (
                <a
                  href="/"
                  rel="noreferrer"
                  className={style.menucolumn}
                  onClick={() => setClickMenu(false)}
                >
                  <span>Home</span>

                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    alt=" login"
                    src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
                  />
                </a>
              )}
              <a
                href="#about"
                rel="noreferrer"
                className={style.menucolumn}
                onClick={() => setClickMenu(false)}
              >
                <span>About Us</span>

                <LazyImg
                  loading="lazy"
                  effect="blur"
                  alt=" about us"
                  src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
                />
              </a>
              {status === "module" ? (
                <a
                  href="/features"
                  rel="noreferrer"
                  target="_blank"
                  className={style.menucolumn}
                  onClick={() => setClickMenu(false)}
                >
                  <span>Features</span>

                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    alt=" modules"
                    src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
                  />
                </a>
              ) : (
                <a
                  href="/modules"
                  rel="noreferrer"
                  target="_blank"
                  className={style.menucolumn}
                  onClick={() => setClickMenu(false)}
                >
                  <span>Modules</span>

                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    alt=" modules"
                    src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
                  />
                </a>
              )}

              {status === "home" && (
                <a
                  href="/features"
                  rel="noreferrer"
                  target="_blank"
                  className={style.menucolumn}
                  onClick={() => setClickMenu(false)}
                >
                  <span>Features</span>

                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    alt=" modules"
                    src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
                  />
                </a>
              )}
              <a
                href="https://qviple.com/q/pricing"
                rel="noreferrer"
                target="_blank"
                className={style.menucolumn}
                onClick={() => setClickMenu(false)}
              >
                <span>Pricing</span>

                <LazyImg
                  loading="lazy"
                  effect="blur"
                  alt=" pricing"
                  src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
                />
              </a>
              <a
                href="#getintouch"
                rel="noreferrer"
                className={style.menucolumn}
                onClick={() => setClickMenu(false)}
              >
                <span>Contact Us</span>

                <LazyImg
                  loading="lazy"
                  effect="blur"
                  alt=" Contact Us"
                  src={`${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`}
                />
              </a>

              <div className={`${style.menucolumn} ${style.resgsocial}`}>
                <a
                  href="https://www.linkedin.com/company/qviple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.socialhalf}
                >
                  Linkedin
                </a>
                <a
                  href="https://twitter.com/Qviple1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${style.socialhalf} ${style.socialhalfright}`}
                >
                  Twitter
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {clickMenu && (
          <div
            className={style.draweroverlay}
            onClick={() => setClickMenu(false)}
          />
        )}
      </div>
    </>
  );
}

NavigationBar.propTypes = {
  status: PropTypes.string,
};

export default NavigationBar;
