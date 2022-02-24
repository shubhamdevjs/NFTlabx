import React from "react";
import bit from "../../../assets/bit.png";

import "./SecondSubsection.css";

const SecondSubsection = () => {
  return (
    <div>
      <div className="second_section">
        <div className="second_section_text_button">
          <p className="second_section_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="second_section_button">Tutorial</button>
        </div>
        <div className="second_section_image">
          <img src={bit} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default SecondSubsection;
