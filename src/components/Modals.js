import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { MdWifiTetheringErrorRounded } from "react-icons/md";

export const AuthSuccessMsg = ({ message }) => {
  return (
    <div className="auth-success-msg">
      <p>{message}</p>
      <BsCheck2All />
    </div>
  );
};

export const AuthErrMsg = ({ message }) => {
  return (
    <div className="auth-err-msg">
      <p>{message}</p>
      <MdWifiTetheringErrorRounded />
    </div>
  );
};
