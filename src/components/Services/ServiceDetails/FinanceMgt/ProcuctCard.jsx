import style from "./ProductCard.module.css";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";

function ProcuctCard({ img, heading, text }) {
  return (
    <div className={style.card}>
      <LazyImg loading="lazy" effect="blur" src={img} alt="" />
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
}

export default ProcuctCard;
