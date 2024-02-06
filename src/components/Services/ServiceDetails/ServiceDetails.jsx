import { Suspense, lazy } from "react";
import style from "./ServiceDetails.module.css";
import ServiceNav from "./ServiceNav/ServiceNav";
import { useParams } from "react-router-dom";
import QLoader from "../../../../Custom/Loader/QLoader";
import Footer from "./footer/Footer";
import { Helmet } from "react-helmet-async";

const CustomizedDept = lazy(() => import("./CustomizedDept/CustomizedDept"));
const ELearningMgt = lazy(() => import("./ELearningMgt/ELearningMgt"));
const AdmissionMgt = lazy(() => import("./AdmissionMgt/AdmissionMgt"));
const FinanceMgt = lazy(() => import("./FinanceMgt/FinanceMgt"));
const LibraryMgt = lazy(() => import("./LibraryMgt/LibraryMgt"));
const SportMgt = lazy(() => import("./SportMgt/SportMgt"));
const CareerMgt = lazy(() => import("./CareerMgt/CareerMgt"));
const TenderMgt = lazy(() => import("./TenderMgt/TenderMgt"));
const EventMgt = lazy(() => import("./EventMgt/EventMgt"));
const AlumniMgt = lazy(() => import("./AlumniMgt/AlumniMgt"));
const HostelMgt = lazy(() => import("./HostelMgt/HostelMgt"));
const TransportMgt = lazy(() => import("./TransportMgt/TransportMgt"));

function ServiceDetails() {
  const { service } = useParams();

  return (
    <Suspense fallback={<QLoader />}>
      <>
        <Helmet>
          <title>Qviple ERP Services</title>
          <meta
            name="description"
            content="LMS provides course management, user management, communication and collaboration certification and ompliance."
          />
          <link rel="canonical" href="/" />
        </Helmet>

        <div className={style.serviceDetails}>
          <div className={style.navbar}>
            <ServiceNav />
          </div>

          <div className={style.sections}>
            {service === "admission" && <AdmissionMgt />}
            {service === "finance" && <FinanceMgt />}
            {service === "department" && <CustomizedDept />}
            {service === "elearning" && <ELearningMgt />}
            {service === "library" && <LibraryMgt />}
            {service === "sport" && <SportMgt />}
            {service === "career" && <CareerMgt />}
            {service === "tender" && <TenderMgt />}
            {service === "event" && <EventMgt />}
            {service === "alumni" && <AlumniMgt />}
            {service === "hostel" && <HostelMgt />}
            {service === "transport" && <TransportMgt />}
          </div>

          <Footer status="services" />
        </div>
      </>
    </Suspense>
  );
}

export default ServiceDetails;
