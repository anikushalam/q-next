import style from "../GetInTouch.module.css";
import { imagekitUrl } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Reveal from "@/custom/animation/Reveal";

function Imagee() {
  return (
    <div className={style.image}>
      <Reveal>
        <LazyImg
          effect="blur"
          src={
            // document.body.className === "dark-theme"
            //   ? `${imagekitUrl}/Qviple_Landing/mail_sent.svg`
            //   :
            "/images/light-theme/git.svg"
          }
          alt="not-found"
          loading="lazy"
        />
      </Reveal>
    </div>
  );
}

export default Imagee;
