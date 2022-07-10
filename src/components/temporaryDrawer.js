import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import '../styles/menuBar.less'
export const TemporaryDrawer = () => {
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => {
    return (
      <div>
        <List className="listTitle" >
          <ListItem>Google Docs</ListItem>
        </List>
        <Divider />
        <List className="listItem">
          <ListItem>google Doc</ListItem>
          <ListItem>google Excel</ListItem>
          <ListItem>google PPT</ListItem>
          <ListItem>google Form</ListItem>
        </List>
        <Divider />
        <List className="listItem">
          <ListItem>Setting</ListItem>
          <ListItem>Help And Feedback</ListItem>
        </List>
        <Divider />
        <List className="listItem">
          <ListItem>Cloud Drive</ListItem>
        </List>
      </div>
    );
  };
  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
