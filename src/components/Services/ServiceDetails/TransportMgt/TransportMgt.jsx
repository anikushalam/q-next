"use client";
import style from "../AdmissionMgt/AdmissionMgt.module.css";
import Link from "next/link";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import { useState } from "react";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Head from "next/head";

function TransportMgt() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Transport System in Qviple ERP</title>
        <meta
          name="description"
          content="Qviple offers transport system with vehicle management, route planning, fees structure for payment and security features"
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
                Transport <br />
                Management System
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                Simplify your transport service with our cloud-based system
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
                src={`${imageShowUrl2}/services/transport/schoolBus.png`}
                alt="manage trasportation system for your institute"
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
                Transport <br />
                Management System
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Simplify your transport service with our cloud-based system
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
          <h4 className={style.financeheading2}>
            All-in-One <span> Transport </span> Management
          </h4>

          <div
            className={style.financesection2bottom}
            style={{ marginTop: "2rem" }}
          >
            <p className={style.sectionn3ptext}>
              {" "}
              Transport management is an essential aspect of any institute like
              school, colleges, polytechnic that deals with transportation. The
              implementation of transport management software has made it even
              more efficient.
            </p>

            <p className={style.sectionn3ptext}>
              Sometimes known as a transportation management solution or
              transportation management software, a TMS provides visibility into
              day-to-day transportation operations, trade compliance information
              and documentation, and ensuring the timely delivery of students,
              staffs and goods. Transportation management systems also
              streamline the shipping process and make it easier for institutes
              to manage and optimize their transportation operations.
            </p>
          </div>
        </div>

        <div className={style.sectionn3container}>
          <div className={style.sectionn3}>
            <div className={style.section3flexeven}>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  src={`${imageShowUrl2}/services/transport/bus.png`}
                  alt="transport system benifits"
                />
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Some of the key benefits of using Transport Management Ssytem
                </h4>
                <ul className={style.careerContentUl}>
                  <li>
                    The transport management software helps students, parents,
                    staff, teachers, and management to keep track of the
                    transport operations for school through real-time execution
                    of the transportation system.
                  </li>

                  <li>
                    TMS provides transportation companies with real-time
                    visibility into their operations, including vehicle
                    locations, delivery status, and driver performance. This can
                    help improve communication between drivers and dispatchers,
                    and provide customers with more accurate delivery estimates.
                  </li>
                  <li>
                    By optimizing routes and load planning, TMS can help
                    transportation companies reduce fuel costs, maintenance
                    costs, and labor costs. This can lead to significant savings
                    over time, improving profitability for the business.
                  </li>
                  <li>
                    With TMS, transportation companies can provide customers
                    with more accurate delivery estimates and real-time updates
                    on the status of their shipments. This can help improve
                    customer satisfaction and loyalty, leading to increased
                    business and revenue.
                  </li>
                  <li>
                    TMS can help transportation companies ensure compliance with
                    regulations around driver hours, vehicle maintenance, and
                    safety. This can help reduce the risk of fines and
                    penalties, and improve overall safety for drivers and
                    customers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={style.transportCardContainer}>
          <h4 className={style.transportCardContainerHeader}>
            Transport Management System that caters to everyone’s needs
          </h4>

          <div className={style.transportCards}>
            <div className={style.transportCard}>
              <LazyImg
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/services/transport/route.png`}
              />
              <h5 className={style.transportCardh5}>Transportation Panel</h5>
              <p className={style.transportCardp}>
                It provides an overview of all the trips scheduled, including
                the route, vehicle, driver, and student details. This panel
                enables transport managers to have real-time visibility of all
                routes, which helps in scheduling, tracking, and management of
                the transport operations.
              </p>
            </div>

            <div className={style.transportCard}>
              <LazyImg
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/services/transport/tracking.png`}
              />
              <h5 className={style.transportCardh5}>Real Time Tracking</h5>
              <p className={style.transportCardp}>
                Vehicle tracking uses GPS technology to track the location of
                the vehicle in real-time. This feature provides real-time
                visibility of the location of the bus, which enables the
                transport manager to monitor the progress of the journey and
                make necessary adjustments in real-time.
              </p>
            </div>

            <div className={style.transportCard}>
              <LazyImg
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/services/transport/add.png`}
              />
              <h5 className={style.transportCardh5}>
                Add Drivers and Vehicles
              </h5>
              <p className={style.transportCardp}>
                This feature enables the transport manager to add new drivers
                and vehicles to the system and assign them to specific routes.
                The transport manager can also track the performance of drivers
                and vehicles.
              </p>
            </div>

            <div className={style.transportCard}>
              <LazyImg
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/services/transport/customization.png`}
              />
              <h5 className={style.transportCardh5}>
                Customized Routes and Fees
              </h5>
              <p className={style.transportCardp}>
                Customized routes and fees are another crucial feature of
                transport management software. This feature allows the transport
                manager to create customized routes for specific customers and
                assign fees based on the distance, route, and other factors.
              </p>
            </div>

            <div className={style.transportCard}>
              <LazyImg
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/services/transport/selection.png`}
              />
              <h5 className={style.transportCardh5}>Assign Roles</h5>
              <p className={style.transportCardp}>
                Transport roles are another important feature of transport
                management software. This feature enables the transport manager
                to assign different roles and responsibilities to different
                members of the transport team. It ensures that each team member
                is clear about their responsibilities and enhances the
                efficiency of the operation.
              </p>
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

export default TransportMgt;
