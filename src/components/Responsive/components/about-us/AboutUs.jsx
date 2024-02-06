import "../../responsive.css";
const AboutUs = () => {
  return (
    <div className="about-us" id="About-Us">
      <div
        style={{
          width: "100%",
          boxShadow: "6px 6px 10px hsl(206.5, 0%, 75%)",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.15%",
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            loading="lazy"
            srcDoc="
            <style>
            * {
            padding: 0;
            margin: 0;
            overflow: hidden;
      
            }
            body, html {
              height: 100%;
            }
            img, svg {
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;
            }
            svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
              transition: all 250ms ease-in-out;
            }

            body:hover svg {
              filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
              transform: scale(1.2);
            }
            </style>

            <a href='https://www.youtube.com/embed/WZCb3xil_wo?autoplay=1'>
          <img src='https://ik.imagekit.io/birat22/Qviple_Landing/thumbnail.jpg' alt='Qviple Community to Learn'>
          <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='#289ae9' stroke='#289ae9'' stroke-width='2'  class='feather feather-play'><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
        </a>
            "
            src="https://www.youtube.com/embed/WZCb3xil_wo?controls=0"
            title="Qviple : Community to Learn"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
