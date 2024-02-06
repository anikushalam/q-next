"use client";
import React, { useEffect, useState } from "react";
import "@/app/styles/variables.css";
import style from "../features/QvipleFeatures.module.css";
import Footer from "@/components/Services/ServiceDetails/footer/Footer";
import Navbar from "@/components/Navbars/Navbar/Navbar";

function Pricing() {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className={`${style.newHeadContainerOverlay} ${style.datainputbg}`}>
        <div id="navbar" className={style.lightnavbar}>
          <Navbar status="pricing" />
        </div>

        <div className={style.moduleHead}>
          <h3>Choose Your Plan</h3>

          <h5>Register in less than 5 minutes, have help anytime</h5>
        </div>
      </div>

      <div className={`${style.offeredModule} ${style.pricingModule}`}>
        <div className={style.pricingmid}>
          <div className={style.pricincardimg}>
            <h3>Essential Plan</h3>
            <h6>Institute less than 100 Students</h6>
            <h4>Free For Lifetime</h4>

            <div className={style.insContainerr}>
              <div className={style.insContainer}>
                <img src="/images/reward.png" alt="pricing" />
                <p className={style.insp}>Web Application for management use</p>
              </div>

              <div className={style.insContainer}>
                <img src="/images/reward.png" alt="pricing" />
                <p className={style.insp}>
                  Two mobile application for staff/teacher and student/parents
                </p>
              </div>
            </div>

            <ul>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Institute internal structure (Flexible as per need)</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Admission Module</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Finance Module</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Staff & Teachers portal</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Students Management Portal</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Bio-metric based and Manual Attendance Management</p>
              </li>
            </ul>
          </div>

          <div className={style.pricincardimg}>
            <h3>Complete Plan</h3>
            <h6>Students range of 100 to 500</h6>
            <h4 className={style.marginh4}>Rs.25000</h4>

            <p className={style.installp}>
              Installation & <br /> Rs. 100/admission application{" "}
            </p>

            <div className={style.insContainerr}>
              <div className={style.insContainer}>
                <img src="/images/reward.png" alt="pricing" />
                <p className={style.insp}>Web Application for management use</p>
              </div>

              <div className={style.insContainer}>
                <img src="/images/reward.png" alt="pricing" />
                <p className={style.insp}>
                  Two mobile application for staff/teacher and student/parents
                </p>
              </div>
            </div>

            <ul>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>All of Basic plan plus</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Employee Payroll</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Leaves & Complaints Management</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Sanchika (Students year by year reports)</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Certificates Generation (Bona-fide, Leaving, transfer)</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Library Module</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Sports & Arts Module</p>
              </li>

              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Groupchat Communication (Class and subject wise groups)</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Student Data exporting for ID Card Printing</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>
                  Email and whatsapp based notification for fees and exam
                  reminders
                </p>
              </li>
            </ul>
          </div>

          <div className={style.pricincardimg}>
            <h3>Enterprise Plan</h3>
            <h6>More than 500 students</h6>
            <h4>Contact Us</h4>

            <div className={style.insContainerr}>
              <div className={style.insContainer}>
                <img src="/images/reward.png" alt="pricing" />
                <p className={style.insp}>Web Application for management use</p>
              </div>

              <div className={style.insContainer}>
                <img src="/images/reward.png" alt="pricing" />
                <p className={style.insp}>
                  Two mobile application for staff/teacher and student/parents
                </p>
              </div>

              <div className={style.insContainer}>
                <img src="/images/reward.png" alt="pricing" />
                <p className={style.insp}>
                  A full-fledged Website without the need of developer for
                  maintenance
                </p>
              </div>
            </div>

            <ul>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>All of Standard Plan plus</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Student and staff data exporting</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>
                  Transaction History and fee head wise admission fees data
                  exporting in excel
                </p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Import all ledgers and vouchers into tally</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Transportation Module</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Events & Seminars management Module</p>
              </li>

              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Elections and Competitions module</p>
              </li>

              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Careers Portal linked to website</p>
              </li>

              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Tenders Portal Linked to website</p>
              </li>

              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Alumni Management Portal linked to website</p>
              </li>

              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Hostel Management Module</p>
              </li>

              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Sub-Moderators for Finance and Admission department</p>
              </li>
              <li>
                <img src="/images/light-theme/green-tik.png" alt="" />
                <p>Student and Examination section separate Modules</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer status="datainput" />
    </>
  );
}

export default Pricing;
