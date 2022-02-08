import React from "react";
import DashHeader from "../../../Dashboard/components/DashHeader";
import { SettingsWrapper, ChangePasswordForm } from "../style/settings.styled";
import Button from "../../../../components/Buttons";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { authEndpoints } from "../../../../routes/endpoints";
import { AiOutlineEye } from "react-icons/ai";
import {
  DashboardErrorModal,
  DashboardSuccessModal,
} from "../../../../components/Modals";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [passwordChangeSuccess, setPasswordChangeSuccess] = React.useState("");
  const [passwordChangeError, setPasswordChangeError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  const handlePwdVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const validateChangePassword = () => {
    const oldPwdFocus = document.querySelector("#old-password");
    const newPwdFocus = document.querySelector("#new-password");
    const oldPassword = document.querySelector("#old-password").value;
    const newPassword = document.querySelector("#new-password").value;
    let oldPwdErr = document.querySelector(".old-pwd-err");
    let newPwdErr = document.querySelector(".new-pwd-err");
    let errMsg = document.querySelector("#err");

    if (!oldPassword && !newPassword) {
      errMsg.innerHTML = "Old and New password cannot be empty";
      oldPwdFocus.focus();
    } else if (oldPassword === newPassword) {
      errMsg.innerHTML = "New password cannot be the same as old password";
      newPwdFocus.focus();
    } else if (!oldPassword) {
      oldPwdErr.innerHTML = "Old pasword cannot be empty";
      oldPwdFocus.focus();
    } else if (!newPassword) {
      newPwdErr.innerHTML = "New password cannot be empty";
      newPwdFocus.focus();
    } else if (newPassword.length === 4) {
      newPassword.innerHTML =
        "New password should be greater than four characters";
      newPwdFocus.focus();
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    validateChangePassword();

    try {
      setLoading(true);

      const response = await axios({
        method: "PATCH",
        url: authEndpoints.changePassword,
        data: {
          oldPassword,
          newPassword,
        },
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      setLoading(false);
      setPasswordChangeSuccess(response.data.msg);
      setPasswordChangeError("");
    } catch (error) {
      setLoading(false);
      const { data } = error.response;
      setPasswordChangeError(data.msg);
      setPasswordChangeSuccess(null);
    }
  };

  return (
    <React.Fragment>
      <DashHeader dashboardTitle="Change Password" user="Tom Cruise" />
      {passwordChangeSuccess ? (
        <DashboardSuccessModal message={passwordChangeSucess} />
      ) : (
        ""
      )}
      {passwordChangeError ? (
        <DashboardErrorModal message={passwordChangeError} />
      ) : (
        ""
      )}
      <Fade>
        <SettingsWrapper>
          <p id="err"></p>
          <ChangePasswordForm
            className="change-password-form"
            onSubmit={handleChangePassword}
          >
            <div className="flex-fields">
              <div>
                <label htmlFor="old password">Old Password</label>
                <input
                  name="old password"
                  type={passwordVisibility ? "text" : "password"}
                  id="old-password"
                  placeholder="Enter old password"
                  value={oldPassword}
                  className="form-control"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <span class="show-pwd" onClick={handlePwdVisibility}>
                  <AiOutlineEye />
                </span>
                <p className="old-pwd-err"></p>
              </div>
              <div>
                <label htmlFor="new password">New Password</label>
                <input
                  name="new password"
                  type={passwordVisibility ? "text" : "password"}
                  id="new-password"
                  placeholder="Enter new password"
                  value={newPassword}
                  className="email form-control"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <span class="show-pwd" onClick={handlePwdVisibility}>
                  <AiOutlineEye />
                </span>
                <p className="new-pwd-err"></p>
              </div>
            </div>
            <Button
              name="save-btn"
              height="55px"
              width="180px"
              fill="var(--secondary)"
              text_color="#fff"
            >
              {loading ? "Changing password" : "Change Password"}
            </Button>
          </ChangePasswordForm>
        </SettingsWrapper>
      </Fade>
    </React.Fragment>
  );
};

export default ChangePassword;
