import { useState } from "react";
import style from "../GetInTouch.module.css";
import { usePostGetInTouchMutation } from "@/utils/qvipleApi";
import TextFieldd from "@/custom/textfield/TextField";
import Reveal from "@/custom/animation/Reveal";

function Formm() {
  const [updateGetInTouch] = usePostGetInTouchMutation();
  const [formData, setFormData] = useState({
    endUserName: "",
    endUserEmail: "",
    endUserPhoneNumber: "",
    endUserMessage: "",
  });

  const handleSubmit = async () => {
    if (
      formData?.endUserEmail !== "" &&
      formData?.endUserName !== "" &&
      formData?.endUserMessage !== "" &&
      formData?.endUserPhoneNumber !== ""
    ) {
      updateGetInTouch(formData).then((res) => {
        if (res.data.status) {
          setFormData({
            endUserName: "",
            endUserEmail: "",
            endUserPhoneNumber: "",
            endUserMessage: "",
          });
        }
      });
    }
  };

  return (
    <div className={style.form}>
      <Reveal>
        <h2>Get in touch</h2>
      </Reveal>
      <Reveal>
        <h6>
          Want to get in touch? We&#39;d love to hear from you. Here&#39;s how
          you can reach us...
        </h6>
      </Reveal>

      <form className={style.formm} style={{ width: "100%" }}>
        <Reveal>
          <TextFieldd
            id="standard-basic"
            customInputConatiner={{
              width: "100%",
              marginBottom: "1rem",
              marginTop: "2rem",
              backgroundColor: "transparent",
            }}
            type="text"
            labelText="Name"
            name="endUserName"
            required={true}
            value={formData.endUserName}
            onChange={(e) =>
              setFormData({ ...formData, endUserName: e.target.value })
            }
          />
        </Reveal>
        <Reveal>
          <TextFieldd
            id="standard-basic"
            customInputConatiner={{
              width: "100%",
              marginBottom: "1rem",
            }}
            type="number"
            labelText="Mobile No."
            name="endUserPhoneNumber"
            required={true}
            value={formData.endUserPhoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, endUserPhoneNumber: e.target.value })
            }
          />
        </Reveal>

        <Reveal>
          <TextFieldd
            id="standard-basic"
            customInputConatiner={{
              width: "100%",
              marginBottom: "1rem",
            }}
            type="email"
            labelText="Mail"
            name="endUserEmail"
            required={true}
            value={formData.endUserEmail}
            onChange={(e) =>
              setFormData({ ...formData, endUserEmail: e.target.value })
            }
          />
        </Reveal>

        <Reveal>
          <TextFieldd
            id="standard-basic"
            customInputConatiner={{
              width: "100%",
              marginBottom: "1rem",
            }}
            type="text"
            labelText="Message"
            name="endUserMessage"
            required={true}
            value={formData.endUserMessage}
            onChange={(e) =>
              setFormData({ ...formData, endUserMessage: e.target.value })
            }
          />
        </Reveal>

        <div className={style.btn} onClick={handleSubmit}>
          Submit
        </div>
      </form>
    </div>
  );
}

export default Formm;
