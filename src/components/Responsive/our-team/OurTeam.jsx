// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { imageShowUrl2, imagekitUrl } from "@/utils/BaseUrl";
import "./our-team.css";
import { Pagination } from "swiper";

const teamMembers = [
  {
    name: "Pankaj Phad",
    position: "Founder and Chief Executive Officer",
  },
  {
    name: "Vikas Sanap",
    position: "Managing Director",
  },
  {
    name: "Abhishek Singh",
    position: "Chief Technical Officer",
  },
  {
    name: "Ankush Kumar Singh",
    position: "Product Lead",
  },
  {
    name: "Tushar Bhambere",
    position: "Application Lead",
  },
  {
    name: "Birat Dhar",
    position: "Chief Communications Officer",
  },
];

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="title team-title">Meet Our Team</div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {teamMembers.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="team-member">
              <div className="team-member__name">{item.name}</div>
              <div className="team-member__position">{item.position}</div>
              <img
                src="/images/light-theme/social/newLogo-text.svg"
                alt="qviple logo"
                title="erp team member"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
