import Reveal from "@/custom/animation/Reveal";
import style from "../About.module.css";

function Text() {
  return (
    <>
      <div className={style.aboutText}>
        <Reveal>
          <h2>About Us</h2>
        </Reveal>

        <Reveal>
          <p>
            <span className={style.spann}>
              <a href="#qviple">Qviple</a>
            </span>{" "}
            a part of Mithkal Minds Private Limited in Nashik, Maharashtra, is
            dedicated to making your educational institute journey smoother
            through our Saas solutions.
          </p>
        </Reveal>
        <Reveal>
          <>
            <p>
              At Qviple, we focus on utilizing the latest technology to enhance
              education for institutions of all sizes, ranging from small
              tuition classes and coaching institutes to schools, colleges, and
              universities. Our continuous updates and innovative features are
              designed to keep you ahead in the market.
            </p>
            <p>
              Our SchoolERP simplifies institute management, providing an
              all-in-one solution. Our goal is to help you boost productivity
              and achieve your educational aspirations. We are passionate about
              embracing technology, and it lies at the heart of everything we
              do.
            </p>

            <p>
              We truly believe in the power of embracing everyone, making sure
              that no student or institution is ever left behind.
              <span className={style.pspan}>
                <a href="https://www.instagram.com/explore/tags/embraceeveryone/">
                  #Embraceeveryone
                </a>
              </span>
            </p>
          </>
        </Reveal>
      </div>
    </>
  );
}

export default Text;
