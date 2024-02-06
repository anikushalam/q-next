import React from "react";
import style from "./ServiceNav.module.css";

import { useNavigate } from "react-router-dom";

function ServiceNavRight() {
  let navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className={style.servicenavright}>
      <div onClick={handleSignup} className={style.logincontainer}>
        SIGN IN
      </div>
    </div>
  );
}

export default ServiceNavRight;
