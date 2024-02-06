"use client";
import { useEffect, useState } from "react";
import "@/app/styles/variables.css";
import { imageShowUrl2, imagekitUrl } from "@/utils/BaseUrl";
import style from "../features/QvipleFeatures.module.css";
import Footer from "@/components/Services/ServiceDetails/footer/Footer";
import ProductCard from "@/components/Career/CFeatures/ProcuctCard";
import Navbar from "@/components/Navbars/Navbar/Navbar";
import Head from "next/head";

function Modules() {
  const [theme, setTheme] = useState("light-theme");
  const [fearurees, setFeaturees] = useState(null);
  const modules = [
    {
      heading: "User Account Management",
      img: `/images/light-theme/user-account-icon.png`,
      content:
        "Qviple erp ensures the administration of user accounts, roles, permissions, and other related activities effectively. Our LMS administrators have appropriate access to the system and its features.",
      feats: [
        {
          alt: "User Registration and Authentication",
          img: `${imagekitUrl}/Qviple_Landing/icons/setup.png`,
          para: ":User Registration and Authentication. Different roles such as learner, instructor, administrator can be assigned to users based on their responsibilities. Users can create their accounts by providing necessary information",
          text: "User Registration and Authentication",
        },
        {
          alt: "Class Creation",
          img: `${imagekitUrl}/Qviple_Landing/icons/dept.png`,
          para: "Users create profiles with personal information and preferences. Also allows users to update their profile information",
          text: "User Profiles",
        },
        {
          alt: "Subjects",
          img: `${imagekitUrl}/Qviple_Landing/icons/subject.png`,
          para: "Allows administrators to bulk-import user data from CSV files and enables administrators to perform bulk actions on user accounts.          ",
          text: "Bulk User Import and Management",
        },

        {
          alt: "Subjects",
          img: `${imagekitUrl}/Qviple_Landing/icons/subject.png`,
          para: "Defines rules for strong and secure passwords. Also allows users to reset passwords securely",
          text: "Password Policies and Security",
        },
      ],
    },
    {
      heading: "Course creation and content management",
      img: `/images/light-theme/course-icon.png`,
      content:
        "These feature of our LMS (Learning Management System) empowers instructors and administrators to design, organize, and deliver educational content efficiently",
      feats: [
        {
          alt: "application",
          img: `${imagekitUrl}/Qviple_Landing/icons/application.png`,
          para: "Rich Editors are used for creating and formatting text content and integration of images, videos, audio, and other multimedia elements",
          text: "Course Authoring Tools",
        },
        {
          alt: "payroll",
          img: `${imagekitUrl}/Qviple_Landing/icons/payroll.png`,
          para: "rack and manage different versions of course content. View the history of changes made to course materials",
          text: "Content Versioning",
        },
        {
          alt: "branding",
          img: `${imagekitUrl}/Qviple_Landing/icons/brand.png`,
          para: "Pre-designed Templates for common course structures that can be tailored to specific instructional needs.",
          text: "Course Templates",
        },
        {
          alt: "Subjects",
          img: `${imagekitUrl}/Qviple_Landing/icons/subject.png`,
          para: "Multiple instructors or content creators can collaborate on course development.  Platforms for instructors and learners to discuss course content in real-time",
          text: "Content Collaboration",
        },
        {
          alt: "application",
          img: `${imagekitUrl}/Qviple_Landing/icons/application.png`,
          para: "Qviple erp nsures that course content complies with accessibility standards. Tags and metadata for easy categorization and retrieval",
          text: "Accessibility Features",
        },
      ],
    },
    {
      heading: "Batch Structure Module",
      img: `/images/light-theme/batch-icon.png`,
      content:
        "Capability to enroll groups of learners into courses simultaneously and efficiently manage bulk enrollment and assignment of training programs",
      feats: [
        {
          alt: "Setup Batch",
          img: `${imagekitUrl}/Qviple_Landing/icons/setup.png`,
          para: "Create customized batches based on year, semester, and other timelines to perfectly align with your institute's structure.",
          text: "Setup Batch",
        },
        {
          alt: "Class Creation",
          img: `${imagekitUrl}/Qviple_Landing/icons/dept.png`,
          para: "Create departments and classes within the educational institution, establish the necessary organizational structure and designate appropriate teachers and students to each department and class",
          text: "Department and Class Creation",
        },
        {
          alt: "Subjects",
          img: `${imagekitUrl}/Qviple_Landing/icons/subject.png`,
          para: "Add subjects to the curriculum, including their details such as course content, objectives, and assessment criteria",
          text: "Add Subjects",
        },
        {
          alt: "Time Table",
          img: `${imagekitUrl}/Qviple_Landing/icons/timetable.png`,
          para: "Students can easily access class schedules with detailed information about teachers, periods, and timings on a day-by-day basis.",
          text: "TimeTable",
        },
        {
          alt: "Attendance",
          img: `${imagekitUrl}/Qviple_Landing/icons/attendance.png`,
          para: "Efficiently track attendance through Bio-metric and RFID technology, enabling students to manage holidays, request leaves, and transfers online, all seamlessly recorded in the system.",
          text: "Attendance",
        },
        {
          alt: "Certificate",
          img: `${imagekitUrl}/Qviple_Landing/icons/certificate.png`,
          para: "Easily download certificates, such as Bonafide Certificate, Leaving Certificate, and Report Card, by simply entering the student's GR No, with the system automatically generating the required data.",
          text: "Download Certificate",
        },
        {
          alt: "Transfer",
          img: `${imagekitUrl}/Qviple_Landing/icons/transfer.png`,
          para: "Effortlessly manage various types of leaves such as paid leaves, unpaid leaves, sick leaves, casual leaves, and medical leaves with ease.",
          text: "Leaves and Transfer",
        },
      ],
    },
    {
      heading: "Curricular and Co Curricular Activities",
      img: `/images/light-theme/curricular-icon.png`,
      content:
        "Support the design, organization, and management of educational content and courses. These features are essential for creating structured learning experiences, managing course materials, and monitoring learner progress",
      feats: [
        {
          alt: "library",
          img: `${imagekitUrl}/Qviple_Landing/icons/library.png`,
          para: "Digitize your library, offering students online access to PDF books and an easily accessible catalog.",
          text: "Library",
        },
        {
          alt: "Online Content",
          img: `${imagekitUrl}/Qviple_Landing/icons/econtentt.png`,
          para: "Monetize your lectures and playlists, extending their availability to students beyond your institute.",
          text: "Online Content",
        },

        {
          alt: "Stream course videos",
          img: `${imagekitUrl}/Qviple_Landing/icons/streaming.png`,
          para: "Record lectures and make them available for students for revisions and deep learning",
          text: "video courses",
        },
        {
          alt: "Watch lessons offline",
          img: `${imagekitUrl}/Qviple_Landing/icons/offline.png`,
          para: "Access educational content and engage in remote learning by watching lessons online through digital platforms, facilitating knowledge acquisition from a distance",
          text: "Watch lessons offline",
        },

        {
          alt: "Skill Assessment",
          img: `${imagekitUrl}/Qviple_Landing/icons/assessment.png`,
          para: "Utilize Qviple skill assessmnt to test your students' learning, schedule and conduct objective and subjective exams seamlessly.",
          text: "Skill Assessment",
        },
        {
          alt: "Games",
          img: `${imagekitUrl}/Qviple_Landing/icons/games.png`,
          para: "Efficiently manage games and sports meets in Qviple by adding student players, creating teams with captains, organizing matches, updating winners and runner-ups, and automatically assigning skill points to students for their participation and performance.",
          text: "Management Games and Sports Meets",
        },
        {
          alt: "Seminars",
          img: `${imagekitUrl}/Qviple_Landing/icons/seminar.png`,
          para: "Conduct seminars and discussions, providing opportunities for interactive and collaborative learning experiences, promoting knowledge sharing, critical thinking, and active participation among students",
          text: "Seminars and Discussions",
        },
        {
          alt: "Cultural",
          img: `${imagekitUrl}/Qviple_Landing/icons/event.png`,
          para: "Reward students for their skills and participation in cultural events, providing automated extra-curricular points for their involvement and achievements in various artistic and cultural activities",
          text: "Cultural Events",
        },
      ],
    },
    {
      heading: "Admision Procedure and Funds Management",
      img: `/images/light-theme/admission-icon.png`,
      content:
        "Onboarding or enrolling users, whether they are students, employees, or other stakeholders, Qviple LMS typically includes functionalities to facilitate different enrollment methods.",
      feats: [
        {
          alt: "application",
          img: `${imagekitUrl}/Qviple_Landing/icons/application.png`,
          para: "Scan QR code, fill application form, and conveniently upload documents online without the hassle of photocopies.",
          text: "Admission Application",
        },
        {
          alt: " fee structure",
          img: `${imagekitUrl}/Qviple_Landing/icons/feestructure.png`,
          para: "Implement an online fee collection system using UPI, payment apps, cards, and net banking, while also facilitating fee collection through NEFT, RTGS, and demand drafts, supported by an automated pending fee reminder",
          text: "Fee structure",
        },
        {
          alt: "Enquiry",
          img: `${imagekitUrl}/Qviple_Landing/icons/enquiry.png`,
          para: "Team Qviple is available 24/7 to assist you with any issues or queries related to the platform.",
          text: "Enquiry and Support",
        },
        {
          alt: "funds",
          img: `${imagekitUrl}/Qviple_Landing/icons/fund.png`,
          para: "Collect funds through our payment gateway for improved collection efficiency. Access cash and bank balances with a single click, while maintaining detailed records of expenses, incomes, and transaction history for all receipts and payments",
          text: "Fund Management",
        },
        {
          alt: "payment",
          img: `${imagekitUrl}/Qviple_Landing/icons/payment.png`,
          para: "Eliminate the need for physical paper-based invoices and fee receipts by automatically generating and sending invoices, bills, and fee receipts to the respective individuals or students for pending fees",
          text: "Pending Fee and Receipt",
        },
        {
          alt: "account",
          img: `${imagekitUrl}/Qviple_Landing/icons/account.png`,
          para: "Efficiently manage income and expenses with accurate tracking and analysis of financial transactions for effective financial planning and decision-making",
          text: "Income and Expense Management",
        },
        {
          alt: "payroll",
          img: `${imagekitUrl}/Qviple_Landing/icons/payroll.png`,
          para: "Automate payroll system by integrating staff's attendance with Qviple, generate pay-slip with one-click, and enable automated settlement in finance balance while providing online pay-slips to staffs.",
          text: "Payroll",
        },
        {
          alt: "moderator",
          img: `${imagekitUrl}/Qviple_Landing/icons/moderator.png`,
          para: "Assign moderator access to different departments, such as finance, admission, and more, enabling effective control and oversight over specific areas of operation",
          text: "Moderator",
        },
      ],
    },
    {
      heading: "Career & Tender Module",
      img: `/images/light-theme/career-icon.png`,
      content:
        "This erp module aims to help employees plan, manage, and advance in their careers by providing access to relevant learning resources, career path information, and skill development opportunities",
      feats: [
        {
          alt: "monetize your content",
          img: `${imagekitUrl}/Qviple_Landing/icons/job.png`,
          para: " Monetize your playlists and lectures, reaching students beyond your institute and expanding your educational impact. Share your knowledge and empower others",
          text: "Monetize Your Content",
        },
        {
          alt: "job application process",
          img: `${imagekitUrl}/Qviple_Landing/icons/application-process.png`,
          para: "Discover a simple and intuitive interface that anyone can easily navigate, along with multilingual support to accommodate people from different backgrounds, ensuring a seamless application process for everyone",
          text: "Easy, Intuitive Application Process",
        },
        {
          alt: "branding",
          img: `${imagekitUrl}/Qviple_Landing/icons/brand.png`,
          para: "Go digital, expand your institute's horizons nationwide, and create an online presence that knows no boundaries in this digital era.",
          text: "Connection and Branding",
        },
        {
          alt: "tender",
          img: `${imagekitUrl}/Qviple_Landing/icons/tender.png`,
          para: "Unlock detailed tender information and a comprehensive bidder list with Qviple. Seamlessly explore lucrative opportunities, pursue contracts with confidence, and maximize your business potential",
          text: "Tender Details with Bider List",
        },
      ],
    },
  ];
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <Head>
        <title>Modules Provided at Qviple</title>
        <meta
          name="description"
          content="Qviple LMS modules include user management for voth learners and educators, learning content with effective scalable ways."
        />
        <link rel="canonical" href="/features" />
      </Head>
      <div className={`${style.newHeadContainerOverlay} ${style.modulebg}`}>
        {/* {hasScrolled ? ( */}
        <div id="navbar" className={style.lightnavbar}>
          <Navbar status="module" setHasScrolled={setHasScrolled} />
        </div>
        {/* // ) : (
        //   <NavigationBar
        //     status="module"
        //     hasScrolled={hasScrolled}
        //     setHasScrolled={setHasScrolled}
        //   />
        // )} */}
        <div className={style.moduleHead}>
          <h3>We Offer Better Digital Experience</h3>

          <h5>
            Engaging design and robust development means our digital solutions
            really do deliver.
          </h5>
        </div>
      </div>
      {!fearurees ? (
        <div className={style.offeredModule}>
          {modules.map((mod, index) => (
            // <div
            //   className={style.offeredModuleCard}
            //   key={index}
            //   style={{ backgroundImage: `url("${mod.background}")` }}
            // >
            //   <div className={style.offeredModuleCardshade}>
            //     <b>{mod.heading}</b>
            //     <p onClick={() => setFeaturees(mod.feats)}>View Details</p>
            //   </div>
            // </div>

            <ProductCard
              key={index}
              img={mod.img}
              heading={mod.heading}
              text={mod.content}
              handleclick={() => setFeaturees(mod.feats)}
            />
          ))}
        </div>
      ) : (
        <div className={style.offeredModuleDetails}>
          <img
            className={style.offeredModuleDetailsHead}
            src={`${imagekitUrl}/Qviple_Landing/close-icon-black.png`}
            alt=""
            onClick={() => setFeaturees(null)}
          />

          {fearurees &&
            fearurees.map((f, index) => (
              <div className={style.offeredModuleDetailsCard} key={index}>
                <div className={style.offeredModuleDetailsIcon}>
                  <img src={f.img} alt="icon  " />
                </div>
                <div className={style.offeredModuleDetailsText}>
                  <h5>{f.text}</h5>
                  <p>{f.para}</p>
                </div>
              </div>
            ))}
        </div>
      )}

      <Footer status="modules" />
    </>
  );
}

export default Modules;
