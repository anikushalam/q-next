import OurTeam from "../Responsive/our-team/OurTeam";
import style from "./Team.module.css";
import Card from "./components/Card";
import PropTypes from "prop-types";

function Team({ resStatus }) {
  const data = [
    { name: "Pankaj Phad", designation: "Founder and Chief Executive Officer" },
    { name: "Vikas Sanap", designation: "Managing Director" },
    { name: "Abhishek Singh", designation: "Chief Technical Officer" },
    { name: "Ankush Kumar Singh", designation: "Product Lead" },
    { name: "Tushar Bhambere", designation: "Application Lead" },
    { name: "Birat Dhar", designation: "Front End Developer" },
    { name: "Nikita Soni", designation: "Digital Markrting Manager" },
  ];
  return (
    <>
      {resStatus ? (
        <OurTeam />
      ) : (
        <div className={style.team}>
          <h2>Our Team</h2>

          <div className={`${style.content} ${style.contentt}`}>
            {data.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

Team.propTypes = {
  resStatus: PropTypes.bool,
};

export default Team;
