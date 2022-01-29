import React from "react";
import "../style/main-page-header.scss";

function MainPageHeader() {
  return (
    <div className="poptyper-header">
      <div className="poptyper-header-title">
        <h1>
          PopTyper
          <span>⌨️</span>
        </h1>
      </div>
      <div className="poptyper-header-description">
        <p>Improve your typing skills</p>
      </div>
    </div>
  );
}

export default MainPageHeader;
