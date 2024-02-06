"use client";

import style from "../AdmissionMgt/AdmissionMgt.module.css";
import Link from "next/link";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import { useState } from "react";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Head from "next/head";

function HostelMgt() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Hostel Management in Qviple</title>
        <meta
          name="description"
          content="Qviple LMS provides hostel facilities with room allocation, payment, fee nanagement notice and communication"
        />
        <link rel="canonical" href="/qviple/services/hostel" />
      </Head>

      <div className={style.admissionMgt}>
        <div className={style.sectionn1}>
          <div className={style.sportheader}>
            <div className={style.sportheaderleft}>
              <h3
                className={`${style.admissionheading} ${style.financeheading}`}
              >
                Hostel <br />
                Management System
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                Manage Your Hostel in the Cloud
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
                className={style.hostelcoverImg}
                src={`${imageShowUrl2}/services/hostel/hostel.svg`}
                alt="manage your hostel in the cloud"
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
                Hostel <br />
                Management System
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Manage Your Hostel in the Cloud
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

        <div className={style.sectionn3container}>
          <div className={style.sectionn3}>
            <div className={style.section3flexeven} style={{ border: "none" }}>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src="https://www.teachmint.com/static2/images/feature/hostel-management/hostel-management-hero-image.webp"
                  alt="hostel management"
                />
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Are you tired of manually managing your hostel's operations?
                </h4>
                <p className={style.sectionn3ptext}>
                  Streamline your operations, increase efficiency, and improve
                  guest satisfaction? Look no further than hostel management
                  software!
                </p>
              </div>
            </div>

            <div className={style.financesection2bottom}>
              <p className={style.sectionn3ptext}>
                {" "}
                One of the most important services delivered by the institute is
                arranging and providing not only acceptable but affordable
                accommodation. This is a duty of an outstanding importance
                especially to the students who, in most cases, are complete
                strangers in the environment. Living in hostels is one of the
                most effective ways of helping students especially new ones to
                begin their journey towards the goal of imbibing the institute
                culture and it is this culture that wholly transforms the
                student from what he or she is, to what he or she and the
                society expects them to become at the end of the learning period
                that spans their training in the institute.
              </p>
            </div>

            {/* <div className={style.section3flexodd}>
            <div className={style.section3flexleft}>
              <h4 className={style.sectionn3heading4}>
                Automated Selection Procedure of Students
              </h4>
              <p className={style.sectionn3ptext}>
                With the help of an admission management system, you can build
                an admission workflow and map student journeys, for example,
                inquiry, applications, counseling, enrollment, etc., with the
                relevant department.
              </p>
            </div>
            <div className={style.section3flexright}>
              <LazyImg
              loading="lazy" effect="blur"
                className={style.sectionn3fleximg}
                src="/images/services/admission/aumated_selection.svg"
                alt=""
              />
            </div>
          </div> */}
          </div>
        </div>

        <div className={style.sectionn3container}>
          <div className={style.sectionn3}>
            <div className={style.section3flexodd}>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Allotment and Management of Rooms
                </h4>
                <p className={style.sectionn3ptext}>
                  With our hostel management software, you can easily manage
                  staff rooms by assigning rooms to your staff members, tracking
                  their occupancy, and managing check-in and check-out times.
                  This can help optimize staff productivity and ensure that your
                  staff members are well-rested and ready to provide excellent
                  service to your guests.
                </p>
              </div>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3flexHostelimg}
                  src={`${imageShowUrl2}/services/hostel/assignRoom.png`}
                  alt="Assign Rooms"
                />
              </div>
            </div>

            <div className={style.section3flexeven}>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src="https://s3.us-west-2.amazonaws.com/www.bookingninjas.com/img/illustration-5.svg"
                  alt="hostel Management Software"
                />
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Database Guest and Warden Records
                </h4>
                <p className={style.sectionn3ptext}>
                  Hostel units can also be managed through hostel management
                  software, including tracking availability, occupancy rates,
                  and pricing. This can help you optimize your pricing strategy,
                  increase occupancy rates, and boost revenue for your
                  Institute.
                </p>
              </div>
            </div>

            <div className={style.section3flexodd}>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Proper Platform for Announcements and Notices
                </h4>
                <p className={style.sectionn3ptext}>
                  In addition to managing staff rooms and hostel units, hostel
                  management software can also provide a platform to manage
                  announcements and notices. This can be helpful for
                  communicating important information to students and staff,
                  such as upcoming events, maintenance schedules, or policy
                  changes.
                </p>
              </div>
              <div className={style.section3flexright}>
                <div className={style.hostelNoticeImgContainer}>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    className={style.hostelNoticeImg}
                    src={`${imageShowUrl2}/services/hostel/bulletin-board.png`}
                    alt="Now Taking Admission is so Simple with Qviple’s Admission Management System"
                  />
                </div>
              </div>
            </div>

            <div className={style.section3flexeven}>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src="https://s3.us-west-2.amazonaws.com/www.bookingninjas.com/img/illustration-4.svg"
                  alt="hostel Moderator"
                />
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Moderator to Assign Staff for Guest Complaints and Feedback
                </h4>
                <p className={style.sectionn3ptext}>
                  Provide a platform for a hostel moderator, allowing you to
                  assign a staff member to manage guest complaints and feedback.
                  This can help ensure that guests' needs are being met and that
                  any issues are addressed promptly. Overall, hostel management
                  software is a powerful tool that can help hostel owners and
                  managers manage all aspects of their institute.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.careerSection3}>
          <div className={style.topServices}>
            <div className={style.topServiceCardHostel}>
              <div className={`${style.eventBox} ${style.circleCard}`}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src={`${imageShowUrl2}/services/hostel/effficiency.png`}
                    alt=""
                  />
                </picture>

                <h6>Improved Efficiency</h6>
                <p>
                  Hostel management software can help improve efficiency by
                  automating tasks and streamlining operations. This can help
                  reduce the workload on staff and free up time to focus on
                  other tasks.
                </p>
              </div>
            </div>

            <div className={style.topServiceCardHostel}>
              <div className={`${style.eventBox} ${style.circleCard}`}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src={`${imageShowUrl2}/services/hostel/experience.png`}
                    alt=""
                  />
                </picture>

                <h6>Enhanced Guest Experience</h6>
                <p>
                  By providing a centralized platform to manage guest
                  information, hostel management software can help provide a
                  personalized experience for guests, which can lead to improved
                  guest satisfaction and loyalty.
                </p>
              </div>
            </div>

            <div className={style.topServiceCardHostel}>
              <div className={`${style.eventBox} ${style.circleCard}`}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src={`${imageShowUrl2}/services/hostel/salary.png`}
                    alt=""
                  />
                </picture>

                <h6>Increased Revenue</h6>
                <p>
                  With improved efficiency and enhanced guest experience, hostel
                  management software can help increase revenue by attracting
                  more guests and improving overall occupancy rates.
                </p>
              </div>
            </div>

            <div className={style.topServiceCardHostel}>
              <div className={`${style.eventBox} ${style.circleCard}`}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src={`${imageShowUrl2}/services/hostel/money-loss.png`}
                    alt=""
                  />
                </picture>

                <h6>Cost Savings</h6>
                <p>
                  By automating tasks and streamlining operations, it helps to
                  reduce costs associated with staffing, operations, and
                  accounting. We provides a centralized platform to manage all
                  aspects of hostel operations, including reservations, guest
                  management, staff scheduling, and accounting.
                </p>
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

export default HostelMgt;
