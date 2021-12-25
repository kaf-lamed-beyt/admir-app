import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export const FormInfo = ({ step }) => {
  if (step === 0) {
    return <p className="personal">Personal Info</p>;
  } else if (step === 1) {
    return <p className="personal">Residential Info</p>;
  } else if (step === 2) {
    return <p className="personal">Work Info</p>;
  }
};

export const AuthController = ({ steps, prevForm }) => {
  if (steps === 0) {
    return (
      <div className="auth-controller">
        <span>
          <IoIosArrowBack />
        </span>
        <Link href="/">
          <p>Back</p>
        </Link>
      </div>
    );
  } else if (steps === 1 || steps === 2) {
    return (
      <div className="auth-controller" onClick={prevForm}>
        <span>
          <IoIosArrowBack />
        </span>
        <p>Back</p>
      </div>
    );
  }
};
