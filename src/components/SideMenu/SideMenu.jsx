import React, { useState } from "react";
import "./SlideMenu.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const Categories = (props) => (
  <div className="nav_categories_content">
    <div className="nav_categories_content_title">{props.link}</div>
    <div className="nav_categories_content_icon">
      <button variant="contained" className="button-styles">
        {props.name}
      </button>
    </div>
  </div>
);

const SideMenu = () => (
  <div className="nav">
    <div className="nav-types">
      <div className="nav-types-icons">
        <div className="nav_icon">
          <p>N</p>
        </div>
        <div className="nav_icon_title">
          <p>Name</p>
        </div>
        <div className="nav_toogle_icon">
          <ArrowBackIcon />
        </div>
      </div>
      <div className="nav_type_categories">
        <Categories name="Home" link={<WidgetsOutlinedIcon />} />
        <Categories
          name="Section 1"
          link={<InsertChartOutlinedRoundedIcon />}
        />
        <Categories name="Section 2" link={<CandlestickChartOutlinedIcon />} />
        <Categories name="Section 3" link={<ShowChartSharpIcon />} />
        <Categories name="Section 4" link={<MonetizationOnOutlinedIcon />} />
        <Categories name="Section 5" link={<StorageRoundedIcon />} />
        <Categories name="Section 6" link={<PieChartRoundedIcon />} />
        <Categories name="Section 7" link={<LeaderboardOutlinedIcon />} />
        <Categories name="Section 8" link={<ShareOutlinedIcon />} />
        <Categories name="Documentation" link={<ArticleOutlinedIcon />} />
      </div>
      <div className="nav_bottom_features">
        <button className="button-bottom button1">
          <div className="nav_icon_small">
            <p>N</p>
          </div>
          $0.90
        </button>
        {/* <Button sx={{px:3}} className="button-bottom-second" >
      Buy $XYZ
      </Button> */}
        <button className="button-bottom button2">Buy $XYZ</button>
      </div>
    </div>
    <div className="vertical"></div>
  </div>
);

export default SideMenu;
