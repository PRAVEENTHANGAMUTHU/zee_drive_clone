import React from "react";

import Navbar from "./small_components/navbar/Navbar";
import SearchBar from "./small_components/search_bar/SearchBar";
import ZeedriveLogo from "./small_components/zeedrive-logo/ZeedriveLogo";
import User from "./small_components/user/User";
const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="zeedrivelogo">
        <ZeedriveLogo />
      </div>
      <div className="user">
        <User />
      </div>
    </div>
  );
};

export default Header;
