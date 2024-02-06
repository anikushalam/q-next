import { useState } from "react";
import style from "./Form.module.css";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import "./Form.css";
import { useCareerDataLandingMutation } from "@/utils/qvipleApi";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import TextFieldd from "@/custom/textfield/TextField";

function Form() {
  const [careerList] = useCareerDataLandingMutation();
  const [careerData, setCareerData] = useState({
    endUserName: "",
    endUserEmail: "",
    endUserPhoneNumber: "",
    endUserAddress: "",
  });
  const [file, setFile] = useState("");

  const saveFile = (e) => {
    setFile(() => e.target.files[0]);
  };

  const CareerHandler = (e) => {
    e.preventDefault();
    const formDatas = new FormData();
    formDatas.append("endUserName", careerData.endUserName);
    formDatas.append("endUserPhoneNumber", careerData.endUserPhoneNumber);
    formDatas.append("endUserEmail", careerData.endUserEmail);
    formDatas.append("endUserAddress", careerData.endUserAddress);
    formDatas.append("file", file);

    if (formDatas) {
      careerList(formDatas).then((res) => {
        if (res.data.status) {
          setCareerData({
            endUserName: "",
            endUserEmail: "",
            endUserPhoneNumber: "",
            endUserAddress: "",
          });
        }
      });
      // carrierFetch()
    }
  };

  return (
    <div className={style.form}>
      <div className={style.heading}>
        If you have same beliefs as us, Come On Board.
      </div>
      <div className={style.content}>
        <div className={style.image}>
          <LazyImg
            effect="blur"
            loading="lazy"
            src={`${imageShowUrl2}/career/formBG.svg`}
            alt=""
          />
          <h6>
            We aim at finding unique people who will stand the test of the time.
          </h6>
        </div>
        <div className={style.text}>
          <form onSubmit={CareerHandler} encType="multipart/form-data">
            <TextFieldd
              id="standard-basic"
              customInputConatiner={{
                width: "90%",
                marginBottom: "1rem",
              }}
              type="text"
              labelText="Name"
              name="endUserName"
              required={true}
              value={careerData.endUserName}
              onChange={(e) =>
                setCareerData({ ...careerData, endUserName: e.target.value })
              }
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10%",
                width: "90%",
                marginTop: "1vw",
              }}
            >
              <TextFieldd
                id="standard-basic"
                customInputConatiner={{
                  width: "45%",
                  marginBottom: "1rem",
                }}
                type="tel"
                labelText="Mo No."
                name="endUserPhoneNumber"
                required={true}
                value={careerData.endUserPhoneNumber}
                onChange={(e) =>
                  setCareerData({
                    ...careerData,
                    endUserPhoneNumber: e.target.value,
                  })
                }
              />
              <TextFieldd
                id="standard-basic"
                customInputConatiner={{
                  width: "45%",
                  marginBottom: "1rem",
                }}
                type="email"
                labelText="Mail"
                name="endUserEmail"
                required={true}
                value={careerData.endUserEmail}
                onChange={(e) =>
                  setCareerData({ ...careerData, endUserEmail: e.target.value })
                }
              />
            </div>

            <TextFieldd
              id="standard-basic"
              customInputConatiner={{
                width: "90%",
                marginBottom: "1rem",
              }}
              type="text"
              labelText="Address"
              name="endUserAddress"
              required={true}
              value={careerData.endUserAddress}
              onChange={(e) =>
                setCareerData({ ...careerData, endUserAddress: e.target.value })
              }
            />

            <div
              // style={{
              //   width: "90%",
              //   marginTop: "5vw",
              //   display: "flex",
              //   justifyContent: "center",
              //   gap: "5%",
              // }}
              className={style.resumecontainer}
            >
              <div className={style.resume}>
                <label htmlFor="formFile" className="form-label">
                  Drop Your Resume Here
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="file"
                  onChange={saveFile}
                />
              </div>

              <div className={style.hiring}>
                <h6>We Are Hiring</h6>
                <div className={style.divider} />
                <p>MERN Enthusiastic Developer, Interns</p>
                <div className={style.divider} />
                {/* <p>Frontend & Backend Developer, Interns</p> */}
              </div>
            </div>

            <button type="submit" className={`btn btn ${style.applybtn}`}>
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
