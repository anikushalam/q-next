import style from "./Textfield.module.css";

function TextFieldd({
  labelText,
  value,
  id,
  type,
  required,
  onChange,
  name,
  customInputConatiner,
}) {
  return (
    <div className={style.inputData} style={{ ...customInputConatiner }}>
      <input
        id={id}
        value={value}
        name={name}
        type={type}
        required={required}
        onChange={onChange}
        className={style.input}
      />
      <label htmlFor={id}>
        {labelText} {required && "*"}
      </label>
      <div className={style.underline} />
    </div>
  );
}

export default TextFieldd;
