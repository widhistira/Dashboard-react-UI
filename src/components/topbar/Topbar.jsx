import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img
            src="Musica.png"
            alt=""
            className="topAvatar"
          />
          <span className="logo">   Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">15</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">20</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="ryan.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
