"use client";
import { useState } from "react";
import Link from "next/link";
import style from "../AdmissionMgt/AdmissionMgt.module.css";
import GetInTouchForm from "@/components/GetInTouchForm/GetInTouchForm";
import ProductCard from "./ProcuctCard";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import Head from "next/head";

function FinanceMgt() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Head>
        <title>Finance Management in Qviple ERP</title>
        <meta
          name="description"
          content="LMS finance management provides course fee structure, integrated payment gateway, invoicing and receipts, refunds and cancellations, budgeting and auditing, financial reporting "
        />
        <link rel="canonical" href="/qviple/services/finance" />
      </Head>

      <div className={style.admissionMgt}>
        <div className={style.sectionn1}>
          <div className={style.financeheader}>
            <div className={style.financeheadleft}>
              <h3
                className={`${style.admissionheading} ${style.financeheading}`}
              >
                Finance <br />
                Management System
              </h3>
              <h6
                className={`${style.admissiontagline} ${style.financetagline}`}
              >
                {/* An Affordable ERP solution to */}
                Manage your finances and reduce cost and complexity
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
                <div
                  className={`${style.sectionn1headerrightbutton} ${style.financerightbutton}`}
                >
                  Visit Qviple
                </div>
              </div>
            </div>

            <div className={style.financeheadright}>
              <LazyImg
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/services/finance3.svg`}
                alt="Manage your Institute’s Fund flow easily with Finance Management System"
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
                Finance <br />
                Management System
              </h3>

              <h6 className={style.admissiontaglineresponsive}>
                Manage your finances and reduce cost and complexity
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
            Qviple <span> Finance </span> Management
          </h4>
          <div className={style.underlin1}></div>
          <div className={style.underlin2}></div>
          <div className={style.financesection2}>
            <div className={style.financesection2left}>
              <p className={style.sectionn3ptext}>
                {" "}
                Finance plays a pivotal role in the functioning of any
                institute. It is a very vital function to manage daily monetary
                transactions in any organization. While technology is there to
                facilitate planning, monitoring budget expenditure, control flow
                of money in and out of your institute and regulate your profits;
                our ERP solutions helps you to conveniently manage all such
                activities. Qviple ERP is the gist to handle the finance
                department. It gets data from relevant modules like fees and
                admission modules.
              </p>
            </div>
            <div className={style.financesection2right}>
              <LazyImg
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/services/finance.jpg`}
                alt="finance"
              />
            </div>
          </div>
          <div className={style.financesection2bottom}>
            <p className={style.sectionn3ptext}>
              {" "}
              This ERP has modules to support student registrations and
              payments, course management, financial aid, finance, HR, and
              development (fund raising). This module allows Institute to track
              and manage their financial resources, including budgeting,
              forecasting, and tracking actual expenses. This module can be used
              to create and manage budgets, track actual expenses against
              budgeted amounts, generate financial reports, and perform other
              financial management tasks.It also provides an effective and
              improved financial management system which will reduce dependency
              on other sources for managing the Finances & Expenses of your
              institute.Discover a seamless convergence of education and
              enterprise with our state-of-the-art ERP and LMS solutions. At
              Qviple, we redefine the way businesses operate and learners
              acquire knowledge.
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
              img={`${imageShowUrl2}/services/icons/budgeting_forcasting.svg`}
              heading="Budgeting and Forecasting"
              text="Creating and managing budgets, tracking actual results against budgeted
        amounts, and generating forecasts"
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/financial_planning.svg`}
              heading="Financial Planning and Analysis"
              text="Analyzing financial data to inform strategic decision making"
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/hustle.svg`}
              heading="Accounts Payable and Receivable"
              text=" Managing and tracking payments to vendors and payments received from customers"
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/financial_planning.svg`}
              heading="General Ledger and Financial Reporting"
              text="Maintaining and reporting on financial information such as balance sheets, income statements, and cash flow statements"
            />

            <ProductCard
              img={`${imageShowUrl2}/services/icons/organization_mgt.svg`}
              heading="Treasury management"
              text="Managing cash balances and investments, tracking banking and credit card transactions, and handling wire transfers and other financial transactions"
            />
          </div>
        </div>

        <div className={style.financesection3container}>
          <div className={style.financesection3}>
            <h3
              className={style.financesection3heading3}
              style={{ whiteSpace: "nowrap" }}
            >
              Do More With <span>Qviple</span>{" "}
            </h3>

            <p className={style.financesection3headingp}>
              Speed up your institute's financial processes, <br /> revenue
              management and expense management.
            </p>

            <LazyImg
              loading="lazy"
              effect="blur"
              className={style.financesection3headingimg}
              src={`${imageShowUrl2}/services/icons/finance_mgt.jpg`}
              alt=""
            />

            <Link href="/" exact>
              <div className={style.financesection3headingbtn}>Try Qviple</div>
            </Link>
          </div>
        </div>

        <div className={style.financesection4container}>
          <div className={style.financesection4}>
            <h4 className={style.sectionn3heading4}>Key Benifits</h4>
            <p className={style.sectionn3ptext}>
              The benefits of ERP ERP finance are many, some of them are listed
              below
            </p>

            <ul className={style.sectionul}>
              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Financial Transparency : </span> Qviple dashboard will
                provide authorized users with everything they need to know about
                your institute’s financials.
              </li>
              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Planning and Budgeting : </span>
                It will allow you to forecast your incomes, expenses and
                potential revenue, then helps to design your budgets
                accordingly.
              </li>
              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Better Financial Control : </span>
                Qviple ERP finance lets you unify the data and bring it all
                together in one place to look after multiple departments, so
                that you eliminate the need to work in multiple systems which
                minimizes costs, increases productivity, and improves processes.
              </li>
              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Real-time monitoring of your finance data : </span>
                For all financial activities (mainly payments) you’ll always be
                updated with what is going on at that exact moment. It will hep
                you to better examine future opportunities to enhance your
                bottom line.
              </li>
              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Minimization of Human Error : </span>
                With the help of Qviple ERP financial solutions accounting small
                mistakes such as data entry errors can be detected and avoided.
              </li>
              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Track Revenue, Sales and Transaction Reports : </span>
                Monitor and track revenue generated through course enrollments,
                certifications, or any other monetizable activities within the
                LMS.
              </li>

              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Financial Analytics : </span>
                Utilize ERP analytics tools to gain insights into financial
                trends and patterns. Analyze the performance of different
                courses in terms of revenue generation.
              </li>

              <li className={`${style.sectionli} ${style.financeli}`}>
                <span>Improved productivity : </span>
                Productivity will immediately increase once your organization
                automates it's and time-consuming finance processes.
              </li>
            </ul>
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

export default FinanceMgt;
