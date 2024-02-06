import React from "react";
import style from "./CareerFeatures.module.css";
import ProductCard from "./ProcuctCard";
import { imageShowUrl2 } from "@/utils/BaseUrl";

function CareerFeatures() {
  return (
    <div className={style.financesection2container}>
      <div className={style.underlin1}></div>
      <div className={style.underlin2}></div>
      <h4 className={style.financeheading2}>Why work with us?</h4>

      <div className={style.financesection3cards}>
        <ProductCard
          img={`${imageShowUrl2}/services/icons/budgeting_forcasting.svg`}
          heading="Innovative Environment"
          text="Embrace creativity and innovation in a dynamic work setting"
        />

        <ProductCard
          img={`${imageShowUrl2}/services/icons/financial_planning.svg`}
          heading="Collaborative Culture"
          text="Work with a diverse team that values open communication and teamwork"
        />

        <ProductCard
          img={`${imageShowUrl2}/services/icons/hustle.svg`}
          heading="Professional Growth"
          text=" We invest in your development and provide opportunities for career advancement"
        />

        <ProductCard
          img={`${imageShowUrl2}/services/icons/financial_planning.svg`}
          heading="Impactful Work"
          text="We believe in the importance of maintaining a healthy work-life balance"
        />

        <ProductCard
          img={`${imageShowUrl2}/services/icons/organization_mgt.svg`}
          heading="Work-Life Balance"
          text="Enjoy competitive salary packages, health benefits, and more"
        />
      </div>
    </div>
  );
}

export default CareerFeatures;
