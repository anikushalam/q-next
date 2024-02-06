import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../AdmissionMgt/AdmissionMgt.module.css";
import GetInTouchForm from "../GetInTouchForm/GetInTouchForm";
import { imageShowUrl2 } from "../../../../../services/BaseUrl";
import { LazyImg } from "../../../../../dynamiclib/Lazy/LazyImage";

function CustomizedDept() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={style.admissionMgt}>
      <div className={style.sectionn1}>
        <div className={style.deptheader1}>
          <div className={style.deptheadleft}>
            <h3 className={`${style.admissionheading} ${style.financeheading}`}>
              Customized Departments
            </h3>
            <h6 className={`${style.admissiontagline} ${style.financetagline}`}>
              {/* An Affordable ERP solution to */}
              Explore to boost your department management experience
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
              <Link to="/" exact>
                <div
                  className={`${style.sectionn1headerrightbutton} ${style.financerightbutton}`}
                >
                  Visit Qviple
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={style.financesection2container}>
        <h4 className={style.financeheading2}>Why Customized Department</h4>
        <div className={style.underlin1}></div>
        <div className={style.underlin2}></div>
        <div className={style.financesection2}>
          <div className={style.financesection2left}>
            <p className={style.sectionn3ptext}>
              {" "}
              Managing a different departments is no easy task for an
              institution. Customizing a department in your institute management
              system can provide several benefits. Qviple's one stop solution
              brings all of those processes into a single point, where you can
              manage them as one long chain rather than a hundred disconnected
              ones. Keep students, teachers, and parents on the same page with
              customized department dashboards and email/SMS notifications on
              web and mobile.
            </p>
          </div>
          <div className={style.financesection2right}>
            <LazyImg
              effect="blur"
              src={`${imageShowUrl2}/services/finance.jpg`}
              alt="finance"
              loading="lazy"
            />
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
  );
}

export default CustomizedDept;
