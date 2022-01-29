import React from "react";
import "../style/main-page-header.scss";
import PopTyperIcon from "../assets/poptyper-icon.svg";

function MainPageHeader() {
  return (
    <div className="poptyper-header">
      <div className="poptyper-header-title">
        <img src={PopTyperIcon} alt="poptyper-icon" />
      </div>
      <div className="poptyper-header-description">
        <p>Improve your typing skills</p>
      </div>
    </div>
  );
}

export default MainPageHeader;
