import React from "react";
// import Navleft from "../../../Navbar/components/Navleft";
import Navleft from "./ServiceNavLeft";
import style from "./ServiceNav.module.css";
import ServiceNavRight from "./ServiceNavRight";

function ServiceNav() {
  return (
    <div className={style.navbar}>
      <div className={style.navbarleft}>
        <Navleft />
      </div>
      <div className={style.navbarright}>
        <ServiceNavRight />
      </div>
    </div>
  );
}

export default ServiceNav;
