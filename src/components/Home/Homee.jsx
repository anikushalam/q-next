"use client";
import { useState, lazy, useEffect, Suspense } from "react";
import "./Home.css";
import PropTypes from "prop-types";
import Head from "next/head";
import HeadSection from "../HeadSection/HeadSection";
import { LazyImg } from "@/dynamiclib/Lazy/LazyImage";
import { imagekitUrl } from "@/utils/BaseUrl";
// import Testimonials from "./testimonials/Testimonials";

const Services = lazy(() => import("../Services/Services"));
const Brochure = lazy(() => import("../Brochure/Brochure"));
const About = lazy(() => import("../about/About"));
const Team = lazy(() => import("../Team/Team"));
const Accordion = lazy(() =>
  import("../Responsive/components/accordion/Accordion")
);
const GetInTouch = lazy(() => import("../GetInTouch/GetInTouch"));
const Footer = lazy(() => import("../Services/ServiceDetails/footer/Footer"));

function Homee() {
  const [float, setFloat] = useState(false);
  const [resStatus, setResStatus] = useState(
    typeof window !== "undefined" && window.innerWidth < 580
  );
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setFloat(true);
      } else {
        setFloat(false);
      }
    };
  }

  useEffect(() => {
    const mediaQuery =
      typeof window !== "undefined" && window.matchMedia("(max-width: 580px)");

    setResStatus(mediaQuery && mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setResStatus(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  function scrollToTop() {
    if (window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <Head>
        <title>
          Free School ERP | School Management Software | LMS - Qviple
        </title>
        <meta
          name="description"
          content="All-in-one institute management: Whether you're a large university or a small school, Qviple automates your administration processes. Book a demo now!"
        />
        <link rel="canonical" href="/" />
      </Head>
      <div className="modules" id="head">
        <HeadSection resStatus={resStatus} />
      </div>
      <div className="modules" id="services">
        <Services resStatus={resStatus} />
      </div>

      <Suspense fallback={<h3>Loading...</h3>}>
        <div className="modules" id="brochure">
          <Brochure />
        </div>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <div className="modules" id="about">
          <About resStatus={resStatus} />
        </div>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <div className="modules" id="testimonials">
          <Testimonials resStatus={resStatus} />
        </div>
      </Suspense> */}

      <Suspense fallback={<h3>Loading...</h3>}>
        <div className="modules" id="team">
          <Team resStatus={resStatus} />
        </div>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <div className="modules" id="faq">
          <Accordion />
        </div>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <div className="modules" id="getintouch">
          <GetInTouch />
        </div>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <div className="modules" id="footer">
          <Footer resStatus={resStatus} status="home" />
        </div>
      </Suspense>

      {float && (
        <div className="float" onClick={scrollToTop}>
          <LazyImg
            effect="blur"
            loading="lazy"
            className="floatIcon"
            src={`${imagekitUrl}/Qviple_Landing/floatIcon.png`}
            alt="back to top"
          />
        </div>
      )}
    </>
  );
}

Homee.propTypes = {
  careeers: PropTypes.bool,
  setCareers: PropTypes.any,
  ins: PropTypes.bool,
  setIns: PropTypes.any,
};

export default Homee;
