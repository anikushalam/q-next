import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import { imagekitUrl } from "@/utils/BaseUrl";
import style from "../ServiceDetails.module.css";
import Link from "next/link";
import PropTypes from "prop-types";

function Footer({ status }) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className={
        status === "responsiveCareeer"
          ? `${style.footer} ${style.homefooter} ${style.rescareerfooter}`
          : `${style.footer} ${style.homefooter}`
      }
    >
      <div className={style.footerbody}>
        <div className={`${style.footerbodycolumn} ${style.iconcolumn}`}>
          <div className={style.logoflex}>
            <LazyImg
              loading="lazy"
              effect="blur"
              className={style.footerlogo}
              src="/images/light-theme/newLogo.svg"
              title="qviple erp"
              alt="qviple erp"
            />
            <div className={style.logoflextext}>
              <h6>Qviple</h6>
              <p>Embrace Everyone</p>
            </div>
          </div>

          <div className={style.iconflex}>
            <a
              href="https://www.facebook.com/Qviple"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.invisibletext}>Qviple LMS facebook</span>
              <LazyImg
                loading="lazy"
                className={style.social}
                src="/images/light-theme/social/facebook-icon.png"
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/qviple/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.invisibletext}>Qviple LMS Instagram</span>
              <LazyImg
                loading="lazy"
                className={style.social}
                src="/images/light-theme/social/instagram-icon.png"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/qviple"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.invisibletext}>Qviple LMS Linkedin</span>
              <LazyImg
                loading="lazy"
                className={style.social}
                src="/images/light-theme/social/linkedin-icon.png"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/Qviple1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.invisibletext}>Qviple LMS Twitter</span>
              <LazyImg
                loading="lazy"
                className={style.social}
                src="/images/light-theme/social/twitter-icon.png"
                alt=""
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCcXbbBOYSMXOFEfyBLDjdyw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.invisibletext}>Qviple LMS Youtube</span>
              <LazyImg
                loading="lazy"
                className={style.social}
                src="/images/light-theme/social/youtube-icon.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className={style.footerbodycolumn}>
          <h5>Quick Links</h5>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />
            {status === "home" ? (
              <a href="#head">
                <p> Home</p>
              </a>
            ) : (
              <a href="/">
                <p> Home</p>
              </a>
            )}
          </div>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />
            {status === "home" ? (
              <a href="#about">
                <p> About Us</p>
              </a>
            ) : (
              <a href="/#about">
                <p> About Us</p>
              </a>
            )}
          </div>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />
            <a
              href={
                status === "home"
                  ? "#getintouch"
                  : status === "career"
                  ? "#form"
                  : status === "responsiveCareeer"
                  ? "#Contact-Us"
                  : "/#getintouch"
              }
            >
              <p> Contact Us</p>
            </a>
          </div>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />

            {status === "responsiveCareeer" || status === "career" ? (
              <p onClick={scrollToTop}> Careers</p>
            ) : (
              <Link href="/q/career" rel="noreferrer" target="_blank">
                <p> Careers</p>
              </Link>
            )}
          </div>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />
            {status === "modules" ? (
              <p onClick={scrollToTop}> Modules</p>
            ) : (
              <Link href="/q/modules-we-offer" rel="noreferrer" target="_blank">
                <p> Modules</p>
              </Link>
            )}
          </div>
          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />
            {status === "chooseus" ? (
              <p onClick={scrollToTop}> Choose Us</p>
            ) : (
              <Link
                href="/q/reasons-to-choose-qviple"
                rel="noreferrer"
                target="_blank"
              >
                <p> Choose Us</p>
              </Link>
            )}
          </div>
        </div>

        <div className={style.footerbodycolumn}>
          <h5>Get Started</h5>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />
            <a
              href="https://qviple.com/q/terms/condition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p> Terms of Use</p>
            </a>
          </div>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />

            <a
              href="https://qviple.com/q/privacy/policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p> Privacy Policy</p>
            </a>
          </div>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />
            <a
              href="https://developer.qviple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p> Api Documentation</p>
            </a>
          </div>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />
            <a
              href="https://admin.qviple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p> Manage Affiliation</p>
            </a>
          </div>

          <div className={style.footeritem}>
            <LazyImg
              loading="lazy"
              effect="blur"
              // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
              src="/images/light-theme/right.svg"
              alt=""
            />
            <a
              href="https://support.qviple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p> User Manual</p>
            </a>
          </div>

          {status !== "datainput" && (
            <div className={style.footeritem}>
              <LazyImg
                loading="lazy"
                effect="blur"
                // src={`${imagekitUrl}/Qviple_Landing/icons/right.svg`}
                src="/images/light-theme/right.svg"
                alt=""
              />
              <Link href="/q/data-input" rel="noreferrer" target="_blank">
                <p> Data Input Format</p>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className={style.footerbottom}>
        © {new Date().getFullYear()} Qviple. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
