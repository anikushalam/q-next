"use client";
import { useState } from "react";
import style from "../AdmissionMgt/AdmissionMgt.module.css";
import Link from "next/link";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Head from "next/head";

function EventMgt() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Event Management in Qviple LMS</title>
        <meta
          name="description"
          content="LMS involves features and functionalities that facilitate the planning, coordination, and execution of various learning events."
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
                Event & Seminar <br />
                Management System
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                Explore the Possibilities and Future Vision
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
                src={`${imageShowUrl2}/services/event/event.svg`}
                alt="explore the events and seminars"
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
                Event & Seminar <br />
                Management Cell
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Explore the Possibilities and Future Vision
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
            <div className={style.section3flexodd}>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Event and seminar platform that handles everything all in one
                  place
                </h4>
                <p className={style.sectionn3ptext}>
                  Spellbind your audience with an outstanding event experience,
                  remarkable support, and an easy-to-use platform.
                </p>
                <p className={style.sectionn3ptext}>
                  It delivers you events and seminars with a platform that is
                  not only visually stunning, but offers robust features that
                  will garner impactful results.
                </p>
              </div>
              <div className={style.section3flexright}>
                <LazyImg
                  loading="lazy"
                  effect="blur"
                  className={style.sectionn3fleximg}
                  // src="/images/services/submission_and_tracking.png"
                  src="https://www.cvent.com/sites/default/files/styles/max_1150/public/image/2022-04/Cvent%20wheel%20%282%29.webp?itok=exior2fj"
                  alt="An event platform for face-to-face, online, and hybrid experiences"
                />
              </div>
            </div>

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
                    src={`${imageShowUrl2}/services/event/event-list.png`}
                    alt=""
                  />
                </div>
              </div>
              <div className={style.section3flexleft}>
                <h4 className={style.sectionn3heading4}>
                  Promote student engagement through active learning
                </h4>
                <ul className={style.careerContentUl}>
                  <li>
                    Engaging students through various events and seminars
                    increases their attention and focus and motivates them in
                    critical thinking
                  </li>

                  <li>
                    Students actively participate in the learning process by
                    listening to various subject experts
                  </li>
                  <li>
                    Leading dynamic discussions to address important topics from
                    multiple perspectives
                  </li>
                  <li>
                    Meeting leaders in their field helps the student to gain
                    information about their way of work or how things take
                    place.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={style.careerSection3}>
          <div className={style.topServices}>
            <div className={style.topServiceCard}>
              <div className={style.eventBox}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src={`${imageShowUrl2}/services/event/box-icon-1.png`}
                    alt=""
                  />
                </picture>

                <h6>Gain knowledge in your profession</h6>
                <p>
                  Attending conferences and seminars is a very good way to learn
                  new things in your profession. Where many industry specialists
                  will share their experiences to help you gain knowledge about
                  them. This is also one of the best ways to network with other
                  professionals in your field.
                </p>
              </div>
            </div>

            <div className={style.topServiceCard}>
              <div className={style.eventBox}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src={`${imageShowUrl2}/services/event/box-icon-2.png`}
                    alt=""
                  />
                </picture>

                <h6>Stay updated with the latest industry trends</h6>
                <p>
                  Great way to stay updated about the latest trends industry.
                  Most of these events will have expert speakers who will share
                  their knowledge about the latest industry developments. This
                  is a great opportunity to learn about new technologies and
                  strategies that helps you stay ahead of the competition.
                </p>
              </div>
            </div>

            <div className={style.topServiceCard}>
              <div className={style.eventBox}>
                <picture>
                  <LazyImg
                    loading="lazy"
                    effect="blur"
                    src={`${imageShowUrl2}/services/event/box-icon-3.png`}
                    alt=""
                  />
                </picture>

                <h6>Get certified or learn new skills</h6>
                <p>
                  Many events and seminars offer certification or training
                  courses on various topics. These types of events are the
                  perfect venues to help you achieve your goals. There will be
                  many experts who can teach you everything that you need to
                  know about the topic.
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

export default EventMgt;
