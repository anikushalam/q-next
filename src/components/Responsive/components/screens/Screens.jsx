import { Swiper, SwiperSlide } from "swiper/react";
import { imageShowUrl2 } from "../../../services/BaseUrl";

import "swiper/css";
import "swiper/css/pagination";
import "./screens.css";
import { Pagination } from "swiper";

import { LazyImg } from "../../../dynamiclib/Lazy/LazyImage";

export default function Screens() {
  return (
    <>
      <div className="title screens-title">Checkout our app interface look</div>
      {/* <div className="text screens-text">Check the UI of our app.</div> */}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="screens-images">
            <LazyImg
              loading="lazy"
              effect="blur"
              src={`${imageShowUrl2}/assets/screen1.png`}
              alt="screenshot 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="screens-images">
            <LazyImg
              loading="lazy"
              effect="blur"
              src={`${imageShowUrl2}/assets/screen5.png`}
              alt="screenshot 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="screens-images">
            <LazyImg
              loading="lazy"
              effect="blur"
              src={`${imageShowUrl2}/assets/screen4.png`}
              alt="screenshot 3"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
