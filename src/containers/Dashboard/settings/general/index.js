import React from "react";
import DashHeader from "../../components/DashHeader";
import { SettingsWrapper, SettingsForm } from "../style/settings.styled";
import Button from "../../../../components/Buttons";
import { Fade } from "react-awesome-reveal";
import { CountryPhoneInput } from "../../../../components/Inputs";
import "react-phone-number-input/style.css";
import Select from "react-dropdown-select";

const GeneralSettings = () => {
  const [fullname, setFullname] = React.useState("Caleb Olojo");
  const [email, setEmail] = React.useState("sakamakhmood@gmail.com");
  const [phoneNumber, setPhoneNumber] = React.useState("+45876110033");
  const [role, setRole] = React.useState("");

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
      <DashHeader dashboardTitle="General Settings" user="Tom Cruise" />
      <Fade>
        <SettingsWrapper>
          <div className="profile-wrapper">
            <img src="/img/user.png" alt="user profile image" />
          </div>
          <SettingsForm onSubmit={handleSubmit}>
            <div className="flex-fields">
              <div>
                <label htmlFor="fullname">Your fullname</label>
                <input
                  name="fullname"
                  type="text"
                  placeholder="Tom Cruise"
                  value={fullname}
                  className="fullname form-control"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  className="email form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-fields">
              <div>
                <label htmlFor="phone number">Phone Number</label>
                <CountryPhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className="number"
                />
              </div>
              <div>
                <label htmlFor="role">Role</label>
                <Select
                  value={role}
                  options={options}
                  placeholder="Please select your role"
                  dropdownPosition="top"
                  className="select"
                  color="var(--primary)"
                  onChange={(role) => setRole(role.map((role) => role.value))}
                />
              </div>
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

export default GeneralSettings;
