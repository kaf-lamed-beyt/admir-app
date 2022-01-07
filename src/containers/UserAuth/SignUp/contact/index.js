import React from "react";
import { InputGroup, AuthWrapper } from "../../style/user-auth.styled";
import { Fade } from "react-awesome-reveal";
import Input from "../../../../components/Inputs";
import { CountryPhoneInput } from "../../../../components/Inputs";
import "react-phone-number-input/style.css";
// import { countries } from "../../../../utils/countries";
// import Select from "react-dropdown-select";

const Contact = ({ phoneNumber, workerId, phoneChange, handleWorkerId }) => {
  return (
    <React.Fragment>
      <Fade cascade triggerOnce>
        <h1>Complete Your profile!</h1>
        <p className="auth-instruction">
          For the purpose of industry regulation, your details are required.
        </p>
        <InputGroup>
          <label htmlFor="email">Phone Number</label>
          <CountryPhoneInput
            value={phoneNumber}
            onChange={phoneChange}
            className="number"
          />
        </InputGroup>
        {/* <InputGroup>
          <label htmlFor="fullname">Country</label>
          <Select
            value={country}
            options={countries}
            placeholder="Please select your country"
            required={true}
            dropdownPosition="top"
            className="staff-country"
            onChange={countryChange}
          />
        </InputGroup> */}
        <InputGroup>
          <label htmlFor="workerId">Your Worker ID*</label>
          <Input
            name="workerId"
            id="workerId"
            type="text"
            placeholder="Your Identification Number"
            value={workerId}
            onChange={handleWorkerId}
          />
        </InputGroup>
      </Fade>
    </React.Fragment>
  );
};

export default Contact;
