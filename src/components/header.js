import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

import { TemporaryDrawer } from "./temporaryDrawer";

import logo from "../logo.svg";

import "../styles/header.less";

export const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <TemporaryDrawer />
      </div>
      <div className="searchBar">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="search" />
      </div>
      <div className="right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src={logo} className="avatar" />
      </div>
    </div>
  );
};
