"use client";
import { useEffect } from "react";
import style from "./CustomDialog.module.css";
import { imagekitUrl } from "@/utils/BaseUrl";

function CustomDialog({ openModal, onClose, children }) {
  const modal =
    typeof document !== "undefined" && document.querySelector("#modal");

  useEffect(() => {
    if (modal) {
      if (openModal) {
        modal.showModal();
      } else {
        modal?.close();
      }
    }
  }, [openModal]);

  return (
    <dialog onClose={onClose} className={style.modal} id="modal">
      <img
        className={style.closeicon}
        src={`${imagekitUrl}/Qviple_Landing/close-icon-black.png`}
        onClick={onClose}
      />

      {children}
    </dialog>
  );
}

export default CustomDialog;
