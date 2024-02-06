"use client";

import React from "react";
import style from "../AdmissionMgt/AdmissionMgt.module.css";
import Link from "next/link";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import { useState } from "react";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Head from "next/head";

function AlumniMgt() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Alumni Cell in Qviple</title>
        <meta
          name="description"
          content="LMS serves as a dedicated space to connect and engage with the graduates or former members of an educational institution."
        />
        <link rel="canonical" href="/qviple/services/alumni" />
      </Head>
      <div className={style.admissionMgt}>
        <div className={style.sectionn1}>
          <div className={style.sportheader}>
            <div className={style.sportheaderleft}>
              <h3
                className={`${style.admissionheading} ${style.financeheading}`}
              >
                Alumni <br />
                Management Cell
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                Easy way to organize and communicate with alumni
              </h6>

              <div
                className={`${style.sectionn1headerbuttons} ${style.financebuttons}`}
              >
                <div
                  className={`${style.sectionn1headerleftbutton} ${style.financeleftbutton}`}
                  onClick={() => setOpenModal(true)}
                >
                  Book A Demo
                </div>
                <Link href="/" exact>
                  <div
                    className={`${style.sectionn1headerrightbutton} ${style.financerightbutton}`}
                  >
                    Visit Qviple
                  </div>
                </Link>
              </div>
            </div>

            <div className={style.sportheaderright}>
              <LazyImg
                effect="blur"
                className={style.sportheaderrightImg}
                src={`${imageShowUrl2}/services/alumni/alumni-cover.svg`}
                alt="stay connected with alma mater"
              />
            </div>
          </div>

          <div
            className={style.admissionheaderresponsivecontainer}
            style={{
              backgroundImage: `url(${imageShowUrl2}/services/admission_kid.jpg)`,
            }}
          >
            <div className={style.admissionheaderresponsive}>
              <h3 className={style.admissionheadingresponsive}>
                Alumni <br />
                Management Cell
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Easy way to organize and communicate with alumni
              </h6>

              <div className={style.sectionn1headerbuttons}>
                <div
                  className={style.sectionn1headerleftbuttonresponsive}
                  onClick={() => setOpenModal(true)}
                >
                  Book A Demo
                </div>
                <div className={style.sectionn1headerrightbuttonresponsive}>
                  Visit Qviple
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.careerSection2}>
          <div className={style.careerSection2Inner}>
            <div className={style.featureSectionCover}>
              <h2
                className={`${style.sectionCoverTitle} ${style.sectionCoverTitleAnim}`}
              >
                Carry Your Roots Wherever You Are
              </h2>

              <p className={style.sectionCoverTitlep}>
                A place where the institution feels proud on seeing its
                successful alumni. Help your institute recognize the
                contribution of you in the professional world
              </p>
            </div>

            <div className={style.featureSectionCoverContainerImg}>
              <LazyImg
                effect="blur"
                src="https://uploads-ssl.webflow.com/5b928a5439bbd3a36c44e301/6184ebdb3f2e0202ece3b58a_hero-section-p-800.png"
                alt="career management"
              />
            </div>
          </div>
        </div>

        <div className={style.sectionn3container}>
          <div className={style.sectionn3}>
            <div className={style.section3flexeven}>
              <div className={style.section3flexright}>
                <LazyImg
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src={`${imageShowUrl2}/services/alumni/alumni.jpg`}
                  alt=""
                />
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Key Features of Alumni Management
                </h4>
                <ul className={style.alumniContentUl}>
                  <li>
                    Build & Maintain the updated records of students in the
                    database who have passed out from the institute.
                  </li>

                  <li>
                    Plan and organize meet for ex students of the institute that
                    reflect the nostalgia.
                  </li>
                  <li>
                    Include ways to find information about classmates or other
                    alum to build a professional network.
                  </li>
                  <li>
                    With the help of the alumni's experience, students will
                    learn and develop skills.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {openModal && (
          <GetInTouchForm
            openModal={openModal}
            onClose={() => setOpenModal(false)}
          />
        )}
      </div>
    </>
  );
}

export default AlumniMgt;
