import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import style from "./ProductCard.module.css";

function ProductCard({ img, heading, text, handleclick }) {
  return (
    <div className={style.card} onClick={handleclick ? handleclick : ""}>
      <LazyImg loading="lazy" effect="blur" src={img} alt="" />
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
}

export default ProductCard;
