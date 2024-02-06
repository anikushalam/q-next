import "../../responsive.css";
import { useRef } from "react";
import { imageShowUrl2 } from "@/utils/BaseUrl";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";

const Navbar = ({ careeers }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <LazyImg
          loading="lazy"
          effect="blur"
          src={`${imageShowUrl2}/assets/logo with tag line.svg`}
          alt="Qviple Logo"
        />
      </div>
      <div className="navbar__icons">
        <div className="navbar__icons__call">
          <a href="#Contact-Us">
            <LazyImg
              loading="lazy"
              effect="blur"
              alt="call icon"
              src={`${imageShowUrl2}/assets/call-icon.svg`}
            />
          </a>
        </div>
        <div className="navbar__icons__home">
          {careeers === true ? (
            <a href="/">
              <LazyImg
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/assets/home-icon.svg`}
                alt="home icon"
              />
            </a>
          ) : (
            <a href="#Home">
              <LazyImg
                loading="lazy"
                effect="blur"
                src={`${imageShowUrl2}/assets/home-icon.svg`}
                alt="home icon"
              />
            </a>
          )}
        </div>
        <div className="navbar__icons__hamburger">
          <nav ref={navRef}>
            <a href="/" onClick={showNavbar}>
              Home
            </a>
            <a href="#Contact-Us" onClick={showNavbar}>
              Contact Us
            </a>
            <a href="#About-Us" onClick={showNavbar}>
              About Us
            </a>
            <a href="/career" onClick={showNavbar}>
              Careers
            </a>
            <button
              className="navbar__icons__hamburger__btn nav-close-btn"
              onClick={showNavbar}
            >
              <img
                className="menubar"
                style={{
                  height: "1.8rem",
                  width: "1.8rem",
                }}
                src={`${imagekitUrl}/Qviple_Landing/close-icon.png`}
              />
            </button>
          </nav>
          <button
            className="navbar__icons__hamburger__btn nav-hamburger-btn"
            onClick={showNavbar}
          >
            <img
              className="menubar"
              src={`${imagekitUrl}/Qviple_Landing/menu-bar.png`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
