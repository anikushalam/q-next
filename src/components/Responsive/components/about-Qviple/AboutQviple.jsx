import { imageShowUrl2 } from "@/utils/BaseUrl";
import "../../responsive.css";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";

const qvipleIdeology = [
  {
    id: "Q",
    ideology: "Questioning Minds",
  },
  {
    id: "V",
    ideology: "Versatile",
  },
  {
    id: "I",
    ideology: "Improving Always",
  },
  {
    id: "P",
    ideology: "Polite & Professional",
  },
  {
    id: "L",
    ideology: "Loyal to Organization",
  },
  {
    id: "E",
    ideology: "Enthusiastic",
  },
];

const AboutQviple = () => {
  return (
    <div className="about-qviple">
      <div className="about-qviple__hero-img">
        <LazyImg
          loading="lazy"
          effect="blur"
          src={`${imageShowUrl2}/assets/careers.png`}
          alt="Join Us"
        />
      </div>
      <div className="about-qviple__content">
        <div className="title">
          We Believe in <span className="join-us__Qviple">QVIPLE</span>{" "}
        </div>
        <div className="qviple-idealogy">
          {qvipleIdeology.map((item, index) => (
            <div key={index} className="about-qviple-box">
              <div className="about-qviple__checkbox">
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  src={`${imageShowUrl2}/assets/checkbox-circle-fill.svg`}
                  alt="checkbox"
                />
              </div>
              <div className="about-qviple__info__title">
                <p>{item.ideology}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutQviple;
