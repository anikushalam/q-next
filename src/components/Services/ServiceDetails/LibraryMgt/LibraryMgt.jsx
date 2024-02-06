"use client";

import { useState } from "react";
import Link from "next/link";
import style from "../AdmissionMgt/AdmissionMgt.module.css";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Head from "next/head";

function LibraryMgt() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Head>
        <title>Library Management in Qviple LMS</title>
        <meta
          name="description"
          content="Digital repository of resources, documents, books, articles, and other learning materials that are made available to users through the LMS platform."
        />
        <link rel="canonical" href="/qviple/services/library" />
      </Head>

      <div className={style.admissionMgt}>
        <div className={style.sectionn1}>
          <div
            className={style.libraryheader}
            style={{
              backgroundImage: `url(${imageShowUrl2}/services/library_cover.jpg)`,
            }}
          >
            <div className={style.libraryheadleft}>
              <h3
                className={`${style.admissionheading} ${style.financeheading}`}
              >
                Library <br />
                Management System
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                Automate and Ease your thirst of knowledge
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
                Library <br />
                Management System
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Automate and Ease the your thirst of knowledge
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
          <h4 className={`${style.financeheading2}`}>
            Library Management System
          </h4>
          <div className={`${style.underlin1} ${style.underlin11}`}></div>
          <div className={`${style.underlin2} ${style.underlin22}`}></div>
          <div
            className={`${style.financesection2bottom} ${style.librarybottom}`}
          >
            <p className={style.sectionn3ptext}>
              {" "}
              A library management system is software that is designed to manage
              all the functions of a library. It helps librarian to maintain the
              database of new books and the books that are borrowed by members
              along with their due dates. It is a tool or a platform that
              performs all the functions of a library in an automated and
              organized fashion – from issuing or checking out of books to
              keeping a catalog of all books the library contains to levying
              fines for late returns of books. Library Management Systems (LMS)
              in Qviple are software solutions designed to manage and automate
              the operations of a library. They help librarians and library
              staff streamline tasks such as cataloging, circulation, and user
              management. Here are key features and aspects to consider when
              implementing Library Management in an LMS:
            </p>
          </div>
        </div>

        <div className={style.financesection2container}>
          <h4 className={style.financeheading2}>
            Why Library Management is Important{" "}
          </h4>
          <div className={`${style.underlin1} ${style.underlin11}`}></div>
          <div className={`${style.underlin2} ${style.underlin22}`}></div>
          <div
            className={`${style.financesection2bottom} ${style.librarybottom}`}
          >
            <p className={style.sectionn3ptext}>
              Running a library as traditional isn’t simple it sounds.Librarians
              can use a Library Management solution to issue books quickly, keep
              track of all the books, and so on. It is perfectly adept at taking
              on the many repetitive and predictable processes and tasks that
              are an endemic part of running a library. It is thus advantageous
              to have a library management system in place, just based on its
              very nature.When implementing a Library Management System, it's
              essential in lms to involve library staff and users in the
              planning process to ensure that the system meets their specific
              needs and preferences. Regular updates and training programs can
              also help in optimizing the use of the system over time.
            </p>
          </div>
        </div>

        <div
          className={style.library3container}
          style={{
            backgroundImage: `url(${imageShowUrl2}/services/library2.jpg)`,
          }}
        >
          <div className={style.library3wrap}>
            <h4>What Qviple Offers</h4>
            <div className={style.library3}>
              <div className={style.library3left}>
                <p className={style.library3leftp}>
                  This system helps educational institutes such as schools,
                  colleges, and coaching centers to manage library functions
                  automatically. The library module allows school officials and
                  students to find books easily without wasting time. Schools
                  can also track books and get details about when and who
                  borrowed the book and much more in just a few clicks.
                  Maintaining daily statistics on the total number of volumes
                  issued, reissued, unreturned, and available can be a
                  time-consuming task for a librarian. A Library Module improves
                  the efficiency of a library’s whole life cycle by allowing all
                  tasks to be completed with a single click, making a
                  librarian’s job easier. Our LMS is designed to provide a
                  dynamic and engaging learning environment, enabling
                  organizations and educational institutions to deliver
                  effective training and education.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.librarysection4container}>
          <div className={`${style.financesection4} ${style.libraryheading4}`}>
            <h4 className={style.sectionn3heading4}>Key Benifits</h4>
            <p className={style.sectionn3ptext}>
              The benefits of ERP library are many, some of them are listed
              below
            </p>

            <ul className={style.sectionul}>
              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Increase efficiency : </span> It improves the efficiency
                of a library’s whole life cycle by allowing all tasks to be
                completed with a single click, making a librarian’s job easier.
              </li>
              <li className={`${style.sectionli} ${style.financeli}`}>
                <span> Record Maintenance : </span>
                It will have catalog, details of books issued, reissued,
                unreturned, and available in a single system, and retrieve it
                anytime needed with a few simple clicks by employing a library
                management system
              </li>
              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Easy Accessibility : </span>
                The library management system provides easy access anytime,
                anywhere. It eliminates the need to be in one location to have
                access to the library and data stored in it.
              </li>

              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Cost-effective : </span>s It is very cost effective and
                viable for educational institutes.It saves money on labor, have
                low maintenance costs as well.
              </li>
            </ul>
          </div>

          <div className={style.financeheading4right}>
            <LazyImg
              loading="lazy"
              effect="blur"
              src={`${imageShowUrl2}/services/icons/library_benifits.svg`}
              alt="Manage your library collection easily with Library Management System"
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

export default LibraryMgt;
