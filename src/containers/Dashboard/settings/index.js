import React from "react";
import DashHeader from "../components/DashHeader";
import Link from "next/link";
import { SettingsWrapper, SettingsForm } from "./style/settings.styled";
import Input from "../../../components/Inputs";
import Button from "../../../components/Buttons";
import { Fade } from "react-awesome-reveal";
import { CountryPhoneInput } from "../../../components/Inputs";
import "react-phone-number-input/style.css";
import Select from "react-dropdown-select";
import { InputGroup } from "./style/settings.styled";

const Settings = () => {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [role, setRole] = React.useState("");
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const options = [
    { label: "Field Worker", value: "field worker" },
    { label: "Manager", value: "manager" },
    { label: "Assistant Manager", value: "assistant manager" },
  ];

  return (
    <React.Fragment>
      <DashHeader
        dashboardTitle="Settings"
        user="Invictus Innocent"
        profile_img="/img/user.png"
      />
      <Fade>
        <SettingsWrapper>
          <div className="profile-wrapper">
            <img src="/img/user.png" alt="user profile image" />
          </div>
          <SettingsForm onSubmit={handleSubmit}>
            <div className="flex-fields">
              <InputGroup>
                <label htmlFor="fullname">Your fullname</label>
                <Input
                  name="fullname"
                  type="text"
                  placeholder="Tom Cruise"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="email" className="email-label">
                  Email address
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </div>
            <div className="flex-fields">
              <InputGroup>
                <label htmlFor="phone number" className="number-label">
                  Phone Number
                </label>
                <CountryPhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className="number"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="role" className="role-label">
                  Role
                </label>
                <Select
                  value={role}
                  options={options}
                  placeholder="Please select your role"
                  dropdownPosition="top"
                  className="role-input"
                  color="var(--primary)"
                  onChange={(role) => setRole(role)}
                />
              </InputGroup>
            </div>
            <div className="flex-fields">
              <InputGroup>
                <label htmlFor="password">Change password</label>
                <Input
                  name="password"
                  type={passwordVisibility ? "text" : "password"}
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="show-pwd" onClick={handlePwdVisibility}>
                  show
                </span>
              </InputGroup>
            </div>
            <div className="flex-buttons">
              <Button
                name="save-btn"
                height="55px"
                width="180px"
                className="btn-outline"
              >
                Cancel
              </Button>
              <Button
                name="save-btn"
                height="55px"
                width="180px"
                fill="var(--secondary)"
                text_color="#fff"
              >
                Save changes
              </Button>
            </div>
          </SettingsForm>
        </SettingsWrapper>
      </Fade>
    </React.Fragment>
  );
};

export default Settings;
