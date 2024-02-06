import "../../responsive.css";
import { useState } from "react";
import { useCareerDataLandingMutation } from "@/utils/qvipleApi";

const CareersForm = () => {
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
    for (let [key, value] of formDatas.entries()) {
      console.log(key, value);
    }
    if (formDatas) {
      careerList(formDatas).then((res) => {
        if (res.data.status) {
          setCareerData({
            endUserName: "",
            endUserEmail: "",
            endUserPhoneNumber: "",
            endUserAddress: "",
          });
          // formDatas.append("file", '');
        }
      });
    }
  };
  return (
    <div className="contact-us__container" id="Contact-Us">
      <div className="title">Join Us</div>
      <form className="Contact-Us" onSubmit={CareerHandler}>
        <p type="Name:">
          <input
            type="text"
            placeholder="Write your name here.."
            name="endUserName"
            value={careerData.endUserName}
            onChange={(e) =>
              setCareerData({ ...careerData, endUserName: e.target.value })
            }
          ></input>
        </p>
        <p type="Email:">
          <input
            type="email"
            placeholder="Enter your email here.."
            name="endUserEmail"
            value={careerData.endUserEmail}
            onChange={(e) =>
              setCareerData({ ...careerData, endUserEmail: e.target.value })
            }
          ></input>
        </p>
        <p type="Phone No.:">
          <input
            type="number"
            placeholder="Enter your phone number here.."
            name="endUserPhoneNumber"
            maxLength="10"
            minLength="10"
            value={careerData.endUserPhoneNumber}
            onChange={(e) =>
              setCareerData({
                ...careerData,
                endUserPhoneNumber: e.target.value,
              })
            }
          ></input>
        </p>
        <p type="Address:">
          <input
            type="text"
            placeholder="Enter your address.."
            name="endUserAddress"
            value={careerData.endUserAddress}
            onChange={(e) =>
              setCareerData({ ...careerData, endUserAddress: e.target.value })
            }
          ></input>
        </p>
        <p type="Resume:">
          <input
            type="file"
            placeholder="Drop your resume"
            name="file"
            id="file"
            onChange={saveFile}
          ></input>
        </p>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default CareersForm;
