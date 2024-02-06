import "../../responsive.css";

const Steps = (props) => {
  return (
    <div className="timeline">
      <div className="steps__outer">
        {props.details.map((item) => (
          <div key={item.id} className="steps__card">
            <div className="steps__info">
              <div className="text steps__text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
