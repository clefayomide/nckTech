/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Avatar from "./Avatar";

const MobileNavLinks = () => {
  return (
    <>
      <div className="mobile-nav-container">
        <div className="mobile-nav">
          <Avatar className="avatar-mobile" />
          <a href="#" className="trps">
            TRIPS
          </a>
          <a href="#" className="rct">
            RECENTLY VIEWED
          </a>
          <a href="#" className="bkgns">
            BOOKINGS
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNavLinks;
