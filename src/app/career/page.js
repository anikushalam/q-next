"use client";
import "@/app/styles/variables.css";
import { useEffect, useState } from "react";
import style from "../styles/Career.module.css";
import Navbar from "@/components/Career/Navbar/Navbar";
import CHeader from "@/components/Career/Header/CHeader";
import Chart from "@/components/Career/Chart/Chart";
import Form from "@/components/Career/Form/Form";
import Footer from "@/components/Services/ServiceDetails/footer/Footer";
import ResponsiveCareer from "@/components/Responsive/ResponsiveCareer/ResponsiveCareer";
import PropTypes from "prop-types";
import CareerFeatures from "@/components/Career/CFeatures/CFeatures";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

function Career({ careeers, setCareers }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [getintouch, setGetintouch] = useState("");
  const [header, setHeader] = useState("");
  const [theme, setTheme] = useState("light-theme");
  const [resposive, setResponsive] = useState(
    typeof window !== "undefined" ? window.innerWidth < 580 : false
  );
  if (typeof window !== "undefined") {
    window.onresize = function () {
      if (window.innerWidth < 580) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    };
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Provider store={store}>
      {resposive ? (
        <ResponsiveCareer careeers={careeers} setCareers={setCareers} />
      ) : (
        <div className={style.career}>
          <div id="navbar" className={style.navbar}>
            <Navbar
              g={getintouch}
              setHasScrolled={setHasScrolled}
              status="career"
              h={header}
              getintouch={(w) => setGetintouch(w)}
              header={(w) => setHeader(w)}
            />
          </div>

          <div id="header" className={style.header}>
            <CHeader />
          </div>

          <div id="header" className={style.header}>
            <CareerFeatures />
          </div>

          <div id="chart" className={style.chart}>
            <Chart />
          </div>
          <div id="form" className={style.form}>
            <Form />
          </div>
          <div id="footer" className={style.footer}>
            <Footer status="career" />
          </div>
        </div>
      )}
    </Provider>
  );
}

Career.propTypes = {
  careeers: PropTypes.bool,
  setCareers: PropTypes.any,
};

export default Career;
