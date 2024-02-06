import { imageShowUrl2, imagekitUrl } from "@/utils/BaseUrl";
const team = [
  {
    id: 1,
    name: "Pankaj Phad",
    designation: "Founder and CEO",
    img: `${imagekitUrl}/Qviple_Landing/team/pankaj-team.jpg`,
    social: {
      facebook: "pankajphad.stuff@gamil.com",
      instagram: "https://www.instagram.com/pankajphad_/?hl=en",
      linkedin: "https://www.linkedin.com/in/pankaj-phad-8081291b0/",
      twitter: "https://twitter.com/Pankajphad",
    },
  },
  {
    id: 2,
    name: "Vikas Sanap",
    designation: "Managing Director",
    img: `${imagekitUrl}/Qviple_Landing/team/vikash-team.jpg`,
    social: {
      facebook: "vikas@qviple.com",
      instagram: "https://www.instagram.com/?hl=en",
      linkedin: "https://www.linkedin.com/in/vikas-sanap-43750b33/",
      twitter: "https://twitter.com/vikassanap100",
    },
  },
  {
    id: 3,
    name: "Abhishek Singh",
    designation: "CTO",
    img: `${imagekitUrl}/Qviple_Landing/team/abhishek-team.jpg`,
    social: {
      facebook: "skdabhishekjrjarvis10@gmail.com",
      instagram: "https://www.instagram.com/yelp_camp1080?hl=en",
      linkedin: "https://www.linkedin.com/in/abhishek1080/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 4,
    name: "Ankush Kumar Singh",
    designation: "Product Lead",
    img: `${imagekitUrl}/Qviple_Landing/team/ankush-team.jpg`,
    social: {
      facebook: "anksinghma9765@gmail.com",
      instagram: "https://www.instagram.com/?hl=en",
      linkedin: "https://www.linkedin.com/in/ankush511/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 5,
    name: "Tushar Bhambere",
    designation: "Application Lead",
    img: `${imagekitUrl}/Qviple_Landing/team/tushar-team.jpg`,
    social: {
      facebook: "tushar@qviple.com",
      instagram: "https://www.instagram.com/all_rounder_tushar/",
      linkedin: "https://www.linkedin.com/in/tushar-bhambere/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 6,
    name: "Birat Dhar",
    designation: "Frontend Developer",
    img: `${imagekitUrl}/Qviple_Landing/team/birat-team.jpg`,
    social: {
      facebook: "birat@qviple.com",
      instagram: "https://www.instagram.com/?hl=en",
      linkedin: "https://www.linkedin.com/in/birat-dhar-78aa02131/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 7,
    name: "Nikita Soni",
    designation: "Digital Marketing",
    img: `${imagekitUrl}/Qviple_Landing/team/nikita-team.jpeg`,
    social: {
      facebook: "nikita@qviple.com",
      instagram: "https://www.instagram.com/nikitaa_soni_37?r=nametag",
      linkedin: "https://www.linkedin.com/in/nikitasoni01",
      twitter: "https://twitter.com/",
    },
  },
];
const modules = [
  {
    id: 1,
    img: `/images/light-theme/admision-icon.svg`,
    imgDark: `${imageShowUrl2}/admision-icon.svg`,

    heading: "Admission Management",
    text: "Application to performed catalogs all covered.",
    link: "admission",
  },
  {
    id: 2,

    img: `/images/light-theme/funds-icon.svg`,
    imgDark: `${imageShowUrl2}/funds-icon.svg`,
    heading: "Funds Management",
    text: "Online-offline both payment modes available.",
    link: "finance",
  },
  {
    id: 3,
    img: `/images/light-theme/department-icon.svg`,
    imgDark: `${imageShowUrl2}/department-icon.svg`,

    heading: "Customised Department",
    text: "Departments as per you needs like yearly batches or semester wise.",
    link: "department",
  },
  {
    id: 4,
    img: `/images/light-theme/elearning-icon.svg`,
    imgDark: `${imageShowUrl2}/elearning-icon.svg`,

    heading: "Dedicated E-learning Platform",
    text: "No need spend money on developing your app use it like yours.",
    link: "elearning",
  },
  {
    id: 5,
    img: `/images/light-theme/library-icon.svg`,
    imgDark: `${imageShowUrl2}/library-icon.svg`,

    heading: "Library Module",
    text: "Online-offline both payment modes available.",
    link: "library",
  },
  {
    id: 6,
    img: `/images/light-theme/sports-icon.svg`,
    imgDark: `${imageShowUrl2}/sports-icon.svg`,

    heading: "Dedicated Sports & Arts Departments",
    text: "Empower the sports and arts a country needs",
    link: "sport",
  },
  {
    id: 7,
    img: `/images/light-theme/event-seminar-icon.svg`,
    imgDark: `${imageShowUrl2}/event-seminar-icon.svg`,

    heading: "Event And Seminar Management",
    text: "Explore the ongoing and upcoming events",
    link: "event",
    status: "event",
  },
  {
    id: 8,
    img: `/images/light-theme/alumni-icon.svg`,
    imgDark: `${imageShowUrl2}/alumni-icon.svg`,

    heading: "Alumni Cell",
    text: "Stay Connected to your Alma Mater",
    link: "alumni",
    status: "alumni",
  },
  {
    id: 9,
    img: `/images/light-theme/career-icon.svg`,
    imgDark: `${imageShowUrl2}/career-icon.svg`,

    heading: "Career Management Center",
    text: "Strive to Involve Employees in Setting Their Own Goals ",
    link: "career",
    status: "career",
  },
  {
    id: 10,
    img: `/images/light-theme/tender-icon.svg`,
    imgDark: `${imageShowUrl2}/tender-icon.svg`,

    heading: "Tender Management",
    text: "Facilitates the Complete Tendering Process With the Exception of Advertising",
    link: "tender",
    status: "tender",
  },
  {
    id: 11,
    img: `/images/light-theme/transport-icon.svg`,
    imgDark: `${imageShowUrl2}/transport-icon.svg`,

    heading: "Transportation Network",
    text: "Transportation Network with Vehicle Service for Institute",
    link: "transport",
    status: "transport",
  },
  {
    id: 12,
    img: `/images/light-theme/hostel-icon.svg`,
    imgDark: `${imageShowUrl2}/hostel-icon.svg`,
    heading: "Hostel Management",
    text: "Provides Hostel Activities like Hostel Admissions, Fees, Room, Mess etc.",
    link: "hostel",
    status: "hostel",
  },
];

export { team, modules };
