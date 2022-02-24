import React from "react";
import "./RightColumn.css";


import LogoutIcon from "@mui/icons-material/Logout";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Ellipse from "../../assets/Ellipse.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const RightColumn = () => (
  <div>
    <div className="right_column">
      <div className="right_column_top">
        <div className="right_column_top_button">
          <div id="button_icon_one"> 
            <img src={Ellipse} alt="img" />
          </div>
          <div>Avalanche</div>
          <div id="button_icon_two">
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="right_column_top_button_two">
          <div id="right_column_top_two_icon">
            <AccountBalanceWalletOutlinedIcon />
          </div>
          <div>0XF6...1353</div>
          <div>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <div className="right_column_second">
        <p>
          <ArrowBackOutlinedIcon />
        </p>
        <p>Custom link</p>
      </div>
      <div className="right_column_search">
        <p>https://testnet.xyz.xyz/trade?ref=</p>
        <p>
          <input className="input_block" type="text" placeholder="Enter"/>
        </p>
      </div>
      <div className="right_column_bottom">
        <div id="custom_link">
          <p>
            <OpenInNewIcon />
          </p>
          <p>Custom Link</p>
        </div>
        <div id="cancel">
          <p id="cancel_icon">
            <LogoutIcon />
          </p>
          <p id="cancel_text">Cancel</p>
        </div>
      </div>
    </div>
  </div>
);

export default RightColumn;
