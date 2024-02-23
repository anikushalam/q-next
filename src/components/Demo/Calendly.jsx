import React from "react";
import { InlineWidget } from "react-calendly";

const Calendlly = () => {
  return (
    <div>
      <InlineWidget
        url="https://calendly.com/connect-knk"
        styles={{
          height: "700px",
        }}
      />
    </div>
  );
};

export default Calendlly;
