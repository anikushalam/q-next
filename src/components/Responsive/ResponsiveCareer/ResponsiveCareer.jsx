import { useEffect, lazy } from "react";
import style from "../Responsive.module.css";
import Navbar from "../components/navbar/Navbar";

const AboutQviple = lazy(() =>
  import("../components/about-Qviple/AboutQviple")
);
const CareersForm = lazy(() =>
  import("../components/careers-form/CareersForm")
);
const Footer = lazy(() =>
  import("@/components/Services/ServiceDetails/footer/Footer")
);

function ResponsiveCareer({ careeers, setCareers }) {
  useEffect(() => {
    setCareers(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={style.mobileView}>
      <Navbar careeers={careeers} setCareers={setCareers} />
      <AboutQviple />
      <CareersForm />
      <Footer status="responsiveCareeer" />
    </div>
  );
}

export default ResponsiveCareer;
