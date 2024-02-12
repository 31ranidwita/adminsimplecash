import React from "react";
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Others from "../../others/others";
import "./home.css";
function Home() {
  return (
    <div className="homeContainer">
      <Topbar />
      <div className="contentContainer">
        <Sidebar />
        <div className="othersContainer">
          <Others />
        </div>
      </div>
    </div>
  );
}

export default Home;
