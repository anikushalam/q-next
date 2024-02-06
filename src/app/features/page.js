"use client";
import { useEffect, useState } from "react";
import "@/app/styles/variables.css";
import Navbar from "@/components/Navbars/Navbar/Navbar";
import Footer from "@/components/Services/ServiceDetails/footer/Footer";
import { imagekitUrl } from "@/utils/BaseUrl";
import style from "./QvipleFeatures.module.css";
import QvipleFeaturesCard from "./QvipleFeaturesCard";
import Head from "next/head";

function QvipleFeatures() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const modules = [
    {
      icon: `${imagekitUrl}/Qviple_Landing/icons/100__Paper-Free_Process.svg`,
      heading: "Comprehensive Solutions",
      text: "Integrate your business processes and learning initiatives seamlessly with our comprehensive ERP and LMS solutions.",
      alt: "paper free process",
    },

    {
      icon: `${imagekitUrl}/Qviple_Landing/icons/Customize_Department.svg`,
      heading: "Customize Department",
      text: "Tailor our systems to fit your unique requirements, ensuring a perfect match for your business or educational institution.",
    },

    {
      icon: `${imagekitUrl}/Qviple_Landing/icons/All-in-One_Integrated_Platform_.svg`,
      heading: "All-in-One Integrated Platform",
      text: "No more juggling multiple software or struggling with data fragmentation - everything you need is right at your fingertips.",
      alt: "all in one plateform",
    },

    {
      icon: `${imagekitUrl}/Qviple_Landing/icons/Quick_and_Easy_Set-Up.svg`,
      heading: "User-Friendly Interface",
      text: "Experience ease of use with intuitive interfaces that promote a positive user experience for both employees and learners",
      alt: "easy setup",
    },
    {
      icon: `${imagekitUrl}/Qviple_Landing/icons/New_Updates_.svg`,
      heading: "New Updates",
      text: "Continuous improvement and updates to our software, ensuring that you always have access to the latest features",
      alt: "updates",
    },
    {
      icon: `${imagekitUrl}/Qviple_Landing/icons/Low_Cost_One-Time_Payment.svg`,
      heading: "Low Cost One-Time Payment",
      text: "Qviple offers a cost-effective solution with a one-time payment model. ",
      alt: "low cost payment",
    },

    {
      icon: `${imagekitUrl}/Qviple_Landing/icons/Data_Security.svg`,
      heading: "Data Security",
      text: "Protecting sensitive school data is our top priority.",
      alt: "security",
    },
    {
      icon: `${imagekitUrl}/Qviple_Landing/icons/Market_Your_Institute_and_Become_a_Brand.svg`,
      heading: "Market Your Institute and Become a Brand",
      text: "ffectively market your institute and build a strong brand presence.",
      alt: "become brand",
    },
    {
      icon: `${imagekitUrl}/Qviple_Landing/icons/Create_a_Community_of_Like-Minded_People.svg`,
      heading: "Community of Like-Minded People",
      text: "Qviple enables the creation of a vibrant and engaging community of like-minded individuals.",
      alt: "create community",
    },
  ];

  return (
    <>
      <Head>
        <title>Why Choose Us</title>
        <meta
          name="description"
          content="Qviple LMS provides a centralized platform to manage learning programs and other administrative tasks educators and learners."
        />
        <link rel="canonical" href="/features" />
        <link
          rel="icon"
          href="/icon?favicon.svg"
          type="image/favicon.svg"
          sizes="favicon.svg"
        />
      </Head>
      <div className={`${style.newHeadContainerOverlay} ${style.whyQviplebg}`}>
        {/* {hasScrolled ? ( */}
        <div id="navbar" className={style.lightnavbar}>
          <Navbar status="chooseUs" setHasScrolled={setHasScrolled} />
        </div>
        {/* // ) : (
        //   <NavigationBar
        //     status="chooseUs"
        //     hasScrolled={hasScrolled}
        //     setHasScrolled={setHasScrolled}
        //   />
        // )} */}

        <div className={style.moduleHead}>
          <h3>Why Choose Us</h3>

          <h5>
            Here is why you should choose our product as the solution of your
            institute{" "}
          </h5>
        </div>
      </div>
      <div className={style.modulesContentpcontainer}>
        <p className={style.modulesContentp}>
          Unlock the potential of learning in the digital age with Qviple's
          cutting-edge Learning Management System. Our LMS is designed to
          provide a dynamic and engaging learning environment, enabling
          organizations and educational institutions to deliver effective
          training and education. Embark on a journey of digital transformation
          with Qviple. Whether you're a business seeking ERP excellence or an
          educational institution striving for innovative learning solutions, we
          have the tools to propel you forward. Ready to embrace the future?
          Contact us today for a personalized consultation and see how Qviple
          can redefine your business or educational landscape.
        </p>
      </div>

      <div className={style.modulesContainer}>
        {modules.map((module, index) => (
          <QvipleFeaturesCard key={index} module={module} />
        ))}
      </div>

      <Footer status="chooseus" />
    </>
  );
}

export default QvipleFeatures;
