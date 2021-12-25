import React from "react";

export const FormInfo = ({ step }) => {
  if (step === 0) {
    return <p className="personal">Personal Info</p>;
  } else if (step === 1) {
    return <p className="personal">Residential Info</p>;
  } else if (step === 2) {
    return <p className="personal">Work Info</p>;
  }
};
