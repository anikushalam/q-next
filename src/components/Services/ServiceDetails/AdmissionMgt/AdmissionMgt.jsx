"use client";

import style from "./AdmissionMgt.module.css";
import Link from "next/link";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import { useState } from "react";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import CustomDialog from "@/custom/dialog/CustomDialog";
import Head from "next/head";

function AdmissionMgt() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Head>
        <title>Admission Process in Qviple ERP</title>
        <meta
          name="description"
          content="Admission process in LMS involves user registration, course exploration, application submission, review, payment, enrollment confirmation and access to learning materials"
        />
        <link rel="canonical" href="/qviple/services/admission" />
      </Head>

      <div className={style.admissionMgt}>
        <div className={style.sectionn1}>
          <div className={style.sectionn1header}>
            <div className={style.sectionn1headerleft}>
              <h3 className={style.admissionheading}>
                Admission <br />
                Management System
              </h3>
              <h6 className={style.admissiontagline}>
                Digitize, manage and scale your admissions efficiently
              </h6>

              <div className={style.sectionn1headerbuttons}>
                <div
                  className={style.sectionn1headerleftbutton}
                  onClick={() => setOpenModal(true)}
                >
                  Book A Demo
                </div>
                <Link href="/" exact>
                  <div className={style.sectionn1headerrightbutton}>
                    Visit Qviple
                  </div>
                </Link>
              </div>
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
                Admission <br />
                Management System
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Digitize, manage and scale your admissions efficiently
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

        <div className={style.sectionn2container}>
          <div className={style.sectionn2}>
            <div className={style.sectionn2left}>
              <h6 className={style.sectionn2heading6}>Key Features</h6>
              <ul className={style.sectionul}>
                <li className={style.sectionli}>
                  Online application submission and tracking
                </li>
                <li className={style.sectionli}>
                  Management of application fee and document processing
                </li>
                <li className={style.sectionli}>
                  Automated communication with prospective students
                </li>
                <li className={style.sectionli}>
                  Reporting and analytics on application and enrollment data
                </li>
                <li className={style.sectionli}>Management of waitlists</li>
                <li className={style.sectionli}>
                  Secure access for institutions and students
                </li>
              </ul>
            </div>

            <div className={style.sectionn2left}>
              <h6 className={style.sectionn2heading6}>
                Benifits of Admission Management System
              </h6>
              <ul className={style.sectionul}>
                <li className={style.sectionli}>
                  Automation of the application process
                </li>
                <li className={style.sectionli}>
                  Improved communication with applicants
                </li>
                <li className={style.sectionli}>
                  Streamlined document management
                </li>
                <li className={style.sectionli}>
                  Easy and efficient data tracking
                </li>
                <li className={style.sectionli}>Streamlined decision making</li>
                <li className={style.sectionli}>Cost and time-efficient</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.sectionn3container}>
          <div className={style.sectionn3}>
            <div className={style.section3flexodd}>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Online Application Submission and Tracking
                </h4>
                <p className={style.sectionn3ptext}>
                  LMS Allows applicants to upload and submit all required
                  documents electronically, making it easy for institutions to
                  manage and track these documents. Administrators no longer
                  have to individually collect data from every student. They can
                  use admission management software to automate the data
                  collection procedure.
                </p>
              </div>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src={`${imageShowUrl2}/services/submission_and_tracking.png`}
                  alt="Now Taking Admission is so Simple with Qviple’s Admission Management System"
                />
              </div>
            </div>

            <div className={style.section3flexeven}>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src={`${imageShowUrl2}/services/icons/mgt_application.svg`}
                  alt="Image of admission
                  management system of Qviple ERP"
                />
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Management of Application Fee and Document Processing
                </h4>
                <p className={style.sectionn3ptext}>
                  In general, an admission is very difficult to complete in one
                  go. Often, students leave the site before completing the
                  application form. So, to make it easier for them, ensure that
                  the online application process is simple. Qviple ERP
                  facilitate the smooth enrollment and orientation of new
                  learners or users onto the platform. This process is crucial
                  to ensure that new users can easily access the LMS, understand
                  its functionalities, and begin their learning journey
                </p>
              </div>
            </div>

            <div className={style.section3flexodd}>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Automated Selection Procedure of Students
                </h4>
                <p className={style.sectionn3ptext}>
                  With the help of an admission management system, you can build
                  an admission workflow and map student journeys, for example,
                  inquiry, applications, counseling, enrollment, etc., with the
                  relevant department. ERP significantly streamline the process,
                  reduce administrative overhead, and provide a seamless
                  experience for students.
                </p>
              </div>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src={`${imageShowUrl2}/services/admission/aumated_selection.svg`}
                  alt="Image of admission
                  management system of Qviple ERP"
                />
              </div>
            </div>

            <div className={style.section3flexeven}>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src="https://www.leadsquared.com/wp-content/uploads/2021/11/admission-management-system-Customer-Portal-application-completion-rates-1.png"
                  alt="Image of admission
                  management system of Qviple School Management"
                />
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Reporting and analytics on application and enrollment data
                </h4>
                <p className={style.sectionn3ptext}>
                  Analytics is one of the most useful features of an ERP system.
                  Interactive representation of data displayed in ways that are
                  easy to understand and apply. The different types may include
                  charts, graphs and many other types of visualisations. Each
                  one best suited for analysing information in a different way.
                  Use automated surveys or feedback forms to gather input from
                  students on the onboarding experience and analyze feedback to
                  improve and optimize the onboarding process in LMS. .
                </p>
              </div>
            </div>

            <div className={style.section3flexodd}>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Management of waitlists
                </h4>
                <p className={style.sectionn3ptext}>
                  Having a solid waitlist management system gives schools the
                  ability to save time and resources when processing enrollment
                  applications. It helps to collect the information from online
                  enrollments application form and place it into an easy-to-use
                  system that all of your team members can access.
                </p>
              </div>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src={`${imageShowUrl2}/services/admission/waitlist.svg`}
                  alt="Image of admission management system of Qviple LMS Maharashtra"
                />
              </div>
            </div>

            <div className={style.section3flexeven}>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src={`${imageShowUrl2}/services/admission/staff_and_staff_access.svg`}
                  alt="Secure access for institutions and students"
                />
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Secure access for institutions and students
                </h4>
                <p className={style.sectionn3ptext}>
                  Qviple ERP offers a centralized admission management system
                  that can be accessed by students and admins instantly from
                  anywhere. provides a secure and centralized admission
                  management solution to effortlessly manage inquiries, fee
                  payments, bills, marketing, assessments, etc. It brings a
                  smoother workflow across all departments and helps in
                  institutional development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <CustomDialog openModal={openModal} onClose={() => setOpenModal(false)}>
          <GetInTouchForm
            openModal={openModal}
            onClose={() => setOpenModal(false)}
          />
        </CustomDialog>
      </div>
    </>
  );
}

export default AdmissionMgt;
