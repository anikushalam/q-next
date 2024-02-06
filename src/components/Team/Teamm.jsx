import { lazy, useState } from "react";
import "./team.css";
import { composeMailUrl, imagekitUrl } from "../../../services/BaseUrl";
import { team } from "../../../constants";
import Reveal from "../../../Custom/animation/Reveal";
import { LazyImg } from "../../../dynamiclib/Lazy/LazyImage";

function Team() {
  const [contentIndex, setContentIndex] = useState(1);

  const handleMouseOver = (id) => {
    setContentIndex(id);
  };
  return (
    <>
      <div className="team">
        <h2>
          {" "}
          <span>Meet</span> <br /> The Team
        </h2>
        <div className="containerwrapper">
          <Reveal>
            <div className="container">
              <div className="icon">
                {team.map((member) => (
                  <div
                    className={
                      member.id === contentIndex ? "imgBx active" : "imgBx"
                    }
                    onMouseOver={() => handleMouseOver(member.id)}
                    key={member.id}
                    style={{ "--i": member.id }}
                    data-id={`content${member.id}`}
                  >
                    <LazyImg
                      effect="blur"
                      src={member.img}
                      alt="team"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="contentt">
                {team.map((member) => (
                  <div
                    className={
                      member.id === contentIndex
                        ? "contenttBx active"
                        : "contenttBx"
                    }
                    key={member.id}
                    id={`content${member.id}`}
                  >
                    <div className="card">
                      <div className="imgBx">
                        <LazyImg
                          effect="blur"
                          src={member.img}
                          alt={member.name}
                          loading="lazy"
                        />
                      </div>
                      <div className="textBx">
                        <h2>
                          {member.name} <br /> <span>{member.designation}</span>{" "}
                        </h2>
                        <ul className="sci">
                          <li>
                            <a
                              href={`${composeMailUrl}&to=${member.social.facebook}&tf=cm`}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <LazyImg
                                effect="blur"
                                src="https://ik.imagekit.io/birat22/Qviple_Landing/icons/mail-icon.svg"
                                alt="facebook"
                                loading="lazy"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href={member.social.instagram}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <LazyImg
                                effect="blur"
                                src={`${imagekitUrl}/Qviple_Landing/social/instagram-icon.png`}
                                alt="instagram"
                                loading="lazy"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href={member.social.linkedin}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <LazyImg
                                effect="blur"
                                src={`${imagekitUrl}/Qviple_Landing/social/linkedin-icon.png`}
                                alt="linkedin"
                                loading="lazy"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href={member.social.twitter}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <LazyImg
                                effect="blur"
                                src={`${imagekitUrl}/Qviple_Landing/social/twitter-icon.png`}
                                alt="twitter"
                                loading="lazy"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

export default Team;
