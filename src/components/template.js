import MoreVertIcon from "@material-ui/icons/MoreVert";
import { UnfoldMore } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import blank from '../images/template-body-1.png'
import contact from '../images/template-body-2.png'
import reply from '../images/template-body-3.png'
import party from '../images/template-body-4.png'
import "../styles/template.less";



export const Template = () => {
  return (
    <div className="template">
      <div className="template_top">
        <div className="left">Create a new form</div>
        <div className="right">
          <div className="gallery_button">
            template gallery
            <UnfoldMore fontSize="small" />
          </div>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="template_body">
        <div className="card">
            <img src={blank}/>
            <span>Blank</span>
        </div>
        <div className="card">
            <img src={contact}/>
            <span>Contact Information</span>
        </div>
        <div className="card">
            <img src={reply}/>
            <span>Reply</span>
        </div>
        <div className="card">
            <img src={party}/>
            <span>Party Invite</span>
        </div>
      </div>
    </div>
  );
};
