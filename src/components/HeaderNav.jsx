import React from "react";
import Avatar from "./Avatar";

const HeaderNav = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav-lists">
          <li className="list">TRIPS</li>
          <li className="list">RECENTLY VIEWED</li>
          <li className="list">BOOKINGS</li>
        </ul>

        <div className="avatar-container">
         <Avatar className="avatar-desktop"/>
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
