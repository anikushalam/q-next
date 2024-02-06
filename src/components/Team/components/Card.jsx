import React from "react";
import style from "./Card.module.css";
import { imageShowUrl2, imagekitUrl } from "@/utils/BaseUrl";

function Card({ item }) {
  return (
    <div className={style.card}>
      <div>
        <h4>{item.name}</h4>
        <h6>{item.designation}</h6>
      </div>

      <img
        src="/images/light-theme/social/newLogo-text.svg"
        // {
        //   document.body.className === "dark-theme"
        //     ? `${imagekitUrl}//Qviple_Landing/icons/newlogo-white.svg`
        //     : "/images/light-theme/social/newLogo-text.svg"
        // }
        alt="erp team member"
        title="erp team member"
      />
    </div>
  );
}

export default Card;
