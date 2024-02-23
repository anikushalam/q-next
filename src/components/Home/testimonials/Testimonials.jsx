import style from "./testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ion.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Testimonials() {
  const testimonialData = [
    {
      img: "/images/testimonials/dm-yadav.jpeg",
      name: "Dr. D.M. Yadav",
      text: "SND College of Engineering, Yeola, has greatly benefited from Qviple by Mithkal Minds. As the Principal, I appreciate the comprehensive suite of features that streamline academic and administrative processes. ",
      designation: "Principal, SND College of Engineering, Yeola",
    },
    {
      img: "/images/testimonials/kishor-joshi.jpeg",
      name: "Kishor Joshi",
      text: "Qviple has transformed financial management at Sardar Patel College of Engineering. It has proven to be an invaluable asset in enhancing the financial efficiency of our institution.",
      designation: "Finance Administrator, Sardar Patel College of Engineering",
    },
    {
      img: "/images/testimonials/ramesh-khairnar.jpeg",
      name: "Mr. Rakesh Khairnar",
      text: "Qviple from Mithkal Minds has been a tremendous asset for our institute. We have witnessed the transformative impact of this platform on our administrative efficiency. From admissions to record-keeping, Qviple's features are robust and user-friendly. ",
      designation: "Office Superintendent, SNPT Institute of Pharmacy",
    },
    {
      img: "/images/testimonials/santosh-lamkhade.jpeg",
      name: "Santosh Lamkhade",
      text: "Qviple has been a game-changer for our administrative processes at KVN Naik Institute of Pharmacy.  The efficiency it brings to tasks like admissions, attendance, and record-keeping. Qviple stands out as an invaluable tool in ensuring the seamless functioning of our institute.",
      designation:
        "Administrative Clerk, KVN Naik Institute of Pharmaceutical Education and Research",
    },
    {
      img: "/images/testimonials/vishal-gulecha.jpeg",
      name: "Dr. Vishal Gulecha",
      text: "Qviple by Mithkal Minds has revolutionized the management of our institute. As the Principal, I am impressed with the comprehensive features that cover all aspects of our institution, from admissions to alumni. ",
      designation: "Principal, SNPT Institute of Pharmacy",
    },
  ];
  return (
    <>
      <div className={style.testimonialsContainer}>
        <div className={style.testimonialtitle}>Testimonials</div>

        <Swiper
          breakpoints={{
            // when window width is >= 576px
            576: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            modifier: 2.5,
            depth: 100,
          }}
          autoplay={{
            delay: 2000,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {testimonialData?.map((testimoniall, index) => (
            <SwiperSlide key={index}>
              <div className={style.testimonial}>
                <img
                  className={style.testimonialimg}
                  src={testimoniall?.img}
                  alt="slide_image"
                />
                <h6 className={style.testimonialname}>{testimoniall?.name}</h6>
                <p className={style.testimonialdesignation}>
                  {testimoniall?.designation}
                </p>
                <p className={style.testimonialtext}>{testimoniall?.text}</p>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline" size="small"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon
                name="arrow-forward-outline"
                size="small"
                color=""
              ></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Testimonials;
