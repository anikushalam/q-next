import React from "react";
import style from "./GetInTouchForm.module.css";

function Input({ value, onChange, type, label, required }) {
  return (
    <div className={style.inputContainer}>
      <div className={style.labelContainer}>
        <h6 className={style.label}>{label}</h6>
        <p className={style.astrick}>*</p>
      </div>
      <input
        required={required}
        className={style.input}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}

export default Input;
