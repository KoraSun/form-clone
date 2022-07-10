import { Storage } from "@material-ui/icons";
import { ArrowDropDown } from "@material-ui/icons";
import { FolderOpen } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

import "../styles/mainBody.less"

export const MainBody = () => {
  return (
    <div className="mainBody">
      <div className="mainBody_top">
        <div className="left">Recent Forms</div>
        <div className="right">
          <div className="center">
            Owned by anyone <ArrowDropDown />
          </div>
          <IconButton>
            <Storage />
          </IconButton>
          <IconButton>
            <FolderOpen />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
