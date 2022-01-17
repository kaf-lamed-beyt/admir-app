import React from "react";
import DashHeader from "../components/DashHeader";
import Link from "next/link";
import { SettingsWrapper } from "./style/settings.styled";
import { Fade } from "react-awesome-reveal";

const Settings = () => {
  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Settings" user="Tom Cruise" />
      <Fade>
        <SettingsWrapper>
          <Link href="/dashboard/settings/general">
            <div className="first-card">
              <p className="general-icon">General settings Icon</p>
              <h3>General Settings</h3>
            </div>
          </Link>
          <Link href="/dashboard/settings/change-password">
            <div className="second-card">
              <p className="general-icon">Change Password Icon</p>
              <h3>Change Password</h3>
            </div>
          </Link>
        </SettingsWrapper>
      </Fade>
    </React.Fragment>
  );
};

export default Settings;
