import React from "react";
import DashHeader from "../../Dashboard/components/DashHeader";
import Link from "next/link";
import { SettingsWrapper } from "./style/settings.styled";
import { Fade } from "react-awesome-reveal";
import { FiSettings } from "react-icons/fi";
import { MdOutlinePassword } from "react-icons/md";

const Settings = () => {
  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Settings" user="Tom Cruise" />
      <Fade>
        <SettingsWrapper>
          <div className="settings-card">
            <Link href="/admin/settings/general">
              <div className="first-card">
                <FiSettings />
                <h3>General Settings</h3>
              </div>
            </Link>
            <Link href="/admin/settings/change-password">
              <div className="second-card">
                <MdOutlinePassword />
                <h3>Change Password</h3>
              </div>
            </Link>
          </div>
        </SettingsWrapper>
      </Fade>
    </React.Fragment>
  );
};

export default Settings;
