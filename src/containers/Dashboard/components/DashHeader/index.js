import React from "react";
import propTypes from "prop-types";
import { DashHeadWrapper } from "./style/dash-header.styled";
import Icon from "../../../../components/Icons";
import UserMenu from "../UserMenu";
import onClickOutside from "react-onclickoutside";
import axios from "axios";
import { userEndpoints } from "../../../../routes/endpoints";

const DashHeader = ({ dashboardTitle, user, profile_img }) => {
  const [open, setOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    fullName: "",
  });

  DashHeader.handleClickOutside = () => {
    setOpen(open);
  };

  const getCurrentUser = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: userEndpoints.getCurrentUser,
        headers: {
          "Content-Type": "application/json",
          // once the user is logged in. This request block helps us
          // get their details. But, for us to be able to get the details,
          // we need to pass the token that we stored in localStorgare from
          // the authContext, so that each login is unique to each user.
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const { data } = response.data;
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCurrentUser();
  }, []);

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
          <p className="username">
            {currentUser.fullName ? currentUser.fullName : user}
          </p>
          <div className="img-wrapper" onClick={() => setOpen(!open)}>
            <img src="/img/tom.png" alt="user profile image" />
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
