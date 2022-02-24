import React from "react";
import "./App.css";
import {
  Banner,
  MainSection,
  RightColumn,
  SideMenu,
  TabSection,
} from "./components";

//Customizing colours
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   status: {
//     danger: "#e53e3e",
//   },
//   palette: {
//     primary: {
//       main: "#3772FF",
//       darker: "#053e85",
//     },
//     neutral: {
//       main: "#A3E3FF",
//       contrastText: "#fff",
//     },
//   },
// });

const App = () => {
  return (
    <div className="App">
      <Banner />
      <div className="app">
        <SideMenu />
        <MainSection />
          <RightColumn />
      </div>
    </div>
  );
};

export default App;
