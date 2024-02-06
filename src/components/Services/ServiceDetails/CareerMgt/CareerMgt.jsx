"use client";

import { useState } from "react";
import style from "../AdmissionMgt/AdmissionMgt.module.css";
import Link from "next/link";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";

import Head from "next/head";

function CareerMgt() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Career in Qviple ERP</title>
        <meta
          name="description"
          content="LMS provide tools for employee career information on potential roles, skills required, and career progression opportunities.
          "
        />
        <link rel="canonical" href="/qviple/services/career" />
      </Head>

      <div className={style.admissionMgt}>
        <div className={style.sectionn1}>
          <div className={style.sportheader}>
            <div className={style.sportheaderleft}>
              <h3
                className={`${style.admissionheading} ${style.financeheading}`}
              >
                Career <br />
                Management System
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                Level Up Your Career In Minutes
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
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/services/career/career.svg`}
                alt="Create and manage events in Sports & Arts"
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
                Career <br />
                Management System
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Level Up Your Career In Minutes
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
                Features of the Career Management by Your Institute
              </h2>

              <p className={style.sectionCoverTitlep}>
                A customisable platform that’s helping you to engage candidates.
                for your open roles
              </p>
            </div>

            <div className={style.featureSectionCoverContainerImg}>
              <LazyImg
                loading="lazy"
                effect="blur"
                src="https://images.pexels.com/photos/4225927/pexels-photo-4225927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="career management"
              />
            </div>
          </div>
        </div>

        <div className={style.careerSection3}>
          <div className={style.topServices}>
            <div className={style.topServiceCard}>
              <div className={style.topServiceCardBox}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src="https://www.careeraddict.com/images/home_page/cv_help.webp"
                    alt=""
                  />
                </picture>

                <h6>Advertise your institute’s story.</h6>
                <p>
                  Give candidate’s a snapshot about your institute culture with
                  employee-created content, testimonials etc.
                </p>
              </div>
            </div>

            <div className={style.topServiceCard}>
              <div className={style.topServiceCardBox}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src="https://www.careeraddict.com/images/home_page/career-testing.webp"
                    alt=""
                  />
                </picture>

                <h6>Reach the right candidates</h6>
                <p>
                  Create job description content for targeted candidate. Publish
                  most relevant job requirements based on the qualifications.
                </p>
              </div>
            </div>

            <div className={style.topServiceCard}>
              <div className={style.topServiceCardBox}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src="https://www.careeraddict.com/images/home_page/job_search.webp"
                    alt=""
                  />
                </picture>

                <h6>Recruitement Drive</h6>
                <p>
                  Help candidates assess if they’re a good fit for the role with
                  recruitement process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.sectionn3container}>
          <div className={style.sectionn3}>
            <div className={style.section3flexeven}>
              <div className={style.section3flexright}>
                <div className={style.section3flexrightContainerImg}>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    className={`${style.sectionn3fleximg} ${style.containerMock}`}
                    src="https://corporate.jobteaser.com/static/img/laptop.f2ad641.png"
                    alt=""
                  />
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    className={` ${style.containerMockImg}`}
                    src="https://images.prismic.io/jobteaser-corporate-website/c6c0e6d09ddfe1cca90ba2cbb8eb0ce1c9df5b73_en.png?auto=compress,format"
                    alt=""
                  />
                </div>
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Personalised careers content to help candidates find their way
                </h4>
                <ul className={style.careerContentUl}>
                  <li>
                    Candidate will receive targeted job ads and content based on
                    their profile.
                  </li>

                  <li>
                    Candidate will get to know a institute's careers and
                    recruitment processes.
                  </li>
                  <li>
                    Content will contain complete job description with required
                    qualification, skills and pay.
                  </li>
                  <li>
                    An intuitive back end team for managing all events:
                    workshops, forums, recruitment sessions, etc.
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

export default CareerMgt;
