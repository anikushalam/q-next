import style from "./Brochure.module.css";
import { imageShowUrl2, imagekitUrl } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Reveal from "@/custom/animation/Reveal";

function Brochure() {
  return (
    <div className={style.brochureContainer}>
      <div className={style.brochure}>
        <div className={style.brochureLeft}>
          <Reveal>
            <LazyImg
              effect="blur"
              className={style.click_download_left}
              // src={
              //   document.body.className === "dark-theme"
              //     ? `${imagekitUrl}/Qviple_Landing/brochure-click-book.svg`
              //     :
              //     "/images/light-theme/brochure-click-book.svg"
              // }
              src="/images/light-theme/brochure-click-book.svg"
              alt="download"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <h5 className={style.brochureheader}>
              Two Specialized Apps <br />{" "}
              <span>
                One for Administration management And one for Staffs &
                Students/Parents
              </span>
            </h5>
          </Reveal>
          <Reveal>
            <div className={style.qrflex}>
              <div className={style.qrcontainer}>
                <LazyImg
                  effect="blur"
                  className={style.qr}
                  src={`${imageShowUrl2}/landing-page/brochure/mgt_qr.svg`}
                  alt="mgt_qr"
                  loading="lazy"
                />
                <h6 className={style.qrtext}>For Management</h6>
              </div>
              <div className={style.qrcontainer}>
                <LazyImg
                  effect="blur"
                  className={style.qr}
                  src={`${imageShowUrl2}/landing-page/brochure/staff_qr.svg`}
                  alt="staff_qr"
                  loading="lazy"
                />
                <h6 className={style.qrtext}>For staff & Student</h6>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <LazyImg
              effect="blur"
              className={style.download_app}
              // src={
              //   document.body.className === "dark-theme"
              //     ? `${imagekitUrl}/Qviple_Landing/brochure-download-app.svg`
              //     :
              //      "/images/light-theme/brochure-download-app.svg"
              // }
              src="/images/light-theme/brochure-download-app.svg"
              alt=""
              loading="lazy"
            />
          </Reveal>

          <LazyImg
            effect="blur"
            className={`${style.download_app} ${style.click_download2text}`}
            // src={`${imagekitUrl}/Qviple_Landing/download-app-text.svg`}
            src="/images/light-theme/brochure-download-app.svg"
            alt=""
            loading="lazy"
          />
        </div>

        <div className={style.brochureRight}>
          <a
            className={style.brochureBook}
            href="Brochure.pdf"
            download="Brocure.pdf"
          >
            <span className={style.invisibletext}>qviple brochure</span>
            <LazyImg
              effect="blur"
              className={style.brochureBookimg}
              src="/images/light-theme/book.svg"
              // {
              //   document.body.className === "dark-theme"
              //     ? `${imageShowUrl2}/landing-page/brochure/book.svg`
              //     : "/images/light-theme/book.svg"
              // }
              alt="book"
              loading="lazy"
            />
          </a>
          <a href="Brochure.pdf" download="Brocure.pdf">
            <LazyImg
              effect="blur"
              className={style.click_download2}
              src=// {
              // document.body.className === "dark-theme"
              //   ? `${imagekitUrl}/Qviple_Landing/brochure-click-book.svg`
              //   :
              "/images/light-theme/brochure-click-book.svg"
              // }
              alt="download"
              loading="lazy"
            />
          </a>

          <a
            href="Brochure.pdf"
            download="Brocure.pdf"
            className={style.clickbookres}
          >
            <span className={style.invisibletext}>qviple brochure</span>
            <LazyImg
              effect="blur"
              className={`${style.click_download2} ${style.click_download2text}`}
              // src={`${imagekitUrl}/Qviple_Landing/brochure-click-book.svg`}
              src="/images/light-theme/brochure-click-book.svg"
              alt="download"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brochure;
