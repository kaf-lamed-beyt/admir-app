import React from "react";
import axios from "axios";
import Button from "../../../../components/Buttons";
import dynamic from "next/dynamic";
import { Fade } from "react-awesome-reveal";
import "react-phone-number-input/style.css";
import { AiOutlineCamera } from "react-icons/ai";
import { userEndpoints } from "../../../../routes/endpoints";
import DashHeader from "../../../Dashboard/components/DashHeader";
import { CountryPhoneInput } from "../../../../components/Inputs";
import { SettingsWrapper, GeneralSettingsForm } from "../style/settings.styled";

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
  const [image, setImage] = React.useState();
  const hiddenFileInput = React.useRef(null);

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
      // console.log(data);
      setFullname(data.fullName);
      setEmail(data.email);
      setPhoneNumber(data.phoneNumber);
    } catch (error) {
      console.log(error);
    }
  };

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
      setLoading(false);
      setSaveSuccess(response.data.msg);
      setSaveError("");
    } catch (error) {
      setLoading(false);
      setSaveError(null);
      setSaveSuccess(null);
    }
  };

  // records the file input change
  const handleFile = (e) => {
    setImage(e.target.files[0]);

    handleFileUpload();
  };

  // handles the click event of the custom
  // button fro the file input
  const handleFileClick = () => {
    hiddenFileInput.current.click();
  };

  // handles the file uplaod from the filesystem
  const handleFileUpload = () => {
    const data = new FormData();
    data.append("image", image);

    try {
      const response = axios({
        method: "PATCH",
        url: userEndpoints.avatar,
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // get user data on load
  React.useEffect(() => {
    getCurrentUserDetails();
  }, []);

  return (
    <React.Fragment>
      <DashHeader dashboardTitle="General Settings" user={fullname} />
      <Fade>
        <SettingsWrapper>
          {saveSuccess ? (
            <Status message={saveSuccess} className="dash-status" />
          ) : null}
          {saveError ? (
            <Status
              className="dash-status"
              message={saveError}
              status="error"
            />
          ) : null}
          <div className="profile-wrapper">
            {/* i want to hide the input element */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
              ref={hiddenFileInput}
              style={{ display: "none" }}
            />
            <img
              src={image ? URL.createObjectURL(image) : "/img/tom.png"}
              alt={`${fullname}'s profile image`}
            />
            <div onClick={handleFileClick} className="uploader">
              <AiOutlineCamera />
            </div>
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
      </Fade>
    </React.Fragment>
  );
};

export default GeneralSettings;
