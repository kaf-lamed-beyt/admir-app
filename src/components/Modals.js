import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { MdWifiTetheringErrorRounded } from "react-icons/md";
import propTypes from "prop-types";

export const SuccessModal = ({ message }) => {
  return (
    <div className="auth-success-msg">
      <p>{message}</p>
      <BsCheck2All />
    </div>
  );
};

export const ErrModal = ({ message }) => {
  return (
    <div className="auth-err-msg">
      <p>{message}</p>
      <MdWifiTetheringErrorRounded />
    </div>
  );
};

export const DashboardSuccessModal = ({ message }) => {
  return (
    <div className="dash-success-msg">
      <p>{message}</p>
      <BsCheck2All />
    </div>
  );
};

export const DashboardErrorModal = ({ message }) => {
  return (
    <div className="dash-error-msg">
      <p>{message}</p>
      <MdWifiTetheringErrorRounded />
    </div>
  );
};

propTypes.ErrModal = {
  message: propTypes.string.isRequired,
};

propTypes.SuccessModal = {
  message: propTypes.string.isRequired,
};
