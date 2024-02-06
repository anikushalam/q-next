import style from "./Services.module.css";
import { modules } from "@/utils/constants";
import Reveal from "@/custom/animation/Reveal";
import PropTypes from "prop-types";
import Link from "next/link";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";

function Services() {
  const today = new Date();
  today.setDate(today.getDate() + 3);

  return (
    <>
      <div className={style.services}>
        <div className={style.heading}>
          <Reveal>
            <p className={style.sectionSubText}>
              SCHOOLERP AND LMS THAT PROVIDES
            </p>
          </Reveal>
          <Reveal>
            <h3 className={style.sectionHeadingText}>
              {" "}
              premium features at free of cost for lifetime
            </h3>
          </Reveal>
          <Reveal>
            <h5 className={style.sectionSubText}>
              Limited time offer till{" "}
              {`${
                today.getDate().toString().length === 1
                  ? String(today.getDate()).padStart(2, "0")
                  : today.getDate()
              }/${
                (today.getMonth() + 1).toString().length === 1
                  ? String(today.getMonth() + 1).padStart(2, "0")
                  : today.getMonth() + 1
              }/${today.getFullYear()}`}{" "}
              ,{" "}
              <a href="https://qviple.com/institute/signup">
                <span className={style.register}>Register Now</span>
              </a>
            </h5>
          </Reveal>
        </div>
        <div className={style.timeline}>
          {modules.map((module) => (
            <Reveal key={module.id}>
              {module.link !== "department" ? (
                <div
                  className={
                    module.id % 2 === 0
                      ? `${style.container} ${style.leftcontainer}`
                      : `${style.container} ${style.rightcontainer}`
                  }
                >
                  <div
                    className={
                      module.id % 2 === 0
                        ? `${style.imgcontainer} ${style.leftimgcontainer}`
                        : `${style.imgcontainer} ${style.rightimgcontainer}`
                    }
                  >
                    <LazyImg
                      effect="blur"
                      src={module.img}
                      // {
                      //   document.body.className === "light-theme"
                      //     ? module.imgDark
                      //     : module.img
                      // }
                      title={module.heading}
                      alt={module.heading}
                      loading="lazy"
                    />
                  </div>
                  <Link href={`/services/${module.link}`}>
                    <div className={style.textbox}>
                      <div className={style.textboxovetlay}>
                        <b>View Details</b>
                      </div>
                      <h2>{module.heading}</h2>
                      <p>{module.text}</p>
                      <span
                        className={
                          module.id % 2 === 0
                            ? `${style.arrow} ${style.leftarrow}`
                            : `${style.arrow} ${style.rightarrow}`
                        }
                      ></span>
                    </div>
                  </Link>
                </div>
              ) : (
                <div
                  className={
                    module.id % 2 === 0
                      ? `${style.container} ${style.leftcontainer}`
                      : `${style.container} ${style.rightcontainer}`
                  }
                >
                  <div
                    className={
                      module.id % 2 === 0
                        ? `${style.imgcontainer} ${style.leftimgcontainer}`
                        : `${style.imgcontainer} ${style.rightimgcontainer}`
                    }
                  >
                    <LazyImg
                      effect="blur"
                      src={module.img}
                      // {
                      //   document.body.className === "light-theme"
                      //     ? module.imgDark
                      //     : module.img
                      // }
                      alt={module.heading}
                      loading="lazy"
                    />
                  </div>

                  <div className={`${style.textbox} ${style.depttextbox}`}>
                    <h2>{module.heading}</h2>
                    <p>{module.text}</p>
                    <span
                      className={
                        module.id % 2 === 0
                          ? `${style.arrow} ${style.leftarrow}`
                          : `${style.arrow} ${style.rightarrow}`
                      }
                    ></span>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

Services.propTypes = {
  resStatus: PropTypes.bool,
};

export default Services;
