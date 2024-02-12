import React from "react";
import "./Topbar.css";
import { CgProfile } from "react-icons/cg";

const Username = () => {
  return <div className="username">Username</div>;
};

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SimpleCash</span>
        </div>
        <div className="topRight">
          <div className="profile">
            <Username />
            <CgProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
