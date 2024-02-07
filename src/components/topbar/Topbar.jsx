import React from 'react'
import "./Topbar.css";
import { CgProfile } from "react-icons/cg";


export default function Topbar() {
    return (
        <div className="topbar">
           <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">SimpleCash</span>
            </div>
            <div className="topRight">
            <div className="profile">
                <CgProfile/>
            </div>
            </div>
           </div>
        </div>
    )
}