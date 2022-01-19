import React from "react";
import propTypes from "prop-types";
import { DashHeadWrapper } from "./style/dash-header.styled";
import Icon from "../../../../components/Icons";
import UserMenu from "../../../Dashboard/components/UserMenu";
import onClickOutside from "react-onclickoutside";

const DashHeader = ({ dashboardTitle, user, profile_img }) => {
  const [open, setOpen] = React.useState(false);

  DashHeader.handleClickOutside = () => {
    setOpen(open);
  };

  return (
    <DashHeadWrapper>
      <div className="dashboard-title">
        <h1>{dashboardTitle}</h1>
      </div>
      <div className="profile-info">
        <div className="header-icons">
          <Icon name="search" />
          <Icon name="bell" />
        </div>
        <div className="user-details">
          <p className="username">{user}</p>
          <div className="img-wrapper" onClick={() => setOpen(!open)}>
            <img src={profile_img} alt="user profile image" />
          </div>
        </div>
        <UserMenu open={open} />
      </div>
    </DashHeadWrapper>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => DashHeader.handleClickOutside,
};

export default onClickOutside(DashHeader, clickOutsideConfig);

DashHeader.propTypes = {
  dashboardTitle: propTypes.string.isRequired,
  user: propTypes.string.isRequired,
  profile_img: propTypes.string.isRequired,
};
