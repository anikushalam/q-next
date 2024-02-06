import { useState } from "react";
import style from "./GetInTouchForm.module.css";

import Input from "./Input";
import LoaderButton from "../../../../../Custom/Loader/LoaderButton";
import PropTypes from "prop-types";
import { usePostGetInTouchMutation } from "../../../../../services/qvipleAPI";

function GetInTouchForm({ onClose }) {
  const [disabled, setDisabled] = useState(false);
  const [updateGetInTouch] = usePostGetInTouchMutation();
  const [formData, setFormData] = useState({
    endUserName: "",
    endUserEmail: "",
    endUserPhoneNumber: "",
    endUserMessage: "",
  });
  const textArea = document.querySelector("textarea");
  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textArea.style.height = `${scHeight}px`;
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

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
          onClose();
        }
      });
    }
  };

  return (
    <div className={style.getInTouchForm}>
      <div className={style.getInTouchFormInner}>
        <form onSubmit={handleSubmit}>
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

          <div className={style.labelContainer}>
            <h6 className={style.label}>Message</h6>
            <p className={style.astrick}>*</p>
          </div>

          <textarea
            className={style.pollTextarea}
            id="pollTextArea"
            type="text"
            required
            maxLength="140"
            value={formData.endUserMessage}
            onChange={(e) =>
              setFormData({ ...formData, endUserMessage: e.target.value })
            }
          />

          <button type="submit" className={style.submittbutton}>
            <p>Submit</p>
            {disabled && (
              <div style={{ marginTop: "0.7vw" }}>
                <LoaderButton />
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

GetInTouchForm.propTypes = {
  openModal: PropTypes.bool,
  onClose: PropTypes.func,
};
export default GetInTouchForm;
