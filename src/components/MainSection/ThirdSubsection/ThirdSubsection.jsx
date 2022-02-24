import React from "react";
import "./ThirdSubsection.css"

import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

const ThirdSubsection = () => {
  return (
    <div>
      <div className="third_section">
        <div className="third_section_rewards">
          <div id="your_rewards">Your rewards</div>
          <div id="rewards">$0.26231428</div>
          <div className="third_section_rewards_cost">
              <div id="avax">$40 AVAX</div>
              <div id="avax">$10 BNB</div>
              <div id="avax">$210 BTC</div>
          </div>
        </div>
        <div className="third_section_button">
            <button id="button_style"><OpenInNewRoundedIcon/><p>Custom link</p></button>
        </div>
      </div>
    </div>
  );
};

export default ThirdSubsection;
