"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import Navleft from "./components/Navleft";
import Navright from "./components/Navright";
import PropTypes from "prop-types";

function Navbar({ status, setHasScrolled }) {
  const [clicked, setClicked] = useState(false);

  const toggleClick = () => {
    setClicked(!clicked);
  };
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const scrollTop = document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    if (scrollTop >= viewportHeight && status !== "pricing") {
      window.onscroll = () => {
        const viewportHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= viewportHeight) {
          setHasScrolled(true);
        } else {
          setHasScrolled(false);
        }
      };
    }
  }
  return (
    <>
      <div className={styles.navbar}>
        <Navleft status={status} />
        <Navright toggleClick={toggleClick} status={status} />
      </div>
    </>
  );
}

Navbar.propTypes = {
  header: PropTypes.func,
  getintouch: PropTypes.func,
};

export default Navbar;
