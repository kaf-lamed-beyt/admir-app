import React from "react";
import propTypes from "prop-types";
import PhoneInput from "react-phone-number-input";

const Input = ({ name, type, ...props }) => {
  return <input className="form-control" name={name} type={type} {...props} />;
};

export default Input;

Input.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export const CountryPhoneInput = ({ value, onChange, className, ...props }) => {
  return (
    <PhoneInput
      placeholder="enter phone number"
      value={value}
      onChange={onChange}
      defaultCountry="NG"
      className={`${className}`}
      {...props}
    />
  );
};

CountryPhoneInput.propTypes = {
  value: propTypes.number.isRequired,
};

// user roles input field
// export const RoleInput = ({value})
