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
    window.onscroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= viewportHeight && status !== "pricing") {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
  }
  return (
    <>
      <div className={styles.navbar}>
        <Navleft status={status} />
        <Navright toggleClick={toggleClick} status={status} />
      </div>

      {/* {clicked && (
        <AnimateDiv
          className={styles.menu}
          variants={menuVarrient}
          initial="hidden"
          animate="visible"
        >
          <ul>
            <AnimateLi
              variants={innerVariant}
              initial="hidden"
              animate="visible1"
              onClick={toggleClick}
            >
              <Link to="/">Home</Link>
            </AnimateLi>

            <AnimateLi
              variants={innerVariant}
              initial="hidden"
              animate="visible2"
              onClick={toggleClick}
            >
              <a href="#form" onClick={() => getintouch("form")}>
                Contact Us
              </a>
            </AnimateLi>

            <AnimateLi
              variants={innerVariant}
              initial="hidden"
              animate="visible3"
              onClick={toggleClick}
            >
              <Link to="/"> About Us</Link>
            </AnimateLi>

            <AnimateLi
              variants={innerVariant}
              initial="hidden"
              animate="visible4"
              onClick={toggleClick}
            >
              <a href="#header" onClick={() => header("header")}>
                Careers
              </a>
            </AnimateLi>
          </ul>
        </AnimateDiv>
      )} */}
    </>
  );
}

Navbar.propTypes = {
  header: PropTypes.func,
  getintouch: PropTypes.func,
};

export default Navbar;
