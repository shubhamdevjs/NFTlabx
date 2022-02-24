import React from "react";
import "./FirstSubsection.css";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const FirstSubsection = () => (
  <div>
    <div className="main_section_first_row">
      <div className="first_row_text">
        <div>Section</div>
        <div className="first_row_underline"></div>
      </div>
      <div className="first_row_wallet">
        <div className="wallet_first">
          <AccountBalanceWalletOutlinedIcon />
        </div>
        <div className="wallet_second">0.2 $XYZ</div>
        <div className="wallet_third">Tier 1</div>
      </div>
    </div>
  </div>
);

export default FirstSubsection;
