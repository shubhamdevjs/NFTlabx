import React from "react";
import "./FourthSubsection.css";

import Oval from "../../../assets/Oval.png"
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';

const FourthSubsection = () => {
  return (
    <div>
      <div className="fourth_section"> 
        <div className="fourth_section_left">
          <div className="fourth_section_left_a">
            <div><img src={Oval} alt="" /></div>
            <p><span id="span">12.5%</span> of fee</p>
          </div>
          <div className="fourth_section_left_b">Your referral link for xyz</div>
          <div className="fourth_section_left_c">
              <p>https://unityexchange.design </p>
              <div id="fourth_section_left_c_icon"><ContentCopyTwoToneIcon/></div>
          </div>
        </div>

        <div className="fourth_section_left">
          <div className="fourth_section_left_a">
            <div><img src={Oval} alt="" /></div>
            <p><span id="span">12.5%</span> of fee</p>
          </div>
          <div className="fourth_section_left_b">Your referral link for xyz</div>
          <div className="fourth_section_left_c">
              <p>https://unityexchange.design </p>
              <div id="fourth_section_left_c_icon"><ContentCopyTwoToneIcon/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSubsection;
