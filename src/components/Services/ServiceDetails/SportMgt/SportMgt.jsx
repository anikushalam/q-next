"use client";
import { useState } from "react";
import Link from "next/link";
import style from "../AdmissionMgt/AdmissionMgt.module.css";
import ProductCard from "../FinanceMgt/ProcuctCard";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Head from "next/head";

function SportMgt() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Sports and Arts in Qviple LMS</title>
        <meta
          name="description"
          content="Provides sports training or artistic development courses for evaluating performance in sports and arts. "
        />
        <link rel="canonical" href="/qviple/services/sport" />
      </Head>
      <div className={style.admissionMgt}>
        <div className={style.sectionn1}>
          <div className={style.sportheader}>
            <div className={style.sportheaderleft}>
              <h3
                className={`${style.admissionheading} ${style.financeheading}`}
              >
                Sports & Arts <br />
                Management System
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                Innovative enterprise solution to manage sports.
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
                src={`${imageShowUrl2}/services/sport2.svg`}
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
                Sports & Arts <br />
                Management System
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Innovative enterprise solution to manage sports.
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

        <div className={style.financesection2container}>
          <h4 className={style.financeheading2}>Sports & Arts Management</h4>
          <div className={style.underlin1}></div>
          <div className={style.underlin2}></div>
          <div className={style.financesection2}>
            <div className={style.financesection2left}>
              <p className={style.sectionn3ptext}>
                {" "}
                Sport plays an integral role in schooling institutions. It has
                hitherto been part of the curriculum, right from kindergarten,
                to the higher institutions of learning like colleges and
                universities. The School Sports management system (SSMS) is a
                set of protocols, procedures, and techniques used in educational
                institutions to ensure that all the activities run conclusively
                and smoothly. In sports and sporting activities, numerous
                reforms are always put in place and implemented to establish and
                improve the operational processes.
              </p>
            </div>
            <div className={style.financesection2right}>
              <LazyImg
                loading="lazy"
                effect="blur"
                src="https://www.sap.com/dam/application/shared/photos/products-s-st/sap-sports-one-device-anltmtrng.png/_jcr_content/renditions/original.adapt.-1_1268.false.false.false.false.png/1647527053819.png"
                alt="sports"
              />
            </div>
          </div>
          <div className={style.financesection2bottom}>
            <p className={style.sectionn3ptext}>
              {" "}
              The sports department has witnessed a striking growth in the past
              few years. This necessitates the need for advanced and
              enterprise-ready software to manage the ongoing complexities of
              this activities. They are managing event processes and student
              records more efficiently and simplifying HR processes and driving
              better business results. This ERP solution helps to coordinate all
              administrative, ticketing, team management, scouting, schedule
              management for fitness and much more.
            </p>
          </div>
        </div>

        <div className={style.financesection2container}>
          <div className={style.underlin1}></div>
          <div className={style.underlin2}></div>
          <h4 className={style.financeheading2}>Product Feature</h4>

          <div className={style.financesection3}>
            <h6 className={style.financeheading3}>
              Funds management module typically involves the following
              capabilities:
            </h6>
          </div>
          <div className={style.financesection3cards}>
            <ProductCard
              img={`${imageShowUrl2}/services/icons/build_brand.svg`}
              heading="Simple and Easy to Understand Interface"
              text="Improves user's experience with smooth navigational sporting interface throughout the module with optimal on-screen experience and increased productivity."
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/hustle.svg`}
              heading="Hassle Free Scheduling and Registration"
              text="Allows coaches and organiser to manage their sports tournaments and events registrations and scheduling on a digital-oriented platform."
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/pricing.svg`}
              heading="Transparent and Simple Pricing"
              text=" Offering a wide range of flexible plans covering all users based on their needs, utility, and budget. Specific customised plans on-demand also for all your sporting endeavours."
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/organization_mgt.svg`}
              heading="Better Organisation and Management"
              text="Enables coaches, organisers, administrators, and athletes to manage and track their activities through digitally supported sports management modules for better efficiency and conduct."
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/empower.svg`}
              heading="Empower users with intuitive functionality"
              text="Access your data at any time and from anywhere using QRP solution. Role-based interfaces and mobile apps help improve collaboration."
            />
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

export default SportMgt;
