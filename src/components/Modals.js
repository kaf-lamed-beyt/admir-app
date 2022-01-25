import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { MdWifiTetheringErrorRounded } from "react-icons/md";
import { useRouter } from "next/router";
import { dashRoutes } from "../utils/common";

export const SuccessModal = ({ message }) => {
  const router = useRouter();

  return (
    <div
      className={
        router.pathname === dashRoutes.userReports
          ? "msg-success-dash"
          : "auth-success-msg"
      }
    >
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
