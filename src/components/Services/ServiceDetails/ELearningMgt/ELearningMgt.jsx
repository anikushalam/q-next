"use client";

import { useState } from "react";
import style from "../AdmissionMgt/AdmissionMgt.module.css";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import ProductCard from "../FinanceMgt/ProcuctCard";
import Link from "next/link";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Head from "next/head";

function ELearningMgt() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>ELearning in Qviple LMS</title>
        <meta
          name="description"
          content="Use digital technologies to deliver educational content with multimedia integrations such as videos, audio files, and images to enhances the richness of the content."
        />
        <link rel="canonical" href="/qviple/services/elearning" />
      </Head>

      <div className={style.admissionMgt}>
        <div className={style.sectionn1}>
          <div
            className={style.elearningheader}
            style={{
              backgroundImage: `url(${imageShowUrl2}/services/elearning_cover.jpg)`,
            }}
          >
            <div className={style.elearningheadleft}>
              <h3
                className={`${style.admissionheading} ${style.financeheading}`}
              >
                Dedicated <br />
                ELearning Platform
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                {/* An Affordable ERP solution to */}
                Digitise your plateform to transfer knowledge{" "}
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
          </div>

          <div
            className={style.admissionheaderresponsivecontainer}
            style={{
              backgroundImage: `url(${imageShowUrl2}/services/admission_kid.jpg)`,
            }}
          >
            <div className={style.admissionheaderresponsive}>
              <h3 className={style.admissionheadingresponsive}>
                Dedicated <br />
                ELearning Plateform
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Digitise your plateform to transfer knowledge{" "}
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
          <h4 className={style.financeheading2}>Online E-Learning System</h4>
          <div className={style.underlin1}></div>
          <div className={style.underlin2}></div>

          <div className={style.financesection2bottom}>
            <p className={style.sectionn3ptext}>
              {" "}
              Efficient and seamless integration of a Learning Management System
              (LMS) with an Enterprise Resource Planning (ERP) system aims to
              create a unified and cohesive environment that enhances overall
              organizational efficiency, data accuracy, and user experience.
              E-learning features in an LMS (Learning Management System) are
              designed to facilitate the creation, delivery, and management of
              online educational content. These features play a crucial role in
              providing a comprehensive and effective e-learning experience for
              both learners and instructors. However, in face-to-face
              instruction scenarios, the primary source of information is still
              the trainer. The rise of the online e-Learning system made
              learning more interactive and also allowed learners to learn
              outside the four walls of a classroom. It has revolutionized the
              way learning is delivered and taken using electronic devices and
              resources that are easily accessible to anyone.
            </p>
          </div>

          <div className={style.financesection2}>
            <div className={style.financesection2left}>
              <p className={style.sectionn3ptext}>
                {" "}
                Qviple provides a centralized location for institutions making
                it easy for students and teachers to access and share
                information. It can provide an interactive and engaging learning
                experience. This data can be used to improve the overall
                effectiveness of the institution's educational programs.
                Qviple's e-learning software for institutes is designed and
                developed to offer unified learning and business System to
                accomplish institutional goals by creating an engaging virtual
                classroom experience with innovative teaching-learning processes
                and tracking student progress via online assessment tools. The
                advanced e-learning solution for schools provides an interactive
                online learning environment to help students learn new things in
                a better and organized way.
              </p>
            </div>
            <div className={style.financesection2right}>
              <LazyImg
                effect="blur"
                src="https://www.iitms.co.in/school-erp/img/School-E-Learning-Software-info.png"
                alt="Bring your institute online and create new digital existence online"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className={style.financesection2container}>
          <div className={style.underlin1}></div>
          <div className={style.underlin2}></div>
          <h4 className={style.financeheading2}>What Qviple Offers</h4>

          <div className={style.financesection3}>
            <h6 className={style.financeheading3}>
              The LMS module typically involves the following features for
              Educators
            </h6>
          </div>

          <div className={style.financesection3cardscontainer}>
            <div className={style.financesection3cards}>
              <ProductCard
                img={`${imageShowUrl2}/services/icons/build_brand.svg`}
                heading="Build your brand"
                text="Create Your Online Brand with your passion for education, quality and experience"
              />

              <ProductCard
                img={`${imageShowUrl2}/services/icons/go_beyond.svg`}
                heading="Go Beyond Regional Limits"
                text="It offers the flexibility to scale your courses online to different diverse regions"
              />

              <ProductCard
                img={`${imageShowUrl2}/services/icons/scale_content.svg`}
                heading="Scale Content To Right Users"
                text="Think of your learners as a group of individuals with specific goals."
              />

              <ProductCard
                img={`${imageShowUrl2}/services/icons/market_playlist.svg`}
                heading="Market Whole Playlist or Single content"
                text="Flexibility to sell single content or full playlist"
              />

              <ProductCard
                img={`${imageShowUrl2}/services/icons/mcq_based_online_exam.svg`}
                heading="MCQ based online exams"
                text="Helpful to assess knowledge and understanding of complex concepts."
              />
              <ProductCard
                img={`${imageShowUrl2}/services/icons/mcq_based_online_exam.svg`}
                heading="Scalability for Growing Businesses"
                text="Unlock the potential of learning in the digital age with our cutting-edge Learning Management System."
              />
            </div>
          </div>

          <div className={style.financesection3}>
            <h6 className={style.financeheading3}>
              It provides the following features for Students
            </h6>
          </div>

          <div className={style.featdesig}></div>
          <div className={style.financesection3cards}>
            <ProductCard
              img={`${imageShowUrl2}/services/icons/timing_flexibility.svg`}
              heading="Timing Flexibility"
              text=" Allows for far more autonomy in deciding your own schedule. That means you can study whenever it’s convenient for you"
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/pricing.svg`}
              heading="Reduced Costs"
              text="Education can be expensive, but virtual learning can provide a number of ways for students to save. Not having to commute to campus can help you save on transportation costs."
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/easy_understand.svg`}
              heading="Networking Opportunities"
              text="Online education also provides students with the chance to network with peers across regions with virtual learning."
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/budgeting_forcasting.svg`}
              heading="Documentation"
              text="All the information that you will need will be safely stored in an online database. This includes things like live discussion documents, training materials and emails."
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/market_playlist.svg`}
              heading="Immediate Feedback "
              text="Integrating coursework with technology provides a number of advantages. Rather than waiting days or weeks after exams, you can often get immediate feedback."
            />
            <ProductCard
              img={`${imageShowUrl2}/services/icons/pricing.svg`}
              heading="Comprehensive Solutions"
              text="Integrate your business processes and learning initiatives seamlessly with our comprehensive ERP and LMS solutions."
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

export default ELearningMgt;
