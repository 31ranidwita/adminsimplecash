import React from "react";
import "./home.css";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Others from "../others/others";

function Home() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Others />
      </div>
    </div>
  );
}

export default Home;
