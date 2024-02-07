import "./Sidebar.css"
import { HiOutlineUsers } from "react-icons/hi2";
import { BsBoxes, BsCashCoin } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { TbLogout } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu"> 
            <div className="sidebarTitle">Dashboard</div>
            <div className="sidebar">
                <div className="sidebarListItem">
                  <HiOutlineUsers className="sidebarIcon"/>
                  Manage User
                </div>
              <div className="sidebarListItem">
                <BsBoxes className="sidebarIcon"/>
                Manage Product
              </div>
              <div className="sidebarListItem">
                <GrUserWorker className="sidebarIcon"/>
                Manage Worker
              </div>
              <div className="sidebarListItem">
                <BsCashCoin className="sidebarIcon"/>
                Manage Transaction
              </div>
              <div className="sidebarListItemLogout">
                <TbLogout className="sidebarIcon"/>
                Logout
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
