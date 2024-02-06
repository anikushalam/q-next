import Link from "next/link";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import { imagekitUrl } from "@/utils/BaseUrl";
import style from "./NavigationBar.module.css";

function Navmenu({ clickMenu, setClickMenu, theme, status }) {
  return (
    <div className={clickMenu ? style.menucolumns : style.menucolumnsdisable}>
      <a
        href="https://dashboard.qviple.com"
        rel="noreferrer"
        className={
          theme === "light-theme"
            ? `${style.menucolumn} ${style.menucolumnlight} ${style.regetstarted}`
            : `${style.menucolumn} ${style.regetstarted}`
        }
      >
        <span>Get Started</span>
        <img
          src={
            theme === "light-theme"
              ? `/images/light-theme/arrow-right.svg`
              : `${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`
          }
          alt=""
        />
      </a>
      {status === "home" ? (
        <a
          href="https://dashboard.qviple.com"
          rel="noreferrer"
          className={
            theme === "light-theme"
              ? `${style.menucolumn} ${style.menucolumnlight}`
              : style.menucolumn
          }
          onClick={() => setClickMenu(false)}
        >
          <span>Login</span>

          <LazyImg
            loading="lazy"
            effect="blur"
            alt=" login"
            src={
              theme === "light-theme"
                ? `/images/light-theme/arrow-right.svg`
                : `${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`
            }
          />
        </a>
      ) : (
        <a
          href="/"
          rel="noreferrer"
          className={
            theme === "light-theme"
              ? `${style.menucolumn} ${style.menucolumnlight}`
              : style.menucolumn
          }
          onClick={() => setClickMenu(false)}
        >
          <span>Home</span>

          <LazyImg
            loading="lazy"
            effect="blur"
            alt=" login"
            src={
              theme === "light-theme"
                ? `/images/light-theme/arrow-right.svg`
                : `${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`
            }
          />
        </a>
      )}
      {status === "home" && (
        <a
          href="#about"
          rel="noreferrer"
          className={
            theme === "light-theme"
              ? `${style.menucolumn} ${style.menucolumnlight}`
              : style.menucolumn
          }
          onClick={() => setClickMenu(false)}
        >
          <span>About Us</span>

          <LazyImg
            loading="lazy"
            effect="blur"
            alt=" about us"
            src={
              theme === "light-theme"
                ? `/images/light-theme/arrow-right.svg`
                : `${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`
            }
          />
        </a>
      )}
      {status !== "chooseUs" && (
        <a
          href="/features"
          rel="noreferrer"
          target="_blank"
          className={
            theme === "light-theme"
              ? `${style.menucolumn} ${style.menucolumnlight}`
              : style.menucolumn
          }
          onClick={() => setClickMenu(false)}
        >
          <span>Features</span>

          <LazyImg
            loading="lazy"
            effect="blur"
            alt=" modules"
            src={
              theme === "light-theme"
                ? `/images/light-theme/arrow-right.svg`
                : `${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`
            }
          />
        </a>
      )}

      {status !== "module" && (
        <a
          href="/modules"
          rel="noreferrer"
          target="_blank"
          className={
            theme === "light-theme"
              ? `${style.menucolumn} ${style.menucolumnlight}`
              : style.menucolumn
          }
          onClick={() => setClickMenu(false)}
        >
          <span>Modules</span>

          <LazyImg
            loading="lazy"
            effect="blur"
            alt=" modules"
            src={
              theme === "light-theme"
                ? `/images/light-theme/arrow-right.svg`
                : `${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`
            }
          />
        </a>
      )}

      <Link
        className={
          theme === "light-theme"
            ? `${style.menucolumn} ${style.menucolumnlight}`
            : style.menucolumn
        }
        href="/pricing"
        onClick={() => setClickMenu(false)}
      >
        <span>Pricing</span>

        <LazyImg
          loading="lazy"
          effect="blur"
          alt=" pricing"
          src={
            theme === "light-theme"
              ? `/images/light-theme/arrow-right.svg`
              : `${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`
          }
        />
      </Link>

      <a
        href="https://support.qviple.com/registerins"
        rel="noreferrer"
        className={
          theme === "light-theme"
            ? `${style.menucolumn} ${style.menucolumnlight}`
            : style.menucolumn
        }
        onClick={() => setClickMenu(false)}
      >
        <span>User Guide</span>

        <LazyImg
          loading="lazy"
          effect="blur"
          alt=" about us"
          src={
            theme === "light-theme"
              ? `/images/light-theme/arrow-right.svg`
              : `${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`
          }
        />
      </a>

      <a
        href={status === "home" ? "#getintouch" : "#form"}
        rel="noreferrer"
        className={
          theme === "light-theme"
            ? `${style.menucolumn} ${style.menucolumnlight}`
            : style.menucolumn
        }
        onClick={() => setClickMenu(false)}
      >
        <span>Contact Us</span>

        <LazyImg
          loading="lazy"
          effect="blur"
          alt=" Contact Us"
          src={
            theme === "light-theme"
              ? `/images/light-theme/arrow-right.svg`
              : `${imagekitUrl}/Qviple_Landing/icons/arrow-right-white.svg`
          }
        />
      </a>

      <div
        className={
          theme === "light-theme"
            ? `${style.menucolumn} ${style.menucolumnlight} ${style.resgsocial}`
            : `${style.menucolumn} ${style.resgsocial}`
        }
      >
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
          className={`${style.socialhalf} ${style.socialhalfright} `}
        >
          Twitter
        </a>
      </div>
    </div>
  );
}

export default Navmenu;
