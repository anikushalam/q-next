"use client";

import style from "../AdmissionMgt/AdmissionMgt.module.css";
import Link from "next/link";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import { useState } from "react";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Head from "next/head";

function TenderMgt() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Tender in Qviple ERP</title>
        <meta
          name="description"
          content="It have processes of handling requests for proposals (RFPs) or bids related to the procurement of learning and training services. "
        />
        <link rel="canonical" href="/" />
      </Head>

      <div className={style.admissionMgt}>
        <div className={style.sectionn1}>
          <div className={style.sportheader}>
            <div className={style.sportheaderleft}>
              <h3
                className={`${style.admissionheading} ${style.financeheading}`}
              >
                Tender <br />
                Management System
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                Solution to manage and digitize your small to large scale
                tenders
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
                src={`${imageShowUrl2}/services/tender/tender-cover.svg`}
                alt="manage and digitize your small to large scale tenders"
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
                Tender <br />
                Management System
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Solution to manage and digitize your small to large scale
                tenders
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

        <section className={style.aboutTender}>
          <div className={style.aboutTenderdiv}>
            <h2 className={style.aboutTenderh2}>
              Tender Management for Operational Efficiency: What it Does,
              Features, Benefits & Cautions
            </h2>

            <p className={style.aboutTenderp}>
              Tender management system automates the process of creating and
              submitting tender proposals. It helps public organizations and
              private companies to manage their business transactions and makes
              every tender process productive. With this management system, you
              can produce accurate, professional-looking bid estimates can keep
              track of projects, gaining better visibility and leveraging
              accountability.
            </p>
          </div>
        </section>

        <div className={style.sectionn3container}>
          <div className={style.sectionn3}>
            <div className={style.section3flexeven}>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src={`${imageShowUrl2}/services/tender/bid.jpg`}
                  alt=""
                />
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Why Tender Management System?
                </h4>
                <p className={style.sectionn3ptext}>
                  Automating the tendering process with software can save a
                  business a considerable amount of time and resources. In
                  addition, tender management software can help businesses to
                  streamline their operations and improve communication between
                  different departments. It helps remove time-consuming and
                  labor-intensive manual tendering process and get a transparent
                  procurement process for your organization
                </p>
              </div>
            </div>

            <div className={style.section3flexodd}>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Basic Steps in Tender Process
                </h4>
                <ul className={style.careerContentUl}>
                  <li>Call for submissions.</li>

                  <li>The bid submissions.</li>
                  <li>Bid selection process.</li>
                  <li>The formation of the contract.</li>
                  <li>
                    Once these steps are all complete, the contractor starts the
                    project and sees it through completion.
                  </li>
                </ul>
              </div>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src={`${imageShowUrl2}/services/tender/bid2.jpg`}
                  alt="Benifits of tender management"
                />
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

export default TenderMgt;
