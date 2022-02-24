import React from "react";
import "./MainSection.css";

import FirstSubsection from "./FirstSubsection/FirstSubSection";
import SecondSubsection from "./SecondSubsection/SecondSubsection";
import ThirdSubsection from "./ThirdSubsection/ThirdSubsection";
import FourthSubsection from "./FourthSubSection/FourthSubsection";
import TabSubsection from "./TabSubsection/TabSubsection";
const MainSection = () => (
  <div className="main_section">
    <div className="main_section_sub_sections">
      <div>
        <FirstSubsection/>
      </div>
      <div>
         <SecondSubsection/> 
      </div>
      <div>
         <ThirdSubsection/> 
      </div>
      <div>
          <FourthSubsection/>
      </div>
      <div>
        <TabSubsection/>
      </div>
    </div>
  </div>
);

export default MainSection;
