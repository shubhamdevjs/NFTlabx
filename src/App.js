import React, { useEffect, useState } from "react";
import "./App.css";
import { Banner, MainSection, RightColumn, SideMenu } from "./components";

const App = () => {
  const [backendData, setbackendData] = useState([{}]);

  useEffect(() => {
    fetch("/data")
      .then((response) => response.json())
      .then((data) => {
        setbackendData(data);
      });
  }, []);

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
