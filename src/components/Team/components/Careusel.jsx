import React from "react";
import "./Carousal.css";
import Card from "./Card";
import Carousel from "react-material-ui-carousel";

function Careusel({ data }) {
  return (
    <Carousel
      className="Example"
      autoPlay={false}
      // animation={"slide"}
      indicators={true}
      // timeout={this.state.timeout}
      // cycleNavigation={true}
      navButtonsAlwaysVisible={false}
      navButtonsAlwaysInvisible={false}
      next={(now, previous) => {}}
      prev={(now, previous) => {}}
      onChange={(now, previous) => {}}
    >
      {data.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </Carousel>
  );
}

export default Careusel;
