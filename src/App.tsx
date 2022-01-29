import React from "react";
import MainPageHeader from "./components/MainPageHeader";
import TypingArea from "./components/TypingArea";
import "./style/app.scss";

function App() {
  return (
    <div className="poptyper">
      <MainPageHeader />
      <TypingArea />
    </div>
  );
}

export default App;
