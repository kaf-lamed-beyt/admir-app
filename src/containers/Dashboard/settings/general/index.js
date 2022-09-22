import React from "react";
import DashHeader from "../../components/DashHeader";
import { SettingsWrapper, GeneralSettingsForm } from "../style/settings.styled";
import Button from "../../../../components/Buttons";
import { Fade } from "react-awesome-reveal";
import { CountryPhoneInput } from "../../../../components/Inputs";
import "react-phone-number-input/style.css";
import axios from "axios";
import { userEndpoints } from "../../../../routes/endpoints";
import dynamic from "next/dynamic";

const Status = dynamic(() => import("status-modal").then((mod) => mod.Status), {
  ssr: false,
});

const GeneralSettings = () => {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [saveSuccess, setSaveSuccess] = React.useState();
  const [saveError, setSaveError] = React.useState();

  const getCurrentUserDetails = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: userEndpoints.getCurrentUser,
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });

      const { data } = response.data;

      setFullname(data.fullName);
      setEmail(data.email);
      setPhoneNumber(data.phoneNumber);
    } catch (error) {
      console.log(error);
    }
  };

  // get user data on load
  React.useEffect(() => {
    getCurrentUserDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios({
        method: "PATCH",
        url: userEndpoints.createUser,
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });

      const { data } = response.data;
      setSaveSuccess(data.msg);
      setLoading(false);
      setSaveError(null);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setSaveSuccess(null);
    }
  };

  return (
    <React.Fragment>
      <DashHeader dashboardTitle="General Settings" user="Tom Cruise" />

      <SettingsWrapper>
        {saveSuccess && (
          <Status className="dash-status" message={saveSuccess} />
        )}
        {saveError && <Status className="dash-status" message={saveError} />}
        <div className="profile-wrapper">
          <img src="/img/user.png" alt="user profile image" />
        </div>
        <GeneralSettingsForm onSubmit={handleSubmit}>
          <div className="flex-fields">
            <div>
              <label htmlFor="fullname">Your fullname</label>
              <input
                name="fullname"
                type="text"
                placeholder="Tom Cruise"
                value={fullname}
                className="form-control"
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
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-fields">
            <div className="phoneNumber-container">
              <label htmlFor="phone number">Phone Number</label>
              <CountryPhoneInput
                value={phoneNumber}
                onChange={setPhoneNumber}
                className="number"
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
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </GeneralSettingsForm>
      </SettingsWrapper>
    </React.Fragment>
  );
};

export default GeneralSettings;
