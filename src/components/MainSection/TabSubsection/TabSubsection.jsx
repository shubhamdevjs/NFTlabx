import React from "react";
import "./TabSubsection.css";

const TabSubsection = () => {
  return (
    <div>
      <div className="tab_section">
        <div className="tab_section_heading">
          <div>First Tab
              <p id="tab_underline"></p>
          </div>
          <div>Second Tab</div>
        </div>
        <div className="tab_section_table_head">
          <p>Asset</p>
          <p>Amount</p>
          <p>User Account</p>
          <p>Referral Earning</p>
        </div>
        <div className="tab_section_table_contents">
          <div className="tab_section_table_contents_a">
            <div>logo</div>
            <div>
              <p>Bitcoin</p>
              <p>Put Avax</p>
            </div>
          </div>
          <div className="tab_section_table_contents_b">
            <p>0.00000 BNB</p>
            <p>Expired</p>
          </div>
          <div className="tab_section_table_contents_c">
              0xfbE...0f
          </div>
          <div className="tab_section_table_contents_d">
              <p>0.000.BNB</p>
              <p>View on BSC Scan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSubsection;
