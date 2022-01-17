import React from "react";
import DashHeader from "../../components/DashHeader";
import { SettingsWrapper, SettingsForm } from "../style/settings.styled";
import Button from "../../../../components/Buttons";
import { Fade } from "react-awesome-reveal";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [passwordChangeSuccess, setPasswordChangeSuccess] = React.useState("");
  const [passwordChangeError, setPasswordChangeError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Change Password" />
      <Fade>
        <SettingsWrapper>
          <SettingsForm>
            <div className="flex-fields">
              <div>
                <label htmlFor="fullname">Your fullname</label>
                <input
                  name="fullname"
                  type="text"
                  placeholder="Tom Cruise"
                  value={oldPassword}
                  className="fullname form-control"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  value={newPassword}
                  className="email form-control"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <Button
              name="save-btn"
              height="55px"
              width="180px"
              fill="var(--secondary)"
              text_color="#fff"
            >
              Change Password
            </Button>
          </SettingsForm>
        </SettingsWrapper>
      </Fade>
    </React.Fragment>
  );
};

export default ChangePassword;
