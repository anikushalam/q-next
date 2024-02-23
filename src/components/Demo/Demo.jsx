import React, { useState } from "react";
import style from "./Demo.module.css";
import Link from "next/link";
import Image from "next/image";
import DatePicker from "@/custom/DatePicker/DatePicker";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import Input from "./Input";
import Calendlly from "./Calendly";

function Demo() {
  const [index, setIndex] = useState(1);
  const [dateInput, setDateInput] = useState();
  const [inputType, setInputType] = useState("text");
  const [formData, setFormData] = useState({
    endUserName: "",
    endUserEmail: "",
    endUserPhoneNumber: "",
    endUserMessage: "",
    enUserDate: "",
    enUserTime: "",
    enUserMode: "",
    endUserPlace: "",
    endUserLink: "",
  });
  const [openCalender, setOpenCalender] = useState(false);
  const handlefocus = () => {
    setInputType("time");
  };

  const handleCancel = () => {
    setFormData({
      endUserName: "",
      endUserEmail: "",
      endUserPhoneNumber: "",
      endUserMessage: "",
      enUserDate: "",
      enUserTime: "",
      enUserMode: "offline",
      endUserPlace: "",
      endUserLink: "",
    });
    setIndex(1);
  };

  const validateInput = () => {
    if (
      formData?.endUserEmail !== "" &&
      formData?.endUserName !== "" &&
      formData?.enUserDate !== "" &&
      formData?.endUserPhoneNumber !== "" &&
      formData?.enUserTime !== "" &&
      formData?.enUserMode !== "" &&
      (formData?.endUserPlace !== "" || formData?.endUserLink !== "")
    ) {
      return true;
    } else return false;
  };

  return (
    <div className={style.democontainer}>
      <div className={style.demohead}>
        <Link href="/" className={style.demoheadleft}>
          <Image
            src="/images/newLogo.svg" // Path from the public directory
            alt="logo"
            width={37}
            height={37}
          />
          <h5>QVIPLE</h5>
        </Link>
      </div>
      <div className={style.demobody}>
        <h4 className={style.demoindexoneheading}>
          Book a Demo or Consultation Now!
        </h4>
        <p className={style.demoindexonep}>
          Get to know our LMS, Course Creation and Course Catalog solutions
        </p>
        {/* {index === 1 && (
          <div className={style.demoindexone}>
            <div className={style.democalender}>
              <DatePicker
                datePickerPosition={{
                  top: "3rem",
                  left: "-11rem",
                  borderRadius: "0.375rem",
                  paddingBottom: "0",
                }}
                range={false}
                onClose={() => {
                  setFormData({ ...formData, enUserDate: dateInput });
                  setIndex(2);
                }}
                dateInput={dateInput}
                setDateInput={setDateInput}
              />
            </div>
          </div>
        )}

        {index === 2 && (
          <div className={style.demoform}>
            <div className={style.firstrow}>
              <div className={style.rowitem}>
                <Image
                  width={30}
                  height={30}
                  className={style.date_input_container_icon}
                  src={`/images/Input/calender-icon.png`}
                  alt=""
                />
                <div className={style.date_input_container_input}>
                  <p>Date</p>
                  <h6>{dateInput}</h6>
                </div>
              </div>
              <div
                tabIndex={0}
                className={`${style.rowitem} ${style.rowitemleft}`}
                onFocus={handlefocus}
              >
                <Image
                  width={30}
                  height={30}
                  className={style.date_input_container_icon}
                  src={`/images/Input/clock.png`}
                  alt=""
                />
                {inputType === "text" ? (
                  <div className={style.date_input_container_input}>
                    <p>Time</p>

                    <h6>HH:MM</h6>
                  </div>
                ) : (
                  <div className={style.date_input_container_input}>
                    <p>Time</p>
                    <input
                      type="time"
                      className={style.time_input}
                      onChange={(e) =>
                        setFormData({ ...formData, enUserTime: e.target.value })
                      }
                    />
                  </div>
                )}
              </div>
            </div>

            <Input
              value={formData.endUserName}
              onChange={(e) =>
                setFormData({ ...formData, endUserName: e.target.value })
              }
              type="text"
              label="Name"
              required={true}
            />
            <Input
              value={formData.endUserPhoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, endUserPhoneNumber: e.target.value })
              }
              type="number"
              label="Mobile No."
              required={true}
            />

            <Input
              value={formData.endUserEmail}
              onChange={(e) =>
                setFormData({ ...formData, endUserEmail: e.target.value })
              }
              type="email"
              label="Email"
              required={true}
            />
            <div className={style.demoModeContainer}>
              <h6 className={style.label}>Demo Mode</h6>
              <div className={style.demoModeFlex}>
                <div
                  onClick={(e) =>
                    setFormData({ ...formData, enUserMode: "online" })
                  }
                  className={
                    formData.enUserMode === "online"
                      ? `${style.demoMode} ${style.demoModeActive}`
                      : style.demoMode
                  }
                >
                  Online
                </div>
                <div
                  onClick={(e) =>
                    setFormData({ ...formData, enUserMode: "offline" })
                  }
                  className={
                    formData.enUserMode === "offline"
                      ? `${style.demoMode} ${style.demoModeActive}`
                      : style.demoMode
                  }
                >
                  In Person
                </div>
              </div>
            </div>

            {formData.enUserMode === "online" && (
              <Input
                value={formData.endUserLink}
                onChange={(e) =>
                  setFormData({ ...formData, endUserLink: e.target.value })
                }
                type="text"
                label="Link"
                required={true}
              />
            )}
            {formData.enUserMode === "offline" && (
              <Input
                value={formData.endUserPlace}
                onChange={(e) =>
                  setFormData({ ...formData, endUserPlace: e.target.value })
                }
                type="text"
                label="Place for Demo"
                required={true}
              />
            )}
            <div className={style.demoModeContainer}>
              <div className={style.demoModeFlex}>
                <button className={style.cancelbutton} onClick={handleCancel}>
                  Cancel
                </button>

                {validateInput() ? (
                  <button
                    className={
                      validateInput()
                        ? style.submitbutton
                        : `${style.submitbutton} `
                    }
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className={
                      validateInput()
                        ? style.submitbutton
                        : `${style.submitbutton} ${style.submitbuttonDeactivated}`
                    }
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        )} */}
      </div>

      <Calendlly />

      <div className={style.footer}>
        © {new Date().getFullYear()} Qviple. All Rights Reserved.
      </div>
    </div>
  );
}

export default Demo;
